var modal = document.getElementById("myModal");
var button = document.getElementById("myButton");
var span = document.getElementsByClassName("close")[0];
button.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
function changeFunc() {
  var selectOpt = $('#category').val();
  if (selectOpt=="Courses") {
    $('#evt_type').show();
    $('#issue_dt').show();
    $('#pos').hide();
    $('#comp_dt').hide();
    $('#evt_dt').hide();
  }
else if (selectOpt=="Sports") {
  $('#pos').show();
  $('#comp_dt').show();
  $('#evt_type').hide();
  $('#evt_dt').hide();
  $('#issue_dt').hide();


}
  else {
    $('#evt_type').show();
    $('#evt_dt').show();
    $('#pos').hide();
    $('#issue_dt').hide();
    $('#comp_dt').hide();
  }
}
$('#evt_type').hide();
$('#pos').hide();
$('#evt_dt').hide();
$('#issue_dt').hide();
$('#comp_dt').hide();



