function soon(){
  document.getElementById("nowshowing").style.display = "none";
  document.getElementById("coming-soon").style.display = "inline";
  document.getElementById("now").style.textDecoration = "underline"
  document.getElementById("soon").style.textDecoration = "none"

  TweenMax.staggerFrom(".pandbsoon", 1.5, {
    cycle:{
      y:function(index){
        return index * 400;
      }
    },ease: Back.easeOut
  }, 0.2);
  }

function now(){
  document.getElementById("nowshowing").style.display = "inline";
  document.getElementById("coming-soon").style.display = "none";
  document.getElementById("now").style.textDecoration = "none"
  document.getElementById("soon").style.textDecoration = "underline";

  TweenMax.staggerFrom(".pandb", 1.5, {
    cycle:{
      y:function(index){
        return index * 400;
      }
    },ease: Back.easeOut
  }, 0.2);
  }

window.onload = now()
