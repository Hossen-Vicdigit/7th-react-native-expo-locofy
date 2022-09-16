import * as React from "react";
import { StyleSheet, View, Pressable, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput as RNPTextInput } from "react-native-paper";

const ResetPassword = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.resetPasswordView}>
      <View style={styles.backgroundView} />
      <View style={styles.moduleView}>
        <View style={styles.rectangleView} />
      </View>
      <Pressable
        style={styles.btnresetPasswordPressable}
        onPress={() => navigation.navigate("ResetPasswordDone")}
      >
        <View style={styles.rectangleView1} />
        <Text style={styles.resetPasswordText}>Reset Password</Text>
      </Pressable>
      <RNPTextInput
        style={styles.txtconfirmPasswordRNPTextInput}
        label="Confirm new Password"
        mode="outlined"
        placeholderTextColor="#8f9bb3"
        theme={{ colors: { text: "#8f9bb3", background: "#fff" } }}
      />
      <RNPTextInput
        style={styles.txtnewPasswordRNPTextInput}
        label="New Password"
        mode="outlined"
        placeholderTextColor="#8f9bb3"
        theme={{ colors: { text: "#8f9bb3", background: "#fff" } }}
      />
      <Text style={styles.enterYourNewPassw}>
        Enter your new password and confirm it.
      </Text>
      <Text style={styles.resetPasswordText1}>Reset Password</Text>
      <Pressable
        style={styles.iconsLineLeftArrowLong}
        onPress={() => navigation.navigate("ForgotPassword")}
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
  rectangleView: {
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
    height: "87.32%",
    width: "100%",
    top: "12.68%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    overflow: "hidden",
  },
  rectangleView1: {
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
  resetPasswordText: {
    position: "absolute",
    transform: [
      {
        translateY: -10,
      },
    ],
    width: "38.1%",
    top: "50%",
    right: "30.95%",
    left: "30.95%",
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#fff",
    textAlign: "center",
  },
  btnresetPasswordPressable: {
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
  txtconfirmPasswordRNPTextInput: {
    position: "absolute",
    transform: [
      {
        translateY: -63,
      },
    ],
    top: "50%",
    right: 30,
    left: 30,
    height: 55,
    overflow: "hidden",
  },
  txtnewPasswordRNPTextInput: {
    position: "absolute",
    transform: [
      {
        translateY: -148,
      },
    ],
    top: "50%",
    right: 30,
    left: 30,
    height: 55,
    overflow: "hidden",
  },
  enterYourNewPassw: {
    position: "absolute",
    transform: [
      {
        translateY: -201,
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
  resetPasswordText1: {
    position: "absolute",
    transform: [
      {
        translateY: -260,
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
    top: 49,
  },
  resetPasswordView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default ResetPassword;
