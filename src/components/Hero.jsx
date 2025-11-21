import { motion } from 'framer-motion'
import ThreeBackground from './ThreeBackground'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* dynamic three.js background */}
      <ThreeBackground />

      {/* subtle overlay gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/20 to-slate-950/70" />

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

        {/* showcase mock device card with parallax hover */}
        <div className="relative h-[420px] sm:h-[520px] lg:h-[620px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="group absolute inset-0 rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 via-cyan-400/10 to-transparent" />
            {/* floating cards */}
            <div className="absolute inset-0 p-6 sm:p-8">
              <motion.div
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="grid grid-cols-2 gap-4 sm:gap-5"
              >
                {[1,2,3,4].map((i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="rounded-xl border border-white/10 bg-slate-900/60 p-4 sm:p-5 shadow-lg"
                  >
                    <div className="h-20 sm:h-24 rounded-lg bg-gradient-to-br from-slate-700/40 to-slate-800/40 mb-3" />
                    <div className="h-2 w-24 bg-white/10 rounded mb-2" />
                    <div className="h-2 w-16 bg-white/10 rounded" />
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
          </motion.div>
          <div className="pointer-events-none absolute -inset-10 bg-gradient-to-t from-fuchsia-500/10 via-transparent to-transparent rounded-[2rem] blur-2xl" />
        </div>
      </div>
    </section>
  )
}
