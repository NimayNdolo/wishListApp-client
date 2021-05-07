const store = require('./../store')

const onSignUpSuccess = function () {
  $('#signUp-success').text('Welcome!')
  $('#signUp-success-message').addClass('success')
  $('#signUp').trigger('reset')
  $('#signUp').hide()
  $('#changePassword').hide()
}

const onSignInSuccess = function (responseData) {
  $('#signIn-success').text('Signed In! Create a list!')
  $('#signIn-success-message').addClass('success')
  store.user = responseData.user
  $('#signIn').trigger('reset')
  $('#signIn').hide()
  $('#signUp').hide()
  $('#deleteItem').show()
  $('#addItem').show()
  $('#updateItem').show()
  $('#changePassword').show()
  $('#signOut').show()
  $('#index-list').show()
}

const onSignOutSuccess = function () {
  $('#signOut-success').text('Signed out!')
  $('#signOut-success-message').addClass('success')
  $('#signOut').hide()
  $('form').trigger('reset')
  $('#viewItem').hide()
  $('#signIn').show()
  $('#signUp').show()
  $('#deleteItem').hide()
  $('#addItem').hide()
  $('#updateItem').hide()
  $('#changePassword').hide()
}

const onChangePassword = function () {
  $('#changePass-success').text('Yay! Your password has been successfully changed!')

  setTimeout(() =>
    $('#changePass-success').text('')
  , 5000)
}

const onAddItemSuccess = function (responseData) {
  $('#addItem').trigger('reset')
  $('#item-add-message').text("You've added a new item to your list!")
}

const onViewItemSuccess = function (responseData) {
  const list = responseData.list
  console.log(responseData)
  let listHtml = ''
  list.forEach(list => {
    listHtml += `
    <div class="items-view">
        <h1>My List</h1>
          <br>
        <h4>item: ${list.item}</h4>
        <p>ID: ${list._id}</p>
        <button class='delete-button' data-id= ${list._id}>Delete</button>
        <button class='edit-button'>Edit</button>
    </div>
    `
  })
  $('#viewItems').html(listHtml)
}

const onUpdateItem = function () {
  $('#updateItem').hide()
  $('form').trigger('reset')
}

const onDeleteItemSuccess = function () {
$('#item-delete-message').text("Deleted! Let's add something else!")
}

const onError = function () {
  $('.error-message').text('Please try again.')
  $('.error-message').addClass('failure')
  $('form').trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onSignOutSuccess,
  onAddItemSuccess,
  onViewItemSuccess,
  onChangePassword,
  onDeleteItemSuccess,
  onUpdateItem,
  onError
}
