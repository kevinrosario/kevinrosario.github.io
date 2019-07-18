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
    .catch(resetForms)
}

export default handleSubmit
