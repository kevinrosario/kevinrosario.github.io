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
  // const name = $('#customer-name').val()
  // const email = $('#customer-email').val()
  // const message = $('#customer-messsage').val()
  // $.ajax({
  //   method: 'POST',
  //   url: 'http://localhost:7165/send',
  //   data: {
  //     name: name,
  //     email: email,
  //     messsage: message
  //   }
  // }).then((response) => {
  //   console.log(response)
  // }).catch(console.error)
}

export default handleSubmit
