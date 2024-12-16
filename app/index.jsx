import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TextInput, Image, Text } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import { Link, router } from "expo-router";
import { z } from "zod";
import { useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Must be 8 or more characters long" }),
});

export default function App() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errorMsg, setErrors] = useState({});
  const [serverError, setServerError] = useState("");

  // const navigation = useNavigation();

  const handleInputChange = (key, value) => {
    setForm({ ...form, [key]: value });
    try {
      LoginSchema.pick({ [key]: true }).parse({ [key]: value });
      setErrors((prev) => ({ ...prev, [key]: "" }));
    } catch (err) {
      setErrors((prev) => ({ ...prev, [key]: err.errors[0].message }));
    }
  };

  const handleSubmit = async () => {
    try {
      LoginSchema.parse(form);
      //coba di console

     const res = await axios.post("http://172.20.10.3:8080/auth/login", form);
    
     await AsyncStorage.setItem("token", res.data.data.token);
     router.replace("/(home)")
   } catch (err) {
     if (axios.isAxiosError(err)) {
       if (err.response) {
         setServerError(err.response.data.message || "An error occurred");
       } else if (err.request) {
         setServerError("Network error. Please try again later.");
         console.error("Network Error:", err.request);
       } else {
         setServerError("An unexpected error occurred.");
         console.error("Request Setup Error:", err.message);
       }
     } else if (err?.errors) {
       const errors = {};
       err.errors.forEach((item) => {
         const key = item.path[0];
         errors[key] = item.message;
       });
       setErrors(errors);
     } else {
       setServerError("An unknown error occurred.");
       console.error("Unhandled Error:", err);
     }
   }
 };


  return (
    <View style={styles.container}>
      {serverError && <Text>{serverError}</Text>}
      <Image source={require("../assets/logo.png")} style={styles.logo} />

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        onChangeText={(text) => handleInputChange("email", text)}
        value={form.email}
      />
      {errorMsg.email ? (
        <Text style={styles.errorMsg}>{errorMsg.email}</Text>
      ) : null}

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry={true}
        onChangeText={(text) => handleInputChange("password", text)}
        value={form.password}
      />
      {errorMsg.password ? (
        <Text style={styles.errorMsg}>{errorMsg.password}</Text>
      ) : null}

      <Link href="/(home)" style={styles.linkText}>
        Masuk
      </Link>
      <Button style={styles.button} handlePress={handleSubmit} text="Login" />
      <Text style={styles.link}>
        Dont't have an account?{" "}
        <Link href="/register" style={styles.linkText}>
          Register here
        </Link>
      </Text>
      <StatusBar style="auto" hidden />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
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
    borderRadius: 12,
    paddingHorizontal: 10,
    marginTop: 14,
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
  linkText: {
    color: "#19918F",
  },
  errorMsg: {
    color: "red",
    fontSize: 12,
    width: "100%",
    textAlign: "left",
    marginTop: 2,
  },
});
