import { View, StyleSheet, TextInput, Text } from "react-native";
import { useState, useEffect } from "react";
import Input from "./Input";

export default function Amount({ balance = 0,
  showBalance = false,
  marginTop = 0,
  marginBottom = 0,
  value,
  setValue }) {
  return (
    <View style={styles.container}>
      <Text style={styles.placeholder}>{text}</Text>
      <View style={styles.containerv2}>
        <Text>IDR</Text>
        <TextInput style={styles.Amount}  placeholder="100.000"
          keyboardType="number-pad"
          value={value}
          onChangeText={(text) => setValue(text)} />
      </View>
      {showBalance && (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Text style={{ color: "#b3b3b3" }}>Balance </Text>
          <Text style={{ color: "#19918F" }}>IDR {balance}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: 30,
    paddingLeft: 30,
    paddingTop: 18,
    paddingButton: 24,

  
    width: "100%",
    backgroundColor: "white",
    width: "100%",
    marginVertical: 24,
  },
  containerv2: {
    //flexWrap: "wrap",
 
    flexDirection: "row",
    alignItems: "center",
  },
  placeholder: {
    color: "#B3b3b3",
    
  },

  Amount: {
    width: "100%",
    borderBottomColor: "#B3B3B3",
    borderBottomWidth: 0.5,
    padding: 8,
    fontSize: 36,
    fontWeight: "400",
    textAlign: "right",
  

    
  },
});
