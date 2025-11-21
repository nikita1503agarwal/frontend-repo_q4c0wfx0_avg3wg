import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(600px_240px_at_50%_-10%,rgba(56,189,248,0.12),transparent)]" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4 }}
          className="text-3xl sm:text-4xl font-bold text-white"
        >
          Ready to refresh your space?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mt-3 text-slate-300 max-w-2xl mx-auto"
        >
          Explore our full range of sofas, chairs, tables and lighting made for modern living.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
        >
          <a href="#" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-6 py-3 font-semibold shadow hover:shadow-lg transition-shadow">
            Start shopping
          </a>
          <a href="#" className="inline-flex items-center justify-center rounded-lg bg-transparent text-white px-6 py-3 border border-white/20 hover:border-white/40 transition">
            Talk to a specialist
          </a>
        </motion.div>
      </div>
    </section>
  )
}
