const config = require('../config')
const store = require('../store')

const signUp = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: formData
  })
}

const signIn = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: formData
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const viewItem = function (id) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/lists/' + id
  })
}

const changePassword = function (id, formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/lists/' + id,
    data: formData
  })
}

const addItem = function (id, formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/lists/' + id,
    data: formData
  })
}

const deleteItem = function (id) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/lists/' + id
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  viewItem,
  addItem,
  deleteItem,
  changePassword
}
