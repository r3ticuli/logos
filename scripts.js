//scripts.js

$(document).ready(function(){
  var form = $('#emailForm');
  var submit = $('#submitEmailForm');
  form.on('submit', function(e) {
    e.preventDefault();
    formData = form.serialize() + '&body=' + $('#emailForm textarea').val();
    $.ajax({
      url: 'https://logosmailer.herokuapp.com/mailer.php',
      type: 'POST',
      dataType: 'json',
      data: formData,
      beforeSend: function() {
        submit.html('Sending....');
      },
      success: function(data) {
        form.trigger('reset');
        submit.html('Sent!');
      },
      error: function(e) {
        console.log(e);
      }
    });
  });
})
