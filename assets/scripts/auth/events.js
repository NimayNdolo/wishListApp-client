const store = require('../store')

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

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
  console.log(formData)
  api.changePassword(formData)
    .then(ui.onChangePassword)
    .catch(ui.onError)
}

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

module.exports = {
  onSignIn,
  onSignUp,
  onSignOut,
  onViewAllItems,
  onChangePassword,
  onDeleteItem,
  onAddItem
}