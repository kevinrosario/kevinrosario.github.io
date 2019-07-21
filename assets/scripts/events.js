import apiUrl from './config.js'
export const flickityParams = {
  freeScroll: true,
  contain: true,
  pageDots: false,
  cellAlign: 'left'
}

export const resetForms = event => {
  $('.form-control').val('')
}

const addSuccess = event => {
  $('.form-control').addClass('is-valid')
  $('#customer-messsage').val('Thanks for submitting your message!')
  setTimeout(() => {
    resetForms()
    $('.form-control').removeClass('is-valid')
  }, 3000)
}

const addFailure = event => {
  $('.form-control').addClass('is-invalid')
  $('#customer-messsage').val('Ups! Something happened')
  setTimeout(() => {
    resetForms()
    $('.form-control').removeClass('is-invalid')
  }, 3000)
}

export const handleSubmit = (event) => {
  event.preventDefault()
  const name = $('#customer-name').val()
  const email = $('#customer-email').val()
  const message = $('#customer-messsage').val()
  $.ajax({
    method: 'POST',
    url: `${apiUrl}/send`,
    data: {
      name: name,
      email: email,
      message: message
    }
  })
    .then(resetForms)
    .then(addSuccess)
    .catch(() => {
      resetForms()
      addFailure()
    })
}

export default handleSubmit
