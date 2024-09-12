import { getDateTime, transformToGroupedData } from "@src/helper/helper";
import { useEffect, useState } from "react";
import { history } from "@src/constants/history";

type sectionDataType = {
  date: string;
  data: {
    id: number;
    question: string;
    date: string;
  }[];
}[];

export const useHistory = () => {
  // Group data by date
  const [groupedData, setGroupedData] = useState<any>(
    transformToGroupedData(history)
  );
  const [sectionData, setSectionData] = useState<sectionDataType>([]);

  // Convert grouped data to the format required by SectionList in the UI
  const sectionizeData = () => {
    const sections = Object.keys(groupedData).map((date) => ({
      date: getDateTime(date), // Section header (date)
      data: groupedData[date], // Items for that date
    }));
    setSectionData(sections);
  };

  const deleteSectionItem = (
    sectionIndex: number,
    itemIndex: number,
    dataItemId: number
  ) => {
    const newSections = [...sectionData];
    newSections[sectionIndex].data.splice(itemIndex, 1);
    if (newSections[sectionIndex].data.length === 0) {
      newSections.splice(sectionIndex, 1);
    }
    setSectionData(newSections);
    console.log(
      "Use this dataItem Id to perform delete operation in firebase",
      dataItemId
    );
  };

  useEffect(() => {
    const fetchData = () => {
      sectionizeData();
    };
    fetchData();
  }, []);

  return {
    sectionData,
    setSectionData,
    deleteSectionItem,
    setGroupedData,
  };
};
