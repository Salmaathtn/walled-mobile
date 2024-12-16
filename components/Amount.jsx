import { View, StyleSheet, Text, TextInput } from "react-native";
import Input from "./Input";

function Amount({ text }) {
  return (
    <View style={styles.container}>
      <Text style={styles.placeholder}>{text}</Text>
      <View style={styles.containerv2}>
       IDR
        <TextInput style={styles.Amount} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: 30,
    paddingLeft: 30,

    width: "100%",
    backgroundColor: "white",
    width: "100%",
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
    borderBottomColor: "#B3B3B3",
    borderBottomWidth: 0.5,
    padding: 8,
    fontSize: 36,
   
    
  },
});

export default Amount;