import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'

const Hero = () => {
  const { t } = useTranslation('common')

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Видео фон */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/construction-bg.mp4" type="video/mp4" />
        </video>
        {/* Улучшенный градиентный оверлей */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Контент */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg"
        >
          {t('company.name')}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl mb-12 text-gray-200 drop-shadow-lg max-w-3xl mx-auto"
        >
          {t('company.slogan')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="space-x-4"
        >
          <button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all transform hover:scale-105 hover:shadow-lg">
            {t('hero.cta')}
          </button>
          <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all transform hover:scale-105 hover:shadow-lg">
            {t('hero.secondary')}
          </button>
        </motion.div>
      </div>

      {/* Элегантный скролл-индикатор (опционально) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="text-white/50 text-sm"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero 