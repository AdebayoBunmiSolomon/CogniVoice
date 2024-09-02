import { useFontLoading } from "@src/hooks";
import { Router } from "@src/router/router";
import { AppLoader } from "@src/screens";
import { useEffect, useState } from "react";

export default function App() {
  const { isLoadingFontComplete, loadResourcesAndDataAsync } = useFontLoading();
  const [fontHasLoaded, setFontHasLoaded] = useState<boolean>(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      loadResourcesAndDataAsync();
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return <>{isLoadingFontComplete ? <AppLoader /> : <Router />}</>;
}
