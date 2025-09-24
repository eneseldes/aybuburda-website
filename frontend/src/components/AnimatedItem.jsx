import { motion } from "framer-motion";

const AnimatedItem = ({
  children,
  index = 0,
  className = "",
  style = {},
  ...rest
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut",
      }}
      className={className}
      style={style}
      {...rest} // diğer tüm prop’ları da forward et
    >
      {children}
    </motion.div>
  );
};

export default AnimatedItem;
