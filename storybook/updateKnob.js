import addons from '@storybook/addons'

/**
 * You must provide in:
 * @param name the equal name as you specifiend for knob
 * @param type the equal type-function-name as you specified for knob (string, booleam, number, etc)
 * @param value the new value for knob
 */
export default function updateKnob(name, type, value) {
  const channel = addons.getChannel()

  // Date and Moment are instances of Object. But NULL is'nt
  if (type === 'date' && (value instanceof Object)) {
    value = value.valueOf() // eslint-disable-line no-param-reassign
  }

  channel.emit('addon:updateKnob:changed', { name, type, value })
}
