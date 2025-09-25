import { motion } from "framer-motion";

const AnimatedSection = ({
  children,
  index = 0,
  className = "",
  style = {},
  ...rest
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 1.5,
        delay: index * 0.2,
        ease: [0.65, 0, 0.35, 1],
      }}
      className={className}
      style={style}
      {...rest} // diğer tüm prop’ları da forward et
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
