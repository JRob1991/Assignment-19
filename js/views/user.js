
function userTemplate(user) {
  let photoURL = user.Photo || 'images/avatar.png';
  return `
  <div><img class="avatarlrg" src="${photoURL}" />
  <a href="#users"><i class="fa fa-backward user-float"></i></a>
  </div>
  <ul>
    <li class="user-line"><i class="fa fa-user"></i>${user.FirstName} ${user.LastName}</li>
    <li class="user-line"><i class="fa fa-phone"></i>${user.PhoneNumber}</li>
    <li class="user-line"><i class="fa fa-location-arrow"></i>${user.Location}</li>
  </ul>

  `;
}

export default userTemplate;
