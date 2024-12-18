import { StyleSheet, View, Text,
  TouchableOpacity,
  ScrollView, } from "react-native";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Amount from "../../components/Amount";
import Dropdown from "../../components/Dropdown";
import { useCallback, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";



export default function Topup() {
  const [form, setForm] = useState ({ammmount: "", description: ""})
  const [errorsMsg, setErrors] = useState({})
  const [serverError, setServerError] = useState("")
     const handleInputChange = (key, value) => {
        setForm({...form, [key]: value})
        try {
        topUpSchema.pick({[key]: true}).parse({[key]: value})
        setErrors((prev) => ({...prev, [key]: ""}))
        } catch (err) {
        setErrors((prev) => ({...prev, [key]: err.errors[0].message}))
        }
     const handleSubmit = async() => {
        try {
        topUpSchema.parse(form)

        const res = await axios.post("http://172.20.10.3:8080/transactions/topup", form) 
        await AsyncStorage.setItem("token", res.data.data.token)
        // router.replace("/(home)")
        } catch (err) {
        if (err?.response) {
            setServerError(err.response.data.message)
            return
        }
        const errors = {}
        err.errors.forEach((item) => {
            const key = item.path[0]
            errors[key] = item.message
        })
        setErrors(errors)
    }
    }}
 
  return (
    <View style={styles.container}>


      <Amount text="Amount"  keyboardType="numeric" />
      <Dropdown/>
      <Input text="Notes" />
    </View>
    
  );
}


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