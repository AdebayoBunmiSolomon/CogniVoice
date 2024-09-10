import { Share } from "react-native";
import * as Sharing from "expo-sharing";
export const useMessageTemplate = () => {
  /**
   *
   * @param fileUrl  to be shared which takes file resource url as parameter
   */
  const shareFileUrl = async (fileUrl: string) => {
    const isSharingAvailable = await Sharing.isAvailableAsync();
    if (isSharingAvailable) {
      await Sharing.shareAsync(fileUrl, {
        dialogTitle: "Share movie detail",
      });
    } else {
      console.log("No sharing available on this device");
    }
  };

  /**
   *
   * @param httpUrl to be shared which takes http url as parameter
   */
  const shareHttpUrl = async (httpUrl: string) => {
    try {
      const result = await Share.share({
        message: `Check out this image: ${httpUrl}`,
        url: httpUrl,
        title: "Share movie details",
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log("Shared with activity type:", result.activityType);
        } else {
          console.log("Shared successfully");
        }
      } else if (result.action === Share.dismissedAction) {
        console.log("Share dismissed");
      }
    } catch (error) {
      console.error("Error sharing resource:", error);
    }
  };

  return {
    shareFileUrl,
    shareHttpUrl,
  };
};
