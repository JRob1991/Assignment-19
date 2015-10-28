function userTemplate(user) {
  return `
  <div><img src="images/avatar.png"></img></div>
  <ul>
    <li><i class="fa fa-user"></i>${user.FirstName} ${user.LastName}</li>
    <li><i class="fa fa-phone"></i>${user.PhoneNumber}</li>
    <li><i class="fa fa-location-arrow"></i>${user.Location}</li>
  </ul>
  <span><i class="fa fa-backward"></i><a href="#users">Back</a></span>

  `;
}

export default userTemplate;
