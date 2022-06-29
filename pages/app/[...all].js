import { IonRouterOutlet, IonSplitPane  } from '@ionic/react';

import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

import AppShell from '../../components/AppShell';
import DynamicContent from '../../components/DynamicContent';
import Menu from '../../components/Menu';
import Tabs from '../../components/pages/Tabs';

export default function IonicAppRoot() {
  return (
    <AppShell>
      <DynamicContent>
        <IonReactRouter>
          <IonSplitPane contentId="main">
            <Menu />
            <IonRouterOutlet id="main">
              <Route path="/app/tabs" render={() => <Tabs />} />
              <Route exact path="/app" render={() => <Redirect to="/app/tabs" />} />
            </IonRouterOutlet>
          </IonSplitPane>
        </IonReactRouter>
      </DynamicContent>
    </AppShell>
  );
}
