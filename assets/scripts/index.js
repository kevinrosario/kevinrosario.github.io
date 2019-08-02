import { handleSubmit, resetForms } from './events.js'

$(() => {
  // Clear all forms
  $('#reset-forms').on('click', resetForms)
  // Send email
  $('#contact-form').on('submit', handleSubmit)
})
