import React from 'react';
import styles from './index.module.css';
import myFoto  from './media/IMG_1305.JPG';
import myFoto1 from './media/UV.jpeg';
import myFoto2 from './media/IMG_1303.JPG';
import myFoto9 from './media/Certifikat.png';





function Home() {
  return (

    <div className={styles.homeWrapper}>
      <div className={styles.hero}>
     {/* <img  className={styles.images} src={myFoto4} alt='myFoto' />*/}

     <section id="home" className={styles.homeSection}>
      <video className={styles.videoBackground} autoPlay loop muted>
        <source src={`${process.env.PUBLIC_URL}/videos/lashes.mp4`} type="video/mp4" />
        
      </video>
      <div className={styles.content}>
        <p className={styles.title}>Herzlichen Glückwunsch! Du bist im neuesten Kurs für Wimpernverlängerung im neuen UV-System!


Melden Sie sich noch heute für den Kurs an und erhalten Sie 10% Rabatt!</p>
      </div>
    </section>




        <h1>ONLINE SCHULUNG WIMPERNVERLÄNGERUNG</h1>
        <p>ALL INCLUSIVE ONLINE KURS</p>
        <div>inklusive Basisausbildung inklusive 2D-, 3D- bis Volumen Schulung hochwertiges Starterset inklusive2 x Zertifikate. E-Mail WhatsApp Support lebenslanger Zugang</div>
      </div>
      <div className={styles.spaPackages}>
        <div className={styles.package}>
        <img  className={styles.image} src={myFoto} alt='myFoto' />
          <h2>BASISAUSBILDUNG</h2>
          <p>Mit dem erlernten Wissen und den Fähigkeiten kannst Du Deinen eigenen Weg gehen, Deine Karriere selbst in die Hand nehmen und ein erfolgreiches Beauty-Business aufbauen. </p>
          <div className={styles.Preis}> fervolg startet hier</div>
        </div>
        <div className={styles.package}>
        <img  className={styles.image} src={myFoto1} alt='myFoto' />
          <h2>BASISAUSBILDUNG + VOLUMEN</h2>
          <p>Durch Deine neue berufliche Unabhängigkeit gewinnst Du mehr Lebensqualität. Du kannst Deine Zeit flexibel einteilen und Dein Business so gestalten, wie es am besten zu Dir passt.</p>
          <div className={styles.Preis}>fervolg startet hier</div>
        </div>
        <div className={styles.package}>
        <img  className={styles.image}src={myFoto2} alt='myFoto' />
          <h2>ALL INCLUSIVE SCHULUNG VIP</h2>
          <p>Du erhältst nicht nur fachliches Wissen, sondern auch Unterstützung bei Deiner persönlichen Entwicklung. Du lernst, Ängste und Unsicherheiten zu überwinden und Selbstvertrauen aufzubauen.</p>
          <div className={styles.Preis}>fervolg startet hier</div>
        </div>
       
      </div>
      <div  className={styles.hero} >
          <h1>ABLAUF ONLINE SCHULUNG</h1>
          <h3>Wimpernverlängerung Online Schulung mit Zertifikat </h3>
          <p>Nachdem Du unsere Online Schulung gekauft hast, erhältst Du sofort Deinen Zugang zum Mitgliederbereich und kannst Dir direkt die Schulungsvideos ansehen u. lernen.</p>
          <p>Auch nachdem Du den Online Kurs Wimpernverlängerung bestanden hast, stehe ich Dir mit Rat und Tat zur Seite. Du kannst mir gerne weiterhin Fragen stellen 🙏🏽.</p>
          <p>Herzlichen Glückwunsch, Du hast die All Inclusive Online Schulung Wimpernverlängerung mit Bravur bestanden. Wir senden Dir nun per Post Deine 2 exklusiven Zertifikate im PDF Format zu.</p>
          <div className={styles.package}>
          <img className={styles.foto}src={myFoto9} alt='myFoto'/>
        </div>
        <div >
          <h1>DEIN ZERTIFIKAT</h1>
          <p>Per Post und per E-Mail Wir senden Dir Dein Zertifikat per Post in bester Druckqualität. Zusätzlich senden wir Dir eine E-Mail aus welcher Du Dein Zertifikat herunterladen kannst.
Um im Handwerk der Wimpernverlängerung offiziell tätig werden zu können, ist die Vorlage eines qualifizierenden Zertifikats bei der Handwerkskammer unumgänglich.
Unser Zertifikat stellt genau diese essentielle Qualifikation dar. Es dient nicht nur als Nachweis Deiner fachlichen Kompetenz, sondern öffnet Dir auch offizielle Türen.
Mit der Abschlussbestätigung unserer Online-Schulung-Wimpernverlängerung bist Du in der Lage, Dich problemlos bei der Handwerkskammer anzumelden.
Wir sind stolz darauf, dass unser Zertifikat anerkannt und geschätzt wird, und garantieren Dir eine reibungslose Anmeldung. Investiere in Deine Zukunft und sichere Dir Dein offizielles Zertifikat durch unsere Schulung.</p>
<div onClick className={styles.Input}>fervolg startet hier </div>
        </div>
       </div>
    </div>
  );
}

export default Home;

   
