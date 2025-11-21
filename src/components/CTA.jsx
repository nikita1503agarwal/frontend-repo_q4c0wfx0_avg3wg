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
          Collaborate with our studio
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mt-3 text-slate-300 max-w-2xl mx-auto"
        >
          We create custom pieces and interior concepts for homes and creative spaces. No transactions here—just inspiration and conversation.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
        >
          <a href="#" className="inline-flex items-center justify-center rounded-lg bg-white/10 text-white px-6 py-3 font-semibold ring-1 ring-white/20 hover:bg-white/15 transition">
            Book a consultation
          </a>
          <a href="#" className="inline-flex items-center justify-center rounded-lg bg-transparent text-white px-6 py-3 border border-white/20 hover:border-white/40 transition">
            Email the studio
          </a>
        </motion.div>
      </div>
    </section>
  )
}
