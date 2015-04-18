$(function(){
  /**
   * Redirect to extension site
   */
  $('#edit-template').click(function(){
    chrome.tabs.executeScript(null, {
      file: "extension/browser_action/redirect.js"
    });
  });

  /**
   * Autofill current tab's form
   */
  $('#autofill').click(function(){
    chrome.tabs.executeScript(null, {

    });
  });
});