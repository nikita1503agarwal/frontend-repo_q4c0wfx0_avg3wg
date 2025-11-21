import { motion } from 'framer-motion'
import { Armchair, Leaf, Lamp, Move3D } from 'lucide-react'

const items = [
  {
    icon: Armchair,
    title: 'Ergonomic comfort',
    desc: 'Engineered curves and plush support for all-day lounging without compromise.'
  },
  {
    icon: Leaf,
    title: 'Sustainable woods',
    desc: 'Responsibly sourced oak, walnut, and bamboo finished with non-toxic oils.'
  },
  {
    icon: Lamp,
    title: 'Ambient details',
    desc: 'Warm tones and soft edges create a calm, modern atmosphere at home.'
  },
  {
    icon: Move3D,
    title: 'Future-forward',
    desc: '3D prototyping and precision CNC joinery for flawless fit and finish.'
  },
]

export default function Features() {
  return (
    <section id="collections" className="relative py-20 sm:py-28 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_10%_10%,rgba(56,189,248,0.15),transparent),radial-gradient(600px_200px_at_90%_90%,rgba(217,70,239,0.12),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.4 }}
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            Designed for real life
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="mt-3 text-slate-300 max-w-2xl mx-auto"
          >
            A carefully curated set of features that make every piece a joy to use and a pleasure to look at.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 hover:shadow-lg hover:shadow-cyan-500/10 transition"
            >
              <div className="h-11 w-11 rounded-lg bg-gradient-to-br from-cyan-500 to-fuchsia-500 flex items-center justify-center">
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-white font-semibold">{item.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
