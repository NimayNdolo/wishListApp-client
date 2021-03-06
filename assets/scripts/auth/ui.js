const store = require('./../store')

const onSignUpSuccess = function () {
  $('#signUp-success').text('Account created! Sign in.')

  setTimeout(() =>
    $('#signUp-success').text('')
  , 3000)

  $('#signUp').trigger('reset')
  // $('#signUp').hide()
  $('#changePassword').hide()
}

const onSignInSuccess = function (responseData) {
  $('#signIn-success').text('Signed In! Create a list!')

  setTimeout(() =>
    $('#signIn-success').text('')
  , 3000)

  store.user = responseData.user
  $('#signIn').trigger('reset')
  $('#signIn').hide()
  $('#signUp').hide()
  $('#addItem').show()
  $('#signOut').show()
  $('#index-list').show()
  $('.mainbox').hide()
  $('#passChange').show()
  $('#viewItems').show()
}

const onSignOutSuccess = function () {
  $('#signOut-success').text('Signed out!')

  setTimeout(() =>
    $('#signOut-success').text('')
  , 3000)

  $('#signOut').hide()
  $('form').trigger('reset')
  $('#viewItem').hide()
  $('#signIn').show()
  $('#signUp').show()
  $('#deleteItem').hide()
  $('#addItem').hide()
  $('#updateItem').hide()
  $('#changePassword').hide()
  $('#viewItems').hide()
  $('#index-list').hide()
  $('.mainbox').show()
  $('#viewItems').hide()
  $('#passChange').hide()
  $('form').trigger('reset')
  $('#viewItems').html('')
}

const onChangePassword = function () {
  $('#changePass-success').text('Your password has been changed!')

  setTimeout(() =>
    $('#changePass-success').text('')
  , 3000)

  $('form').trigger('reset')
  $('#changePassword').hide()
  $('#viewItems').show()
  $('#index-list').show()
  $('#addItem').show()
}

const onAddItemSuccess = function (responseData) {
  $('#addItem').trigger('reset')
  $('#item-add-message').text('Added! Click, "View List," to see your item!')

  setTimeout(() =>
    $('#item-add-message').text('')
  , 3000)
}

const onViewItemSuccess = function (responseData) {
  const list = responseData.list
  let listHtml = ''
  list.forEach(list => {
    listHtml += `
    <div class="items-view">
          <h3>${list.item}</h3>
          <p>ID: ${list._id}</p>
          <button class='comment-button' data-id= ${list._id}>Comment</button>
          <button class='delete-button' data-id= ${list._id}>Delete</button>
          <button class='edit-button' data-id= ${list._id}>Edit</button>

          <br>
          <br>
              <p class="comment">${list.comments.map(comment => {
                return `-- ${comment.content} &nbsp &nbsp &nbsp &nbsp <button class='delete-comment' data-listid=${list._id} data-id=${comment._id}>Delete</button><br><br>`
              }).join(' ')}</p>
    </div>
    `
  })

  if (listHtml === '') {
    listHtml = 'No items yet. Add to your list!'

    setTimeout(() =>
      $('.error-message').text('')
    , 5000)
  }

  $('#viewItems').html(listHtml)
}

const onUpdateItemSuccess = function () {
  $('form').trigger('reset')
  $('#item-update-message').text('Updated! Click, "View List," to see change.')

  setTimeout(() =>
    $('#item-update-message').text('')
  , 5000)

  $('#updateItem').hide()
}

const onDeleteItemSuccess = function () {
  $('#item-delete-message').text('Deleted! Click, "View List," to see change.')

  setTimeout(() =>
    $('#item-delete-message').text('')
  , 5000)
}

const onError = function () {
  $('.error-message').text('Error. Please try again.')

  setTimeout(() =>
    $('.error-message').text('')
  , 5000)

  $('form').trigger('reset')
}

const onCreateCommentSuccess = function (responseData) {
  console.log('comment has been created')
  $('#addItem').trigger('reset')
  $('#commentBox').show()
  $('#comment-add-message').text('Comment Added! Click, "View List," to see your item!')

  setTimeout(() =>
    $('#comment-add-message').text('')
  , 3000)
}

const onDeleteCommentSuccess = function () {
  console.log('comment has been deleted')
  $('#deleteComment').trigger('reset')
  $('#comment-delete-message').text('Comment Deleted! Click, "View List," to see your item!')
  setTimeout(() =>
    $('#comment-delete-message').text('')
  , 3000)
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onSignOutSuccess,
  onAddItemSuccess,
  onViewItemSuccess,
  onChangePassword,
  onDeleteItemSuccess,
  onUpdateItemSuccess,
  onCreateCommentSuccess,
  onDeleteCommentSuccess,
  onError
}
