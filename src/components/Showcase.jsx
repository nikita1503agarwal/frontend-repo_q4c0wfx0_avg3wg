import { motion } from 'framer-motion'

const gallery = [
  {
    name: 'Aero Lounge Chair',
    img: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1200&auto=format&fit=crop'
  },
  {
    name: 'Solace Sofa',
    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop'
  },
  {
    name: 'Arc Dining Set',
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop'
  },
  {
    name: 'Halo Pendant Lamp',
    img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop'
  },
]

export default function Showcase() {
  return (
    <section id="story" className="relative py-20 sm:py-28 bg-slate-950">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Studio Showcase</h2>
            <p className="text-slate-300 mt-2">A visual tour of forms, textures, and light.</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gallery.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold">{p.name}</h3>
                <p className="text-slate-300 text-sm">Concept render</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
