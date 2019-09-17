/**
 * Takes a date and returns a HTML time element, if the input is not a date returns
 * the input itself.
 *
 * @param {String} dateString Date in dd/mm/yyyy, d/m/yyyy, mm/yyyy or m/yyyy format
 * @return {String} Either a HTML time element or the input to the function
 *
 */
module.exports = function(dateString) {
  let dateRegExp = /^\d{1,2}\/\d{1,2}\/\d{4}$/; // D/M/YYYY or DD/MM/YYYYY
  let dateRegExpMonthYear = /^\d{1,2}\/\d{4}$/; // MM/YYYY or M/YYYY
  let dateRegExpYear = /^\d{4}$/; // YYYY

  // if dateString is a number convert it to string
  if (typeof dateString === "number") {
    dateString = dateString.toString();
  }

  // if string does not match regex return the string
  if (
    !dateString.match(dateRegExp) &&
    !dateString.match(dateRegExpMonthYear) &&
    !dateString.match(dateRegExpYear)
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
