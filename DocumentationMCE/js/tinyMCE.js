tinymce.init({
  selector: '.tinyText',
  height: 400,
  branding: false,
  // elementpath: false,

  theme: 'modern',
  plugins: [
     'advlist autolink lists link image charmap print preview hr anchor pagebreak',
     'searchreplace visualblocks visualchars code fullscreen',
     'insertdatetime media nonbreaking save table contextmenu directionality',
     'emoticons template paste textcolor colorpicker textpattern imagetools codesample toc help'
   ],
  toolbar: 'undo redo | styleselect | bold italic underline | codesample | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent ',
 // toolbar: false,
  menubar: false,


  content_css: [
    'https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
    // '//www.tinymce.com/css/codepen.min.css'
  ]
});


tinymce.init({
  selector: '.tinyTextSelected',
  height: 350,
  branding: false,
  // elementpath: false,
  // readonly : 1,

  theme: 'modern',
  plugins: [
     'advlist autolink lists link image charmap print preview hr anchor pagebreak',
     'searchreplace visualblocks visualchars code fullscreen',
     'insertdatetime media nonbreaking save table contextmenu directionality',
     'emoticons template paste textcolor colorpicker textpattern imagetools codesample toc help'
   ],
  toolbar: 'undo redo | styleselect | bold italic underline | codesample | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent ',
 // toolbar: false,
  menubar: false,


  content_css: [
    'https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
    // '//www.tinymce.com/css/codepen.min.css'
  ]
});

$(document).on('focusin', function(e) {
    if ($(event.target).closest(".mce-window").length) {
        e.stopImmediatePropagation();
    }
});
