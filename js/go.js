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

function showError(s) {
  var title = document.getElementById("title");
  $(title)
    .stop()
    .animate({color: "red"}, 10)
    .effect("shake", {times: 1}, 120)
    .animate({color: "#232F3E"}, 1200);
}

function getUrl() {
  var input = document.getElementById("search-input").value;
  var url = "";
  const pieces = input.split("//");
  if (pieces.length != 2) {
    showError(input);
  } else {
    const suffix = pieces[pieces.length - 1];
    url = "https://console.aws.amazon.com/s3/buckets/" + suffix;
    window.location.href = url;
  } 
}