import AppShell from '../components/AppShell';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButton } from '@ionic/react';

export default function Index() {
  return (
    <AppShell>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          <IonCardTitle>Card Title</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          Keep close to Natures heart... and break clear away, once in awhile,
          and climb a mountain or spend a week in the woods. Wash your spirit clean.

          <IonButton>Open the app</IonButton>
        </IonCardContent>
      </IonCard>
    </AppShell>
  );
}
