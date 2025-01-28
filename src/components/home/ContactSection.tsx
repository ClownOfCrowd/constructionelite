import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaWhatsapp
} from 'react-icons/fa'

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Teléfono',
      content: '+34 XXX XXX XXX',
      link: 'tel:+34XXXXXXXXX',
      color: 'text-blue-500',
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      content: '+34 XXX XXX XXX',
      link: 'https://wa.me/34XXXXXXXXX',
      color: 'text-green-500',
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      content: 'info@construccioneselite.es',
      link: 'mailto:info@construccioneselite.es',
      color: 'text-red-500',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Dirección',
      content: 'C. Consuegra, 3, Chamartín, 28036 Madrid',
      link: 'https://maps.app.goo.gl/rzZEVE8eQABpyepP7',
    }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Contáctenos
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Estamos aquí para ayudarle con su próximo proyecto
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-50 p-8 rounded-xl shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Asunto
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                  required
                >
                  <option value="">Seleccione un asunto</option>
                  <option value="presupuesto">Solicitar Presupuesto</option>
                  <option value="informacion">Información General</option>
                  <option value="proyecto">Consulta sobre Proyecto</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-secondary text-white py-3 px-6 rounded-lg font-semibold hover:bg-secondary/90 transform hover:scale-105 transition-all duration-300"
              >
                Enviar Mensaje
              </button>
            </form>
          </motion.div>

          {/* Map and Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className={`${info.color} mb-4 text-2xl`}>
                    <info.icon />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{info.title}</h3>
                  <p className="text-gray-600 group-hover:text-secondary transition-colors duration-300">
                    {info.content}
                  </p>
                </a>
              ))}
            </div>

            {/* Embedded Google Map */}
            <div className="h-[300px] rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.5776428523207!2d-3.7112587235507566!3d40.41869797143838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42287943417f3b%3A0x71a6fb4707b13a23!2sC.%20de%20Campomanes%2C%204%2C%2028013%20Madrid!5e0!3m2!1ses!2ses!4v1709834431039!5m2!1ses!2ses"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="Ubicación de nuestra oficina"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection