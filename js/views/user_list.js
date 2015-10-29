

function makeUserList(users) {
  return users.map(function(user) {
    let photoURL = user.Photo || 'images/avatar.png';
    return `
      <li class="user-list-item" data-user-id="${user.objectId}">
        <img class="avatar" src="${photoURL}" />
        <span class="user-name">${user.FirstName} ${user.LastName}</span>
      </li>
    `;
  }).join('');
}

function usersTemplate(users) {
  return `
    <a href="#users/new"><i class="fa fa-plus plus"></a></i>
    <img src='images/gif.gif'>
    <ul>${makeUserList(users)}</ul>
  `;
}

export default usersTemplate;
