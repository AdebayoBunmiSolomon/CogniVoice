import { getDateTime } from "@src/helper/helper";

export const useHistory = () => {
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
