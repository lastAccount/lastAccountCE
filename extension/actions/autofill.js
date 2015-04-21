var dummyData = {
  "first": "Jimmy",
  "last": "Gong",
  "username": "jimgong92",
  "email": "gong.jim@gmail.com"
};

console.log('In autofill file');
$(function() {
  console.log('Running autofill');
  var text = "hello jimmy";
  //grab input tag
  // var tag = document.getElementById("myInput")
  // setTimeout(function(){tag.value = text}, 1000)
  // var x = document.body.getElementByName("LABEL")
  // console.log(x)
  var labels = document.getElementsByTagName('LABEL');
  var all = document.getElementsByTagName("*");
  for(var i = 0; i < all.length; i++){
    currentTag = all[i];

    if(tagIsOfTypeInputAndTextOrEmail(currentTag)){
      //1. check input tag name, id and placeholder for keywords
      if(findTagNameKeyword(currentTag)){
        var key = findTagNameKeyword(currentTag);
        currentTag.value = dummyData[key]
      }
      //if above returns undefined run this
      if(findTagIdKeyword(currentTag)){
        var key = findTagIdKeyword(currentTag);
        currentTag.value = dummyData[key]
      }
    }
  }
});

function tagIsOfTypeInputAndTextOrEmail(tag){
  return tag.tagName === "INPUT" && (tag.type === "text" || tag.type === 'email');
}

function findTagNameKeyword(tag){
  var keyword = tag.name;
  var element = findEquivalentKeyword(keyword);
  return element;
}

function findTagIdKeyword(tag){
  var keyword = tag.id;
  var element = findEquivalentKeyword(keyword);
  return element;
}

function findEquivalentKeyword(key){
  var key = key.toLowerCase();
  for(var element in dummyData){
    if(key.indexOf(element) !== -1){
      return element;
    }
  }
}