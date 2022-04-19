
let navItems = document.querySelectorAll(".nav-item");
let navLabel = document.querySelectorAll(".nav-label");
let sidebar = document.querySelector('.side-bar');
let mainSection = document.querySelector('.img-prev');

for (navItem of navItems){



navItem.addEventListener("mouseover" ,(e)=>{
    navLabel[0].style.opacity = 1
    navLabel[1].style.opacity = 1
    navLabel[2].style.opacity = 1
    navLabel[3].style.opacity = 1
    navLabel[4].style.opacity = 1

})

navItem.addEventListener("mouseout" ,(e)=>{
    navLabel[0].style.opacity = 0
    navLabel[1].style.opacity = 0
    navLabel[2].style.opacity = 0
    navLabel[3].style.opacity = 0
    navLabel[4].style.opacity = 0

})




}




$.fn.jQuerySimpleCounter = function( options ) {
    let settings = $.extend({
        start:  0,
        end:    100,
        easing: 'swing',
        duration: 400,
        complete: ''
    }, options );

    let thisElement = $(this);

    $({count: settings.start}).animate({count: settings.end}, {
        duration: settings.duration,
        easing: settings.easing,
        step: function() {
            let mathCount = Math.ceil(this.count);
            thisElement.text(mathCount);
        },
        complete: settings.complete
    });
};


$('#number1').jQuerySimpleCounter({end: 12,duration: 3000});
$('#number2').jQuerySimpleCounter({end: 55,duration: 3000});
$('#number3').jQuerySimpleCounter({end: 359,duration: 2000});
$('#number4').jQuerySimpleCounter({end: 246,duration: 2500});


let displayState = 1
  function hideSideBar(){
    if (displayState === 1){
        sidebar.style.display="none";
        mainSection.classList.remove('col-lg-8');
        mainSection.classList.add('col-lg-12');
        displayState = 0;
    }else{
        sidebar.style.display="block";
        mainSection.classList.remove('col-lg-12');
        mainSection.classList.add('col-lg-8');
        displayState = 1;}
  }
 

