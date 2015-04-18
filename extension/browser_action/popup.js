var jquery = {file: "lib/jquery.min.js"};
var autofill = {file: "extension/actions/autofill.js"};
var redirect = {file: "extension/actions/redirect.js"};

$(function(){
  /**
   * Redirect to extension site
   */
  $('#edit-template').click(function(){
    chrome.tabs.executeScript(null, redirect);
  });

  /**
   * Autofill current tab's form
   */
  $('#autofill').click(function(){
    chrome.tabs.executeScript(null, jquery, function(){
      chrome.tabs.executeScript(null, autofill);
    });
  });
});