module.exports = function (api) {
  api.cache(true);
  const path = require('path');
  const sharedDirectory = path.resolve(__dirname, '../shared');

  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
    ],
    plugins: [
      ['module-resolver', { alias: { '@shared': sharedDirectory } }],
      'react-native-worklets/plugin', 
    ],
  };
};