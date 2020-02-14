function enter() {
  if (event.keyCode == 13) {
    document.getElementById('go').click()
  }            
}

function get_url() {
  var input_path = document.getElementById("search_bar").value;
  var url = ""
  if (input_path.length > 4 && input_path.substring(0, 5) == "s3://") {
    url = "https://console.aws.amazon.com/s3/buckets/" + input_path.substring(5,);
  }
  window.location.href = url;
}
