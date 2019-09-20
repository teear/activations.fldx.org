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
  const dateRegExpYear = /^\d{4}$/; // YYYY
  const dateRegExpDayMonth = /^\d{1,2}\/\d{1,2}$/; // D/M, D/MM, DD/M or DD/MM

  // if dateString is a number convert it to string
  if (typeof dateString === "number") {
    dateString = dateString.toString();
  }

  // if string does not match regex return the string
  if (
    !dateString.match(dateRegExp) &&
    !dateString.match(dateRegExpMonthYear) &&
    !dateString.match(dateRegExpYear) &&
    !dateString.match(dateRegExpDayMonth)
  ) {
    return dateString;
  }

  if (dateString.match(dateRegExpYear)) {
    return `<time datetime="${dateString}">${dateString}</time>`;
  }

  ISODateString = dateString.split("/").reverse();
  ISODateString = ISODateString.map(item =>
    item.length === 1 ? "0" + item : item
  );
  ISODateString = ISODateString.join("-");

  return `<time datetime="${ISODateString}">${dateString}</time>`;
};
