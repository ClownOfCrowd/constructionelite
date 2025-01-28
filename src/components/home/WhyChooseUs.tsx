import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaClock, 
  FaAward, 
  FaUsers, 
  FaHandshake 
} from 'react-icons/fa'

const WhyChooseUs = () => {
  const { t } = useTranslation('common')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const reasons = [
    {
      icon: FaClock,
      title: "20+ Años de Experiencia",
      description: "Dos décadas de excelencia en la industria de la construcción",
      color: 'text-blue-500',
      bgColor: 'bg-blue-100',
    },
    {
      icon: FaAward,
      title: "Calidad Garantizada",
      description: "Compromiso inquebrantable con los más altos estándares de calidad",
      color: 'text-orange-500',
      bgColor: 'bg-orange-100',
    },
    {
      icon: FaUsers,
      title: "Equipo Profesional",
      description: "Expertos altamente cualificados y dedicados a su servicio",
      color: 'text-green-500',
      bgColor: 'bg-green-100',
    },
    {
      icon: FaHandshake,
      title: "Compromiso Total",
      description: "Dedicación completa a la satisfacción del cliente",
      color: 'text-purple-500',
      bgColor: 'bg-purple-100',
    },
  ]

  const stats = [
    { number: '25+', label: 'Años de Experiencia' },
    { number: '500+', label: 'Proyectos Completados' },
    { number: '100%', label: 'Clientes Satisfechos' },
    { number: '50+', label: 'Expertos en Plantilla' },
  ]

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
            ¿Por qué elegirnos?
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Excelencia y compromiso en cada proyecto
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className={`mx-auto w-20 h-20 rounded-full ${reason.bgColor} ${reason.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                <reason.icon className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                {reason.title}
              </h3>
              <p className="text-gray-600">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  delay: index * 0.1 + 0.5 
                }}
                className="text-4xl md:text-5xl font-bold text-primary mb-2"
              >
                {stat.number}
              </motion.div>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs 