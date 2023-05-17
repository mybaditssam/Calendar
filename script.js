//sets variable for current date/time

var rightNow = dayjs().hour()



$(function () {
//sets current date to header
$("#currentDay").text("Today is:  " + dayjs().format("DD-MMM-YY"))

$(".saveBtn").on("click",function(){
  var userData = $(this).siblings(".description").val()
  var timeBlock = $(this).parent().attr("id").split("-")[1]
  localStorage.setItem(timeBlock,userData)
})


for(let i=6; i<=19; i++){
  var dataStored = localStorage.getItem(i) 
  $("#hour-"+i).children(".description").val(dataStored)
  if(i<rightNow){
    $("#hour-"+i).children(".description").addClass("past")
  }else if(i == rightNow){
    $("#hour-"+i).children(".description").addClass("present")
  }else{
    $("#hour-"+i).children(".description").addClass("future")
  }
}
});

// Save btn function and query selector set to saveBtn
$(".saveBtn").on("click",function(){
var userData = $(this).siblings(".description").val()
var timeBlock = $(this).parent().attr("id").split("-")[1]
localStorage.setItem(timeBlock,userData)
});