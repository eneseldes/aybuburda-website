import photo from "./earth.jpeg";
import { IPhoneMockup, AndroidMockup } from "react-device-mockup";
import "./ScreenDefinitionCard.scss";

function ScreenDefinitionCard() {
  return (
    <div>
      <IPhoneMockup screenWidth={300} color="black">
        <img src={photo} alt="Uygulama Görüntüsü" style={{ width: "100%" }} />
      </IPhoneMockup>

      <AndroidMockup screenWidth={300} color="silver">
        <img src={photo} alt="Uygulama Görüntüsü" style={{ width: "100%" }} />
      </AndroidMockup>

      <p>asdasd</p>
    </div>
  );
}

export default ScreenDefinitionCard;
