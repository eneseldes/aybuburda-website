import { FaHandsHelping } from "react-icons/fa";
import { MdOutlineGroups } from "react-icons/md";
import { SiGoogletasks } from "react-icons/si";
import { FaComments } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";

import "./How.scss";
import AnimatedSection from "../AnimatedSection";

function How() {
  const howInfos = [
    {
      icon: <FaHandsHelping />,
      title: "Akran Danışmanlığı",
      hint: "Mentor - Öğrenci Eşleşmesi",
      description:
        "Öğrencilerin birbirine yol göstermesi, deneyimlerini paylaşması ve dayanışma içinde olması için oluşturulmuş bir alandır. Mentörler düzenledikleri oturumlarla arkadaşlarına destek olur, öğrenciler bu süreçlere katılır ve paylaşımlar kayıt altına alınır. Böylece üniversite yaşamı yalnızca derslerle sınırlı kalmaz, öğrenciler birbirinden destek alarak gelişir.",
    },
    {
      icon: <MdOutlineGroups />,
      title: "Etkinlik Yönetimi",
      hint: "Katıl, düzenle, raporla",
      description:
        "Kültür-sanat, spor, sosyal sorumluluk ve mesleki gelişim gibi farklı alanlarda düzenlenen etkinliklerin buluşma noktasıdır. Adminler ve mentörler etkinlikleri planlar, öğrenciler katılır, tamamlayanlara puan eklenir. Etkinlikler raporlandıkça topluluk hafızası oluşur ve üniversite hayatı daha canlı bir hâl alır.",
    },
    {
      icon: <SiGoogletasks />,
      title: "Görevler & Puan Sistemi",
      hint: "Puanını arttır, görünür ol",
      description:
        "Topluluk içinde aktif olmayı, sorumluluk almayı ve katkı sunmayı teşvik eden bir sistemdir. Görevlerini yerine getiren ve etkinliklere katılan öğrenciler puan kazanır, profilleri öne çıkar. Böylece hem bireysel çaba karşılık bulur hem de topluluk bilinci güçlenir.",
    },
    {
      icon: <FaComments />,
      title: "ForumAybü",
      hint: "Sorunu sor, cevabını bul",
      description:
        "Öğrenciler ve mezunların bir araya gelerek soru sorduğu, tecrübelerini paylaştığı ve çözüm ürettiği ortak bir paylaşım alanıdır. Sorular konu başlıkları altında paylaşılır, verilen yanıtlar görünür hale gelir. Böylece bilgi alışverişi yapılır, her soru yeni bir bağ kurar ve her cevap başka bir öğrenciye yol gösterir.",
    },
    {
      icon: <FaSearch />,
      title: "Arama & Filtreleme",
      hint: "İhtiyacın olan kişilere ulaş",
      description:
        "Öğrencilerin doğru kişiye, doğru bilgiye ve doğru etkinliğe hızlıca ulaşmasını sağlayan bir köprü görevi görür. Bölüm, ilgi alanı ya da etkinlik türüne göre filtreleme yapılabilir. Bu sayede doğru kişiye veya etkinliğe daha hızlı erişim mümkün olur.",
    },
    {
      icon: <FaBell />,
      title: "Haberdar Ol",
      hint: "Biz biriz, birlikteyiz",
      description:
        "Üniversite ile ilgili duyuru ve gelişmelerin paylaşıldığı, topluluk ruhunu canlı tutan bildirim merkezidir. Öğrenciler önemli etkinliklerden ve haberlerden anında haberdar olur. Bu bildirimler sayesinde aidiyet duygusu güçlenir, herkes aynı çatı altında birleşir ve öğrenciler birbirinden kopmadan hareket eder.",
    },
  ];

  return (
    <AnimatedSection id="how" className="how inner-section">
      <div className="section-title">Nasıl?</div>
      <div className="how-cards">
        {howInfos.map((info, index) => (
          <div className="how-card">
            <div className="card-upper">
              <div className="icon">{info.icon}</div>
              <div className="subtitle">{info.title}</div>
              <div className="hint">{info.hint}</div>
            </div>
            <div className="card-lower">{info.description}</div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}

export default How;
