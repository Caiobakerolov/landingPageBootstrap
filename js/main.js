$(document).ready(function() {

  $('#tel').mask('(00) 00000-0000');  
  
  $('form').validate({
    rules: {
      name: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      tel: {
        required: true,
      },
      message: {
        required: true,
      },
    },
    messages: {
      name: '<p style="font-weight: bold; color: purple;">Please, enter your full name</p>',
      email: '<p style="font-weight: bold; color: purple;">Please, enter your full email</p>',
      tel: '<p style="font-weight: bold; color: purple;">Enter your phone number with your country prefix</p>',
      message: '<p style="font-weight: bold; color: purple;">Enter your message so we know what you need</p>'
    },
  });

});

