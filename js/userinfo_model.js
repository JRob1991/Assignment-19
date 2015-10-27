import Backbone from 'Backbone';

let userInfoModel = Backbone.Model.extend({

  urlRoot: 'https://api.parse.com/1/classes/Todo',

  idAttribute: 'objectId'

});

export default userInfoModel;
