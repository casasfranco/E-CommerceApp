import React, { useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { itemsDefault } from "../../utils/itemSelector";
export default function Quantity(props) {
  const { quantity, setQuantity } = props;

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(quantity);
  const [items, setItems] = useState(itemsDefault);

  return (
    <DropDownPicker
      placeholder="Selecciona una cantidad"
      open={open}
      value={value}
      defaultValue={quantity}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      searchable={false}
      containerStyle={styles.containerStyle}
      itemStyle={styles.itemStyle}
      dropDownContainerStyle={styles.dropDownPicker}
      style={styles.dropDownPicker}
      labelStyle={styles.labelStyle}
      onChangeValue={(item) => setQuantity(item)}
    />
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    height: 40,
    width: 140,
  },
  itemStyle: {
    justifyContent: "flex-start",
  },
  dropDownPicker: {
    backgroundColor: "#fafafa",
  },
  labelStyle: {
    color: "#000",
  },
});
