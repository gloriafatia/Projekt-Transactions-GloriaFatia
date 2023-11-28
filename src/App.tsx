import { ConfigProvider, theme } from "antd";
import { HelmetProvider } from "react-helmet-async";
import { Provider as ReduxProvider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { PersistGate } from "redux-persist/integration/react";
import { AuthProvider } from "./contexts/AuthContext";
import { store, persistor } from "./store/redux";
import { BrowserRouter } from "react-router-dom";
import Loading from "./components/Loading/Loading";
import { useState } from "react";

import Router from "./router";

const themeConfig = {
  algorithm: theme.defaultAlgorithm,
  token: {
    colorPrimary: "#3d7cef",
  },
};

const reactQueryClient = new QueryClient();

const App = () => {
  return (
    <div>
      <HelmetProvider>
        <ReduxProvider store={store}>
          <PersistGate loading={<Loading />} persistor={persistor}>
            <AuthProvider>
              <QueryClientProvider client={reactQueryClient}>
                <ConfigProvider theme={themeConfig}>
                  <BrowserRouter>
                     <Router/>
                  </BrowserRouter>
                </ConfigProvider>
              </QueryClientProvider>
            </AuthProvider>
          </PersistGate>
        </ReduxProvider>
      </HelmetProvider>
    </div>
  );
};

export default App;
