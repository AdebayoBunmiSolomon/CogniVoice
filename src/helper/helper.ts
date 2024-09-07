/**
 *  Helper function to group sorted data by date
 **/
export const groupDataByDate = (sortedData: any[]) => {
  return sortedData.reduce((acc, currentItem) => {
    const date = new Date(currentItem.date).toISOString(); // Group by date (YYYY-MM-DD)

    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(currentItem);

    return acc;
  }, {});
};

export const getDateTime = (dateVal: string) => {
  const dateValue = new Date(dateVal);
  const dateValue2 = new Date();
  //variables to current default month and date from system
  const currYear = dateValue2.getFullYear();
  const currDate = dateValue2.getDate();
  const currMonth = dateValue2.toLocaleString("default", {
    month: "long",
  });

  //variables to hold current month and date from the date value
  const currYearFrmVal = dateValue.getFullYear();
  const currDateFrmVal = dateValue.getDate();
  const currMonthFrmVal = dateValue.toLocaleString("default", {
    month: "long",
  });
  if (currDate === currDateFrmVal && currMonth === currMonthFrmVal) {
    return `Today`;
  } else if (currDate - currDateFrmVal === 1 && currMonth === currMonthFrmVal) {
    return `Yesterday, ${currMonthFrmVal} ${currDateFrmVal}, ${currYearFrmVal}`;
  } else {
    return `${currMonthFrmVal} ${currDateFrmVal}, ${currYearFrmVal}`;
  }
};
