import { CircularLineView } from "@src/common/circular-container";
import { RegularText } from "@src/components/shared/text/regular-text";
import { colors } from "@src/resources/colors";
import { DVH, DVW, moderateScale, verticalScale } from "@src/resources/scaling";
import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { MessageAction } from "./message-actions";
import { useMessageStore } from "@src/services/store/useMessageStore";
import { useChatting } from "@src/services/hooks";
import ImageView from "react-native-image-viewing";
import Svg, { Path } from "react-native-svg";

type userMsgProps = {
  content: string;
  copyToClipBoard: () => void;
  likeUnlikeMsg: () => void;
  // unLikeMsg: () => void;
};

type aiTxtMsgProps = {
  content: string;
  copyToClipBoard: () => void;
  likeUnlikeMsg: () => void;
  // unLikeMsg: () => void;
};

type aiImgMsgProps = {
  content: string;
};

export const UserMessage: React.FC<userMsgProps> = ({
  content,
  copyToClipBoard,
  likeUnlikeMsg,
  // unLikeMsg,
}) => {
  const { message } = useMessageStore();
  const isMsgLiked = message.some((msgContent) => msgContent === content);
  return (
    <View style={styles.userMsg}>
      <View style={styles.userMsgContent}>
        <Svg
          height='100%'
          width='100%'
          style={{ position: "absolute", top: 0, right: 0, zIndex: 1 }}>
          <Path
            d='M0,0 L100,0 L100,100 Z' // Triangle path
            fill={colors.lightGray} // Match the message background
          />
        </Svg>
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
          iconName={isMsgLiked ? "dislike1" : "like2"}
          iconColor={colors.gray}
          msgRoleType='user'
          copyToClipBoard={() => copyToClipBoard()}
          likeUnlikeMsg={() => likeUnlikeMsg()}
        />
      </View>
    </View>
  );
};

export const AITextMessage: React.FC<aiTxtMsgProps> = ({
  content,
  copyToClipBoard,
  likeUnlikeMsg,
  // unLikeMsg,
}) => {
  const { message } = useMessageStore();
  const isMsgLiked = message.some((msgContent) => msgContent === content);
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
          iconName={isMsgLiked ? "dislike1" : "like2"}
          iconColor={colors.white}
          msgRoleType='ai'
          copyToClipBoard={() => copyToClipBoard()}
          likeUnlikeMsg={() => likeUnlikeMsg()}
        />
      </View>
    </View>
  );
};

export const AIImageMessage: React.FC<aiImgMsgProps> = ({ content }) => {
  const { openToViewImg, visible, setVisible, images, setImages } =
    useChatting();
  return (
    <>
      <View style={styles.assistantMsg}>
        <View style={styles.assistantMsgContentImgContainer}>
          <TouchableWithoutFeedback onPress={() => openToViewImg(content)}>
            <Image
              source={{ uri: content }}
              resizeMode='cover'
              style={styles.assistantMsgContentImg}
            />
          </TouchableWithoutFeedback>
        </View>
      </View>
      <ImageView
        images={images}
        imageIndex={0}
        visible={visible}
        onRequestClose={() => {
          setVisible(!visible);
          setImages([]);
        }}
      />
    </>
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
  // likeContainer: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   gap: ''
  // }
});
