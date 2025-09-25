import { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import AnimatedSection from "../AnimatedSection";
import { AnimatePresence, motion } from "framer-motion";
import "./ByWhat.scss";

function ByWhat() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const categories = [
    {
      name: "Kayıt & Giriş",
      icon: <FaSignInAlt />,
      studentPages: [
        {
          src: "/media/app-photos/kayit.png",
          description:
            "aybu.edu.tr uzantılı okul mailinle öğrenci & mezun bilgini girerek kayıt ol.",
        },
        {
          src: "/media/app-photos/kayit-dogrulama.png",
          description:
            "Mailine gelen doğrulama kodunu uygulamaya gir ve kaydını tamamla.",
        },
        {
          src: "/media/app-photos/giris.png",
          description: "Doğrulanan bilgilerin ile giriş yap.",
        },
      ],
      mentorPages: [
        {
          src: "",
          description: "Mentör hesabın admin tarafından oluşturulur.",
        },
        {
          src: "/media/app-photos/giris.png",
          description:
            "Adminden aldığın hesap bilgilerin ile hesabına giriş yap. ",
        },
      ],
      adminPages: [
        {
          src: "",
          description: "Admin hesabın başka bir admin tarafından oluşturulur.",
        },
        {
          src: "/media/app-photos/giris.png",
          description:
            "Adminden aldığın hesap bilgilerin ile hesabına giriş yap. ",
        },
      ],
    },
    {
      name: "Ana Sayfa",
      icon: <FaHome />,
      studentPages: [
        {
          src: "/media/app-photos/anasayfa-ogrenci.png",
          description:
            "Mentörleri gör, etkinliklerden paylaşılmış fotoğrafları incele.",
        },
      ],
      mentorPages: [
        {
          src: "/media/app-photos/anasayfa-mentor.png",
          description:
            "Öğrenci & mezun bakış açısı. Ancak görevlerine de ana sayfadan ulaşabiliyorsun.",
        },
      ],
      adminPages: [
        {
          description: "Öğrenci & mezun bakış açısı.",
        },
      ],
    },
    {
      name: "Etkinlikler",
      icon: <MdOutlineSportsGymnastics />,
      studentPages: [
        {
          src: "/media/app-photos/etkinlikler-ogrenci-anaekran.png",
          description: "Açılan etkinliklere öğrenci veya mezun olarak katıl.",
        },
        {
          src: "/media/app-photos/etkinlikler-ogrenci-benimetkinlikler.png",
          description: "Katıldığın/katılacağın etkinlikleri incele.",
        },
      ],
      mentorPages: [
        {
          src: "/media/app-photos/etkinlikler-mentor-anaekran.png",
          description: "Öğrenci ve mezunların katılacağı etkinlikler düzenle.",
        },
        {
          src: "/media/app-photos/etkinlikler-mentor-benimetkinlikler.png",
          description: "Düzenlediğin etkinlikleri incele.",
        },
      ],
      adminPages: [
        {
          description: "Öğrenci & mezun bakış açısı.",
        },
      ],
    },
    {
      name: "Forum",
      icon: <FaComments />,
      studentPages: [
        {
          src: "/media/app-photos/forum.png",
          description: "Foruma girerek öğrenci ve mezunlara soru sor.",
        },
        {
          src: "/media/app-photos/forum-soru-detay.png",
          description: "Sorular üzerine sohbet et.",
        },
      ],
      mentorPages: [
        {
          description: "Mentör olarak sen de foruma katıl.",
        },
      ],
      adminPages: [
        {
          description: "Forumu denetle ve gerekirse sohbetleri sil.",
        },
      ],
    },
    {
      name: "Rapor & Görevler",
      icon: <FaTasks />,
      studentPages: [],
      mentorPages: [
        {
          src: "/media/app-photos/gorev-mentor-anaekran.png",
          description: "Görevlerini takip et.",
        },
      ],
      adminPages: [
        {
          src: "/media/app-photos/gorev-admin.png",
          description: "Mentörlere görev ver, görev güncelle.",
        },
      ],
    },
    {
      name: "Takvim",
      icon: <FaCalendarAlt />,
      studentPages: [],
      mentorPages: [
        {
          description: "Etkinlikleri incele.",
        },
      ],
      adminPages: [
        {
          description: "Etkinlikleri incele.",
        },
      ],
    },
    {
      name: "Profil",
      icon: <FaUserCircle />,
      studentPages: [
        {
          src: "/media/app-photos/profil.png",
          description:
            "Hesabını incele, güncelle. Katıldığın etkinlik ve forumları gör.",
        },
      ],
      mentorPages: [
        {
          description:
            "Hesabını incele, güncelle. Düzenlediğin etkinlik ve katıldığın forumları gör.",
        },
      ],
      adminPages: [
        {
          description:
            "Hesabını incele, güncelle. Katıldığın etkinlik ve forumları gör.",
        },
      ],
    },
  ];

  const selectedCategory = categories[selectedIndex];

  const renderPages = (index, pages, className) => {
    if (!pages || pages.length === 0) return null;

    let titleText = "";
    if (className.includes("student-pages")) titleText = "Öğrenci & Mezun";
    if (className.includes("mentor-pages")) titleText = "Mentör";
    if (className.includes("admin-pages")) titleText = "Admin";

    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedIndex}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{
            delay: index * 0.1,
            duration: 1,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className={className}
        >
          <div className="page-title">{titleText}</div>

          <div className={className + " pages-one-by-one"}>
            {pages.map((page, i) => (
              <div className="page" key={i}>
                {page.src && (
                  <div className="mockup">
                    <img src={page.src} alt={`${className}-${i}`} />
                  </div>
                )}
                <div>{page.description}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <AnimatedSection id="by-what" className="by-what inner-section">
      <div className="section-title">Ne İle?</div>
      <div className="page-selector">
        {categories.map((cat, index) => (
          <motion.div
            initial={{ opacity: 0, top: -20 }}
            whileInView={{ opacity: 1, top: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1.2,
              delay: 0.2 + index * 0.1,
              ease: [0.65, 0, 0.35, 1],
            }}
            key={index}
            className={`page-dot ${selectedIndex === index ? "selected" : ""}`}
            onClick={() => setSelectedIndex(index)}
          >
            <div className="page-name">{cat.name}</div>
            <div className="icon">{cat.icon}</div>
          </motion.div>
        ))}
      </div>

      <div className="pages-container">
        <div className="page-boxes">
          {renderPages(
            1,
            selectedCategory.studentPages,
            "page-container student-pages"
          )}
          {renderPages(
            2,
            selectedCategory.mentorPages,
            "page-container mentor-pages"
          )}
          {renderPages(
            3,
            selectedCategory.adminPages,
            "page-container admin-pages"
          )}
        </div>
      </div>
    </AnimatedSection>
  );
}

export default ByWhat;
