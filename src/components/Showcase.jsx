import { motion } from 'framer-motion'

const products = [
  {
    name: 'Aero Lounge Chair',
    price: '$720',
    img: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1200&auto=format&fit=crop'
  },
  {
    name: 'Solace Sofa',
    price: '$1,980',
    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop'
  },
  {
    name: 'Arc Dining Set',
    price: '$1,290',
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop'
  },
  {
    name: 'Halo Pendant Lamp',
    price: '$180',
    img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop'
  },
]

export default function Showcase() {
  return (
    <section id="story" className="relative py-20 sm:py-28 bg-slate-950">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Bestsellers</h2>
            <p className="text-slate-300 mt-2">A peek at what people love right now.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center rounded-lg bg-white text-slate-900 px-4 py-2 text-sm font-semibold shadow hover:shadow-lg transition-shadow">
            View all
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
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
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="text-white font-semibold">{p.name}</h3>
                  <p className="text-slate-300 text-sm">{p.price}</p>
                </div>
                <button className="inline-flex items-center rounded-lg bg-white text-slate-900 px-3 py-1.5 text-sm font-semibold shadow hover:shadow-md transition-shadow">
                  Add
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
