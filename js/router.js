import Backbone from 'backbone';
import $ from 'jquery';

import UserCollection from './user_collection';
import UserInfoModel from './user_model'

// import userInfoTemp from '.userinfo_collection';
import homeTemp from './views/home';
import userListTemplate from './views/user_list';
import userTemplate from './views/user';

let routes = {
  ""           :  "showHome",
  "users"      :  "showUsers",
  "users/:id"  :  "showInividualUser"
};

function initialize(appElement) {
  this.$appEl = appElement;

  this.users = new UserCollection();

  let router = this;

  this.$appEl.on('click', '.user-list-item', function(event) {
    let $li = $(event.currentTarget);
    var userId = $li.data('user-id');
    router.navigate(`users/${userId}`);
    router.showInividualUser(userId);
  });
}

function showHome() {
  console.log('show home page');
  this.$appEl.html( homeTemp() );
}

function showUsers() {
  console.log('this is the users page');
  this.users.fetch().then(() => {
    this.$appEl.html( userListTemplate(this.users.toJSON()) );
  });
}

function showInividualUser(id) {
  let user = this.users.get(id);

  if (user) {
    this.$appEl.html( userTemplate(user.toJSON()) );
  }
  else {
    user = this.users.add({objectId: id});
    user.fetch().then(() => {
      this.$appEl.html( userTemplate(user.toJSON()) );
    });
  }
}

function start() {
  Backbone.history.start();
}

let Router = Backbone.Router.extend({
  routes,
  initialize,
  showHome,
  showUsers,
  showInividualUser,
  start
});

export default Router;
