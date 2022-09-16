import * as React from "react";
import { StyleSheet, View, Pressable, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput as RNPTextInput } from "react-native-paper";

const ForgotPassword = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.forgotPasswordView}>
      <View style={styles.backgroundView} />
      <View style={styles.moduleView}>
        <View style={styles.background2View} />
      </View>
      <Pressable
        style={styles.btnsendEmailPressable}
        onPress={() => navigation.navigate("ResetPassword")}
      >
        <View style={styles.rectangleView} />
        <Text style={styles.sendText}>Send</Text>
      </Pressable>
      <RNPTextInput
        style={styles.txtemailRNPTextInput}
        label="Email"
        mode="outlined"
        placeholderTextColor="#8f9bb3"
        theme={{ colors: { text: "#2e3a59", background: "#fff" } }}
      />
      <Text
        style={styles.pleaseEnterYourEm}
      >{`Please enter your Email so we can help you recover your password. `}</Text>
      <Text style={styles.forgotPasswordText}>Forgot Password</Text>
      <Pressable
        style={styles.iconsLineLeftArrowLong}
        onPress={() => navigation.navigate("SignIn")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/22-iconslineleft-arrow-long.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundView: {
    position: "absolute",
    height: "34.98%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "65.02%",
    left: "0%",
    backgroundColor: "#ff7e00",
  },
  background2View: {
    position: "absolute",
    transform: [
      {
        translateY: -354.5,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#fff",
    height: 709,
  },
  moduleView: {
    position: "absolute",
    height: "72.04%",
    width: "100%",
    top: "17.49%",
    right: "0%",
    bottom: "10.47%",
    left: "0%",
    overflow: "hidden",
  },
  rectangleView: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 8,
    backgroundColor: "#ff7e00",
  },
  sendText: {
    position: "absolute",
    transform: [
      {
        translateY: -10,
      },
      {
        translateX: -20,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#fff",
    textAlign: "center",
  },
  btnsendEmailPressable: {
    position: "absolute",
    transform: [
      {
        translateY: 31,
      },
    ],
    top: "50%",
    right: 30,
    left: 30,
    height: 44,
    overflow: "hidden",
  },
  txtemailRNPTextInput: {
    position: "absolute",
    transform: [
      {
        translateY: -106,
      },
    ],
    top: "50%",
    right: 30,
    left: 30,
    height: 55,
    overflow: "hidden",
  },
  pleaseEnterYourEm: {
    position: "absolute",
    transform: [
      {
        translateY: -179,
      },
      {
        translateX: -134.5,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 15,
    fontFamily: "SF Pro Display",
    color: "#8f9bb3",
    textAlign: "center",
    width: 270,
  },
  forgotPasswordText: {
    position: "absolute",
    transform: [
      {
        translateY: -245,
      },
      {
        translateX: -134.5,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 24,
    fontWeight: "700",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "center",
    width: 270,
  },
  icon: {
    width: 24,
    height: 24,
  },
  iconsLineLeftArrowLong: {
    position: "absolute",
    left: 15,
    top: 44,
  },
  forgotPasswordView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default ForgotPassword;
