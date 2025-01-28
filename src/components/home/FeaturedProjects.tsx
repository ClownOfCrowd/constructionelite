import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Link from 'next/link'

const FeaturedProjects = () => {
  const { t } = useTranslation('common')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      id: 1,
      title: t('projects.luxury.title'),
      category: t('projects.luxury.category'),
      image: 'https://via.placeholder.com/800x600/2C3E50/FFFFFF?text=Luxury+Residence',
      href: '/portfolio/luxury-residence',
    },
    {
      id: 2,
      title: t('projects.commercial.title'),
      category: t('projects.commercial.category'),
      image: 'https://via.placeholder.com/800x600/E67E22/FFFFFF?text=Commercial+Plaza',
      href: '/portfolio/commercial-plaza',
    },
    {
      id: 3,
      title: t('projects.industrial.title'),
      category: t('projects.industrial.category'),
      image: 'https://via.placeholder.com/800x600/7F8C8D/FFFFFF?text=Industrial+Complex',
      href: '/portfolio/industrial-complex',
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
          <h2 className="heading-2 mb-4">{t('projects.title')}</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            {t('projects.subtitle')}
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
              <Link href={project.href} className="block relative overflow-hidden rounded-lg">
                <div className="aspect-w-16 aspect-h-12 relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="text-sm font-medium text-secondary mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link href="/portfolio" className="button-secondary">
            {t('projects.viewAll')}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedProjects 