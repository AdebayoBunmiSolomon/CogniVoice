import { useFontLoading } from "@src/hooks";
import { AppLoader } from "@src/screens";
import { GetStarted } from "@src/screens/auth";
import { useEffect, useState } from "react";

export default function App() {
  const { isLoadingFontComplete, loadResourcesAndDataAsync } = useFontLoading();
  const [fontHasLoaded, setFontHasLoaded] = useState<boolean>(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      loadResourcesAndDataAsync();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return <>{isLoadingFontComplete ? <AppLoader /> : <GetStarted />}</>;
}
