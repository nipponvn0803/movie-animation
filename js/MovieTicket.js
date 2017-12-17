
function showDate(){
  document.getElementById('next1').style.display = "block";
  var x = document.getElementsByClassName('time');
  x[0].style.display = 'block';
  x[1].style.display = 'block';
  TweenLite.from(document.querySelectorAll(".time"),1,{
    marginTop: '100px;'
  })
}

function showStep2(){
  var step2 =document.getElementById('step-2');
  step2.style.opacity = '1';
  step2.style.transform = "rotateY(0deg)";
  step2.style.backgroundColor = "transparent";
}

function cancelStep2(){
  var step2 =document.getElementById('step-2');
  step2.style.opacity = '0';
  step2.style.transform = "rotateY(180deg)";
  step2.style.backgroundColor = "white";
}

function showStep3(){
  var step3 =document.getElementById('step-3');
  step3.style.opacity = '1';
  step3.style.transform = "rotateY(0deg)";
  step3.style.backgroundColor = "transparent";
}

function cancelStep3(){
  var step3 =document.getElementById('step-3');
  step3.style.opacity = '0';
  step3.style.transform = "rotateY(180deg)";
  step3.style.backgroundColor = "white";
}

var adult = 0;
var child = 0;

function incrementValue()
{
  if (adult>=0) {
    adult=parseInt(adult)+parseInt(1);
     var adultnumber=document.getElementById("adult-number");
     adultnumber.innerHTML= adult + " Adults (€12)";
     var total = adult *12 + child *8;
     document.getElementById('totalamount').innerHTML = "Total: €" + total;
  }

}

function decrementValue()
{
  if (adult>0) {
    adult=parseInt(adult)-parseInt(1);
     var adultnumber=document.getElementById("adult-number");
     adultnumber.innerHTML= adult + " Adults (€12)";
     var total = adult *12 + child *8;
     document.getElementById('totalamount').innerHTML = "Total: €" + total;
  }

}

function incrementChild()
{
  if (child>=0) {
    child=parseInt(child)+parseInt(1);
     var childnumber=document.getElementById("child-number");
     childnumber.innerHTML= child + " Children (€8)";
     var total = adult *12 + child *8;
     document.getElementById('totalamount').innerHTML = "Total: €" + total;
  }

}

function decrementChild()
{
  if (child>0) {
    child=parseInt(child)-parseInt(1);
     var childnumber=document.getElementById("child-number");
     childnumber.innerHTML= child + " Children (€8)";
     var total = adult *12 + child *8;
     document.getElementById('totalamount').innerHTML = "Total: €" + total;
  }

}

function show(){
  console.log("show");
  document.getElementById("popup").classList.toggle("show");
  document.getElementById("popupbutton").classList.toggle("hiddenbutton");
}
