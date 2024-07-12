import React from 'react';
import styled from 'styled-components';
import styles from './index.module.css';
import myFoto5 from './media/studio1.jpeg'; 
import myFoto6 from './media/fullset.jpeg'; 
import myFoto7 from './media/room.jpeg'; 

const PackagesWrapper = styled.div`
  padding: 20px;
 {/* background-color: #f5f5f5;*/}
`;

const PackageSection = styled.section`
  max-width: 800px;
  margin: 0 auto;
`;

const Package = styled.div`
  margin: 20px 0;
  padding: 20px;
  {/*background-color: #fff;*/}
  border: 1px solid #ddd;
`;

function Packages() {
  return (
    <PackagesWrapper>
      <PackageSection>
        <h1>Was erhalten Sie, wenn Sie den Kurs kaufen?</h1>
        <Package className={styles.package}>
        <img  className={styles.image} src={myFoto5} alt='myFoto' />
          <h1>Wie lange dauert die Schulung?</h1>
          <p>Die Dauer der Schulung variiert, je nachdem, wie schnell Du das Material durchgehst und übst. Es ist ein Selbstlernkurs, bei dem Du Dein Tempo selbst bestimmst. Es ist möglich, die Schulung innerhalb von 2-3 Tagen zu absolvieren.</p>
        </Package>
        <Package className={styles.package}>
        <img  className={styles.image} src={myFoto6} alt='myFoto' />
          <h1>Was genau lerne ich in der Online-Schulung für Wimpernverlängerungen?</h1>
          <p>Du erlernst alle notwendigen Fertigkeiten und das theoretische Wissen, um eine qualitativ hochwertige Wimpernverlängerung durchzuführen. Darüber hinaus erhältst Du Einblicke in das Beauty-Business und wertvolle Tipps für Deinen erfolgreichen Start.</p>
        </Package>
        <Package className={styles.package}>
        <img  className={styles.image} src={myFoto7} alt='myFoto' />
          <h1>Wie sieht der Mitgliederbereich aus und was finde ich dort?</h1>
          <p>In dieses Paket sind der Basiskurs + 2D, 3D + Trend-Effekte enthalten, alle Techniken und Feinheiten, alle Schwierigkeiten und Geheimnisse, die Sie im Internet nicht frei finden werden. Der Kurs zu Effekten und schöner Fotobearbeitung ist ebenfalls dabei!</p>
        </Package>
      </PackageSection>
    </PackagesWrapper>
  );
}

export default Packages;
