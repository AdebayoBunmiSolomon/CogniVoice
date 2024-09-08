import { CircularLineView } from "@src/common/circular-container";
import { RegularText } from "@src/components/shared/text/regular-text";
import { colors } from "@src/resources/colors";
import { DVH, DVW, moderateScale, verticalScale } from "@src/resources/scaling";
import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { MessageAction } from "./message-actions";

type userMsgProps = {
  content: string;
  copyToClipBoard: () => void;
  likeMsg: () => void;
  unLikeMsg: () => void;
};

type aiTxtMsgProps = {
  content: string;
  copyToClipBoard: () => void;
  likeMsg: () => void;
  unLikeMsg: () => void;
};

type aiImgMsgProps = {
  content: string;
};

export const UserMessage: React.FC<userMsgProps> = ({
  content,
  copyToClipBoard,
  likeMsg,
  unLikeMsg,
}) => {
  return (
    <View style={styles.userMsg}>
      <View style={styles.userMsgContent}>
        <View style={styles.subContent}>
          <CircularLineView borderColor={colors.blue}>
            <Image
              source={require("@src/assets/profile.png")}
              resizeMode='contain'
              style={styles.image}
            />
          </CircularLineView>
          <RegularText sizeSmall black style={styles.contentText}>
            {content}
          </RegularText>
        </View>
        <MessageAction
          likeIconName={"like2"}
          disLikeIconName={"dislike2"}
          iconColor={colors.gray}
          msgRoleType='user'
          copyToClipBoard={() => copyToClipBoard()}
          likeMsg={() => likeMsg()}
          unLikeMsg={() => unLikeMsg()}
        />
      </View>
    </View>
  );
};

export const AITextMessage: React.FC<aiTxtMsgProps> = ({
  content,
  copyToClipBoard,
  likeMsg,
  unLikeMsg,
}) => {
  return (
    <View style={styles.assistantMsg}>
      <View style={styles.assistantMsgContent}>
        <View style={styles.subContent}>
          <CircularLineView borderColor={colors.white}>
            <Image
              source={require("@src/assets/businessman.png")}
              resizeMode='contain'
              style={styles.image}
            />
          </CircularLineView>
          <RegularText sizeSmall white style={styles.contentText}>
            {content}
          </RegularText>
        </View>
        <MessageAction
          likeIconName={"like2"}
          disLikeIconName={"dislike2"}
          iconColor={colors.white}
          msgRoleType='ai'
          copyToClipBoard={() => copyToClipBoard()}
          likeMsg={() => likeMsg()}
          unLikeMsg={() => unLikeMsg()}
        />
      </View>
    </View>
  );
};

export const AIImageMessage: React.FC<aiImgMsgProps> = ({ content }) => {
  return (
    <View style={styles.assistantMsg}>
      <View style={styles.assistantMsgContentImgContainer}>
        <Image
          source={{ uri: content }}
          resizeMode='cover'
          style={styles.assistantMsgContentImg}
        />
        {/* <CircularLineView borderColor={colors.white}>
          <Image
            source={require("@src/assets/businessman.png")}
            resizeMode='contain'
            style={styles.image}
          />
        </CircularLineView> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentText: {
    maxWidth: "80%",
  },
  subContent: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: moderateScale(10),
  },
  userMsgContent: {
    backgroundColor: colors.lightGray,
    paddingVertical: verticalScale(10),
    paddingHorizontal: moderateScale(15),
    marginBottom: verticalScale(10),
    borderBottomLeftRadius: moderateScale(10),
    borderBottomRightRadius: moderateScale(10),
    borderTopEndRadius: moderateScale(10),
    width: DVW(70),
    gap: moderateScale(15),
  },
  userMsg: {
    flexDirection: "row",
    justifyContent: "flex-end",
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
    gap: moderateScale(15),
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
  assistantMsgContentImg: {
    width: "100%",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
