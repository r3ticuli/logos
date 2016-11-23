//scripts.js

$(document).ready(function(){
  var form = $('#emailForm');
  var submitLabel = $('#submitLabel');
  form.on('submit', function(e) {
    e.preventDefault();
    formData = form.serialize() + '&body=' + $('#emailForm textarea').val();
    $.ajax({
      url: 'https://logosmailer.herokuapp.com/mailer.php',
      type: 'POST',
      data: formData,
      beforeSend: function() {
        submitLabel.css('display','inherit');
        submitLabel.css('color','white');
        submitLabel.html('Sending....');
      },
      success: function(data) {
        form.trigger('reset');
        submitLabel.html('Sent!');
        submitLabel.css('color','chartreuse');
        submitLabel.fadeOut(3000);
      },
      error: function(e) {
        submitLabel.html('Failed to send message!');
        submitLabel.css('color','red');
        console.log(e);
      }
    });
  });
})
