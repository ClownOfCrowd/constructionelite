import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaHome,
  FaBuilding,
  FaTools,
  FaIndustry,
  FaLeaf,
  FaLightbulb
} from 'react-icons/fa'

const Services = () => {
  const { t } = useTranslation('common')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      icon: FaHome,
      title: t('services.residential.title'),
      description: t('services.residential.description'),
      color: 'from-blue-500 to-blue-600',
      shadowColor: 'shadow-blue-500/20',
    },
    {
      icon: FaBuilding,
      title: t('services.commercial.title'),
      description: t('services.commercial.description'),
      color: 'from-orange-500 to-red-500',
      shadowColor: 'shadow-orange-500/20',
    },
    {
      icon: FaTools,
      title: t('services.renovation.title'),
      description: t('services.renovation.description'),
      color: 'from-green-500 to-emerald-600',
      shadowColor: 'shadow-green-500/20',
    },
    {
      icon: FaIndustry,
      title: t('services.industrial.title'),
      description: t('services.industrial.description'),
      color: 'from-purple-500 to-indigo-600',
      shadowColor: 'shadow-purple-500/20',
    },
    {
      icon: FaLeaf,
      title: t('services.sustainable.title'),
      description: t('services.sustainable.description'),
      color: 'from-teal-400 to-green-500',
      shadowColor: 'shadow-teal-500/20',
    },
    {
      icon: FaLightbulb,
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
      color: 'from-amber-400 to-orange-500',
      shadowColor: 'shadow-amber-500/20',
    },
  ]

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group bg-white rounded-2xl shadow-xl ${service.shadowColor} hover:shadow-2xl transition-all duration-300 overflow-hidden`}
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`} />
              <div className="p-8">
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 rounded-full transition-opacity duration-300`} />
                  <service.icon className="w-12 h-12 mb-6 text-gray-700 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <button className={`px-6 py-2 rounded-lg bg-gradient-to-r ${service.color} text-white transform transition-all duration-300 hover:scale-105 hover:shadow-lg`}>
                  {t('services.learnMore')}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services