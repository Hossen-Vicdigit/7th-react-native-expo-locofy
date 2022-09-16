import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable,ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput as RNPTextInput } from "react-native-paper";

const SignIn = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.signInView}>
        <View style={styles.background1View} />
        <View style={styles.background2View} />
        <View style={styles.btnsignUpView}>
          <Text style={styles.youDontHaveAnAc}>You don’t have an account?</Text>
          <Text style={styles.signUpText}>Sign Up</Text>
        </View>
        <View style={styles.btnsignInWithView}>
          <View style={styles.noteView}>
            <Text style={styles.orSignInWith}>Or sign in with</Text>
            <View style={styles.rectangleCopy3} />
            <View style={styles.rectangleCopy4} />
          </View>
          <Image
            style={styles.socialMediaIcon}
            resizeMode="cover"
            source={require("../assets/social-media.png")}
          />
        </View>
        <Pressable
          style={styles.btnsignInPressable}
          onPress={() => navigation.navigate("Verification")}
        >
          <View style={styles.rectangleView} />
          <Text style={styles.signInText}>Sign In</Text>
        </Pressable>
        <Pressable
          style={styles.forgotPasswordPressable}
          onPress={() => navigation.navigate("ForgotPassword")}
        >
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </Pressable>
        <RNPTextInput
          style={styles.txtpasswordRNPTextInput}
          label="Password"
          mode="outlined"
          placeholderTextColor="#8f9bb3"
          theme={{ colors: { text: "#8f9bb3", background: "#fff" } }}
        />
        <RNPTextInput
          style={styles.txtemailRNPTextInput}
          label="Email"
          mode="outlined"
          placeholderTextColor="#8f9bb3"
          theme={{ colors: { text: "#2e3a59", background: "#fff" } }}
        />
        <Image
          style={styles.logoIcon}
          resizeMode="cover"
          source={require("../assets/logo.png")}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  background1View: {
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
        translateY: -164,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#fff",
    height: 570,
  },
  youDontHaveAnAc: {
    position: "absolute",
    transform: [
      {
        translateY: -9,
      },
      {
        translateX: -119,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "SF Pro Display",
    color: "#8f9bb3",
    textAlign: "left",
    width: 180,
  },
  signUpText: {
    position: "absolute",
    transform: [
      {
        translateY: -9,
      },
      {
        translateX: 65,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#ff7e00",
    textAlign: "left",
    width: 54,
  },
  btnsignUpView: {
    position: "absolute",
    transform: [
      {
        translateY: 354,
      },
      {
        translateX: -118.5,
      },
    ],
    top: "50%",
    left: "50%",
    width: 238,
    height: 18,
  },
  orSignInWith: {
    position: "absolute",
    transform: [
      {
        translateY: -9,
      },
      {
        translateX: -69.5,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "SF Pro Display",
    color: "#8f9bb3",
    textAlign: "center",
    width: 140,
  },
  rectangleCopy3: {
    position: "absolute",
    transform: [
      {
        translateY: 0,
      },
      {
        translateX: 62.5,
      },
    ],
    top: "50%",
    left: "50%",
    backgroundColor: "#e4e9f2",
    width: 95,
    height: 1,
  },
  rectangleCopy4: {
    position: "absolute",
    transform: [
      {
        translateY: 0,
      },
      {
        translateX: -157.5,
      },
    ],
    top: "50%",
    left: "50%",
    backgroundColor: "#e4e9f2",
    width: 95,
    height: 1,
  },
  noteView: {
    position: "absolute",
    transform: [
      {
        translateY: -39,
      },
      {
        translateX: -157.5,
      },
    ],
    top: "50%",
    left: "50%",
    width: 315,
    height: 18,
  },
  socialMediaIcon: {
    position: "absolute",
    transform: [
      {
        translateY: 0,
      },
      {
        translateX: -89.5,
      },
    ],
    top: "50%",
    left: "50%",
    width: 180,
    height: 39,
  },
  btnsignInWithView: {
    position: "absolute",
    transform: [
      {
        translateY: 198,
      },
      {
        translateX: -157.5,
      },
    ],
    top: "50%",
    left: "50%",
    width: 315,
    height: 78,
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
  signInText: {
    position: "absolute",
    transform: [
      {
        translateY: -10,
      },
      {
        translateX: -25.5,
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
  btnsignInPressable: {
    position: "absolute",
    transform: [
      {
        translateY: 114,
      },
    ],
    top: "50%",
    right: 30,
    left: 30,
    height: 44,
    overflow: "hidden",
  },
  forgotPasswordText: {
    transform: [
      {
        translateY: 52,
      },
    ],
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "right",
    width: 270,
  },
  forgotPasswordPressable: {
    position: "absolute",
    top: "50%",
    right: 36,
  },
  txtpasswordRNPTextInput: {
    position: "absolute",
    transform: [
      {
        translateY: -33,
      },
    ],
    top: "50%",
    right: 30,
    left: 30,
    height: 55,
    overflow: "hidden",
  },
  txtemailRNPTextInput: {
    position: "absolute",
    transform: [
      {
        translateY: -118,
      },
    ],
    top: "50%",
    right: 30,
    left: 30,
    height: 55,
    overflow: "hidden",
  },
  logoIcon: {
    position: "absolute",
    height: "11.33%",
    width: "58.4%",
    top: "12.44%",
    right: "20.8%",
    bottom: "76.23%",
    left: "20.8%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  signInView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default SignIn;
