import addons from '@storybook/addons'

/**
 * storybook-addons hook
 */
addons.register('kupibilet.ru/storybook-addon-update-knob', () => {
  const channel = addons.getChannel()

  channel.on('addon:updateKnob:changed', ({ name, type, value }) => {
    channel.emit('addon:knobs:knobChange', { name, type, value })
  })
})
