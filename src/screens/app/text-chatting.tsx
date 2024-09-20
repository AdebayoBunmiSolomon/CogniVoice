import { screenNames } from "@src/navigation/navigation-names";
import React, { useState } from "react";
import { Screen } from "../screen";
import { ScreenTitle } from "@src/common/header-title";
import { RootStackScreenProps } from "@src/router/types";
import { AntDesign } from "@expo/vector-icons";
import { DVH, DVW, moderateScale, verticalScale } from "@src/resources/scaling";
import { colors } from "@src/resources/colors";
import { dummyMessages } from "@src/constants/dummy-messages";
import { Platform, ScrollView, StyleSheet, View } from "react-native";
import {
  AIImageMessage,
  AITextMessage,
  TextInputs,
  UserMessage,
} from "@src/components";
import { useChatting } from "@src/services/hooks";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export const TextChatting = ({
  navigation,
}: RootStackScreenProps<screenNames.TEXT_CHATTING>) => {
  const [messages, setMessages] = useState<any[]>(dummyMessages);
  const { copyTextToClipBoard, likeUnlikeMessage } = useChatting();
  return (
    <>
      <Screen>
        <ScreenTitle
          title='Text Chat'
          bckBtnOnPress={() => navigation.navigate(screenNames.BOTTOM_TAB)}
          rightIcon={
            <AntDesign
              name='wechat'
              size={moderateScale(20)}
              color={colors.black}
            />
          }
        />
        {messages.length > 0 ? (
          <View style={styles.msgContainer}>
            <ScrollView
              bounces={false}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                flexGrow: 1,
                padding: moderateScale(10),
              }}>
              {messages.map((message, index) => {
                if (message.role === "assistant") {
                  if (message.content.includes("https")) {
                    //it's an AI image
                    return (
                      <AIImageMessage content={message.content} key={index} />
                    );
                  } else {
                    //text message
                    return (
                      <AITextMessage
                        content={message.content}
                        key={index}
                        copyToClipBoard={() =>
                          copyTextToClipBoard(message.content)
                        }
                        likeUnlikeMsg={() => {
                          likeUnlikeMessage(message.content);
                        }}
                      />
                    );
                  }
                } else {
                  //user message
                  return (
                    <UserMessage
                      content={message.content}
                      key={index}
                      copyToClipBoard={() =>
                        copyTextToClipBoard(message.content)
                      }
                      likeUnlikeMsg={() => {
                        likeUnlikeMessage(message.content);
                      }}
                    />
                  );
                }
              })}
            </ScrollView>
          </View>
        ) : null}
      </Screen>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          position: "absolute",
          bottom: Platform.OS === "ios" ? verticalScale(4) : verticalScale(-15),
        }}>
        <KeyboardAwareScrollView
          contentContainerStyle={{ flexGrow: 0.5, backgroundColor: "red" }}
          enableOnAndroid={true} // Enable keyboard handling on Android
          keyboardShouldPersistTaps='handled' // Dismiss the keyboard on tapping outside input
          scrollEnabled={false} // Ensures scrolling works on Android
          showsVerticalScrollIndicator={false}
          extraScrollHeight={Platform.OS === "ios" ? DVH(-4) : DVH(-32)} // Reduce space on Android
        >
          <TextInputs label='' placeholder='test' />
        </KeyboardAwareScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  msgContainer: {
    height: Platform.OS === "ios" ? "83%" : "86%",
    marginBottom: verticalScale(5),
    backgroundColor: colors.darkGray,
    borderRadius: moderateScale(10),
    overflow: "hidden",
  },
  assistantMsgContentImg: {
    width: "100%",
    height: "100%",
  },
  assistantMsgContentImgContainer: {
    backgroundColor: colors.blue,
    width: DVW(90),
    height: DVH(45),
    padding: moderateScale(10),
    marginBottom: verticalScale(10),
    borderBottomLeftRadius: moderateScale(10),
    borderBottomRightRadius: moderateScale(10),
    borderTopStartRadius: moderateScale(10),
  },
  assistantMsg: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  assistantMsgContent: {
    backgroundColor: colors.blue,
    paddingVertical: verticalScale(10),
    paddingHorizontal: moderateScale(15),
    marginBottom: verticalScale(10),
    borderBottomLeftRadius: moderateScale(10),
    borderBottomRightRadius: moderateScale(10),
    borderTopStartRadius: moderateScale(10),
  },
  userMsgContent: {
    backgroundColor: colors.lightGray,
    paddingVertical: verticalScale(10),
    paddingHorizontal: moderateScale(15),
    marginBottom: verticalScale(10),
    borderBottomLeftRadius: moderateScale(10),
    borderBottomRightRadius: moderateScale(10),
    borderTopEndRadius: moderateScale(10),
  },
  userMsg: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
