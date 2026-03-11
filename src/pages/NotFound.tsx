import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, ArrowRight, AlertCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden px-6" style={{ 
      backgroundImage: 'linear-gradient(135deg, #000000 0%, #0a0a0a 20%, #0a1a303d 40%, #0515200c 60%, #0a0a0a2f 80%, #000000 100%)',
    }}>
      {/* Animated orbs background */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 rounded-full filter blur-3xl"
        style={{
          background: 'rgba(0, 217, 255, 0.15)',
        }}
        animate={{ 
          y: [0, 40, 0],
          x: [0, 20, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full filter blur-3xl"
        style={{
          background: 'rgba(0, 153, 204, 0.12)',
        }}
        animate={{ 
          y: [0, -40, 0],
          x: [0, -20, 0],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full filter blur-3xl"
        style={{
          background: 'rgba(0, 217, 255, 0.08)',
        }}
        animate={{ 
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.320, 1] }}
        className="relative z-10 w-full max-w-3xl"
      >
        <div 
          className="rounded-[40px] p-8 md:p-16 text-center border overflow-hidden relative"
          style={{
            background: 'linear-gradient(145deg, rgba(15, 15, 15, 0.8) 0%, rgba(5, 5, 5, 0.9) 100%)',
            borderColor: 'rgba(0, 217, 255, 0.15)',
            boxShadow: '0 30px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
          }}
        >
          {/* Subtle inner glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="mb-8 inline-block relative z-10"
          >
            <div className="w-24 h-24 mx-auto rounded-full flex items-center justify-center" style={{
              background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.2) 0%, rgba(0, 153, 204, 0.05) 100%)',
              boxShadow: '0 0 40px rgba(0, 217, 255, 0.2)',
              border: '1px solid rgba(0, 217, 255, 0.3)'
            }}>
              <AlertCircle className="w-12 h-12" style={{ color: '#00d9ff' }} />
            </div>
          </motion.div>

          {/* 404 Number */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6 relative z-10"
          >
            <h1 
              className="font-display text-8xl md:text-[150px] font-black leading-none tracking-tighter"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #00d9ff 50%, #0055ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 30px rgba(0, 217, 255, 0.3))'
              }}
            >
              404
            </h1>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative z-10"
          >
            <h2 className="font-display text-2xl md:text-4xl font-bold mb-4" style={{ color: 'white' }}>
              Página no encontrada
            </h2>
            <p className="text-lg mb-10 max-w-lg mx-auto" style={{ color: 'rgba(255, 255, 255, 0.6)', lineHeight: '1.6' }}>
              Parece que te has adentrado en territorio desconocido. La ruta que buscas no existe o fue movida a otra dimensión.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10"
          >
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold transition-all group"
              style={{
                background: 'linear-gradient(135deg, #00d9ff 0%, #0099cc 100%)',
                color: '#000000',
                boxShadow: '0 0 30px rgba(0, 217, 255, 0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 50px rgba(0, 217, 255, 0.5)';
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 217, 255, 0.3)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <Home className="w-5 h-5" />
              Volver al Inicio
            </Link>

            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold transition-all"
              style={{
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'white',
                background: 'rgba(255, 255, 255, 0.05)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              }}
            >
              Contactar Soporte
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
