import * as Clipboard from "expo-clipboard";
import { useMessageStore } from "../store/useMessageStore";
import { useState } from "react";

type imagArrTypes = {
  uri: string;
}[];

export const useChatting = () => {
  const { setMessage, message } = useMessageStore();
  const [images, setImages] = useState<imagArrTypes>([]);
  const [visible, setVisible] = useState<boolean>(false);
  /**
   * receives content string to be copied to clipboard
   */
  const copyTextToClipBoard = async (content: string) => {
    await Clipboard.setStringAsync(content);
  };

  /**
   * like or unlike a message to / from an array of message
   */
  const likeUnlikeMessage = (content: string) => {
    const msgExist = message.some((msgContent) => msgContent === content);
    if (msgExist) {
      //remove from message
      const updatedMessage = message.filter(
        (msgContent) => msgContent !== content
      );
      setMessage(updatedMessage);
    } else {
      //add to message
      const updatedMessage = [...message, content];
      setMessage(updatedMessage);
    }
  };

  const openToViewImg = (uri: string) => {
    setVisible(!visible);
    const updatedImage = [
      ...images,
      {
        uri: uri,
      },
    ];
    setImages(updatedImage);
  };

  return {
    copyTextToClipBoard,
    likeUnlikeMessage,
    openToViewImg,
    images,
    visible,
    setVisible,
    setImages,
  };
};
