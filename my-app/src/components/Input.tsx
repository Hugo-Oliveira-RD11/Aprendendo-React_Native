import { useState } from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

export function Input({ ...rest }: TextInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInput
      style={[style.input, isFocused && style.inputFocus]}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      {...rest}
    />
  );
}

const style = StyleSheet.create({
  input: {
    borderColor: "#505050",
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 20,
    fontWeight: 600,
    paddingLeft: 8,
  },
  inputFocus: {
    borderWidth: 5,
    borderColor: "#1863e6",
  },
});
