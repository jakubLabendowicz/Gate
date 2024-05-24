"use strict";

/** @type {import('next').NextConfig} */
var path = require('path');

var nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, './src/styles')]
  }
};
module.exports = nextConfig;