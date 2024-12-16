import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { View } from "react-native-web";
import SelectDropdown from 'react-native-select-dropdown'


export default function Dropdown() {
  return (
    <View >
      {/* <TouchableOpacity>
    
        <select style={styles.select} name="selectedBank" defaultValue="BYOND">
          <option value="BYOND">BYOND</option>
          <option value="Mandiru">Mandiru</option>
        </select>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
    width: "100%",
    marginVertical: 10,
  },
 select: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
    borderWidth:0,
  },
  input: {
    borderBottomColor: "#B3B3B3",
    borderBottomWidth: 0.5,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});