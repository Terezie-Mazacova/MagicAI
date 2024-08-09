/*For Smooth Scroll*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



/* Hamburger Menu*/
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function() {
    this.classList.toggle('is-active');
    const mobileNav = document.querySelector('.mobile-nav');
    mobileNav.classList.toggle('is-active');

    if (this.classList.contains('is-active')) {
        this.style.position = 'fixed';
        this.style.top = '16px';
        this.style.right = '50px';
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



/*Custom Templates - filtermenu*/
const filterButtons = document.querySelectorAll('.filtermenu li');
const filterItems = document.querySelectorAll('.post');
const showMoreBtn = document.querySelector('#show-more');
let currentItem = 6;

filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        renderFilterItems(filter);
        
        resetLinks();
        button.classList.add('active');
    });
});

function renderFilterItems(query) {
    currentItem = 6;

    filterItems.forEach((item, index) => {
        if (query === 'all') {
            if (index < currentItem) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        } else {
            if (item.classList.contains(query)) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        }
    });

    if (query === 'all' && filterItems.length > currentItem) {
        showMoreBtn.style.display = 'block';
    } else {
        showMoreBtn.style.display = 'none';
    }
}


function resetLinks() {
    filterButtons.forEach(li => {
        li.classList.remove('active');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderFilterItems('all');
    
    document.querySelector('.filtermenu li[data-filter="all"]').classList.add('active');
});

/*Kliknutí na tlačítko "Show more"*/
showMoreBtn.addEventListener('click', () => {
    const hiddenItems = document.querySelectorAll('.post.hidden');

    for (let i = 0; i < 6 && i < hiddenItems.length; i++) {
        hiddenItems[i].classList.remove('hidden');
    }

    currentItem += 6;

    if (hiddenItems.length <= 6) {
        showMoreBtn.style.display = 'none';
    }
});





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



