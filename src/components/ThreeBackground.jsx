import { useEffect, useRef } from 'react'
import * as THREE from 'three'

// Animated Three.js background with floating glassy blobs + particle field
export default function ThreeBackground({ className = '' }) {
  const containerRef = useRef(null)
  const rendererRef = useRef(null)
  const sceneRef = useRef(null)
  const cameraRef = useRef(null)
  const animationRef = useRef(0)
  const mouse = useRef(new THREE.Vector2(0, 0))

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x0b1220, 0.018)
    sceneRef.current = scene

    const width = container.clientWidth
    const height = container.clientHeight

    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 100)
    camera.position.set(0, 0.6, 4.2)
    cameraRef.current = camera

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8))
    renderer.setSize(width, height)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.setClearColor(0x000000, 0) // transparent
    container.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambient)

    const dir1 = new THREE.DirectionalLight(0x77ccff, 1.2)
    dir1.position.set(2, 3, 2)
    scene.add(dir1)

    const dir2 = new THREE.DirectionalLight(0xff7ad9, 0.8)
    dir2.position.set(-2, -1, 2)
    scene.add(dir2)

    // Create a few metaball-like blobs using SphereGeometry + MeshPhysicalMaterial
    const createBlob = (radius, color, x, y, z) => {
      const geo = new THREE.IcosahedronGeometry(radius, 5)
      const mat = new THREE.MeshPhysicalMaterial({
        color,
        roughness: 0.25,
        metalness: 0.1,
        transmission: 0.6,
        thickness: 0.6,
        clearcoat: 1,
        clearcoatRoughness: 0.1,
        envMapIntensity: 1.2,
      })
      const mesh = new THREE.Mesh(geo, mat)
      mesh.position.set(x, y, z)
      mesh.userData.base = mesh.position.clone()
      scene.add(mesh)
      return mesh
    }

    const blobs = [
      createBlob(0.9, new THREE.Color('#8b5cf6'), -1.4, 0.4, 0),
      createBlob(0.7, new THREE.Color('#22d3ee'), 1.2, -0.1, -0.4),
      createBlob(0.55, new THREE.Color('#f472b6'), 0.2, 0.9, 0.6),
    ]

    // Subtle vertex wobble
    const deform = (mesh, time) => {
      const position = mesh.geometry.attributes.position
      const original = position.array
      for (let i = 0; i < original.length; i += 3) {
        const ix = i
        const iy = i + 1
        const iz = i + 2
        const off = Math.sin((i + time * 50) * 0.0015) * 0.004
        original[ix] += off
        original[iy] -= off
        original[iz] += off * 0.6
      }
      position.needsUpdate = true
      mesh.geometry.computeVertexNormals()
    }

    // Star/particle field
    const starGeo = new THREE.BufferGeometry()
    const starCount = 800
    const positions = new Float32Array(starCount * 3)
    for (let i = 0; i < starCount; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 16
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const starMat = new THREE.PointsMaterial({
      color: 0x88ccff,
      size: 0.02,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.8,
    })
    const stars = new THREE.Points(starGeo, starMat)
    scene.add(stars)

    // Gradient plane as ground backplate
    const planeGeo = new THREE.PlaneGeometry(20, 12)
    const planeMat = new THREE.MeshBasicMaterial({
      color: 0x0b1220,
      transparent: true,
      opacity: 0.45,
    })
    const plane = new THREE.Mesh(planeGeo, planeMat)
    plane.position.set(0, -1.1, -1)
    plane.rotation.x = -0.3
    scene.add(plane)

    // Handle resize
    const handleResize = () => {
      const w = container.clientWidth
      const h = container.clientHeight
      renderer.setSize(w, h)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      mouse.current.set(x * 2 - 1, -(y * 2 - 1))
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)

    // Animation loop
    let t = 0
    const animate = () => {
      t += 0.016

      // Parallax camera
      camera.position.x += (mouse.current.x * 0.6 - camera.position.x) * 0.04
      camera.position.y += (mouse.current.y * 0.3 - camera.position.y + 0.6) * 0.04
      camera.lookAt(0, 0, 0)

      // Blob orbits
      blobs.forEach((b, i) => {
        const speed = 0.5 + i * 0.2
        b.position.x = b.userData.base.x + Math.sin(t * speed + i) * 0.35
        b.position.y = b.userData.base.y + Math.cos(t * (speed + 0.3) + i) * 0.25
        b.rotation.x += 0.002 + i * 0.001
        b.rotation.y += 0.003 + i * 0.001
        deform(b, t)
      })

      // Stars slow drift
      stars.rotation.y += 0.0007
      stars.position.y = Math.sin(t * 0.4) * 0.2

      renderer.render(scene, camera)
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationRef.current)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      // Clean up three objects
      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose()
        if (obj.material) {
          if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose())
          else obj.material.dispose()
        }
      })
      renderer.dispose()
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={containerRef} className={"absolute inset-0 " + className} />
}
