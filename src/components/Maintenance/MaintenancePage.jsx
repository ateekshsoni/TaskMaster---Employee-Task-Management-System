import React from 'react';
import { motion } from 'framer-motion';

const MaintenancePage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const bounceVariants = {
    hidden: { 
      opacity: 0,
      scale: 0,
      rotate: -180
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "backOut",
        delay: 0.2
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const loadingBarVariants = {
    hidden: { width: "0%" },
    visible: {
      width: "75%",
      transition: {
        duration: 3,
        ease: "easeOut",
        delay: 1
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const shimmerVariants = {
    animate: {
      x: ['-100%', '100%'],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
        repeatDelay: 1
      }
    }
  };

  const sparkleVariants = {
    animate: {
      scale: [1, 1.5, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center px-4 overflow-hidden relative">
      {/* Enhanced Background floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              i % 3 === 0 ? 'w-3 h-3 bg-cyan-400' : 
              i % 3 === 1 ? 'w-2 h-2 bg-green-400' : 
              'w-1 h-1 bg-blue-400'
            } opacity-40`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40 - Math.random() * 20, 0],
              x: [0, (Math.random() - 0.5) * 30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.8, 1.2 + Math.random() * 0.5, 0.8],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Enhanced Animated grid background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div 
          className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-green-400/20" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.15) 1px, transparent 1px),
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px, 50px 50px, 25px 25px, 25px 25px'
          }}
          animate={{
            backgroundPosition: ['0px 0px, 0px 0px, 0px 0px, 0px 0px', '50px 50px, 50px 50px, 25px 25px, 25px 25px']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <motion.div
        className="max-w-4xl mx-auto text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated Gear Icon */}
        <motion.div
          className="flex justify-center mb-8"
          variants={bounceVariants}
        >
          <motion.div
            className="relative"
            variants={floatingVariants}
            animate="animate"
          >
            {/* Enhanced Main Gear */}
            <motion.div
              className="w-32 h-32 md:w-40 md:h-40 rounded-full relative flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                background: 'conic-gradient(from 0deg, #06b6d4, #10b981, #22d3ee, #10b981, #06b6d4)',
                boxShadow: '0 0 60px rgba(6, 182, 212, 0.4), inset 0 0 30px rgba(16, 185, 129, 0.2)'
              }}
            >
              {/* Enhanced Gear teeth */}
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bg-gradient-to-t from-cyan-500 to-cyan-300 rounded-sm shadow-lg"
                  style={{
                    width: i % 2 === 0 ? '6px' : '4px',
                    height: i % 2 === 0 ? '10px' : '8px',
                    transform: `rotate(${i * 30}deg) translateY(${i % 2 === 0 ? '-70px' : '-65px'})`,
                    transformOrigin: `center ${i % 2 === 0 ? '70px' : '65px'}`
                  }}
                />
              ))}
              
              {/* Center hub with glow */}
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-full shadow-2xl relative flex items-center justify-center"
                   style={{ boxShadow: '0 0 25px rgba(16, 185, 129, 0.6)' }}>
                <div className="w-6 h-6 bg-gradient-to-br from-green-300 to-green-400 rounded-full"></div>
              </div>
            </motion.div>

            {/* Enhanced Sparkle Effects */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${15 + Math.random() * 70}%`,
                  top: `${15 + Math.random() * 70}%`,
                }}
                animate={{
                  scale: [0, 1.5, 0],
                  opacity: [0, 1, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 2 + Math.random(),
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
              >
                <div className="w-1 h-1 bg-cyan-300 rounded-full relative">
                  {/* Cross sparkle effect */}
                  <div className="absolute inset-0 w-3 h-0.5 bg-gradient-to-r from-transparent via-cyan-300 to-transparent transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"></div>
                  <div className="absolute inset-0 w-0.5 h-3 bg-gradient-to-b from-transparent via-cyan-300 to-transparent transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Main Heading */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 relative"
          variants={itemVariants}
        >
          <motion.span
            className="bg-gradient-to-r from-cyan-400 via-green-400 to-cyan-400 bg-clip-text text-transparent bg-300% animate-gradient"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              backgroundSize: '300% 300%',
              textShadow: '0 0 30px rgba(6, 182, 212, 0.3)'
            }}
          >
            🚧 We're Working on Something Awesome!
          </motion.span>
          
          {/* Glowing underline */}
          <motion.div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            initial={{ width: 0 }}
            animate={{ width: '80%' }}
            transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}
            style={{
              boxShadow: '0 0 20px rgba(6, 182, 212, 0.6)'
            }}
          />
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          A new version of{' '}
          <span className="text-cyan-400 font-semibold">TaskMaster</span>{' '}
          is coming soon. Hang tight while we level up your productivity.
        </motion.p>

        {/* Enhanced Animated Loading Section */}
        <motion.div
          className="mb-12"
          variants={itemVariants}
        >
          <div className="max-w-lg mx-auto">
            {/* Status indicators */}
            <div className="flex justify-center items-center gap-4 mb-6">
              <motion.div
                className="flex items-center gap-2 bg-gray-800/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700"
                variants={pulseVariants}
                animate="animate"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-medium">System Online</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 bg-gray-800/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700"
                variants={pulseVariants}
                animate="animate"
                transition={{ delay: 0.2 }}
              >
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-cyan-400 text-sm font-medium">Upgrading</span>
              </motion.div>
            </div>

            {/* Progress section */}
            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-400 mb-3">
                <span className="font-medium">Upgrade Progress</span>
                <motion.span 
                  className="text-cyan-400 font-semibold"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  75%
                </motion.span>
              </div>
              
              {/* Enhanced progress bar */}
              <div className="relative w-full h-4 bg-gray-800 rounded-full overflow-hidden shadow-inner border border-gray-700">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent"></div>
                
                {/* Main progress bar */}
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-400 via-green-400 to-cyan-500 rounded-full relative overflow-hidden"
                  variants={loadingBarVariants}
                  initial="hidden"
                  animate="visible"
                  style={{
                    boxShadow: '0 0 20px rgba(6, 182, 212, 0.6), inset 0 1px rgba(255,255,255,0.3)'
                  }}
                >
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-1/3"
                    variants={shimmerVariants}
                    animate="animate"
                  />
                </motion.div>

                {/* Animated dots on the progress bar */}
                <motion.div
                  className="absolute top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-lg"
                  animate={{
                    left: ['0%', '75%'],
                  }}
                  transition={{
                    duration: 3,
                    ease: "easeOut",
                    delay: 1.2
                  }}
                />
              </div>
            </div>

            {/* Status text */}
            <motion.div
              className="text-center"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <p className="text-gray-400 text-sm">
                Optimizing performance and adding new features...
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced Feature Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-12"
          variants={itemVariants}
        >
          {[
            { icon: '⚡', title: 'Faster', desc: 'Lightning-fast performance', color: 'from-yellow-400 to-orange-500' },
            { icon: '✨', title: 'Better UI', desc: 'Beautiful new interface', color: 'from-purple-400 to-pink-500' },
            { icon: '🚀', title: 'More Features', desc: 'Enhanced productivity tools', color: 'from-blue-400 to-cyan-500' }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden group"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(6, 182, 212, 0.2)',
                borderColor: 'rgba(6, 182, 212, 0.5)'
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Background glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                <motion.div 
                  className="text-4xl mb-4"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-cyan-400 font-semibold text-lg mb-2 group-hover:text-cyan-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                  {feature.desc}
                </p>
              </div>

              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-xl border-2 border-transparent"
                style={{
                  background: `linear-gradient(45deg, transparent, rgba(6, 182, 212, 0.3), transparent) border-box`,
                  mask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                  maskComposite: 'subtract'
                }}
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          className="text-gray-500 text-sm"
          variants={itemVariants}
        >
          <p>Expected completion: Soon™</p>
          <p className="mt-2">Thank you for your patience! 💚</p>
          <p className="mt-4 text-xs opacity-60">
            Dev: Press Ctrl+Shift+M to toggle maintenance mode
          </p>
        </motion.div>

        {/* Floating elements around the page */}
        <motion.div
          className="absolute top-20 left-10 w-4 h-4 bg-green-400 rounded-full opacity-60"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
            opacity: [0.6, 0.9, 0.6]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-32 right-16 w-3 h-3 bg-cyan-400 rounded-full opacity-60"
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </motion.div>
    </div>
  );
};

export default MaintenancePage;
