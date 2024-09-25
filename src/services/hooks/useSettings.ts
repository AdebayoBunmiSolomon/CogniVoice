import * as StoreReview from "expo-store-review";
import { Linking, Platform } from "react-native";

export const useSettings = () => {
  const reviewApp = async () => {
    if (await StoreReview.hasAction()) {
      if (Platform.OS === "ios") {
        const itunesItemId = 982107779;
        Linking.openURL(
          `itms-apps://itunes.apple.com/app/viewContentsUserReviews/id${itunesItemId}?action=write-review`
        );
      } else {
        const androidPackageName = "host.exp.exponent";
        // Open the Android Play Store directly
        Linking.openURL(
          `market://details?id=${androidPackageName}&showAllReviews=true`
        );
      }
    }
  };

  return {
    reviewApp,
  };
};
