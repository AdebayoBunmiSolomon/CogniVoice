// Helper function to group sorted data by date
export const groupDataByDate = (sortedData: any[]) => {
  return sortedData.reduce((acc, currentItem) => {
    const date = new Date(currentItem.date).toISOString().split("T")[0]; // Group by date (YYYY-MM-DD)

    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(currentItem);

    return acc;
  }, {});
};

export const getDateTime = (dateVal: string) => {};
