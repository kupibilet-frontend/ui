const StyleDictionary = require('style-dictionary')

const transforms = {
  color: ['attribute/cti', 'name/cti/camel', 'color/css'],
  component: ['attribute/cti', 'name/cti/snake', 'time/seconds', 'content/icon', 'size/px', 'color/css'],
}

const destinationRoot = 'src/components/ThemeProvider/tokens'
const source = {
  common: './style-dictionary/tokens/**/!(*Dark).json5',
  dark: './style-dictionary/tokens/**/!(color|*.).json5',
}

// type TTheme = 'dark' | 'light'

// type TComponents = 'checkbox' | 'radio' | 'switcher' | 'input' | 'tag' | 'seat' | 'button'

// type TConfigs = {
//   themes: TTheme[]
//   filterName: string
//   matcher: (prop: any) => void
//   destination: (theme: TTheme) => `${typeof destinationRoot}/${TComponents}.ts` | `${typeof destinationRoot}/${TTheme}/${TComponents}.ts`
// }

const defaultMatcher = (category) => (prop) => prop.attributes.category === category
const categoriesMatcher = (categories) => (prop) => categories.includes(prop.attributes.category)

// yarn tokens крашится на типах, но вы можете их использовать при добавлении новых токенов
// const configs: TConfigs[] = [
const configs = [
  {
    themes: ['light'],
    filterName: 'isColor',
    transform: transforms.component,
    matcher: defaultMatcher('typography'),
    destination: () => `${destinationRoot}/typography.ts`,
  },
  {
    themes: ['light', 'dark'],
    filterName: 'isColor',
    transform: transforms.color,
    matcher: defaultMatcher('color'),
    destination: (theme) => `${destinationRoot}/${theme}/color.ts`,
  },
  {
    themes: ['light', 'dark'],
    filterName: 'isButton',
    transform: transforms.component,
    matcher: categoriesMatcher(['buttonComposite', 'buttonDefault', 'buttonIcon']),
    destination: (theme) => `${destinationRoot}/${theme}/button.ts`,
  },
  {
    themes: ['light', 'dark'],
    filterName: 'isSeat',
    transform: transforms.component,
    matcher: defaultMatcher('airplaneSeat'),
    destination: (theme) => `${destinationRoot}/${theme}/seat.ts`,
  },
  {
    themes: ['light', 'dark'],
    filterName: 'isTagLabel',
    transform: transforms.component,
    matcher: defaultMatcher('tagLabel'),
    destination: (theme) => `${destinationRoot}/${theme}/tag.ts`,
  },
  {
    themes: ['light', 'dark'],
    filterName: 'isInput',
    transform: transforms.component,
    matcher: categoriesMatcher(['input', 'inputHint', 'inputLabel']),
    destination: (theme) => `${destinationRoot}/${theme}/input.ts`,
  },
  {
    themes: ['light'],
    filterName: 'isSwitcher',
    transform: transforms.component,
    matcher: defaultMatcher('switcher'),
    destination: () => `${destinationRoot}/switcher.ts`,
  },
  {
    themes: ['light'],
    filterName: 'isCheckbox',
    transform: transforms.component,
    matcher: defaultMatcher('checkBox'),
    destination: () => `${destinationRoot}/checkbox.ts`,
  },
  {
    themes: ['light'],
    filterName: 'isRadio',
    transform: transforms.component,
    matcher: defaultMatcher('radioButton'),
    destination: () => `${destinationRoot}/radio.ts`,
  },
]

configs.forEach(({ themes, filterName, transform, matcher, destination }) => {
  StyleDictionary.registerFilter({
    name: filterName,
    matcher,
  })

  const sourceMapper = {
    light: source.common,
    dark: source.dark,
  }

  themes.forEach((theme) => {
    StyleDictionary.extend({
      source: [
        sourceMapper[theme],
      ],
      platforms: {
        js: {
          transforms: transform,
          files: [
            {
              destination: destination(theme),
              format: 'javascript/es6',
              filter: filterName,
            },
          ],
        },
      },
    }).buildAllPlatforms()
  })
})
