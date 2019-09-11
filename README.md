# activations.fldx.org

Foxtrot Lima Activations. Served up at [https://activations.fldx.org](https://activations.fldx.org) and hosted on [Netlify](http://www.netlify.com)


## Overview

This site is comprised of static files generated by [Eleventy](https://11ty.io) for simplified deployment and hosting.


## Local development

To build the site you need:

- [Node](https://nodejs.org) - to run the build
- npm - to install and manage dependencies


### Getting started

```bash

# clone this repository
git clone https://github.com/teear/activations.fldx.org.git

# go to the working directory
cd activations.fldx.org

# install dependencies
npm install

# start a local build server with hot reloading
npm start
```


### Commands

Run a development server

	`npm start` or `npm run dev`

Run a development server with production settings

	`npm run prod`

Build the site

	`npm run build`

Delete the `dist` directory

	`npm run clean`

Note that images are not copied automatically to `dist` from `src` by
Eleventy, `npm run build:images` handles image compression (reads from
`src` and outputs to `dist`).


## Deployment

[![Netlify Status](https://api.netlify.com/api/v1/badges/043d0a37-7061-4edf-b2f5-0369565fba8e/deploy-status)](https://app.netlify.com/sites/fl-activations/deploys)

The build command `npm run build` will generate a set of static assets in a `dist` folder which can be deployed to any web hosting service.

My preferred method is to host on [Netlify](http://www.netlify.com) which can run this build process in a CI environment and then deploy the build to automatically to a global CDN. Such deployments are [triggered automatically](https://www.netlify.com/docs/continuous-deployment/) by every git push to the `master` branch of the origin repository.
