import { View, StyleSheet, Text, TextInput } from "react-native";

function Input({text}) {
  return (
    <View style={styles.container}>
      <Text style={styles.placeholder}>{text}</Text>
      <TextInput style={styles.input}/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: "100%",
    backgroundColor: "white",
    width: "100%",
  },
  placeholder: {
    color: "#B3b3b3",
  },
  input: {
    borderBottomColor: "#B3B3B3",
    borderBottomWidth: 0.5,
    paddingHorizontal: 16,
    paddingVertical: 8
  },
});

export default Input;
