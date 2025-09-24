import { FaArchive } from "react-icons/fa";
import { FaHashtag } from "react-icons/fa";
import { MdOutlineSelfImprovement } from "react-icons/md";
import { TbBriefcase2Filled } from "react-icons/tb";
import { FaFistRaised } from "react-icons/fa";
import { PiHandshake } from "react-icons/pi";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { FaPalette } from "react-icons/fa";
import { MdOutlineSportsGymnastics } from "react-icons/md";

import "./Categories.scss";
import AnimatedSection from "../AnimatedSection";

function Categories() {
  const categories = [
    { name: "Arşiv", icon: <FaArchive /> },
    { name: "Sosyal Medya", icon: <FaHashtag /> },
    { name: "Kişisel Gelişim", icon: <MdOutlineSelfImprovement /> },
    { name: "Mesleki Yeterlilik", icon: <TbBriefcase2Filled /> },
    { name: "Donanım", icon: <FaFistRaised /> },
    { name: "Tecrübe ve Deneyim", icon: <PiHandshake /> },
    { name: "Sosyal Sorumluluk", icon: <FaHandHoldingHeart /> },
    { name: "Kültür ve Sanat", icon: <FaPalette /> },
    { name: "Spor", icon: <MdOutlineSportsGymnastics /> },
  ];

  return (
    <AnimatedSection initial={{ opacity: 0, y: 0 }} className="categories">
      <div className="categories__wrapper">
        {categories.map((cat, index) => (
          <div className="category-box" key={index}>
            <div className="icon">{cat.icon}</div>
            <div className="label">{cat.name}</div>
          </div>
        ))}
        {/* sonsuz döngü için liste tekrarı */}
        {categories.map((cat, index) => (
          <div className="category-box" key={`clone-${index}`}>
            <span className="icon">{cat.icon}</span>
            <span className="label">{cat.name}</span>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}

export default Categories;
