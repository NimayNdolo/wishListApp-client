const store = require('../store')

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

// AUTH

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onError)
}
const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onError)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onError)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.changePassword(formData)
    .then(ui.onChangePassword)
    .catch(ui.onError)
}

// LIST

const onViewAllItems = function (event) {
  event.preventDefault()
  api.viewAllItems()
    .then(ui.onViewItemSuccess)
    .catch(ui.onError)
}

const onAddItem = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.addItem(formData)
    .then(ui.onAddItemSuccess)
    .catch(ui.onError)
}

const onDeleteItem = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.deleteItem(id)
    .then(ui.onDeleteItemSuccess)
    .catch(ui.onError)
}

const onUpdateItem = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  const id = formData.list.id
  api.updateItem(id, formData)
    .then(ui.onUpdateItemSuccess)
    .catch(ui.onError)
}

// COMMENTS

const onCreateComment = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  const id = formData.list.id
  console.log(formData)
  api.createComment(formData, id)
    .then(ui.onCreateCommentSuccess)
    .catch(ui.onError)
}

const onDeleteComment = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  const listid = $(event.target).data('listid')
  console.log(id, listid)
  console.log($(event.target).data('id'))
  console.log($(event.target).data('listid'))
  api.deleteComment(id, listid)
    .then(ui.onDeleteCommentSuccess)
    .catch(ui.onError)
}

module.exports = {
  onSignIn,
  onSignUp,
  onSignOut,
  onViewAllItems,
  onChangePassword,
  onDeleteItem,
  onUpdateItem,
  onAddItem,
  onCreateComment,
  onDeleteComment
}
