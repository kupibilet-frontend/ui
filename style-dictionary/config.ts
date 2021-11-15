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
            destination: "src/tokens/font.ts",
            format: "javascript/es6",
            filter: {
                attributes: {
                    category: "font",
                }
            },
          },
          {
            destination: "src/tokens/light/color.ts",
            format: "javascript/es6",
            filter: {
                attributes: {
                    category: "color",
                }
            },
          },
          {
            destination: "src/tokens/size.ts",
            format: "javascript/es6",
            filter: {
                attributes: {
                    category: "size",
                }
            },
          },
          {
            destination: "src/tokens/typography.ts",
            format: "javascript/es6",
            filter: {
                attributes: {
                    category: "typography",
                }
            },
          },
          {
            destination: "src/components/Button/tokens/light.ts",
            format: "javascript/es6",
            filter: {
                attributes: {
                    category: "button",
                }
            },
          },
        ],
      },
    },
  }).buildAllPlatforms();

const modes = [`color`];

StyleDictionary.extend({
  source: [
    `./style-dictionary/tokens/**/!(${modes.join(`|*.`)}).json5`
  ],
  platforms: {
    js: {
      transforms: ["attribute/cti", "name/cti/snake", "time/seconds", "content/icon", "size/px", "color/css"],
      files: [
        {
          destination: "src/tokens/dark/color.ts",
          format: "javascript/es6",
          filter: {
              attributes: {
                  category: "color",
              }
          },
        },
        {
          destination: "src/components/Button/tokens/dark.ts",
          format: "javascript/es6",
          filter: {
              attributes: {
                  category: "button",
              }
          },
        },
      ],
    },
  },
}).buildAllPlatforms();