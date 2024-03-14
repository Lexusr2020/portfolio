

// ------------------------Home Page Intro---------------------------//

$(document).ready(function() {
	
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 4000);
	
});

// ------------------------Hamburger Show---------------------------//

const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')
const Nav = document.getElementById('hideNav')

function toggleButton() {
    navList.classList.toggle('show')
    
}

hamburgerButton.addEventListener('click', toggleButton)


// ------------------------Nav Link Active---------------------------//

function stayActive(a) {
    
    items = document.querySelectorAll('.active-a.active');

    if(items.length) 
    {
        items[0].className = 'active-a';
    }

    a.className = 'active-a active';
 
}

// ------------------------Project Card Flip---------------------------//

const card = document.querySelector(".card__inner");
const card2 = document.querySelector(".card__inner-2");
const card3 = document.querySelector(".card__inner-3");
const card4 = document.querySelector(".card__inner-4");


card.addEventListener("click", function (e) {
  card.classList.toggle('is-flipped');
});

card2.addEventListener("click", function (e) {
  card2.classList.toggle('is-flipped');
});

card3.addEventListener("click", function (e) {
  card3.classList.toggle('is-flipped');
});

card4.addEventListener("click", function (e) {
  card4.classList.toggle('is-flipped');
});


// ------------------------Contact Message Set Method POST---------------------------//

function contactSubmit() {

    getMailInfo();

    var addType = document.getElementById('Submit-form');

    addType.setAttribute("type", "Submit");

}








