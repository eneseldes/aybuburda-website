import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaHashtag } from "react-icons/fa";
import { PiHandshake } from "react-icons/pi";
import "./LandingPage.scss";
import AnimatedItem from "../AnimatedItem";

function LandingPage() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / innerWidth;
      const y = (e.clientY - innerHeight / 2) / innerHeight;
      setCoords({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1.2,
        ease: [0.25, 0, 0.25, 1],
      }}
      className="landing-page"
    >
      <div className="manifesto">
        <div className="manifesto__title">AYBÜ</div>
        <motion.div
          initial={{ x: -150, width: 0 }}
          animate={{ x: 0, width: 150 }}
          transition={{
            delay: 0.8,
            duration: 0.8,
            ease: [0.65, 0, 0.35, 1],
          }}
          className="manifesto__subtitles"
        >
          <p>Haydi</p>
          <p>Kenetlen</p>
          <p>İlerle</p>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40, height: 0 }}
        animate={{ opacity: 1, y: 0, height: 50 }}
        transition={{
          delay: 1.7,
          duration: 1,
          ease: [0.65, 0, 0.35, 1],
        }}
        className="landing-page__description"
      >
        Ankara Yıldırım Beyazıt Üniversitesi akran dayanışma platformu.
      </motion.div>
      <div className="dots">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{
            delay: 2.1,
            duration: 2,
            ease: [0.23, 1, 0.28, 1],
          }}
          className="dot"
          style={{
            transform: `translate(${coords.x * 40}px, ${coords.y * 40}px)`,
            transition: "transform 0.1s linear",
          }}
        >
          <PiHandshake />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{
            delay: 2.4,
            duration: 2,
            ease: [0.23, 1, 0.28, 1],
          }}
          className="dot"
          style={{
            transform: `translate(${coords.x * 30}px, ${coords.y * 30}px)`,
            transition: "transform 0.1s linear",
          }}
        >
          <FaHashtag />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{
            delay: 2.7,
            duration: 2,
            ease: [0.23, 1, 0.28, 1],
          }}
          className="dot"
          style={{
            transform: `translate(${coords.x * 10}px, ${coords.y * 10}px)`,
            transition: "transform 0.1s linear",
          }}
        ></motion.div>
      </div>
      <div className="mockups">
        <motion.div
          initial={{ bottom: -500 }}
          animate={{ bottom: -150 }}
          transition={{
            delay: 1.7,
            duration: 1,
            ease: [0.65, 0, 0.35, 1],
          }}
          className="mockup"
        >
          <img src="/media/app-photos/etkinlikler-ogrenci-anaekran.png" alt="Uygulama Görüntüsü" />
        </motion.div>
        <motion.div
          initial={{ bottom: -500 }}
          animate={{ bottom: -250 }}
          transition={{
            delay: 1.7,
            duration: 1,
            ease: [0.65, 0, 0.35, 1],
          }}
          className="mockup"
        >
          <img src="/media/app-photos/giris.png" alt="Uygulama Görüntüsü" />
        </motion.div>
        <motion.div
          initial={{ bottom: -500 }}
          animate={{ bottom: -350 }}
          transition={{
            delay: 1.7,
            duration: 1,
            ease: [0.65, 0, 0.35, 1],
          }}
          className="mockup"
        >
          <img src="/media/app-photos/kayit.png" alt="Uygulama Görüntüsü" />
        </motion.div>
        <motion.div
          initial={{ bottom: -500 }}
          animate={{ bottom: -320 }}
          transition={{
            delay: 1.7,
            duration: 1,
            ease: [0.65, 0, 0.35, 1],
          }}
          className="mockup"
        >
          <img src="/media/app-photos/anasayfa-ogrenci.png" alt="Uygulama Görüntüsü" />
        </motion.div>
        <motion.div
          initial={{ bottom: -500 }}
          animate={{ bottom: -160 }}
          transition={{
            delay: 1.7,
            duration: 1,
            ease: [0.65, 0, 0.35, 1],
          }}
          className="mockup"
        >
          <img src="/media/app-photos/gorev-mentor-anaekran.png" alt="Uygulama Görüntüsü" />
        </motion.div>
      </div>
    </motion.section>
  );
}

export default LandingPage;
