window.onload = function() {

  var fieldsets = document.querySelectorAll('fieldset');
  fieldsets.forEach(
    fieldset => fieldset.hidden = true
  );
  fieldsets[0].hidden = false;
  var currentfield = 0;

  var nextBtns = document.getElementsByClassName('nextBtn');
  Array.from(nextBtns).forEach(
    nextBtn => nextBtn.addEventListener('click', function(event){
      var inputs = fieldsets[currentfield].querySelectorAll('input');
      var validateFlag = true;
      inputs.forEach(validate);
      function validate(item, index) {
        item.nextSibling.textContent = "";
        if (!item.validity.valid) {
          event.preventDefault();
          item.nextSibling.textContent = "generic validation report!";
          validateFlag = false;
        }
      }
      if (validateFlag) {
        fieldsets[currentfield].hidden = true;
        fieldsets[currentfield+1].hidden = false;
        currentfield = currentfield + 1;
      }
    })
  );

  var previousBtns = document.getElementsByClassName('previousBtn');
  Array.from(previousBtns).forEach(
    previousBtn => previousBtn.addEventListener('click', function(event){
      fieldsets[currentfield].hidden = true;
      fieldsets[currentfield-1].hidden = false;
      currentfield = currentfield - 1;
    })
  );

  var submit = document.getElementById('submitBtn');
  submit.addEventListener('click', function(event){
    var inputs = fieldsets[currentfield].querySelectorAll('input');
    var validateFlag = true;
    inputs.forEach(validate);
    function validate(item, index) {
      item.nextSibling.textContent = "";
      if (!item.validity.valid) {
        event.preventDefault();
        item.nextSibling.textContent = "generic validation report!";
        validateFlag = false;
      }
    }
    if (validateFlag) {
      document.getElementById('myform').submit();
      alert("submited! :)");
    }
  })
};
