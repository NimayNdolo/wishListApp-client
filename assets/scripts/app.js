'use strict'

const events = require('./auth/events')

$(() => {
  $('#addItem').hide()
  $('#deleteItem').hide()
  $('#updateItem').hide()
  $('#signOut').hide()
  $('#changePassword').hide()
  $('#index-list').hide()
  $('#signUp').on('submit', events.onSignUp)
  $('#signIn').on('submit', events.onSignIn)
  $('#signOut').on('click', events.onSignOut)
  $('#changePassword').on('submit', events.onChangePassword)
  $('#addItem').on('submit', events.onAddItem)
  $('#deleteItem').on('submit', events.onDeleteItem)
  $('#viewItems').on('click', '.delete-button', events.onDeleteItem)
  $('#index-list').on('click', events.onViewAllItems)
  // $('#updateItem').on('submit', events.onUpdateItem)
})
