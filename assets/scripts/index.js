$(() => {
  $('.front-end-gallery').flickity({
    freeScroll: true,
    contain: true,
    pageDots: false,
    cellAlign: 'left'
  })
  $('.back-end-gallery').flickity({
    freeScroll: true,
    contain: true,
    pageDots: false,
    cellAlign: 'left'
  })

  $('.miscellaneous-gallery').flickity({
    freeScroll: true,
    contain: true,
    pageDots: false,
    cellAlign: 'left'
  })

  $('.programming-gallery').flickity({
    freeScroll: true,
    contain: true,
    pageDots: false,
    cellAlign: 'left'
  })

  // Clear all forms
  $('#reset-forms').on('click', event => {
    $('.form-control').val('')
  })

  // Send email
  const handleSubmit = (event) => {
    event.preventDefault()
    const name = $('#customer-name').val()
    const email = $('#customer-email').val()
    const message = $('#customer-messsage').val()
    $.ajax({
      method: 'POST',
      url: 'http://localhost:7165/send',
      data: {
        name: name,
        email: email,
        messsage: message
      }
    }).then((response) => {
      console.log(response)
    }).catch(console.error)
  }
  $('#contact-form').on('submit', handleSubmit)
})
