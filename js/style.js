function myFunction(){
    var x = document.getElementById('myLinks');
    if (x.style.display === 'block') {
        x.style.display = 'none';
    }else{
        x.style.display = 'block';
    }
}

$(document).ready(function () {
    $('.js--section-features').waypoint(function(direction){
        if (direction == "down") {
            $('nav').addClass('sticky');
        }else {
            $('nav').removeClass('sticky');
        }
    })
})


