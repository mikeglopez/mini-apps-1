var input = document.getElementById('file');
input.style.opacity = 0;

$('form').on('submit', (e) => {
  e.preventDefault();

  var file = document.getElementById('file').files[0];
  if (file) {
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (evt) => {
      var fileString = evt.target.result;
      $.ajax({
        url: '/',
        method: 'POST',
        data: { json: fileString },
        success: function (data) {
          $('#csv').css('display', 'block');
          $('#report').text(data);
        },
        error: function (error) {
          console.log('ERROR', error);
        }
      });
    };
  }
});
