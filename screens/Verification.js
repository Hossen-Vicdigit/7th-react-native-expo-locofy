import * as React from "react";
import { useState } from "react";
import { StyleSheet, View, Pressable, Text, Image } from "react-native";
import { Input as RNKTextInput } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";

const Verification = () => {
  const [txtotpcodeTextInput, setTxtotpcodeTextInput] = useState();
  const [txtotpcodeTextInput1, setTxtotpcodeTextInput1] = useState();
  const [txtotpcodeTextInput2, setTxtotpcodeTextInput2] = useState();
  const [txtotpcodeTextInput3, setTxtotpcodeTextInput3] = useState();
  const navigation = useNavigation();

  return (
    <View style={styles.verificationView}>
      <View style={styles.backgroundView} />
      <View style={styles.moduleView}>
        <View style={styles.rectangleView} />
        <RNKTextInput
          style={styles.txtotpcodeRNKTextInput}
          value={txtotpcodeTextInput}
          onChangeText={setTxtotpcodeTextInput}
          placeholderTextColor="#2e3a59"
          textStyle={styles.txtotpcodeTextInputText}
        />
        <RNKTextInput
          style={styles.txtotpcodeRNKTextInput1}
          value={txtotpcodeTextInput1}
          onChangeText={setTxtotpcodeTextInput1}
          placeholderTextColor="#2e3a59"
          textStyle={styles.txtotpcodeTextInput1Text}
        />
        <RNKTextInput
          style={styles.txtotpcodeRNKTextInput2}
          value={txtotpcodeTextInput2}
          onChangeText={setTxtotpcodeTextInput2}
          placeholderTextColor="#2e3a59"
          textStyle={styles.txtotpcodeTextInput2Text}
        />
      </View>
      <RNKTextInput
        style={styles.txtotpcodeRNKTextInput3}
        value={txtotpcodeTextInput3}
        onChangeText={setTxtotpcodeTextInput3}
        placeholderTextColor="#2e3a59"
        textStyle={styles.txtotpcodeTextInput3Text}
      />
      <Pressable
        style={styles.btncontinuePressable}
        onPress={() => navigation.navigate("ResetPasswordDone")}
      >
        <View style={styles.rectangleView1} />
        <Text style={styles.continueText}>Continue</Text>
      </Pressable>
      <Text style={styles.resendOn024}>Resend on 0:24</Text>
      <Text style={styles.enterTheOTPCodeF}>
        Enter the OTP code from the phone we just sent you.
      </Text>
      <Text style={styles.verificationText}>Verification</Text>
      <Image
        style={styles.iconsLineLeftArrowLong}
        resizeMode="cover"
        source={require("../assets/22-iconslineleft-arrow-long.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  txtotpcodeTextInputText: {
    color: "#2e3a59",
  },
  txtotpcodeTextInput1Text: {
    color: "#2e3a59",
  },
  txtotpcodeTextInput2Text: {
    color: "#2e3a59",
  },
  txtotpcodeTextInput3Text: {
    color: "#2e3a59",
  },
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
  txtotpcodeRNKTextInput: {
    position: "absolute",
    width: "9.07%",
    top: "27.93%",
    right: "33.6%",
    bottom: "66.29%",
    left: "57.33%",
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  txtotpcodeRNKTextInput1: {
    position: "absolute",
    width: "9.07%",
    top: "27.93%",
    right: "19.2%",
    bottom: "80.29%",
    left: "71.73%",
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  txtotpcodeRNKTextInput2: {
    position: "absolute",
    width: "9.07%",
    top: "27.79%",
    right: "54.67%",
    bottom: "66.43%",
    left: "36.27%",
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  moduleView: {
    position: "absolute",
    height: "87.32%",
    width: "100%",
    top: "11.58%",
    right: "0%",
    bottom: "1.11%",
    left: "0%",
    overflow: "hidden",
  },
  txtotpcodeRNKTextInput3: {
    position: "absolute",
    width: "9.07%",
    top: "35.84%",
    right: "74.13%",
    bottom: "59.11%",
    left: "16.8%",
    overflow: "hidden",
    backgroundColor: "#fff",
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
  continueText: {
    position: "absolute",
    transform: [
      {
        translateY: -10,
      },
    ],
    width: "21.9%",
    top: "50%",
    right: "39.05%",
    left: "39.05%",
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#fff",
    textAlign: "center",
  },
  btncontinuePressable: {
    position: "absolute",
    height: "12.42%",
    width: "84%",
    top: "60.82%",
    right: "8%",
    bottom: "40.76%",
    left: "8%",
    overflow: "hidden",
    padding:10,
  },
  resendOn024: {
    position: "absolute",
    height: "2.22%",
    width: "29.87%",
    top: "46.8%",
    right: "6.67%",
    bottom: "50.99%",
    left: "63.47%",
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#ff7e00",
    textAlign: "right",
    marginTop:20
  },
  enterTheOTPCodeF: {
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
  verificationText: {
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
  iconsLineLeftArrowLong: {
    position: "absolute",
    top: 49,
    left: 15,
    width: 24,
    height: 24,
  },
  verificationView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Verification;
