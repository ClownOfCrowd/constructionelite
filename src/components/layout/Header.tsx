import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()

  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Portafolio', href: '/portfolio' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Contacto', href: '/contacto' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isHomePage = router.pathname === '/'

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || !isHomePage 
          ? 'bg-white shadow-lg py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled || !isHomePage 
                ? 'text-primary' 
                : 'text-white'
            }`}
          >
            Construcciones Elite
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  font-medium transition-colors duration-300
                  ${isScrolled || !isHomePage
                    ? 'text-gray-600 hover:text-secondary'
                    : 'text-white hover:text-secondary'}
                  ${router.pathname === item.href ? 'text-secondary' : ''}
                `}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <Link
            href="/contacto"
            className={`
              hidden md:inline-block px-6 py-2 rounded-lg font-semibold 
              transition-all duration-300 transform hover:scale-105
              ${isScrolled || !isHomePage
                ? 'bg-secondary text-white hover:bg-secondary/90'
                : 'bg-white text-primary hover:bg-gray-100'}
            `}
          >
            Solicitar Presupuesto
          </Link>

          {/* Мобильное меню */}
          <button 
            className={`md:hidden transition-colors duration-300 ${
              isScrolled || !isHomePage 
                ? 'text-primary' 
                : 'text-white'
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header 