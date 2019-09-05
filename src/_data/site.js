module.exports = {
  name: "Foxtrot Lima Activations",
	description: "Past and future Foxtrot Lima activations",
  twitter: "@56FL001",
	image: "/images/fl-activations-card-1200x628.jpg",
	image_alt: "Foxtrot Lima activations",
  env: process.env.ELEVENTY_ENV || "dev",
  baseurl:
    process.env.ELEVENTY_ENV === "prod"
      ? "https://activations.fldx.org"
      : "http://localhost:8080",
  notReady: false, // Flag to prevent something from rendering.
  time: () => {
    return new Date(); // Simplest example, could use Moment.js to return another format.
  }
};
