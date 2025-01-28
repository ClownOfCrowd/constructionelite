import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Link from 'next/link'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      id: 'industrial',
      title: 'Construcción Industrial',
      category: 'Industrial',
      description: 'Implementación de proyectos industriales a gran escala utilizando tecnología de vanguardia y cumpliendo con todos los estándares de seguridad. Especialización en complejos de producción, centros logísticos e infraestructura industrial.',
      imageUrl: 'https://i.postimg.cc/gcXTWVG1/construction-site-silhouettes.jpg',
      link: '/portfolio/industrial'
    },
    {
      id: 'infrastructure',
      title: 'Proyectos de Infraestructura',
      category: 'Infraestructura',
      description: 'Diseño y construcción de importantes obras de infraestructura: puentes, pasos elevados e intersecciones de transporte. Creamos conexiones confiables para el desarrollo del entorno urbano.',
      imageUrl: 'https://i.postimg.cc/X791ZnG8/pedestrian-bridge-against-blue-sky.jpg',
      link: '/portfolio/infrastructure'
    },
    {
      id: 'residential',
      title: 'Construcción Residencial',
      category: 'Residencial',
      description: 'Desarrollo de modernos complejos residenciales con énfasis en el confort y la calidad de vida. Aplicamos soluciones innovadoras en diseño y construcción para crear espacios habitacionales acogedores.',
      imageUrl: 'https://i.postimg.cc/2SwHwTxL/residential-house-process-building.jpg',
      link: '/portfolio/residential'
    }
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
            Proyectos Destacados
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Descubre nuestras obras más emblemáticas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-[400px]">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="text-sm font-medium text-secondary mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-secondary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    {project.description}
                  </p>
                  <Link 
                    href={project.link}
                    className="inline-block px-4 py-2 bg-secondary text-white rounded-lg text-sm font-medium hover:bg-secondary/90 transition-colors duration-300"
                  >
                    Ver Detalles
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link 
            href="/portfolio"
            className="inline-block px-8 py-3 bg-secondary text-white rounded-lg font-semibold hover:bg-secondary/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Ver Todos los Proyectos
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 