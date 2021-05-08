'use strict'

const events = require('./auth/events')

$(() => {
  $('#addItem').hide()
  $('#deleteItem').hide()
  $('#updateItem').hide()
  $('#signOut').hide()
  $('#viewItems').hide()
  $('#changePassword').hide()
  $('#index-list').hide()
  $('#passChange').hide()
  $('#signUp').on('submit', events.onSignUp)
  $('#signIn').on('submit', events.onSignIn)
  $('#signOut').on('click', events.onSignOut)
  $('#changePassword').on('submit', events.onChangePassword)
  $('#addItem').on('submit', events.onAddItem)
  $('#deleteItem').on('submit', events.onDeleteItem)
  $('#viewItems').on('click', '.delete-button', events.onDeleteItem)
  $('#index-list').on('click', events.onViewAllItems)

  $('#viewItems').on('click', '.edit-button', function () {
    $('#updateItem').show()
  })

  $('#passChange').on('click', function () {
    $('#changePassword').show()
    $('#addItem').hide()
    $('#index-list').hide()
    $('#viewItems').hide()
  })

  $('#updateItem').on('submit', events.onUpdateItem)
})
