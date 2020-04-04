var container = document.querySelector('.container');
var seat = document.querySelector('.row .seat:not(.occupied)');

container.addEventListener('click', function(e){

if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
    console.log(e.target);
    e.target.classList.toggle('selected');
}

})



