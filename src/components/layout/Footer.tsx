import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin
} from 'react-icons/fa'

const Footer = () => {
  const { t } = useTranslation('common')

  const contactInfo = [
    {
      icon: FaPhone,
      text: '+34 XXX XXX XXX',
      href: 'tel:+34XXXXXXXXX',
    },
    {
      icon: FaEnvelope,
      text: 'info@construccioneselite.es',
      href: 'mailto:info@construccioneselite.es',
    },
    {
      icon: FaMapMarkerAlt,
      text: 'C. Consuegra, 3, Chamartín, 28036 Madrid',
      href: 'https://maps.app.goo.gl/rzZEVE8eQABpyepP7',
    },
    {
      icon: FaClock,
      text: 'Lun - Vie: 9:00 - 18:00',
      href: '#',
    },
  ]

  const socialLinks = [
    {
      icon: FaFacebook,
      href: 'https://facebook.com',
      label: 'Facebook',
    },
    {
      icon: FaTwitter,
      href: 'https://twitter.com',
      label: 'Twitter',
    },
    {
      icon: FaInstagram,
      href: 'https://instagram.com',
      label: 'Instagram',
    },
    {
      icon: FaLinkedin,
      href: 'https://linkedin.com',
      label: 'LinkedIn',
    },
  ]

  const footerLinks = [
    {
      title: 'Empresa',
      links: [
        { text: 'Sobre Nosotros', href: '/about' },
        { text: 'Servicios', href: '/services' },
        { text: 'Proyectos', href: '/projects' },
        { text: 'Contacto', href: '/contact' },
      ],
    },
    {
      title: 'Servicios',
      links: [
        { text: 'Construcción Residencial', href: '/services#residential' },
        { text: 'Proyectos Comerciales', href: '/services#commercial' },
        { text: 'Renovaciones', href: '/services#renovation' },
        { text: 'Construcción Industrial', href: '/services#industrial' },
      ],
    },
  ]

  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Construcciones Elite</h3>
            <p className="text-gray-300 mb-6">
              Expertos en construcción y renovación con más de 20 años de experiencia.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-secondary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold mb-6">{column.title}</h3>
              <ul className="space-y-4">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-secondary transition-colors"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contacto</h3>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index}>
                  <a
                    href={info.href}
                    className="flex items-center text-gray-300 hover:text-secondary transition-colors"
                  >
                    <info.icon className="w-5 h-5 mr-3" />
                    <span>{info.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Construcciones Elite. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 