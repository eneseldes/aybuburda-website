import { useState } from "react";
import { FaUserPlus } from "react-icons/fa"; // Kayıt (user plus)
import { FaSignInAlt } from "react-icons/fa"; // Giriş (login)
import { FaHome } from "react-icons/fa"; // Ana Sayfa (home)
import { FaComments } from "react-icons/fa"; // Forum (comments)
import { FaCalendarAlt } from "react-icons/fa"; // Etkinlikler (calendar)
import { FaTasks } from "react-icons/fa"; // Rapor & Görevler (tasks)
import { FaRegCalendarCheck } from "react-icons/fa"; // Takvim (calendar check)
import { FaUserCircle } from "react-icons/fa"; // Profil (user circle)
import admin from "./admin.png";
import "./ByWhat.scss";
import AnimatedSection from "../AnimatedSection";

function ByWhat() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const categories = [
    {
      name: "Kayıt",
      icon: <FaUserPlus />,
      studentPages: [admin, admin],
      mentorPages: [admin],
      adminPages: [admin],
    },
    {
      name: "Giriş",
      icon: <FaSignInAlt />,
      studentPages: [],
      mentorPages: [],
      adminPages: [],
    },
    {
      name: "Ana Sayfa",
      icon: <FaHome />,
      studentPages: [],
      mentorPages: [],
      adminPages: [],
    },
    {
      name: "Forum",
      icon: <FaComments />,
      studentPages: [],
      mentorPages: [],
      adminPages: [],
    },
    {
      name: "Etkinlikler",
      icon: <FaCalendarAlt />,
      studentPages: [],
      mentorPages: [],
      adminPages: [],
    },
    {
      name: "Rapor & Görevler",
      icon: <FaTasks />,
      studentPages: [],
      mentorPages: [],
      adminPages: [],
    },
    {
      name: "Takvim",
      icon: <FaRegCalendarCheck />,
      studentPages: [],
      mentorPages: [],
      adminPages: [],
    },
    {
      name: "Profil",
      icon: <FaUserCircle />,
      studentPages: [],
      mentorPages: [],
      adminPages: [],
    },
  ];

  // Seçili kategoriyi al
  const selectedCategory = categories[selectedIndex];

  const renderPages = (pages, className) => {
    if (!pages || pages.length === 0) return null;

    let titleText = "";
    if (className.includes("student-pages")) titleText = "Öğrenci Ekranı";
    if (className.includes("mentor-pages")) titleText = "Mentor Ekranı";
    if (className.includes("admin-pages")) titleText = "Admin Ekranı";

    return (
      <div className={className}>
        <div className="page-title">{titleText}</div>

        <div className={className + " pages-one-by-one"}>
          {pages.map((src, i) => (
            <div className="mockup" key={i}>
              <img src={src} alt={`${className}-${i}`} />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <AnimatedSection id="by-what" className="by-what inner-section">
      <div className="section-title">Ne İle?</div>
      <div className="page-selector">
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`page-dot ${selectedIndex === index ? "selected" : ""}`}
            onClick={() => setSelectedIndex(index)}
          >
            <div className="page-name">{cat.name}</div>
            <div className="icon">{cat.icon}</div>
          </div>
        ))}
      </div>

      <div className="pages-container">
        <div className="page-boxes">
          {renderPages(
            selectedCategory.studentPages,
            "page-container student-pages"
          )}
          {renderPages(
            selectedCategory.mentorPages,
            "page-container mentor-pages"
          )}
          {renderPages(
            selectedCategory.adminPages,
            "page-container admin-pages"
          )}
        </div>
      </div>
    </AnimatedSection>
  );
}

export default ByWhat;
