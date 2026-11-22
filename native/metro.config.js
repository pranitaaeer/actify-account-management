const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const path = require("path");

const config = getDefaultConfig(__dirname);
const sharedDirectory = path.resolve(__dirname, "../shared");

config.watchFolders = [
  ...(config.watchFolders ?? []),
  sharedDirectory,
];

module.exports = withNativeWind(config, { input: "./src/global.css" });