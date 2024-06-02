import React from "react";
import { SafeAreaProvider,SafeAreaView } from "react-native-safe-area-context";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { Provider } from "react-redux";
import { QueryClient,QueryClientProvider } from "@tanstack/react-query";

import Navigation from "./src/Navigation";
import store from "./src/redux/store"

const queryClient=new QueryClient();

const App = () => {
  return(
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <GluestackUIProvider config={config}>
            <Navigation/>
          </GluestackUIProvider>
        </Provider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}

export default App;