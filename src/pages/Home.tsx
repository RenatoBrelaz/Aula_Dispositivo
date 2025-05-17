import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { useState } from 'react';

const Home: React.FC = () => {

 
  const [digite, setdigite] = useState(0);
  const [resultado, setreultado] = useState(null);

   const calcularcirculo = () => {
    
    3.14 * digite ^ 2

   }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Curso de Dispositivos Móveis</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <h1>Criando aplicativo Ionic</h1>

      <IonItem>
        <IonInput label="Digite o valor do raio:" placeholder="Digite o número:"></IonInput>
      </IonItem>
 <IonButton color="secondary">Calcular</IonButton>

      </IonContent>
    </IonPage>
  );
};

export default Home;
