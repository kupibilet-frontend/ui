import addons from '@storybook/addons'

/**
 * You must provide in:
 * @param name the equal name as you specifiend for knob
 * @param type the equal type-function-name as you specified for knob (string, booleam, number, etc)
 * @param value the new value for knob
 */
export default function updateKnob(name, type, value) {
  const channel = addons.getChannel()

  channel.emit('addon:updateKnob:changed', { name, type, value })
}

/**
 * storybook-addons hook
 */
addons.register('kupibilet.ru/storybook-addon-update-knob', () => {
  const channel = addons.getChannel()

  channel.on('addon:updateKnob:changed', ({ name, type, value }) => {
    channel.emit('addon:knobs:knobChange', { name, type, value })
  })
})
