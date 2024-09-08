import * as Clipboard from "expo-clipboard";
import { useMessageStore } from "../store/useMessageStore";

export const useChatting = () => {
  const { setMessage, message } = useMessageStore();
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

  return {
    copyTextToClipBoard,
    likeUnlikeMessage,
  };
};
