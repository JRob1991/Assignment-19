import $ from 'jquery';

const APP_ID = 'SdHqJCckqdlQtCiKWVSwk0af9Q9GWb2LHp5vnigl';
const API_KEY = 'pAv7Vh2cdJImS3jNLjeIAuZpcYCCZJtOEwwOIcsV';

$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': APP_ID,
    'X-Parse-REST-API-Key': API_KEY
  }
});
