import Backbone from 'backbone';
import $ from 'jquery';

import userInfoCollection from './userinfo_collection';
import userInfoModel from './userinfo_model.js'

// import userInfoTemp from '.userinfo_collection';
import homeTemp from './views/home';

let Router = Backbone.Router.extend({

// Routing Section
  routes: {
    ""              :  "home",
    "userinfo"      :  "showUserInfo",
    "userinfo/:id"  :  "showInividualUser"
  },

  initialize: function(appElement) {
    this.$appEl = appElement;

    this.userinfo = new userInfoCollection();

    let router = this;

    this.$appEl.on('click', '.todo-list-item', function(event) {
      let $appEl = $(event.currentTarget);
      var userinfoId = $li.data('userInfoId');
      router.navigate('userinfo/${userInfoId}');
      router.showInividualUser(userInfoId);
    });
  },

  home: function() {
    console.log('show home page');
    this.$appEl.html( homeTemp() );
  },

start: function() {
  Backbone.history.start();
}

});

export default Router;
