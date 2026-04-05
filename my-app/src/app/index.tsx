import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Link } from "expo-router";
import { useState } from "react";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSignIn() {
    if (!email.trim() || !password.trim()) {
      return Alert.alert("Erro", "Preencha o email e a senha para entrar. ");
    }

    Alert.alert("Bem-vindo", "Login realizado com: " + email);
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.select({ ios: "padding", android: "height" })}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={style.container}>
          <Image
            source={require("@/assets/img1.png")}
            style={style.image}
          ></Image>
          <Text style={style.title}>Entre</Text>
          <Text style={style.p}>Acesse sua conta.</Text>
          <View style={style.form}>
            <Input
              placeholder="email"
              keyboardType="email-address"
              onChangeText={setEmail}
            ></Input>
            <Input
              placeholder="password"
              secureTextEntry
              onChangeText={setPassword}
            ></Input>
            <Button label="Entrar" onPress={handleSignIn}></Button>
            <Text style={style.p}>
              Nao tem uma conta?{" "}
              <Link style={style.link} href={"/signup"}>
                Cadastre-se aqui
              </Link>
              .
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFDFD",
    padding: 32,
  },
  image: {
    width: "100%",
    height: 330,
    resizeMode: "contain",
    marginTop: 62,
  },
  title: {
    fontWeight: "bold",
    fontSize: 50,
  },
  p: {
    fontSize: 20,
    fontWeight: "500",
  },
  form: {
    marginTop: 15,
    gap: 12,
  },
  link: {
    color: "#0e3b89",
    fontWeight: 600,
    fontSize: 20,
  },
});
