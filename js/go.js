function autoSelect() {
  const input = document.getElementById("search-input");
  input.focus();
  input.select();
}

function enter() {
  if (event.keyCode == 13) {
    document.getElementById("go").click()
  }            
}

function showError() {
  var title = document.getElementById("title");
  var text = document.getElementById("search-input");
  $(title)
    .stop()
    .animate({color: "red"}, 10)
    .effect("shake", {times: 1}, 120)
    .animate({color: "#232F3E"}, 1200);
  $(text)
    .stop()
    .animate({color: "red"}, 10)
    .animate({color: "#232F3E"}, 1200);
}

function showSuccess() {
  document.getElementById("search-input").style.color = "#00B140";
}

function getUrl() {
  var input = document.getElementById("search-input").value;
  const pieces = input.split("://");
  if (pieces.length != 2) {
    showError();
  } else {
    const suffix = pieces[pieces.length - 1];
    const url = "https://console.aws.amazon.com/s3/buckets/" + suffix;
    showSuccess();
    window.location.href = url;
  } 
}