function init(){
//add your javascrip between these two lines of code
  var input = document.getElementById('entryinput');
  var button = document.getElementById('entrybutton');
  var h2 = document.getElementById('textoutput');
  
  button.addEventListener('click', function() {
    alert('Yixin: ' + input.value);
  });

  button.addEventListener('click', function() {
    h2.innerHTML = input.value;
  });

}

window.addEventListener('load', init);
