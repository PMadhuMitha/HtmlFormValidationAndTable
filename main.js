function bringSecondPg() {    
    $('.firstPg').addClass('hidden');
    $('.secondPg').removeClass('hidden');
}

function submitDetails(form) {    
   var male=document.getElementById('male').checked;
   var female=document.getElementById('female').checked;
   var india=document.getElementById('india').checked;
   var abroad=document.getElementById('abroad').checked;
    var name=$('#name').val();
    var password=document.getElementById('password');
    var phNum=document.getElementById('phNum');
    var state=document.getElementById('state');
    var date=document.getElementById('date');


   if(male===false && female===false){
       alert("Please select your gender");
   }
   if(india===false && abroad===false){
    alert("Please select your Destination");
}


var table=document.getElementById('myTable');
var row;
$.ajax({
for(i=0;i<=9;i++){
row=table.insertRow(i);
var cell1=row.insertCell(i);

}
})
}


function deleteRow(){
    document.getElementById('myTable').deleteRow();
}