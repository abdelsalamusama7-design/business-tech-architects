import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone } from 'lucide-react';
import splashLogo from '@/assets/instatech-logo-splash.jpg';

const SplashScreen = ({ onFinish }: { onFinish: () => void }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onFinish, 600);
    }, 5000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: 'linear-gradient(145deg, hsl(210, 25%, 12%) 0%, hsl(210, 30%, 8%) 50%, hsl(200, 20%, 10%) 100%)' }}
        >
          {/* Animated background particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: Math.random() * 4 + 2,
                  height: Math.random() * 4 + 2,
                  background: `hsl(172, 66%, ${40 + Math.random() * 30}%)`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 2 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Glow ring behind logo */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 280,
              height: 280,
              background: 'radial-gradient(circle, hsl(172, 66%, 30%, 0.3) 0%, transparent 70%)',
            }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* Logo */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
            className="relative z-10 mb-6"
          >
            <img
              src={splashLogo}
              alt="Insta-Tech Labs"
              className="w-44 h-44 md:w-56 md:h-56 rounded-full object-cover shadow-2xl"
              style={{ boxShadow: '0 0 60px hsl(172, 66%, 30%, 0.4), 0 0 120px hsl(199, 89%, 48%, 0.2)' }}
            />
          </motion.div>

          {/* Brand name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="relative z-10 text-3xl md:text-4xl font-bold mb-2 tracking-wide"
            style={{
              background: 'linear-gradient(135deg, hsl(172, 66%, 50%), hsl(199, 89%, 58%), hsl(172, 66%, 40%))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Insta-Tech Labs
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="relative z-10 text-sm md:text-base mb-8"
            style={{ color: 'hsl(210, 10%, 60%)' }}
          >
            أنظمة رقمية ذكية لأعمالك
          </motion.p>

          {/* Contact numbers */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="relative z-10 flex flex-col sm:flex-row items-center gap-3"
          >
            <div
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border backdrop-blur-sm"
              style={{
                borderColor: 'hsl(172, 66%, 30%, 0.3)',
                background: 'hsl(172, 66%, 30%, 0.08)',
              }}
            >
              <Phone size={16} style={{ color: 'hsl(172, 66%, 50%)' }} />
              <span className="text-sm font-medium" style={{ color: 'hsl(0, 0%, 85%)' }} dir="ltr">
                01227080430
              </span>
            </div>
            <div
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border backdrop-blur-sm"
              style={{
                borderColor: 'hsl(199, 89%, 48%, 0.3)',
                background: 'hsl(199, 89%, 48%, 0.08)',
              }}
            >
              <Phone size={16} style={{ color: 'hsl(199, 89%, 58%)' }} />
              <span className="text-sm font-medium" style={{ color: 'hsl(0, 0%, 85%)' }} dir="ltr">
                01554400044
              </span>
            </div>
          </motion.div>

          {/* Loading bar */}
          <motion.div
            className="absolute bottom-12 w-48 h-1 rounded-full overflow-hidden"
            style={{ background: 'hsl(210, 20%, 20%)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'linear-gradient(90deg, hsl(172, 66%, 40%), hsl(199, 89%, 48%))' }}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ delay: 1.5, duration: 3.5, ease: 'linear' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
