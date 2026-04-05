import { Link } from "expo-router";
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
import { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  function handleSignUp() {
    if (
      !email.trim() ||
      !password.trim() ||
      !name.trim() ||
      !confirmPassword.trim()
    ) {
      return Alert.alert(
        "Erro",
        "Preencha todo o formulario para se cadastrar. ",
      );
    }
    if (password !== confirmPassword) {
      return Alert.alert(
        "Erro",
        "Sua senha nao estar igual, por favor, digite a mesma senha. ",
      );
    }

    Alert.alert(
      "Cadastro Feito com Sucesso",
      "Seu cadastro foi feito com sucesso, va para a tela de login para acessar.",
    );
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
            source={require("@/assets/img2.png")}
            style={style.image}
          ></Image>
          <Text style={style.title}>Signup</Text>
          <Text style={style.p}>Crie sua conta.</Text>
          <View style={style.form}>
            <Input
              placeholder="nome"
              keyboardType="default"
              onChangeText={setName}
            ></Input>
            <Input
              placeholder="email"
              keyboardType="email-address"
              onChangeText={setEmail}
            ></Input>
            <Input
              placeholder="senha"
              secureTextEntry
              onChangeText={setPassword}
            ></Input>
            <Input
              placeholder="Confirme sua senha"
              secureTextEntry
              onChangeText={setConfirmPassword}
            ></Input>
            <Button label="Cadastra-se" onPress={handleSignUp}></Button>
            <Text style={style.p}>
              Ja tem uma conta?{" "}
              <Link style={style.link} href={"/"}>
                Acesse aqui
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
