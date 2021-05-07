const config = require('../config')
const store = require('../store')

// AUTH

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

const changePassword = function (formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// LIST

const viewItem = function (id) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/lists/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const viewAllItems = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/lists/',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const addItem = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/lists/',
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateItem = function (id, formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/lists/' + id,
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const deleteItem = function (id) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/lists/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  viewItem,
  updateItem,
  addItem,
  deleteItem,
  viewAllItems
}
