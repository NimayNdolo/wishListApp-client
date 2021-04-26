'use strict'

const events = require('./auth/events')

$(() => {
  $('#addItem').hide()
  $('#deleteItem').hide()
  $('#viewItem').hide()
  $('#signOut').hide()
  $('#changePassword').hide()
  $('#signUp').on('submit', events.onSignUp)
  $('#signIn').on('submit', events.onSignIn)
  $('#signOut').on('click', events.onSignOut)
})
