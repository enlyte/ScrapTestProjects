tinymce.init({
  selector: 'textarea',
  height: 500,
  menubar: false,
  plugins: [
    'advlist autolink lists link image charmap print preview anchor',
    'searchreplace visualblocks code fullscreen',
    'insertdatetime media table contextmenu paste code'
  ],
  toolbar: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
  content_css: [
    'https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
    // '//www.tinymce.com/css/codepen.min.css'
  ]
});

// document.getElementById('mce-notification-inner').innerHTML = "";
// document.getElementById('mce-notification-inner').style.hidden = true;
