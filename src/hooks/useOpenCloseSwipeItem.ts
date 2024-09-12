import { useRef, useState } from "react";

export const useOpenCloseSwipeItem = () => {
  const [openSwipeable, setOpenSwipeable] = useState<any>(null);
  const swipeableRefs = useRef<any[]>([]);

  const handleSwipeOpen = (ref: any) => {
    if (openSwipeable && openSwipeable !== ref) {
      openSwipeable?.close();
    }
    setOpenSwipeable(ref);
  };

  return {
    handleSwipeOpen,
    swipeableRefs,
    openSwipeable,
  };
};
