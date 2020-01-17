/**
 * Get the QSL info for manager and construct and return HTML output
 *
 * @param {String} callsign Get QSL info for this callsign.
 * @return {String} QSL info as HTML
 *
 */
const managers = require("../_data/managers.js");

module.exports = function(callsign) {
  const man = managers[`${callsign}`];
  const address = [];
  address.push(
    `<p itemprop="address" itemscope itemtype="http://schema.org/PostalAddress" class="address">`
  );
  if (man.name) {
    address.push(`<span itemprop="name">${man.name}</span><br>`);
  }
  if (man.box) {
    address.push(
      `P.O.Box <span itemprop="postOfficeBoxNumber">${man.box}</span><br>`
    );
  }
  if (man.address) {
    address.push(`<span itemprop="streetAddress">${man.address}</span><br>`);
  }
  if (man.cp) {
    address.push(`<span itemprop="postalCode">${man.cp}</span><br>`);
  }
  if (man.city) {
    address.push(`<span itemprop="addressLocality">${man.city}</span><br>`);
  }
  if (man.region) {
    address.push(`<span itemprop="addressRegion">${man.region}</span><br>`);
  }
  address.push(`<span itemprop="addressCountry">${man.country}</span>`);
  address.push(`</p>\n`);

  return address.join("\n");
};
