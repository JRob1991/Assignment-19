function formTemp() {
  return `
    <form>
      <a href="#users" class="back-button"><i class="fa fa-step-backward"></i></a>
      <br>
      First Name
      <br>
      <input type="text" name="FirstName">
      <br>
      Last Name
      <br>
      <input type="text" name="LastName">
      <br>
      Phone
      <br>
      <input type="text" name="PhoneNumber">
      <br>
      Location
      <br>
      <input type="text" name="Location">
      <br>
      Photo URL
      <br>
      <input type="text" name="Photo">
      <br>
      <input id="btnCreateUser" class="buttonUser" type="button" value="Submit" />
    </form>
  `;
}

export default formTemp;
