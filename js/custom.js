$("#Movies-nav").click(function() {
    $('html,body').animate({
        scrollTop: $("#two-tabs").offset().top},
        'slow');
});

var banner1 = document.getElementById('movie-banner-1');
var banner2 = document.getElementById('movie-banner-2');
var banner3 = document.getElementById('movie-banner-3');
var banner4 = document.getElementById('movie-banner-4');
var banner5 = document.getElementById('movie-banner-5');
var banner6 = document.getElementById('movie-banner-6');
var banner7 = document.getElementById('movie-banner-7');
var banner8 = document.getElementById('movie-banner-8');
var banner9 = document.getElementById('movie-banner-9');
var banner10 = document.getElementById('movie-banner-10');
var bannertl = new TimelineMax({ repeat: -1, repeatDelay: 3 });

var showingmovie = document.getElementById("Showing-movie");
var comingmovie = document.getElementById("Coming-movie");
var showingtab = document.getElementById("showing-tab");
var comingtab = document.getElementById("coming-tab");


window.onload = function Init(){
  showingmovie.style.display = 'inline';
  comingmovie.style.display = 'none';
  nowShowing();
  }

bannertl.add( TweenMax.to(banner1, 1, {
          delay: 0.5,
          webkitClipPath: 'none',
          clipPath: 'none',
          marginRight: '0vw'
        }));

bannertl.add( TweenMax.to(banner1, 1, {
          delay:2,
          marginLeft: '-100.25vw',
          marginRight: '-20vw'
          }))
          .add( TweenMax.to(banner1, 0.1, {
            webkitClipPath: 'inset(33.33vw 0vw 100vw 0vw)',
            clipPath: 'inset(33.33vw 0vw 100vw 0vw)'
          }))
        .add( TweenMax.to(banner2, 0.2, {
          webkitClipPath: 'none',
          clipPath: 'none',
        }))
        .add( TweenMax.to(banner2, 0.8, {
          marginRight: '0vw',
          marginLeft: '20vw'
        }));

bannertl.add( TweenMax.to(banner2, 1, {
          delay:2,
          marginLeft: '-100.25vw',
          marginRight: '-20vw'
          }))
        .add( TweenMax.to(banner2, 0.1, {
          webkitClipPath: 'inset(33.33vw 0vw 100vw 0vw)',
          clipPath: 'inset(33.33vw 0vw 100vw 0vw)'
          }))
        .add( TweenMax.to(banner3, 0.2, {
          webkitClipPath: 'none',
          clipPath: 'none',
          }))
        .add( TweenMax.to(banner3, 0.8, {
          marginRight: '0vw',
          marginLeft: '40vw'
        }));

bannertl.add( TweenMax.to(banner3, 1, {
          delay:2,
          marginLeft: '-100.25vw',
          marginRight: '-20vw'
          }))
        .add( TweenMax.to(banner3, 0.1, {
          webkitClipPath: 'inset(33.33vw 0vw 100vw 0vw)',
          clipPath: 'inset(33.33vw 0vw 100vw 0vw)'
          }))
        .add( TweenMax.to(banner4, 0.2, {
          webkitClipPath: 'none',
          clipPath: 'none',
          }))
        .add( TweenMax.to(banner4, 0.8, {
          marginRight: '0vw',
          marginLeft: '60vw'
          }));

bannertl.add( TweenMax.to(banner4, 1, {
          delay:2,
          marginLeft: '-100.25vw',
          marginRight: '-20vw'
          }))
        .add( TweenMax.to(banner4, 0.1, {
          webkitClipPath: 'inset(33.33vw 0vw 100vw 0vw)',
          clipPath: 'inset(33.33vw 0vw 100vw 0vw)'
          }))
        .add( TweenMax.to(banner5, 0.2, {
          webkitClipPath: 'none',
          clipPath: 'none',
          }))
        .add( TweenMax.to(banner5, 0.8, {
          marginRight: '0vw',
          marginLeft: '80vw'
          }));

function showAll() {
  var minimizebutton = document.getElementById('minimize-button');
  if (minimizebutton.innerHTML == 'Show All') {
    bannertl.pause(0);
    minimizebutton.innerHTML = 'Run Banners';
    console.log('show');
  } else {
    bannertl.play(0.5);
    minimizebutton.innerHTML = 'Show All';
    console.log('run');
  }
}

function nowShowing(){
  comingmovie.style.display = 'none';
  showingmovie.style.display = 'inline';
  comingtab.classList.toggle('active');
  showingtab.classList.toggle('active');

  TweenLite.from(document.querySelectorAll(".movie-poster-container"), 1,
              {
                margin: '500px 20vw 20px 20vw'
              });
}

function upComing(){
  comingmovie.style.display = 'inline';
  showingmovie.style.display = 'none';
  comingtab.classList.toggle('active');
  showingtab.classList.toggle('active');

  TweenLite.from(document.querySelectorAll(".movie-poster-left"), 1,
              {
                margin: '50px 0vw 20px 20vw'
              });
  TweenLite.from(document.querySelectorAll(".advance-ticket"), 1,
              {
                margin: '50px 0vw 20px 20vw'
              });
  TweenLite.from(document.querySelectorAll(".title-under-left"), 1,
              {
                margin: '50px 0vw 20px 20vw'
              });
}














/*click on banner to expand
function showAll(){
  showAllClicked = true;
  bannertl.pause(0);
  bannertl.remove();
  banner1.style.display = "inline";
  banner1.style.clipPath = "inset(0vw 80vw 0vw 0vw)";
  banner1.style.marginRight = "-100.25vw";
  banner2.style.display = "inline";
  banner2.style.clipPath = "inset(0vw 60vw 0px 20vw)";
  banner2.style.marginRight = "-100.25vw";
  banner3.style.display = "inline";
  banner3.style.clipPath = "inset(0vw 40vw 0px 40vw)";
  banner3.style.marginRight = "-100.25vw";
  banner4.style.display = "inline";
  banner4.style.clipPath = "inset(0vw 20vw 0px 60vw)";
  banner4.style.marginRight = "-100.25vw";
  banner5.style.display = "inline";
  banner5.style.clipPath = "inset(0vw 0vw 0px 80vw)";
  banner5.style.marginRight = "-100.25vw";
  banner6.style.display = "none";
  banner7.style.display = "none";
  banner8.style.display = "none";
  banner9.style.display = "none";
  banner10.style.display = "none";
}

if (showAllClicked == true) {
  function expandBanner1(){
    banner1.style.clipPath = "none";
    banner1.style.marginRight = "0vw";
    banner1.style.transition = "all 1s";
  };

  function expandBanner2(){
    banner2.style.clipPath = "none";
    banner2.style.marginRight = "0vw";
    banner2.style.transition = "all 1s";
    banner1.style.display = "none";
  };

  function expandBanner3(){
    banner3.style.clipPath = "none";
    banner3.style.marginRight = "0vw";
    banner3.style.transition = "all 1s";
    banner1.style.display = "none";
    banner2.style.display = "none";
  };

  function expandBanner4(){
    banner4.style.clipPath = "none";
    banner4.style.marginRight = "0vw";
    banner4.style.transition = "all 1s";
    banner1.style.display = "none";
    banner2.style.display = "none";
    banner3.style.display = "none";
  };

  function expandBanner5(){
    banner5.style.clipPath = "none";
    banner5.style.marginRight = "0vw";
    banner5.style.transition = "all 1s";
    banner1.style.display = "none";
    banner2.style.display = "none";
    banner3.style.display = "none";
    banner4.style.display = "none";
  };

}*/
