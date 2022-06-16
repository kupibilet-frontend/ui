const StyleDictionary = require('style-dictionary');

const transforms = {
  color: ['attribute/cti', 'name/cti/camel', 'color/css'], 
  component: ['attribute/cti', 'name/cti/snake', 'time/seconds', 'content/icon', 'size/px', 'color/css']
}

const destinationRoot = 'src/components/ThemeProvider/tokens'
const source = {
  common: './style-dictionary/tokens/**/!(*Dark).json5',
  dark: './style-dictionary/tokens/**/!(color|*.).json5'
}

StyleDictionary.registerFilter({
  name: "isButton",
  matcher: function (prop) {
    const buttonTokenCategories = ['buttonComposite', 'buttonDefault', 'buttonIcon']
    return buttonTokenCategories.includes(prop.attributes.category)
  },
});

// typography tokens
StyleDictionary.extend({
  source: [
    source.common
  ],
  platforms: {
    js: {
      transforms: transforms.component,
      files: [
        {
          destination: `${destinationRoot}/typography.ts`,
          format: "javascript/es6",
          filter: {
              attributes: {
                  category: "typography",
              }
          },
        },
      ],
    },
  },
}).buildAllPlatforms();


// light color tokens
StyleDictionary.extend({
  source: [
    source.common
  ],
  platforms: {
    js: {
      transforms: transforms.color,
      files: [
        {
          destination: `${destinationRoot}/light/color.ts`,
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


// dark color tokens
StyleDictionary.extend({
  source: [
    source.dark
  ],
  platforms: {
    js: {
      transforms: transforms.color,
      files: [
        {
          destination: `${destinationRoot}/dark/color.ts`,
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


// light components tokens
StyleDictionary.extend({
  source: [
    source.common
  ],
  platforms: {
    js: {
      transforms: transforms.component,
      files: [
        {
          destination: `${destinationRoot}/light/button.ts`,
          format: "javascript/es6",
          filter: "isButton"
        },
      ],
    },
  },
}).buildAllPlatforms();


// dark components tokens
StyleDictionary.extend({
  source: [
    source.dark
  ],
  platforms: {
    js: {
      transforms: transforms.component,
      files: [
        {
          destination: `${destinationRoot}/dark/button.ts`,
          format: "javascript/es6",
          filter: "isButton"
        },
      ],
    },
  },
}).buildAllPlatforms();


StyleDictionary.registerFilter({
  name: 'isSeat',
  matcher: (prop) => prop.attributes.category === 'airplaneSeat',
})

// light seat tokens
StyleDictionary.extend({
  source: [
    source.common,
  ],
  platforms: {
    js: {
      transforms: transforms.component,
      files: [
        {
          destination: `${destinationRoot}/light/seat.ts`,
          format: 'javascript/es6',
          filter: 'isSeat',
        },
      ],
    },
  },
}).buildAllPlatforms()


// dark seat tokens
StyleDictionary.extend({
  source: [
    source.dark,
  ],
  platforms: {
    js: {
      transforms: transforms.component,
      files: [
        {
          destination: `${destinationRoot}/dark/seat.ts`,
          format: 'javascript/es6',
          filter: 'isSeat',
        },
      ],
    },
  },
}).buildAllPlatforms()


StyleDictionary.registerFilter({
  name: 'isTagLabel',
  matcher: (prop) => prop.attributes.category === 'tagLabel',
})

// light seat tokens
StyleDictionary.extend({
  source: [
    source.common,
  ],
  platforms: {
    js: {
      transforms: transforms.component,
      files: [
        {
          destination: `${destinationRoot}/light/tag.ts`,
          format: 'javascript/es6',
          filter: 'isTagLabel',
        },
      ],
    },
  },
}).buildAllPlatforms()


// dark seat tokens
StyleDictionary.extend({
  source: [
    source.dark,
  ],
  platforms: {
    js: {
      transforms: transforms.component,
      files: [
        {
          destination: `${destinationRoot}/dark/tag.ts`,
          format: 'javascript/es6',
          filter: 'isTagLabel',
        },
      ],
    },
  },
}).buildAllPlatforms()
