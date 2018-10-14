
console.log('it works');

// variables
const loader = document.querySelector('.loader');
const header = document.querySelector('header');


header.style.display = 'none';

// close loader + show header
const antiLoader = () => {
  loader.style.display = 'none';
  header.style.display = 'block';
}
    // function delay
    setTimeout(antiLoader, 4500);


window.addEventListener("hashchange", function() { scrollBy(0, -90) })

// close toggle menu on click
$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});
