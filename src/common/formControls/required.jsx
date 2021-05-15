import React from 'react'

export const required = value =>  (value ? undefined : 'required')

export const maxLength = (maxLength) => (value) => value.length < maxLength ? undefined : `Maximum length ${maxLength}`
