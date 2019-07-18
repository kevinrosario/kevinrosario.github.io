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
  console.log(apiUrl)
  $.ajax({
    method: 'POST',
    url: `${apiUrl}/send`,
    data: {
      name: name,
      email: email,
      message: message
    }
  }).then((response) => {
    console.log(response)
  }).catch(console.error)
}

export default handleSubmit
