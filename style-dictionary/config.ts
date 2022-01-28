const StyleDictionary = require("style-dictionary");

StyleDictionary.extend({
    source: [
      `./style-dictionary/tokens/**/!(*-dark).json5`
    ],
    platforms: {
      js: {
        transforms: ["attribute/cti", "name/cti/snake", "time/seconds", "content/icon", "size/px", "color/css"],
        files: [
          {
            destination: "src/components/ThemeProvider/tokens/button.ts",
            format: "javascript/es6",
            filter: function(token) {
              const buttonTokenCategories = ['IconButton', 'TextButton', 'TextButtonWithIcon']
              return buttonTokenCategories.includes(token.attributes.category)
            }
          },
        ],
      },
    },
  }).buildAllPlatforms();