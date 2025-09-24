import { motion } from "framer-motion";
import "./Footer.scss";

function Footer() {
  const us = [
    {
      photo: "/media/team-photos/enes-photo.jpg",
      name: "Enes Eldeş",
      department: "Bilgisayar Mühendisliği",
    },
    {
      photo: "/media/team-photos/deniz-photo.jpeg",
      name: "İrem Deniz Ünal",
      department: "Yazılım Mühendisliği",
    },
    {
      photo: "/media/team-photos/zehra-photo.jpg",
      name: "Zehra Kaygılı",
      department: "Endüstri & Yazılım Mühendisliği",
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 1.2,
        ease: [0.65, 0, 0.35, 1],
      }}
      id="us"
    >
      <div className="us">
        {us.map((person, index) => (
          <div className="person">
            <div className="person__photo">
              <img src={person.photo} alt={person.name + " foto"} />
            </div>
            <div className="subtitle">{person.name}</div>
            <div className="person__department">{person.department}</div>
          </div>
        ))}
      </div>

      <div className="dots">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </motion.footer>
  );
}

export default Footer;
