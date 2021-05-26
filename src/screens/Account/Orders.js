import React, { useState, useEffect } from "react";
import { ScrollView, Text } from "react-native";
import StatusBar from "../../components/StatusBar";
import useAuth from "../../hooks/useAuth";
import { getOrdersApi } from "../../api/order";

export default function Orders() {
  const [orders, setOrders] = useState(null);
  const { auth } = useAuth();

  useEffect(() => {
    (async () => {
      const response = await getOrdersApi(auth);
      console.log(response);
    })();
  }, []);

  return (
    <>
      <StatusBar />
      <ScrollView>
        <Text>Estamos en mis pedidos</Text>
      </ScrollView>
    </>
  );
}
