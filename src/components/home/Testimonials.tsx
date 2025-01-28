import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { FaStar } from 'react-icons/fa'

// Импортируем стили Swiper
import 'swiper/css'
import 'swiper/css/pagination'

const testimonials = [
  {
    name: "Carlos Rodríguez",
    position: "Propietario de Empresa",
    rating: 5,
    text: "Construcciones Elite superó todas nuestras expectativas. Su atención al detalle y profesionalismo son excepcionales. Completaron nuestro proyecto comercial antes del plazo previsto y dentro del presupuesto.",
  },
  {
    name: "María González",
    position: "Arquitecta",
    rating: 5,
    text: "Como profesional del sector, valoro enormemente la precisión técnica y la calidad de ejecución que ofrece Construcciones Elite. Su equipo demuestra un conocimiento profundo y una dedicación incomparable.",
  },
  {
    name: "Juan Martínez",
    position: "Desarrollador Inmobiliario",
    rating: 5,
    text: "Hemos trabajado con Construcciones Elite en múltiples proyectos y siempre entregan resultados excepcionales. Su compromiso con la excelencia y la innovación es verdaderamente notable.",
  },
  {
    name: "Ana Valencia",
    position: "Gerente de Proyectos",
    rating: 5,
    text: "La capacidad de Construcciones Elite para gestionar proyectos complejos es impresionante. Su comunicación transparente y su enfoque orientado a soluciones hacen que el proceso sea fluido y eficiente.",
  },
  {
    name: "Roberto Sánchez",
    position: "Inversor Inmobiliario",
    rating: 5,
    text: "La calidad de construcción y el servicio al cliente que ofrece Construcciones Elite son incomparables. Han demostrado ser un socio confiable y profesional en todos nuestros proyectos.",
  }
]

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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
            Opiniones de Nuestros Clientes
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Descubre por qué nuestros clientes confían en nosotros para sus proyectos más importantes
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="testimonials-swiper !pb-14"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 w-5 h-5" />
                    ))}
                  </div>
                  <blockquote className="text-gray-600 mb-6 italic">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="text-center">
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials 