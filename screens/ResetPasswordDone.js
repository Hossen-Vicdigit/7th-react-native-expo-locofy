import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ResetPasswordDone = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.resetPasswordDone}>
      <View style={styles.backgroundView} />
      <View style={styles.moduleView}>
        <View style={styles.rectangleView} />
      </View>
      <View style={styles.keyboardView}>
        <View style={styles.keyboardUppercaseView}>
          <Image
            style={styles.backgroundsKeyboardsGray}
            resizeMode="cover"
            source={require("../assets/backgrounds--keyboards--gray.png")}
          />
          <Text style={styles.micIconText}>􀊱</Text>
          <Text style={styles.languageIconText}>􀆪</Text>
          <View style={styles.buttonsView}>
            <View style={styles.bottomRowView}>
              <View style={styles.labelView}>
                <View style={styles.keyView} />
                <Text style={styles.labelText}>return</Text>
              </View>
              <View style={styles.spaceView}>
                <View style={styles.keyView1} />
                <Text style={styles.spaceText}>
                  <Text style={styles.spacText}>spac</Text>e
                </Text>
              </View>
              <Image
                style={styles.emojiIcon}
                resizeMode="cover"
                source={require("../assets/emoji.png")}
              />
              <View style={styles.view}>
                <Image
                  style={styles.keyIcon}
                  resizeMode="cover"
                  source={require("../assets/key.png")}
                />
                <Text style={styles.text}>123</Text>
              </View>
            </View>
          </View>
          <View style={styles.thirdRowView}>
            <Image
              style={styles.deleteIcon}
              resizeMode="cover"
              source={require("../assets/delete.png")}
            />
            <View style={styles.mView}>
              <View style={styles.keyView2} />
              <Text style={styles.mText}>M</Text>
            </View>
            <View style={styles.nView}>
              <View style={styles.keyView3} />
              <Text style={styles.nText}>N</Text>
            </View>
            <View style={styles.bView}>
              <View style={styles.keyView4} />
              <Text style={styles.bText}>B</Text>
            </View>
            <View style={styles.vView}>
              <View style={styles.keyView5} />
              <Text style={styles.vText}>V</Text>
            </View>
            <View style={styles.cView}>
              <View style={styles.keyView6} />
              <Text style={styles.cText}>C</Text>
            </View>
            <View style={styles.xView}>
              <View style={styles.keyView7} />
              <Text style={styles.xText}>X</Text>
            </View>
            <View style={styles.zView}>
              <View style={styles.keyView8} />
              <Text style={styles.zText}>Z</Text>
            </View>
            <Image
              style={styles.shiftIcon}
              resizeMode="cover"
              source={require("../assets/shift.png")}
            />
          </View>
          <View style={styles.secondRowView}>
            <View style={styles.lView}>
              <View style={styles.keyView9} />
              <Text style={styles.lText}>L</Text>
            </View>
            <View style={styles.kView}>
              <View style={styles.keyView10} />
              <Text style={styles.kText}>K</Text>
            </View>
            <View style={styles.jView}>
              <View style={styles.keyView11} />
              <Text style={styles.jText}>J</Text>
            </View>
            <View style={styles.hView}>
              <View style={styles.keyView12} />
              <Text style={styles.hText}>H</Text>
            </View>
            <View style={styles.gView}>
              <View style={styles.keyView13} />
              <Text style={styles.gText}>G</Text>
            </View>
            <View style={styles.fView}>
              <View style={styles.keyView14} />
              <Text style={styles.fText}>F</Text>
            </View>
            <View style={styles.dView}>
              <View style={styles.keyView15} />
              <Text style={styles.dText}>D</Text>
            </View>
            <View style={styles.sView}>
              <View style={styles.keyView16} />
              <Text style={styles.sText}>S</Text>
            </View>
            <View style={styles.aView}>
              <View style={styles.keyView17} />
              <Text style={styles.aText}>A</Text>
            </View>
          </View>
          <View style={styles.topRowView}>
            <View style={styles.pView}>
              <View style={styles.keyView18} />
              <Text style={styles.pText}>P</Text>
            </View>
            <View style={styles.oView}>
              <View style={styles.keyView19} />
              <Text style={styles.oText}>O</Text>
            </View>
            <View style={styles.iView}>
              <View style={styles.keyView20} />
              <Text style={styles.iText}>I</Text>
            </View>
            <View style={styles.uView}>
              <View style={styles.keyView21} />
              <Text style={styles.uText}>U</Text>
            </View>
            <View style={styles.yView}>
              <View style={styles.keyView22} />
              <Text style={styles.yText}>Y</Text>
            </View>
            <View style={styles.tView}>
              <View style={styles.keyView23} />
              <Text style={styles.tText}>T</Text>
            </View>
            <View style={styles.rView}>
              <View style={styles.keyView24} />
              <Text style={styles.rText}>R</Text>
            </View>
            <View style={styles.eView}>
              <View style={styles.keyView25} />
              <Text style={styles.eText}>E</Text>
            </View>
            <View style={styles.wView}>
              <View style={styles.keyView26} />
              <Text style={styles.wText}>W</Text>
            </View>
            <View style={styles.qView}>
              <View style={styles.keyView27} />
              <Text style={styles.qText}>Q</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.btnresetPasswordView}>
        <View style={styles.rectangleView1} />
        <Text style={styles.resetPasswordText}>Reset Password</Text>
      </View>
      <View style={styles.txtconfirmPasswordView}>
        <Text style={styles.confirmNewPassword}>Confirm new Password</Text>
        <View style={styles.rectangleCopyView} />
        <Image
          style={styles.groupIcon}
          resizeMode="cover"
          source={require("../assets/group.png")}
        />
        <Image
          style={styles.iconsLineLocation}
          resizeMode="cover"
          source={require("../assets/22-iconslinelocation.png")}
        />
      </View>
      <View style={styles.txtnewPasswordView}>
        <Text style={styles.newPasswordText}>New Password</Text>
        <View style={styles.rectangleCopyView1} />
        <Image
          style={styles.groupIcon1}
          resizeMode="cover"
          source={require("../assets/group-2.png")}
        />
        <Image
          style={styles.iconsLineLocation1}
          resizeMode="cover"
          source={require("../assets/22-iconslinelocation.png")}
        />
      </View>
      <Text style={styles.enterYourNewPassw}>
        Enter your new password and confirm it.
      </Text>
      <Text style={styles.resetPasswordText1}>Reset Password</Text>
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
      <View style={styles.iPhoneXHomeIndicatorHomeI}>
        <View style={styles.rectangleView2} />
      </View>
      <View style={styles.iPhoneXHomeIndicatorHomeI1}>
        <View style={styles.rectangleView3} />
      </View>
      <View style={styles.shadownView} />
      <View style={styles.popupView}>
        <View style={styles.rectangleView4} />
        <View style={styles.groupView}>
          <Text style={styles.congratulationText}>Congratulation!</Text>
          <Text style={styles.yourPasswordHasBe}>
            Your password has been completely reset, login and use the app
          </Text>
          <Image
            style={styles.checkmarkCircleOutlineIcon}
            resizeMode="cover"
            source={require("../assets/checkmarkcircleoutline.png")}
          />
        </View>
      </View>
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
  backgroundsKeyboardsGray: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  micIconText: {
    position: "absolute",
    transform: [
      {
        translateY: 88.5,
      },
    ],
    width: "7.2%",
    top: "50%",
    right: "6.4%",
    left: "86.4%",
    fontSize: 27,
    fontWeight: "300",
    fontFamily: "SF Pro Text",
    color: "rgba(0, 0, 0, 0.55)",
    textAlign: "left",
  },
  languageIconText: {
    position: "absolute",
    transform: [
      {
        translateY: 88.5,
      },
    ],
    width: "7.2%",
    top: "50%",
    right: "85.87%",
    left: "6.93%",
    fontSize: 27,
    fontWeight: "300",
    fontFamily: "SF Pro Text",
    color: "rgba(0, 0, 0, 0.55)",
    textAlign: "left",
  },
  keyView: {
    position: "absolute",
    height: "100%",
    width: "98.58%",
    top: "0%",
    right: "0.86%",
    bottom: "0%",
    left: "0.56%",
    borderRadius: 5,
    backgroundColor: "#adb3bc",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  labelText: {
    position: "absolute",
    transform: [
      {
        translateY: -9.5,
      },
      {
        translateX: -22.38,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 16,
    letterSpacing: -0.32,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  labelView: {
    position: "absolute",
    height: "100%",
    width: "23.99%",
    top: "0%",
    right: "0.06%",
    bottom: "0%",
    left: "75.95%",
    overflow: "hidden",
  },
  keyView1: {
    position: "absolute",
    height: "100%",
    width: "99.45%",
    top: "0%",
    right: "0.27%",
    bottom: "0%",
    left: "0.27%",
    borderRadius: 5,
    backgroundColor: "#fefefe",
    shadowColor: "rgba(4, 4, 15, 0.36)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  spacText: {
    letterSpacing: -0.32,
  },
  spaceText: {
    position: "absolute",
    transform: [
      {
        translateY: -10.5,
      },
      {
        translateX: -22,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 16,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  spaceView: {
    position: "absolute",
    height: "100%",
    width: "49.46%",
    top: "0%",
    right: "25.4%",
    bottom: "0%",
    left: "25.14%",
    overflow: "hidden",
  },
  emojiIcon: {
    position: "absolute",
    height: "100%",
    width: "11.35%",
    top: "0%",
    right: "76.22%",
    bottom: "0%",
    left: "12.43%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  keyIcon: {
    position: "absolute",
    height: "100%",
    width: "98.78%",
    top: "0%",
    right: "1.22%",
    bottom: "0%",
    left: "0%",
    borderRadius: 5,
    maxWidth: "100%",
    maxHeight: "100%",
  },
  text: {
    position: "absolute",
    transform: [
      {
        translateY: -9.5,
      },
      {
        translateX: -14,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 16,
    letterSpacing: -0.32,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  view: {
    position: "absolute",
    height: "100%",
    width: "11.08%",
    top: "0%",
    right: "88.92%",
    bottom: "0%",
    left: "0%",
    overflow: "hidden",
  },
  bottomRowView: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    height: 42,
    overflow: "hidden",
  },
  buttonsView: {
    position: "absolute",
    top: 171,
    right: 2,
    left: 2,
    height: 42,
    overflow: "hidden",
  },
  deleteIcon: {
    position: "absolute",
    height: "100%",
    width: "11.38%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "88.62%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  keyView2: {
    position: "absolute",
    height: "100%",
    width: "98.44%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "1.56%",
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  mText: {
    position: "absolute",
    transform: [
      {
        translateY: -13.75,
      },
      {
        translateX: -9.75,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 23,
    fontFamily: "SF Pro Display",
    color: "#000",
    textAlign: "center",
  },
  mView: {
    position: "absolute",
    height: "100%",
    width: "8.67%",
    top: "0%",
    right: "15.18%",
    bottom: "0%",
    left: "76.15%",
    overflow: "hidden",
  },
  keyView3: {
    position: "absolute",
    height: "100%",
    width: "98.44%",
    top: "0%",
    right: "1.56%",
    bottom: "0%",
    left: "0%",
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  nText: {
    position: "absolute",
    transform: [
      {
        translateY: -13.75,
      },
      {
        translateX: -8.75,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 23,
    fontFamily: "SF Pro Display",
    color: "#000",
    textAlign: "center",
  },
  nView: {
    position: "absolute",
    height: "100%",
    width: "8.67%",
    top: "0%",
    right: "25.2%",
    bottom: "0%",
    left: "66.12%",
    overflow: "hidden",
  },
  keyView4: {
    position: "absolute",
    height: "100%",
    width: "98.44%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "1.56%",
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  bText: {
    position: "absolute",
    transform: [
      {
        translateY: -13.75,
      },
      {
        translateX: -6.5,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 23,
    fontFamily: "SF Pro Display",
    color: "#000",
    textAlign: "center",
  },
  bView: {
    position: "absolute",
    height: "100%",
    width: "8.67%",
    top: "0%",
    right: "35.5%",
    bottom: "0%",
    left: "55.83%",
    overflow: "hidden",
  },
  keyView5: {
    position: "absolute",
    height: "100%",
    width: "98.44%",
    top: "0%",
    right: "1.56%",
    bottom: "0%",
    left: "0%",
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  vText: {
    position: "absolute",
    transform: [
      {
        translateY: -13.75,
      },
      {
        translateX: -7.75,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 23,
    fontFamily: "SF Pro Display",
    color: "#000",
    textAlign: "center",
  },
  vView: {
    position: "absolute",
    height: "100%",
    width: "8.67%",
    top: "0%",
    right: "45.53%",
    bottom: "0%",
    left: "45.8%",
    overflow: "hidden",
  },
  keyView6: {
    position: "absolute",
    height: "100%",
    width: "98.44%",
    top: "0%",
    right: "1.56%",
    bottom: "0%",
    left: "0%",
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  cText: {
    position: "absolute",
    transform: [
      {
        translateY: -13.75,
      },
      {
        translateX: -8.25,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 23,
    fontFamily: "SF Pro Display",
    color: "#000",
    textAlign: "center",
  },
  cView: {
    position: "absolute",
    height: "100%",
    width: "8.67%",
    top: "0%",
    right: "55.83%",
    bottom: "0%",
    left: "35.5%",
    overflow: "hidden",
  },
  keyView7: {
    position: "absolute",
    height: "100%",
    width: "98.44%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "1.56%",
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  xText: {
    position: "absolute",
    transform: [
      {
        translateY: -13.75,
      },
      {
        translateX: -7.5,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 23,
    fontFamily: "SF Pro Display",
    color: "#000",
    textAlign: "center",
  },
  xView: {
    position: "absolute",
    height: "100%",
    width: "8.67%",
    top: "0%",
    right: "66.12%",
    bottom: "0%",
    left: "25.2%",
    overflow: "hidden",
  },
  keyView8: {
    position: "absolute",
    height: "100%",
    width: "98.44%",
    top: "0%",
    right: "1.56%",
    bottom: "0%",
    left: "0%",
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  zText: {
    position: "absolute",
    transform: [
      {
        translateY: -13.75,
      },
      {
        translateX: -8,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 23,
    fontFamily: "SF Pro Display",
    color: "#000",
    textAlign: "center",
  },
  zView: {
    position: "absolute",
    height: "100%",
    width: "8.67%",
    top: "0%",
    right: "76.15%",
    bottom: "0%",
    left: "15.18%",
    overflow: "hidden",
  },
  shiftIcon: {
    position: "absolute",
    height: "100%",
    width: "11.38%",
    top: "0%",
    right: "88.62%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  thirdRowView: {
    position: "absolute",
    height: "14.43%",
    width: "98.4%",
    top: "40.55%",
    right: "0.8%",
    bottom: "45.02%",
    left: "0.8%",
  },
  keyView9: {
    position: "absolute",
    height: "100%",
    width: "98.44%",
    top: "0%",
    right: "1.56%",
    bottom: "0%",
    left: "0%",
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  lText: {
    position: "absolute",
    transform: [
      {
        translateY: -13.75,
      },
      {
        translateX: -7,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 23,
    fontFamily: "SF Pro Display",
    color: "#000",
    textAlign: "center",
  },
  lView: {
    position: "absolute",
    height: "100%",
    width: "9.61%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "90.39%",
    overflow: "hidden",
  },
  keyView10: {
    position: "absolute",
    height: "100%",
    width: "98.44%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "1.56%",
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  kText: {
    position: "absolute",
    transform: [
      {
        translateY: -13.75,
      },
      {
        translateX: -7,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 23,
    fontFamily: "SF Pro Display",
    color: "#000",
    textAlign: "center",
  },
  kView: {
    position: "absolute",
    height: "100%",
    width: "9.61%",
    top: "0%",
    right: "11.41%",
    bottom: "0%",
    left: "78.98%",
    overflow: "hidden",
  },
  keyView11: {
    position: "absolute",
    height: "100%",
    width: "98.44%",
    top: "0%",
    right: "1.56%",
    bottom: "0%",
    left: "0%",
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  jText: {
    position: "absolute",
    transform: [
      {
        translateY: -13.75,
      },
      {
        translateX: -6.75,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 23,
    fontFamily: "SF Pro Display",
    color: "#000",
    textAlign: "center",
  },
  jView: {
    position: "absolute",
    height: "100%",
    width: "9.61%",
    top: "0%",
    right: "22.52%",
    bottom: "0%",
    left: "67.87%",
    overflow: "hidden",
  },
  keyView12: {
    position: "absolute",
    height: "100%",
    width: "98.44%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "1.56%",
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  hText: {
    position: "absolute",
    transform: [
      {
        translateY: -13.75,
      },
      {
        translateX: -8.25,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 23,
    fontFamily: "SF Pro Display",
    color: "#000",
    textAlign: "center",
  },
  hView: {
    position: "absolute",
    height: "100%",
    width: "9.61%",
    top: "0%",
    right: "33.93%",
    bottom: "0%",
    left: "56.46%",
    overflow: "hidden",
  },
  keyView13: {
    position: "absolute",
    height: "100%",
    width: "98.44%",
    top: "0%",
    right: "1.56%",
    bottom: "0%",
    left: "0%",
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  gText: {
    position: "absolute",
    transform: [
      {
        translateY: -13.75,
      },
      {
        translateX: -8.5,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 23,
    fontFamily: "SF Pro Display",
    color: "#000",
    textAlign: "center",
  },
  gView: {
    position: "absolute",
    height: "100%",
    width: "9.61%",
    top: "0%",
    right: "45.05%",
    bottom: "0%",
    left: "45.35%",
    overflow: "hidden",
  },
  keyView14: {
    position: "absolute",
    height: "100%",
    width: "98.44%",
    top: "0%",
    right: "1.56%",
    bottom: "0%",
    left: "0%",
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  fText: {
    position: "absolute",
    transform: [
      {
        translateY: -13.75,
      },
      {
        translateX: -7,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 23,
    fontFamily: "SF Pro Display",
    color: "#000",
    textAlign: "center",
  },
  fView: {
    position: "absolute",
    height: "100%",
    width: "9.61%",
    top: "0%",
    right: "56.46%",
    bottom: "0%",
    left: "33.93%",
    overflow: "hidden",
  },
  keyView15: {
    position: "absolute",
    height: "100%",
    width: "98.44%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "1.56%",
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  dText: {
    position: "absolute",
    transform: [
      {
        translateY: -13.75,
      },
      {
        translateX: -7.75,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 23,
    fontFamily: "SF Pro Display",
    color: "#000",
    textAlign: "center",
  },
  dView: {
    position: "absolute",
    height: "100%",
    width: "9.61%",
    top: "0%",
    right: "67.87%",
    bottom: "0%",
    left: "22.52%",
    overflow: "hidden",
  },
  keyView16: {
    position: "absolute",
    height: "100%",
    width: "98.44%",
    top: "0%",
    right: "1.56%",
    bottom: "0%",
    left: "0%",
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  sText: {
    position: "absolute",
    transform: [
      {
        translateY: -13.75,
      },
      {
        translateX: -7.25,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 23,
    fontFamily: "SF Pro Display",
    color: "#000",
    textAlign: "center",
  },
  sView: {
    position: "absolute",
    height: "100%",
    width: "9.61%",
    top: "0%",
    right: "78.98%",
    bottom: "0%",
    left: "11.41%",
    overflow: "hidden",
  },
  keyView17: {
    position: "absolute",
    height: "100%",
    width: "98.44%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "1.56%",
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  aText: {
    position: "absolute",
    transform: [
      {
        translateY: -13.75,
      },
      {
        translateX: -7.25,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 23,
    fontFamily: "SF Pro Display",
    color: "#000",
    textAlign: "center",
  },
  aView: {
    position: "absolute",
    height: "100%",
    width: "9.61%",
    top: "0%",
    right: "90.39%",
    bottom: "0%",
    left: "0%",
    overflow: "hidden",
  },
  secondRowView: {
    position: "absolute",
    height: "14.43%",
    width: "88.8%",
    top: "21.99%",
    right: "5.6%",
    bottom: "63.57%",
    left: "5.6%",
  },
  keyView18: {
    position: "absolute",
    height: "100%",
    width: "98.44%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "1.56%",
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  pText: {
    position: "absolute",
    transform: [
      {
        translateY: -13.75,
      },
      {
        translateX: -6.75,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 23,
    fontFamily: "SF Pro Display",
    color: "#000",
    textAlign: "center",
  },
  pView: {
    position: "absolute",
    height: "100%",
    width: "8.67%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "91.33%",
    overflow: "hidden",
  },
  keyView19: {
    position: "absolute",
    height: "100%",
    width: "98.44%",
    top: "0%",
    right: "1.56%",
    bottom: "0%",
    left: "0%",
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  oText: {
    position: "absolute",
    transform: [
      {
        translateY: -13.75,
      },
      {
        translateX: -8.75,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 23,
    fontFamily: "SF Pro Display",
    color: "#000",
    textAlign: "center",
  },
  oView: {
    position: "absolute",
    height: "100%",
    width: "8.67%",
    top: "0%",
    right: "10.03%",
    bottom: "0%",
    left: "81.3%",
    overflow: "hidden",
  },
  keyView20: {
    position: "absolute",
    height: "100%",
    width: "98.44%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "1.56%",
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  iText: {
    position: "absolute",
    transform: [
      {
        translateY: -13.75,
      },
      {
        translateX: -3,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 23,
    fontFamily: "SF Pro Display",
    color: "#000",
    textAlign: "center",
  },
  iView: {
    position: "absolute",
    height: "100%",
    width: "8.67%",
    top: "0%",
    right: "20.33%",
    bottom: "0%",
    left: "71%",
    overflow: "hidden",
  },
  keyView21: {
    position: "absolute",
    height: "100%",
    width: "98.44%",
    top: "0%",
    right: "1.56%",
    bottom: "0%",
    left: "0%",
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  uText: {
    position: "absolute",
    transform: [
      {
        translateY: -13.75,
      },
      {
        translateX: -9,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 23,
    fontFamily: "SF Pro Display",
    color: "#000",
    textAlign: "center",
  },
  uView: {
    position: "absolute",
    height: "100%",
    width: "8.67%",
    top: "0%",
    right: "30.35%",
    bottom: "0%",
    left: "60.98%",
    overflow: "hidden",
  },
  keyView22: {
    position: "absolute",
    height: "100%",
    width: "98.44%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "1.56%",
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  yText: {
    position: "absolute",
    transform: [
      {
        translateY: -13.75,
      },
      {
        translateX: -7,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 23,
    fontFamily: "SF Pro Display",
    color: "#000",
    textAlign: "center",
  },
  yView: {
    position: "absolute",
    height: "100%",
    width: "8.67%",
    top: "0%",
    right: "40.65%",
    bottom: "0%",
    left: "50.68%",
    overflow: "hidden",
  },
  keyView23: {
    position: "absolute",
    height: "100%",
    width: "98.44%",
    top: "0%",
    right: "1.56%",
    bottom: "0%",
    left: "0%",
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  tText: {
    position: "absolute",
    transform: [
      {
        translateY: -13.75,
      },
      {
        translateX: -7.5,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 23,
    fontFamily: "SF Pro Display",
    color: "#000",
    textAlign: "center",
  },
  tView: {
    position: "absolute",
    height: "100%",
    width: "8.67%",
    top: "0%",
    right: "50.68%",
    bottom: "0%",
    left: "40.65%",
    overflow: "hidden",
  },
  keyView24: {
    position: "absolute",
    height: "100%",
    width: "98.44%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "1.56%",
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  rText: {
    position: "absolute",
    transform: [
      {
        translateY: -13.75,
      },
      {
        translateX: -6.75,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 23,
    fontFamily: "SF Pro Display",
    color: "#000",
    textAlign: "center",
  },
  rView: {
    position: "absolute",
    height: "100%",
    width: "8.67%",
    top: "0%",
    right: "60.98%",
    bottom: "0%",
    left: "30.35%",
    overflow: "hidden",
  },
  keyView25: {
    position: "absolute",
    height: "100%",
    width: "98.44%",
    top: "0%",
    right: "1.56%",
    bottom: "0%",
    left: "0%",
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  eText: {
    position: "absolute",
    transform: [
      {
        translateY: -13.75,
      },
      {
        translateX: -6.75,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 23,
    fontFamily: "SF Pro Display",
    color: "#000",
    textAlign: "center",
  },
  eView: {
    position: "absolute",
    height: "100%",
    width: "8.67%",
    top: "0%",
    right: "71%",
    bottom: "0%",
    left: "20.33%",
    overflow: "hidden",
  },
  keyView26: {
    position: "absolute",
    height: "100%",
    width: "98.44%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "1.56%",
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  wText: {
    position: "absolute",
    transform: [
      {
        translateY: -13.75,
      },
      {
        translateX: -11,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 23,
    fontFamily: "SF Pro Display",
    color: "#000",
    textAlign: "center",
  },
  wView: {
    position: "absolute",
    height: "100%",
    width: "8.67%",
    top: "0%",
    right: "81.3%",
    bottom: "0%",
    left: "10.03%",
    overflow: "hidden",
  },
  keyView27: {
    position: "absolute",
    height: "100%",
    width: "98.44%",
    top: "0%",
    right: "1.56%",
    bottom: "0%",
    left: "0%",
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  qText: {
    position: "absolute",
    transform: [
      {
        translateY: -13.75,
      },
      {
        translateX: -8.75,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 23,
    fontFamily: "SF Pro Display",
    color: "#000",
    textAlign: "center",
  },
  qView: {
    position: "absolute",
    height: "100%",
    width: "8.67%",
    top: "0%",
    right: "91.33%",
    bottom: "0%",
    left: "0%",
    overflow: "hidden",
  },
  topRowView: {
    position: "absolute",
    height: "14.43%",
    width: "98.4%",
    top: "3.44%",
    right: "0.8%",
    bottom: "82.13%",
    left: "0.8%",
  },
  keyboardUppercaseView: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    height: 291,
    overflow: "hidden",
  },
  keyboardView: {
    position: "absolute",
    width: "100%",
    right: "0%",
    bottom: 0,
    left: "0%",
    height: 291,
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
  btnresetPasswordView: {
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
  confirmNewPassword: {
    position: "absolute",
    transform: [
      {
        translateY: -27.5,
      },
    ],
    top: "50%",
    left: 0,
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "SF Pro Display",
    color: "#8f9bb3",
    textAlign: "left",
    width: 270,
  },
  rectangleCopyView: {
    position: "absolute",
    transform: [
      {
        translateY: 26.5,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    backgroundColor: "#ff7e00",
    height: 1,
  },
  groupIcon: {
    position: "absolute",
    transform: [
      {
        translateY: -0.5,
      },
    ],
    top: "50%",
    left: 0,
    width: 99,
    height: 22,
  },
  iconsLineLocation: {
    position: "absolute",
    transform: [
      {
        translateY: -1.5,
      },
    ],
    top: "50%",
    right: 0,
    width: 24,
    height: 24,
  },
  txtconfirmPasswordView: {
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
  newPasswordText: {
    position: "absolute",
    transform: [
      {
        translateY: -27.5,
      },
    ],
    top: "50%",
    left: 0,
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "SF Pro Display",
    color: "#8f9bb3",
    textAlign: "left",
    width: 270,
  },
  rectangleCopyView1: {
    position: "absolute",
    transform: [
      {
        translateY: 26.5,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    backgroundColor: "#e4e9f2",
    height: 1,
  },
  groupIcon1: {
    position: "absolute",
    transform: [
      {
        translateY: 7.5,
      },
    ],
    top: "50%",
    left: 0,
    width: 127,
    height: 6,
  },
  iconsLineLocation1: {
    position: "absolute",
    transform: [
      {
        translateY: -1.5,
      },
    ],
    top: "50%",
    right: 0,
    width: 24,
    height: 24,
  },
  txtnewPasswordView: {
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
  rectangleView2: {
    position: "absolute",
    transform: [
      {
        translateX: -66.5,
      },
    ],
    bottom: 9,
    left: "50%",
    borderRadius: 100,
    backgroundColor: "#000",
    width: 134,
    height: 5,
  },
  iPhoneXHomeIndicatorHomeI: {
    position: "absolute",
    height: "4.19%",
    width: "100%",
    top: "95.81%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  rectangleView3: {
    position: "absolute",
    transform: [
      {
        translateX: -66.5,
      },
    ],
    bottom: 9,
    left: "50%",
    borderRadius: 100,
    backgroundColor: "#000",
    width: 134,
    height: 5,
  },
  iPhoneXHomeIndicatorHomeI1: {
    position: "absolute",
    height: "4.19%",
    width: "100%",
    top: "95.81%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  shadownView: {
    position: "absolute",
    height: "87.07%",
    width: "100%",
    top: "12.68%",
    right: "0%",
    bottom: "0.25%",
    left: "0%",
    backgroundColor: "#0c0e1b",
    opacity: 0.45,
  },
  rectangleView4: {
    position: "absolute",
    transform: [
      {
        translateY: -204.5,
      },
      {
        translateX: -172.5,
      },
    ],
    top: "50%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#fff",
    width: 345,
    height: 409,
  },
  congratulationText: {
    position: "absolute",
    transform: [
      {
        translateY: 8.5,
      },
      {
        translateX: -153.5,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 32,
    fontWeight: "500",
    fontFamily: "SF Pro Display",
    color: "#ff7e00",
    textAlign: "center",
    width: 307,
  },
  yourPasswordHasBe: {
    position: "absolute",
    transform: [
      {
        translateY: 66.5,
      },
      {
        translateX: -134.5,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "SF Pro Display",
    color: "#8f9bb3",
    textAlign: "center",
    width: 270,
  },
  checkmarkCircleOutlineIcon: {
    position: "absolute",
    transform: [
      {
        translateY: -102.5,
      },
      {
        translateX: -35.5,
      },
    ],
    top: "50%",
    left: "50%",
    width: 71,
    height: 71,
  },
  groupView: {
    position: "absolute",
    transform: [
      {
        translateY: -102.5,
      },
      {
        translateX: -153.5,
      },
    ],
    top: "50%",
    left: "50%",
    width: 307,
    height: 205,
  },
  popupView: {
    position: "absolute",
    transform: [
      {
        translateY: -224,
      },
      {
        translateX: -172.5,
      },
    ],
    top: "50%",
    left: "50%",
    width: 345,
    height: 409,
  },
  resetPasswordDone: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default ResetPasswordDone;
