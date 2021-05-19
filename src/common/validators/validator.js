export const required = value => value ? undefined : 'Required'

const maxLength = max => value => value && value.length < max ? undefined : `Maximal length should be less then ${max}`
export const maxLength30 = maxLength(30)

export const minLength = (min) => (value) => value && value.length > min ? undefined : `Minimum length should be more then ${min}`
export const minLength4 = minLength(4)

export const number = value => isNaN(Number(value)) ? 'Must be a number' : undefined

export const alphaNumeric = value => value && /[^a-zA-Z0-9 ]/i.test(value) ? 'Only alphaNumeric characters' : undefined

