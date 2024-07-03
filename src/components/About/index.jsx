import React from 'react';
import styled from 'styled-components';
import 'flickity/css/flickity.css';
import Flickity from 'react-flickity-component';

import myFoto2 from './media/IMG_1208.JPG';
import myFoto3 from './media/certificate1.png';
import myFoto4 from './media/certificate2.png';
import myFoto5 from './media/certificate3.png';
import img from './media/IMG_1209.JPG';
import img7 from './media/img_1287.JPEG';
import img6 from './media/img_1288.JPEG';
import img5 from './media/img_1289.JPEG';
import img4 from './media/img_1290.JPEG';
import img3 from './media/img_1291.JPEG';
import img2 from './media/img_lash2.png';
import lovelash from './media/lovelash.png';
import styles from './index.module.css';

const AboutWrapper = styled.div`
  padding: 20px;
{/*background-color: #f5f5f5;*/}
`;

const AboutSection = styled.section`
  max-width: 500px;
  margin: 0 auto;
`;

const flickityOptions = {
  initialIndex: 0,
  cellAlign: 'left',
  contain: true,
  pageDots: false,
  autoPlay: 3000, // Автоматическая прокрутка каждые 3 секунды
  groupCells: 3 // Группировка по 3 изображения
};

const fotos = [
  lovelash, img, img2, img3, img4, img5, img6, img7
];

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
  margin: 0 auto;
`;

const ImageContainer = styled.div`
width: 100% / 3 ; /* Ширина контейнера изображения */
  padding: 5px; /* Отступы вокруг изображений */
  box-sizing: border-box; /* Включаем отступы в общую ширину */
`;

const About = () => {
  return (
    <div>
     
      <AboutWrapper>
        <AboutSection>
          <h1>Über mich</h1>
          <img className={styles.image} src={myFoto2} alt="myFoto" />
          <p>
            Hallo! Mein Name ist Tamara Haak. Als leidenschaftlicher Perfektionist lege ich höchsten Wert auf Detailgenauigkeit und Exzellenz. Meine kreative Vision und mein unermüdliches Streben nach Verbesserung machen mich zu einem einzigartigen Lehrer und Mentor. Ich bin nicht nur ein Meister meines Fachs, sondern auch ein engagierter und inspirierender Coach, der Sie auf Ihrem Weg zum Erfolg begleitet. In der Wimpernindustrie habe ich bei renommierten Meistern der Wimpernverlängerung und trendigen Effekten gelernt. Während meiner Laufbahn habe ich ein enormes Wissen und praktische Erfahrungen gesammelt, die ich jetzt mit dir teilen möchte! Damit du deinen Platz in der Schönheitsbranche finden kannst, und glaube mir, mit mir wird es dir sehr leicht und spaßig gelingen! Der Beruf des Wimpernstylisten hat sich heutzutage so global und umfassend entwickelt, dass du ein enormes Potenzial hast, in kurzer Zeit bekannt zu werden! Du wirst zu einem gefragten Spezialisten, von denen es in Europa nicht viele gibt, weil meine Kurse auf weltweitem Niveau basieren. Ich werde wie Meister Yoda an deiner Seite sein, dich unterstützen, beraten und dich über Neuheiten in der Wimpernindustrie informieren! Träumst du davon, ein Profi zu werden? Melde dich für meinen umfangreichen Wimpernverlängerungskurs an und erhalte 10% Rabatt! Mache den ersten Schritt zu einer erfolgreichen Karriere in der Schönheitsbranche!
          </p>

          <h1>Meine Zertifikate sind mein Stolz.</h1>
          <div className={styles.certificates}>
            <img className={styles.image} src={myFoto3} alt="myFoto" />
            <img className={styles.image} src={myFoto4} alt="myFoto" />
            <img className={styles.image} src={myFoto5} alt="myFoto" />
          </div>
        </AboutSection>
      </AboutWrapper>
      <Flickity className="Slider" elementType="div" disableImagesLoaded={false} options={flickityOptions} reloadOnUpdate static>
        {fotos.map((image, index) => (
          <ImageContainer key={index} className="Plate">
            <Image src={image} alt={`Image ${index}`} />
          </ImageContainer>
        ))}
      </Flickity>

    </div>
  );
};

export default About;