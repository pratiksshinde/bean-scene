import Button from '@/app/componants/Button'

const navLinks = ['Home', 'Menu', 'About Us', 'Contact Us']

export default function Navbar() {
  return (
    <nav className="relative z-20 flex items-center justify-between px-2 md:px-23 py-6">
      <span className="text-white cursor-pointer text-3xl md:text-4xl script-font italic tracking-wide">Bean Scene</span>

      <ul className="hidden md:flex items-center gap-6 lg:gap-10 list-none">
        {navLinks.map((item) => (
          <li key={item}>
            <a href="#" className="text-white hover:text-white/70 text-sm tracking-widest font-light transition-colors">
              {item}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4 md:gap-6">
        <button className="hidden md:block cursor-pointer text-white text-sm tracking-widest font-light hover:text-white/70 transition-colors">
          Sign In
        </button>
        <Button size="sm">Sign Up</Button>
      </div>
    </nav>
  )
}