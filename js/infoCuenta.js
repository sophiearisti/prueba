$ = function(id) {
    return document.getElementById(id);
  }
  
  var show = function(id) {
    $(id).style.display ='block';
    document.body.classList.add('overlayActive');
}

var hide = function(id) {
    $(id).style.display ='none';
    document.body.classList.remove('overlayActive');
}
