const StyleDictionary = require("style-dictionary");

const buttonFilter = (token) => {
  const buttonTokenCategories = ['IconButton', 'TextButton', 'TextButtonWithIcon']
  return buttonTokenCategories.includes(token.attributes.category)
}

StyleDictionary.extend({
    source: [
      `./style-dictionary/tokens/**/!(*-dark).json5`
    ],
    platforms: {
      js: {
        transforms: ["attribute/cti", "name/cti/snake", "time/seconds", "content/icon", "size/px", "color/css"],
        files: [
          {
            destination: "src/components/ThemeProvider/tokens/light/button.ts",
            format: "javascript/es6",
            filter: buttonFilter
          },
          {
            destination: "src/components/ThemeProvider/tokens/light/color.ts",
            format: "javascript/es6",
            filter: {
                attributes: {
                    category: "color",
                }
            },
          },
        ],
      },
    },
  }).buildAllPlatforms();

  const properties = [`color`];

  StyleDictionary.extend({
    source: [
      `./style-dictionary/tokens/**/!(${properties.join(`|*.`)}).json5`
    ],
    platforms: {
      js: {
        transforms: ["attribute/cti", "name/cti/snake", "time/seconds", "content/icon", "size/px", "color/css"],
        files: [
          {
            destination: "src/components/ThemeProvider/tokens/dark/color.ts",
            format: "javascript/es6",
            filter: {
                attributes: {
                    category: "color",
                }
            },
          },
          {
            destination: "src/components/ThemeProvider/tokens/dark/button.ts",
            format: "javascript/es6",
            filter: buttonFilter
          },
        ],
      },
    },
  }).buildAllPlatforms();