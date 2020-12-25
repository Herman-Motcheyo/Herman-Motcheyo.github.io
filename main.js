var btn= document.getElementById("done");
btn.addEventListener("click",AddRow);
var row=1;
function AddRow()
{
 	 var work=document.getElementById("work").value;
  var time=document.getElementById("time").value;

  var day = document.getElementById("day").value;

  if(!work || !time || !day)
  {
    alert("Please fill all boxes! thank!")
    return;
  }
  var mytable= document.getElementById("mytable");
  var newRow= mytable.insertRow(row);
  var cell1= newRow.insertCell(0);
  var cell2= newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);

  cell1.innerHTML = day;
  cell2.innerHTML = time;
  cell3.innerHTML =work;


  row++;
  work.reset();
  day.reset();
}
var complete= document.getElementById("complete");
complete.addEventListener("click",alertt);
function alertt()
{
  alert("Good! Take a ScreenShot of your Time Table and follow this. Best Of Luck.")
}
