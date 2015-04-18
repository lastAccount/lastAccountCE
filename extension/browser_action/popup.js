$(function(){
  $('#edit-template').click(function(){
    getCurrentTab(function(tab){
      chrome.tabs.executeScript(tab.id ,{
        code: "window.open('http://reddit.com')"
        // code: "document.body.style.backgroundColor='red';"
      });
    });
  });
});


function getCurrentTab(callback) {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function(tabs) {
    var tab = tabs[0];
    callback(tab);
  });
}