import { IonApp, setupIonicReact  } from '@ionic/react';
import { StatusBar, Style } from '@capacitor/status-bar';

import { useEffect } from 'react';

setupIonicReact({});

const AppShell = ({ children }) => {
  useEffect(() => {
    window.matchMedia("(prefers-color-scheme: dark)").addListener(async (status) => {
      try {
        await StatusBar.setStyle({
          style: status.matches ? Style.Dark : Style.Light,
        });
      } catch {}
    });
  }, []);

  return (
    <IonApp>
      { children }
    </IonApp>
  );
};

export default AppShell;
