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
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import {
  AIImageMessage,
  AITextMessage,
  CircularIconButton,
  RegularText,
  UserMessage,
} from "@src/components";
import { useChatting } from "@src/services/hooks";
import { FontAwesome } from "@expo/vector-icons";

export const VoiceChatting = ({
  navigation,
  route,
}: RootStackScreenProps<screenNames.VOICE_CHATTING>) => {
  const [messages, setMessages] = useState<any[]>(dummyMessages);
  const { copyTextToClipBoard, likeUnlikeMessage } = useChatting();
  return (
    <>
      <Screen>
        <ScreenTitle
          title='Voice Chat'
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
                    //it's an ai image
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
          <TouchableOpacity
            style={[
              styles.sideBtn,
              {
                backgroundColor: colors.main,
              },
            ]}>
            <RegularText white sizeSmall>
              stop
            </RegularText>
          </TouchableOpacity>
          <CircularIconButton
            style={{
              backgroundColor: "#20c997",
            }}
            onPress={() => {}}
            titleType='regular'
            icon={
              <FontAwesome
                name='microphone'
                size={moderateScale(20)}
                color={colors.white}
              />
            }
          />
          <TouchableOpacity
            style={[
              styles.sideBtn,
              {
                backgroundColor: colors.lightGray,
              },
            ]}>
            <RegularText>clear</RegularText>
          </TouchableOpacity>
        </View>
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({
  sideBtn: {
    marginTop: verticalScale(20),
    paddingVertical: verticalScale(2),
    paddingHorizontal: moderateScale(7),
    borderRadius: 50,
  },
  sendBtnContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    marginLeft: DVW(1),
    width: "100%",
    bottom: Platform.OS === "ios" ? verticalScale(15) : verticalScale(5),
    flexDirection: "row",
    padding: moderateScale(10),
  },
  sendBtn: {
    backgroundColor: colors.blue,
    paddingHorizontal: moderateScale(8),
    paddingVertical: verticalScale(10),
    borderRadius: moderateScale(5),
    marginTop: DVH(-2),
  },
  msgContainer: {
    height: Platform.OS === "ios" ? "87%" : "88%",
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
