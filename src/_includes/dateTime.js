/**
 * Takes a date and returns a HTML time element, if the input is not a date returns
 * the input itself.
 *
 * @param {String} dateString dd/mm/yyyy, d/m/yyyy, mm/yyyy, m/yyyy, d/m, d/mm, dd/m or dd/mm
 * @return {String} Either a HTML time element or the input to the function
 *
 */
module.exports = function(dateString) {
  const dateRegExp = /^\d{1,2}\/\d{1,2}\/\d{4}$/; // D/M/YYYY or DD/MM/YYYYY
  const dateRegExpMonthYear = /^\d{1,2}\/\d{4}$/; // M/YYYY or MM/YYYY
  const dateRegExpMonthnameYear = /^[A-Z][a-z]*\s\d{4}$/; // Month YYYY
  const dateRegExpYear = /^\d{4}$/; // YYYY
  const dateRegExpDayMonth = /^\d{1,2}\/\d{1,2}$/; // D/M, D/MM, DD/M or DD/MM
  const dateRegExpDayMonthname = /^\d{1,2}\s[A-Z][a-z]*$/; // D Month
  const dateRegExpDayMonthnameYear = /^\d{1,2}\s[A-Z][a-z]*\s\d{4}$/; // DD Month YYYY

  // if dateString is a number convert it to string
  if (typeof dateString === "number") {
    dateString = dateString.toString();
  }

  // if string does not match regex return the string
  if (
    !dateString.match(dateRegExp) &&
    !dateString.match(dateRegExpMonthYear) &&
    !dateString.match(dateRegExpMonthnameYear) &&
    !dateString.match(dateRegExpYear) &&
    !dateString.match(dateRegExpDayMonth) &&
    !dateString.match(dateRegExpDayMonthname) &&
    !dateString.match(dateRegExpDayMonthnameYear)
  ) {
    return dateString;
  }

  if (dateString.match(dateRegExpYear)) {
    return `<time datetime="${dateString}">${dateString}</time>`;
  }

  var months = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
    January: "01",
    February: "02",
    March: "03",
    April: "04",
    May: "05",
    June: "06",
    July: "07",
    August: "08",
    September: "09",
    October: "10",
    November: "11",
    December: "12"
  };

  /* dateRegExpDayMonthnameYear */
  if (dateString.match(dateRegExpDayMonthnameYear)) {
    var ISODateString = dateString.split(" ");
    var month = `${months[ISODateString[1]]}`;
    if (ISODateString[0].length === 1) {
      ISODateString[0] = "0" + ISODateString[0];
    }
    ISODateString = `${ISODateString[2]}-${month}-${ISODateString[0]}`;
    return `<time datetime="${ISODateString}">${dateString}</time>`;
  }
  /* dateRegExpDayMonthnameYear END */

  /* dateRegExpDayMonthname */
  if (dateString.match(dateRegExpDayMonthname)) {
    var ISODateString = dateString.split(" ");
    //var month = `${months[ISODateString[1]]}`;
    if (ISODateString[0].length === 1) {
      ISODateString[0] = "0" + ISODateString[0];
    }
    ISODateString = `${months[ISODateString[1]]}-${ISODateString[0]}`;
    return `<time datetime="${ISODateString}">${dateString}</time>`;
  }
  /* dateRegExpDayMonthname END */

  /* dateRegExpMonthnameYear */
  if (dateString.match(dateRegExpMonthnameYear)) {
    var ISODateString = dateString.split(" ");
    ISODateString = `${ISODateString[1]}-${months[ISODateString[0]]}`;
    return `<time datetime="${ISODateString}">${dateString}</time>`;
  }
  /* dateRegExpMonthnameYear END */

  var ISODateString = dateString.split("/").reverse();
  ISODateString = ISODateString.map(item =>
    item.length === 1 ? "0" + item : item
  );
  ISODateString = ISODateString.join("-");

  return `<time datetime="${ISODateString}">${dateString}</time>`;
};
