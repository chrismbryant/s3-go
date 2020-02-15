function autoSelect() {
  const input = document.getElementById("search-input");
  input.focus();
  input.select();
}

function enter() {
  if (event.keyCode == 13) {
    document.getElementById('go').click()
  }            
}

function getUrl() {
  var input = document.getElementById("search-input").value;
  var url = ""
  if (input.length > 4 && input.substring(0, 5) == "s3://") {
    url = "https://console.aws.amazon.com/s3/buckets/" + input.substring(5,);
  }
  window.location.href = url;
}