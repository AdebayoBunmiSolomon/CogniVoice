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
   * like a message to an array of message
   */
  const likeMessage = (content: string) => {
    const msgExist = message.some((msgContent) => msgContent === content);
    if (msgExist) {
      console.log("message already exists");
    } else {
      const updatedMessage = [...message, content];
      setMessage(updatedMessage);
    }
  };

  /**
   * remove a message from an array of message
   */
  const unLikeMessage = (content: string) => {
    const msgExist = message.some((msgContent) => msgContent === content);
    if (msgExist) {
      const updatedMessage = message.filter(
        (msgContent) => msgContent !== content
      );
      setMessage(updatedMessage);
    } else {
      console.log("message does not exists");
    }
  };

  return {
    copyTextToClipBoard,
    likeMessage,
    unLikeMessage,
  };
};
