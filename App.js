import React, { useState, useMemo, useEffect } from "react";
import { Text } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import jwtDecode from 'jwt-decode'
import AuthScreen from "./src/screens/Auth";
import AuthContext from "./src/context/AuthContext";
import { setTokenApi, getTokenApi } from "./src/api/token";

export default function App() {
  const [auth, setAuth] = useState(undefined);

  useEffect(() => {
    
    (async () => {
      const token = await getTokenApi();
      if(token) {
        setAuth({
          token,
          idUser: jwtDecode(token).id,
        })
      }else {
        setAuth(null);
      }
    })();
  }, []);

  const login = (user) => {
    console.log("Login APP.JS");
    console.log(user.jwt);
    setTokenApi(user.jwt);
    setAuth({ 
      token: user.jwt,
      idUser: user.user._id
    });
  };

  //UseMemo sirve para comparar datos y si son distintos actualiza caso contrario nada. Mas optimizada la app
  const authData = useMemo(
    () => ({
      auth,
      login,
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
