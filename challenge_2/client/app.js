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
        success: (data) => {
          $('#csv').css('display', 'block');
          $('#download').css('display', 'block');
          $('#report').text(data);
          downloadCSV(data);
        },
        error: (error) => {
          console.log('ERROR', error);
        }
      });
    };
  }
});

var downloadCSV = (csv) => {
  var filename = 'export.csv';
  csv = `data:text/csv;charset=utf-8,${csv}`;
  var data = encodeURI(csv);
  document.getElementById('download').setAttribute('href', data);
  document.getElementById('download').setAttribute('download', filename);;
}