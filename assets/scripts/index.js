import { handleSubmit, resetForms, flickityParams } from './events.js'

$(() => {
  // Scroll set up
  $('.front-end-gallery').flickity(flickityParams)
  $('.back-end-gallery').flickity(flickityParams)
  $('.miscellaneous-gallery').flickity(flickityParams)
  $('.programming-gallery').flickity(flickityParams)

  // Clear all forms
  $('#reset-forms').on('click', resetForms)
  // Send email
  $('#contact-form').on('submit', handleSubmit)
})
