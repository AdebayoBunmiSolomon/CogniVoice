import { screenNames } from "@src/navigation/navigation-names";
import React, { useState } from "react";
import { Screen } from "../screen";
import { ScreenTitle } from "@src/common/header-title";
import { RootStackScreenProps } from "@src/router/types";
import { AntDesign } from "@expo/vector-icons";
import { DVH, DVW, moderateScale, verticalScale } from "@src/resources/scaling";
import { colors } from "@src/resources/colors";
import { dummyMessages } from "@src/constants/dummy-messages";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import {
  AIImageMessage,
  AITextMessage,
  TextInputs,
  UserMessage,
} from "@src/components";
import { useChatting } from "@src/services/hooks";
import { Feather } from "@expo/vector-icons";

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
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "height" : undefined}
          style={{ flex: 1 }}>
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
          <View style={styles.sendBtnContainer}>
            <TextInputs label='' placeholder='test' />
            <TouchableOpacity style={styles.sendBtn}>
              <Feather
                name='send'
                color={colors.white}
                size={moderateScale(20)}
              />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({
  sendBtnContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    marginLeft: DVW(-1),
    bottom: Platform.OS === "ios" ? verticalScale(4) : verticalScale(-15),
    flexDirection: "row",
    padding: moderateScale(10),
    gap: moderateScale(2),
  },
  sendBtn: {
    backgroundColor: colors.blue,
    paddingHorizontal: moderateScale(8),
    paddingVertical: verticalScale(10),
    borderRadius: moderateScale(5),
    marginTop: DVH(-2),
  },
  container: {
    flex: 1,
  },
  msgContainer: {
    height: Platform.OS === "ios" ? "87%" : "91%",
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
