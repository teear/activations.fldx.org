const CleanCSS = require("clean-css");
const uglifyjs = require("uglify-js");
const pluginPWA = require("eleventy-plugin-pwa");
const includesFilter = require("./src/_includes/includes.js");
const dateTime = require("./src/_includes/dateTime.js");
const man = require("./src/_includes/manager.js");

module.exports = function(eleventyConfig) {
  templateFormats: [
    "html",
    "liquid",
    "ejs",
    "md",
    "hbs",
    "mustache",
    "haml",
    "pug",
    "njk"
  ];

  eleventyConfig.addPassthroughCopy({ "src/_redirects": true });
  eleventyConfig.addPassthroughCopy({ "src/browserconfig.xml": true });
  eleventyConfig.addPassthroughCopy({ "src/site.webmanifest": true });
  eleventyConfig.addPassthroughCopy({ "src/favicon.ico": true });
  eleventyConfig.addPassthroughCopy({ "src/files": true });
  eleventyConfig.addPassthroughCopy({ "src/js": true });
  eleventyConfig.addPassthroughCopy({ "src/56fl-hwc/media": true });

  eleventyConfig.addPlugin(pluginPWA);

  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });
  eleventyConfig.addFilter("jsmin", function(code) {
    let minified = uglifyjs.minify(code);
    if (minified.error) {
      console.log("uglify-js error: ", minified.error);
      return code;
    }
    return minified.code;
  });
  eleventyConfig.addFilter("ordersort", function(value) {
    return value.sort((a, b) => {
      return a.data.display_order - b.data.display_order;
    });
  });
  eleventyConfig.addFilter("includes", includesFilter);
  eleventyConfig.addFilter("date", function(dateString) {
    return dateTime(dateString);
  });
  eleventyConfig.addNunjucksFilter("dateDisplay", function(date) {
    return date.toISOString();
  });
  // merge directory and page tags (https://stackoverflow.com/questions/55496831/how-can-an-eleventy-site-display-a-list-of-pages-in-a-directory)
  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addShortcode("date", dateTime);
  eleventyConfig.addShortcode("manager", man);
  
  eleventyConfig.addPairedShortcode("video", function(url, caption) {
    // Method A: ✅ This works fine
    // return content;

    // Method B: ⚠️ Careful when wrapping with HTML
    return `<figure class="video">
<div class='embed-container'>
	<iframe src='${url}' frameborder='0' allowfullscreen></iframe>
</div>
<figcaption>${caption}</figcaption>
</figure>`;
  });

  eleventyConfig.addPairedShortcode("audio", function(url, caption) {
    // Method A: ✅ This works fine
    // return content;

    // Method B: ⚠️ Careful when wrapping with HTML
    return `<figure class="audio">
<audio src='${url}' controls></audio>
<figcaption>${caption}</figcaption>
</figure>`;
  });

  // You can return your Config object (optional).
  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    },
    passthroughFileCopy: true
  };
};
