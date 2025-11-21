import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

      {/* glowing blobs */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-cyan-500/20 blur-3xl" />

      {/* 3D scene */}
      <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28">
        <div className="text-center lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/5 text-slate-200 text-xs sm:text-sm"
          >
            Crafted comfort • Futuristic design
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white"
          >
            Furniture that feels as good as it looks
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0"
          >
            Discover premium pieces with organic curves, sustainable materials, and a touch of tomorrow. Built to live beautifully in your space.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
          >
            <a href="#collections" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-6 py-3 font-semibold shadow hover:shadow-lg transition-shadow">
              Shop the collection
            </a>
            <a href="#story" className="inline-flex items-center justify-center rounded-lg bg-transparent text-white px-6 py-3 border border-white/20 hover:border-white/40 transition">
              Our design story
            </a>
          </motion.div>
        </div>

        <div className="relative h-[420px] sm:h-[520px] lg:h-[620px]">
          <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 bg-slate-900/40">
            <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
          <div className="pointer-events-none absolute -inset-8 bg-gradient-to-b from-white/10 to-transparent rounded-[2rem] blur-3xl" />
        </div>
      </div>
    </section>
  )
}
