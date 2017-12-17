var tl = new TimelineLite();
$(window).scroll(function () {
   if ($(window).scrollTop() >= $(document).height() - $(window).height() - 400) {
     tl.to(document.getElementById("catchy-title"),1,
   {
     marginTop: '-10vw',
   })

     .to(document.getElementById("long-desc"),1,
   {
     marginTop: '0vw',
   }, 0);
   }
});
