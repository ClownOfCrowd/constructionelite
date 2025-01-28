import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

type Project = {
  id: string
  title: string
  category: string
  description: string
  images: string[]
  details: {
    client: string
    location: string
    year: string
    duration: string
    scope: string[]
  }
}

const projects: Project[] = [
  {
    id: 'residencial-elite',
    title: 'Residencial Elite Madrid',
    category: 'residencial',
    description: 'Complejo residencial de lujo con 45 viviendas, zonas comunes y jardines.',
    images: [
      '/images/projects/residential-1.jpg',
      '/images/projects/residential-2.jpg',
      '/images/projects/residential-3.jpg'
    ],
    details: {
      client: 'Promotora Elite',
      location: 'Madrid Centro',
      year: '2023',
      duration: '18 meses',
      scope: [
        'Diseño arquitectónico',
        'Construcción completa',
        'Acabados de lujo',
        'Zonas comunes',
        'Jardines y piscina'
      ]
    }
  },
  {
    id: 'centro-comercial',
    title: 'Centro Comercial Plaza Mayor',
    category: 'comercial',
    description: 'Centro comercial moderno con más de 100 locales y parking subterráneo.',
    images: [
      '/images/projects/commercial-1.jpg',
      '/images/projects/commercial-2.jpg',
      '/images/projects/commercial-3.jpg'
    ],
    details: {
      client: 'Inversiones Comerciales SL',
      location: 'Madrid Norte',
      year: '2022',
      duration: '24 meses',
      scope: [
        'Estructura principal',
        'Instalaciones',
        'Acabados',
        'Parking subterráneo',
        'Zonas comunes'
      ]
    }
  },
  // Добавьте больше проектов...
]

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'residencial', name: 'Residencial' },
    { id: 'comercial', name: 'Comercial' },
    { id: 'industrial', name: 'Industrial' }
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-4">
          Nuestros Proyectos
        </h2>
        <p className="text-text-secondary text-lg text-center max-w-2xl mx-auto mb-12">
          Descubre nuestra trayectoria de éxito a través de nuestros proyectos más destacados
        </p>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-secondary text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Grid de proyectos */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg aspect-[4/3]">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white text-xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-200 text-sm">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal de proyecto */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={e => e.stopPropagation()}
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    {selectedProject.title}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                        <Image
                          src={selectedProject.images[0]}
                          alt={selectedProject.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <p className="text-gray-600 mb-4">
                        {selectedProject.description}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-4">Detalles del Proyecto</h4>
                      <dl className="space-y-2">
                        <div>
                          <dt className="font-medium text-gray-600">Cliente</dt>
                          <dd>{selectedProject.details.client}</dd>
                        </div>
                        <div>
                          <dt className="font-medium text-gray-600">Ubicación</dt>
                          <dd>{selectedProject.details.location}</dd>
                        </div>
                        <div>
                          <dt className="font-medium text-gray-600">Año</dt>
                          <dd>{selectedProject.details.year}</dd>
                        </div>
                        <div>
                          <dt className="font-medium text-gray-600">Duración</dt>
                          <dd>{selectedProject.details.duration}</dd>
                        </div>
                      </dl>
                      <h4 className="font-semibold text-lg mt-6 mb-4">Alcance del Proyecto</h4>
                      <ul className="list-disc list-inside space-y-2">
                        {selectedProject.details.scope.map((item, index) => (
                          <li key={index} className="text-gray-600">{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default PortfolioSection 