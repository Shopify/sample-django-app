import { AppProvider, EmptyState, Page } from '@shopify/polaris';
import {Provider, useAppBridge} from '@shopify/app-bridge-react';

import enTranslations from '@shopify/polaris/locales/en.json';
import React from 'react';
import { render } from "react-dom";

function TestData() {
  const app = useAppBridge();

  return (
    <div>
      {(app) => {
        // Do something with App Bridge `app` instance...
        if (app) {
          app.getState().then((state) => console.log(state));
        }

        return <span>Hello world!</span>;
      }}
    </div>
  );
};

export default function App() {
  const config = {apiKey: '12345', shopOrigin: shopOrigin};

  return (
    <AppProvider i18n={enTranslations}>
      <Provider config={config}>
        <Page>
          <EmptyState>
            <TestData/>
          </EmptyState>
        </Page>
      </Provider>
    </AppProvider>
  );
}

const container = document.getElementById("app");
render(<App />, container);
