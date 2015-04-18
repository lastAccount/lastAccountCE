var jquery = {file: "lib/jquery.min.js"};
var autofill = {file: "extension/actions/autofill.js"};

/**
 * Listen to keyboard shortcut to trigger autofill
 */
chrome.commands.onCommand.addListener(function(command) {
  if (command === 'fill-credentials'){
    chrome.tabs.executeScript(null, jquery, function(){
      chrome.tabs.executeScript(null, autofill);
    });
  }
});