import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <CTA />
      </main>
      <footer className="bg-slate-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} Forma Furniture. All rights reserved.</p>
          <nav className="text-sm text-slate-400 flex items-center gap-4">
            <a className="hover:text-white" href="#">Terms</a>
            <a className="hover:text-white" href="#">Privacy</a>
            <a className="hover:text-white" href="#">Support</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default App
