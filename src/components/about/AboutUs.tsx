import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const AboutUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { label: 'Años de Experiencia', value: '25+' },
    { label: 'Proyectos Completados', value: '500+' },
    { label: 'Clientes Satisfechos', value: '100%' },
    { label: 'Expertos en Plantilla', value: '50+' },
  ]

  const values = [
    {
      title: 'Excelencia',
      description: 'Buscamos la perfección en cada detalle de nuestros proyectos.',
    },
    {
      title: 'Innovación',
      description: 'Implementamos las últimas tecnologías y métodos constructivos.',
    },
    {
      title: 'Compromiso',
      description: 'Cumplimos con los plazos y presupuestos establecidos.',
    },
    {
      title: 'Sostenibilidad',
      description: 'Construimos pensando en el futuro y el medio ambiente.',
    },
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
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Sobre Nosotros
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Más de 25 años construyendo el futuro con excelencia e innovación
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-primary mb-6">
              Nuestra Historia
            </h2>
            <p className="text-gray-600 mb-6">
              Desde nuestra fundación en 1998, Construcciones Elite se ha convertido en un referente en el sector de la construcción en España. Comenzamos como una pequeña empresa familiar y hemos crecido hasta convertirnos en una de las constructoras más respetadas del país.
            </p>
            <p className="text-gray-600 mb-6">
              Nuestra trayectoria está marcada por proyectos emblemáticos que han transformado el paisaje urbano de numerosas ciudades. Cada proyecto es un testimonio de nuestro compromiso con la calidad y la innovación.
            </p>
            <p className="text-gray-600">
              Hoy, con más de 50 profesionales altamente cualificados, seguimos construyendo el futuro con la misma pasión y dedicación que el primer día.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] rounded-xl overflow-hidden"
          >
            <Image
              src="/images/about/team.jpg"
              alt="Nuestro equipo"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-primary mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutUs 