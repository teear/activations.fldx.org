const imagemin = require("imagemin-keep-folder");
const imageminJpegtran = require("imagemin-jpegtran");
const imageminPngquant = require("imagemin-pngquant");
const imageminSvgo = require("imagemin-svgo");

(async () => {
  const files = await imagemin(["src/**/images/**/*.{png,jpg,svg}"], {
    plugins: [
      imageminJpegtran(),
			imageminPngquant(),
      imageminSvgo({
	      plugins: [{ name: 'removeViewBox', active: false }]
      })
    ],
    replaceOutputDir: output => {
      return output.replace(/src\//, "dist/");
    }
  });

  console.log(files);
  console.log("Images optimized");
})();
