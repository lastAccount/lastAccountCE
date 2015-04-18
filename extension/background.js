chrome.commands.onCommand.addListener(function(command) {
  if (command === 'fill-credentials'){
    chrome.tabs.executeScript(null, {
      file: "extension/actions/autofill.js"
    });
  }
});
