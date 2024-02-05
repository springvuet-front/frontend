export function parseDateTime(datetimeString) {
    let datetime = new Date(datetimeString);
  
    // let year = datetime.getFullYear();
    let month = datetime.getMonth() + 1;
    let date = datetime.getDate();
    // let hour = datetime.getHours();
    // let minute = datetime.getMinutes();
    // let second = datetime.getSeconds();
  
    return { month, date};
  }

  export function parseYearTime(datetimeString) {
    let datetime = new Date(datetimeString);
    let year = datetime.getFullYear();
    let month = datetime.getMonth() + 1;
    let date = datetime.getDate();

    return {year, month, date};

  }