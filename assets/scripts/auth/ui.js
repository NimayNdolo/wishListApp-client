const store = require('./../store')

const onSignUpSuccess = function () {
  $('#signUp-success').text("Welcome! You're signed up!")
  $('#signUp-success-message').addClass('success')
  $('#signUp').trigger('reset')
  $('#signUp').hide()
}

const onSignInSuccess = function (responseData) {
  $('#signIn-success').text('Signed In!')
  $('#signIn-success-message').addClass('success')
  store.user = responseData.user
  $('#signIn').trigger('reset')
  $('#signIn').hide()
  $('#signUp').hide()
  $('#deleteItem').show()
  $('#addItem').show()
  $('#changePassword').show()
  $('#signOut').show()
}

const onSignOutSuccess = function () {
  $('#signOut-success').text('Signed out!')
  $('#signOut-success-message').addClass('success')
  $('form').trigger('reset')
  $('#viewItem').hide()
  $('#signIn').show()
  $('#signUp').show()
  $('#signOut-success').text('Signed out!').show()
  $('#signOut-success-message').addClass('success')
}

const onViewListSuccess = function () {
  $('#viewItem').show()
}

const onError = function () {
  $('#error-message').text('Please try again.')
  $('#error-message').addClass('failure')
  $('form').trigger('reset')
  $('#newGame').hide()
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onSignOutSuccess,
  onViewListSuccess,
  onError
}
