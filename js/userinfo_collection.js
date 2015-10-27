import Backbone from 'backbone';
import userInfoModel from './userinfo_model';

// Extend and provide instance/class properties
let userInfoCollection = Backbone.Collection.extend({

  url: 'https://api.parse.com/1/classes/userInfo',

  model: userInfoModel,

  parse: function(data) {
    return data.results;
  }

});

export default userInfoCollection;
