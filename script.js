// JavaScript
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function() {
    this.classList.toggle('is-active');
    const mobileNav = document.querySelector('.mobile-nav');
    mobileNav.classList.toggle('is-active');

    if (this.classList.contains('is-active')) {
        this.style.position = 'fixed';
        this.style.top = '16px'; // Adjust as needed
        this.style.right = '50px'; // Adjust as needed
    } else {
        this.style.position = 'initial';
        this.style.top = '80px';
        this.style.right = 'auto';
    }
});

	










/*Intelligent Writing and Flexible Pricing section*/

const jsTabs = document.querySelectorAll('.js-tabs')


jsTabs.forEach((jsTab) =>{
    const tabs = jsTab.querySelectorAll("[data-tab-target]");
    const tabContents = jsTab.querySelectorAll("[data-tab-content]");

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.tabTarget);
        tabContents.forEach((tabContent) => {
            tabContent.classList.remove("active");
        });
        tabs.forEach((tab) => {
            tab.classList.remove("active");
        });
        tab.classList.add("active");
        target.classList.add("active");
        });
    });
})

/*Custom Templates-filter and load more*/
const filterButtons = document.querySelectorAll('.filtermenu li')
const filterItems = document.querySelectorAll('.post')


filterButtons.forEach((button) =>{
    button.addEventListener('click', () =>{
        renderFilterItems(button.dataset.filter)
    })
})

function renderFilterItems(query){
    filterItems.forEach((item) =>{
        if(query === 'all'){
            item.classList.remove('hidden')
        }
        else {
            if (item.classList.contains(query)){
                item.classList.remove('hidden')
            }
            else {
                item.classList.add('hidden')
            }
        }
    })
}


let showMoreBtn = document.querySelector('#show-more');
let hiddenPosts = document.querySelectorAll('.post.hidden');
let currentItem = 3;

showMoreBtn.onclick = () => {
    for (let i = currentItem; i < currentItem + 3 && i < hiddenPosts.length; i++) {
        hiddenPosts[i].classList.remove('hidden');
    }
    currentItem += 3;

    if (currentItem >= hiddenPosts.length) {
        showMoreBtn.style.display = 'none';
    }
};

/*Trusted by millions*/
document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide',{
        type: 'loop'
    });
    splide.mount();
} );




/*FAQ*/
const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle ('active')
    })
})



