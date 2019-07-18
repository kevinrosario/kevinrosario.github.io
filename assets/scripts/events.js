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
  let apiUrl
  const apiUrls = {
    production: 'https://stark-anchorage-49208.herokuapp.com/',
    development: 'http://localhost:3000'
  }

  if (window.location.hostname === 'localhost') {
    apiUrl = apiUrls.development
  } else {
    apiUrl = apiUrls.production
  }
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
  }).then((response) => {
    console.log(response)
  }).catch(console.error)
}

export default handleSubmit
