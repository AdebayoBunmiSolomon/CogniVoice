import { getDateTime, groupDataByDate } from "@src/helper/helper";
import { useState } from "react";
import { history } from "@src/constants/history";

export const useHistory = () => {
  // Group data by date
  const [groupedData, setGroupedData] = useState<any>(groupDataByDate(history));
  // Convert grouped data to the format required by SectionList
  const setSection = (groupedData: any) => {
    const sections = Object.keys(groupedData).map((date) => ({
      date: getDateTime(date), // Section header (date)
      data: groupedData[date], // Items for that date
    }));
    return sections;
  };

  return {
    setSection,
  };
};
