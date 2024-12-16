import { StyleSheet, View, Text } from "react-native";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Amount from "../../components/Amount";
import Dropdown from "../../components/Dropdown";


function Topup() {
 
  return (
    <View style={styles.container}>


      <Amount text="Amount"  keyboardType="numeric" />
      <Dropdown/>
      <Input text="Notes" />
    </View>
    
  );
}
export default Topup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    // alignItems: "center",
    justifyContent: "",
  
  },

  logo: {
    // width: 100,
    // height: 100,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#4DB6AC",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 15,
    marginBottom: 90,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  link: {
    color: "#4DB6AC",
  },
});