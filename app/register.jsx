import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  Text,
  Modal,
  Pressable,
  Alert,
} from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import { Link } from "expo-router";
import Checkbox from "expo-checkbox";
import { useState } from "react";
import { z } from "zod";
import axios from "axios";
import { useRouter } from "expo-router";
//import { SafeAreaView} from "react-native-safe-area-context";

const RegistSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  username: z.string(),
  password: z.string().min(8, { message: "Must be 8 or more characters long" }),
  avatar_url: z.string(),
  fullname: z.string(),
});

export default function Register() {
  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    avatar_url: "",
    fullname: "",
  });
  const router = useRouter();
  const [errorMsg, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [isChecked, setChecked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleInputChange = (key, value) => {
    setForm({ ...form, [key]: value });
    try {
      RegistSchema.pick({ [key]: true }).parse({ [key]: value });
      setErrors((prev) => ({ ...prev, [key]: "" }));
    } catch (err) {
      setErrors((prev) => ({ ...prev, [key]: err.errors[0].message }));
    }
  };

  const handleSubmit = async () => {
    if (!isChecked) {
      Alert.alert("Checklist first");
      return;
    }
    try {
      RegistSchema.parse(form);
      //coba di console

      const res = await axios.post(
        "http://172.20.10.3:8080/auth/register",
        form
      );
      console.log(form);
      Alert.alert("Success");
      router.replace("/");
    } catch (error) {
      console.log("test", error);
      if (error.response) {
        Alert.alert("Failed", "Email address already exists");
      } else {
        Alert.alert("Failed", "Something went wrong. Pls try again!");
      }
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />

      <TextInput
        style={styles.input}
        placeholder="Fullname"
        placeholderTextColor="#aaa"
        onChangeText={(text) => handleInputChange("fullname", text)}
        value={form.fullname}
      />
      {errorMsg.fullname ? (
        <Text style={styles.errorMsg}>{errorMsg.fullname}</Text>
      ) : null}

      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#aaa"
        onChangeText={(text) => handleInputChange("username", text)}
        value={form.username}
      />
      {errorMsg.username ? (
        <Text style={styles.errorMsg}>{errorMsg.username}</Text>
      ) : null}

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
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

      <TextInput
        style={styles.input}
        placeholder="Avatar url"
        placeholderTextColor="#aaa"
        onChangeText={(text) => handleInputChange("avatar_url", text)}
        value={form.avatar_url}
      />
      {errorMsg.password ? (
        <Text style={styles.errorMsg}>{errorMsg.avatar_url}</Text>
      ) : null}

      <View style={styles.tnc}>
        <Checkbox
          value={isChecked}
          onValueChange={setChecked}
          style={styles.checkbox}
        />
        <Text style={styles.tncText}>I have read and agreee to the </Text>
        <Link href="/tnc">
          <Text style={styles.tncLink}>Terms and Conditions</Text>
        </Link>
      </View>

      <Button style={styles.button} handlePress={handleSubmit} text="Regist" />

      <Text>
        Have account?{" "}
        <Link style={styles.link} href={"/"}>
          {" "}
          Login here
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
  tnc: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flext-start",
    flexWrap: "nowrap",
    textAlign: "left",
    paddingTop: 10,
    paddingBottom: 10,
  },
  tncText: {
    marginLeft: 10,
    fontSize: 12,
  },
  tncLink: {
    color: "#19918F",
    fontSize: 12,
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
  checkbox: {
    margin: 8,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "justify",
  },
});
