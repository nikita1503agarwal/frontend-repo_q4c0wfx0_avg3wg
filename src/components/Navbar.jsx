import { useState } from 'react'
import { Menu, X, Search } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

function NavLink({ children, href = '#' }) {
  return (
    <a
      href={href}
      className="text-slate-200/80 hover:text-white transition-colors px-3 py-2 rounded-md"
    >
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl bg-slate-900/50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 border border-white/10">
          <div className="flex items-center justify-between px-4 sm:px-6 py-3">
            {/* Brand */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-cyan-500 to-fuchsia-500 p-[2px]">
                <div className="h-full w-full rounded-md bg-slate-900" />
              </div>
              <div>
                <p className="text-white font-semibold leading-tight tracking-tight">
                  Forma
                </p>
                <p className="text-xs text-slate-400 -mt-0.5">Furniture Studio</p>
              </div>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-2">
              <NavLink href="#collections">Collections</NavLink>
              <NavLink href="#story">Our Story</NavLink>
              <NavLink href="#materials">Materials</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </nav>

            {/* Actions (purely aesthetic) */}
            <div className="hidden md:flex items-center gap-2">
              <button className="p-2 rounded-lg hover:bg-white/10 text-slate-200" aria-label="Search">
                <Search className="h-5 w-5" />
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 text-slate-200"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="md:hidden border-t border-white/10 px-4 sm:px-6"
              >
                <div className="py-3 space-y-2">
                  <a href="#collections" onClick={() => setOpen(false)} className="block text-slate-100/90 hover:text-white">Collections</a>
                  <a href="#story" onClick={() => setOpen(false)} className="block text-slate-100/90 hover:text-white">Our Story</a>
                  <a href="#materials" onClick={() => setOpen(false)} className="block text-slate-100/90 hover:text-white">Materials</a>
                  <a href="#contact" onClick={() => setOpen(false)} className="block text-slate-100/90 hover:text-white">Contact</a>
                  <div className="pt-2 flex items-center gap-3">
                    <button className="p-2 rounded-lg hover:bg-white/10 text-slate-200" aria-label="Search">
                      <Search className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}
