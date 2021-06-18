'use strict'

const events = require('./auth/events')

$(() => {
  $('#addItem').hide()
  $('#deleteItem').hide()
  $('#deleteComment').hide()
  $('#updateItem').hide()
  $('#addComment').hide()
  $('#delete-comment').hide()
  $('#signOut').hide()
  $('#viewItems').hide()
  $('#viewItems').hide('#commentBox')
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
  $('#viewItems').on('click', '.delete-comment', events.onDeleteComment)
  $('#deleteComment').on('submit', events.onDeleteComment)
  $('#index-list').on('click', events.onViewAllItems)
  $('#addComment').on('submit', events.onCreateComment)

  $('#addComment').on('submit', function (event) {
    $('form').trigger('reset')
    $('#addComment').hide()
    $('#deleteComment').hide()
    $('#viewItems').show('#commentBox')
  })

  $('#viewItems').on('click', '.edit-button', function () {
    $('#updateItem').show()
  })

  $('#viewItems').on('click', '.comment-button', function () {
    $('#addComment').show()
    $('#deleteComment').show()
  })

  $('#passChange').on('click', function () {
    $('#changePassword').show()
    $('#addItem').hide()
    $('#index-list').hide()
    $('#viewItems').hide()
  })

  $('#updateItem').on('submit', events.onUpdateItem)
})
