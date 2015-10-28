import Backbone from 'backbone';
import UserModel from './user_model';

// Extend and provide instance/class properties
let UserCollection = Backbone.Collection.extend({

  url: 'https://api.parse.com/1/classes/FirstName',

  model: UserModel,

  parse: function(data) {
    return data.results;
  }

});

export default UserCollection;
