const StyleDictionary = require("style-dictionary");

module.exports = {
    source: ["./style-dictionary/tokens/**/*.json5"],
    platforms: {
      js: {
        transforms: ["attribute/cti", "name/cti/camel", "time/seconds", "content/icon", "size/px", "color/css"],
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
            destination: "src/tokens/color.ts",
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
            destination: "src/components/Button/ButtonTokens.ts",
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
  };