import React, { useState, useMemo, useEffect } from "react";
import { Text } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import AuthScreen from "./src/screens/Auth";
import AuthContext from "./src/context/AuthContext";

export default function App() {
  const [auth, setAuth] = useState(undefined);

  useEffect(() => {
    setAuth(null);
  }, []);

  //UseMemo sirve para comparar datos y si son distintos actualiza caso contrario nada. Mas optimizada la app
  const authData = useMemo(
    () => ({
      auth,
      login: () => null,
      logout: () => null,
    }),
    [auth]
  );

  if (auth === undefined) return null;

  return (
    <AuthContext.Provider value={authData}>
      <PaperProvider>
        {auth ? <Text>Zona de usuarios</Text> : <AuthScreen />}
      </PaperProvider>
    </AuthContext.Provider>
  );
}
