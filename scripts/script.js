// schedule view functions
function toggleListView(){
    var list = document.getElementById("listView");
    var btn= document.getElementById("scheduleButton");
    var monthName = document.getElementById("monthDropdown");
    var grid = document.getElementById("scheduleGridView");

  if(list.style.display=="none"){
        list.style.display="";
        monthName.style.display="";
        grid.style.display = "none";
        btn.innerText="Calendar View";
  }else {
      list.style.display="none";
      btn.innerText="List View";  
      monthName.style.display="none";
  }
  
  toggleCalendarView();
}

function toggleCalendarView(){
  var calView = document.getElementById("calendarView");
  var filename = "../html/scheduleGridView.html";
  $("#scheduleGridView").load(filename);
  // calView.classList.toggle("calendarView");
}

  
