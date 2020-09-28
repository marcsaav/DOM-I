const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Navigation

let topNav = document.querySelectorAll('header nav a');
topNav[0].textContent = siteContent["nav"]["nav-item-1"];
topNav[1].textContent = siteContent["nav"]["nav-item-2"];
topNav[2].textContent = siteContent["nav"]["nav-item-3"];
topNav[3].textContent = siteContent["nav"]["nav-item-4"];
topNav[4].textContent = siteContent["nav"]["nav-item-5"];
topNav[5].textContent = siteContent["nav"]["nav-item-6"];

let nav = document.querySelector('nav');
nav.style.color = "green";
let newLink = document.createElement('a');
newLink.textContent = "New Link"
let newerLink = document.createElement('a');
newerLink.textContent = "Newer Link";
nav.appendChild(newLink);
nav.prepend(newerLink);

let navText = document.querySelectorAll('nav a');
navText.forEach(item => {item.style.color = "green"});



//Below Nav

let cta = document.querySelector('.cta');
let ctaText = cta.querySelector('.cta-text h1');
ctaText.textContent = siteContent["cta"]["h1"];
let button = cta.querySelector('.cta-text button');
button.textContent = siteContent["cta"]["button"];
let ctaImg = cta.querySelector('#cta-img');
ctaImg.src = siteContent["cta"]["img-src"];

// Main Content
  // Top Content

  let topContent = document.querySelector('.top-content');
  let topContentTitles = topContent.querySelectorAll('h4');
  topContentTitles[0].textContent = siteContent["main-content"]["features-h4"];
  topContentTitles[1].textContent = siteContent["main-content"]["about-h4"];
  let topContentText = topContent.querySelectorAll('p');
  topContentText[0].textContent = siteContent["main-content"]["features-content"];
  topContentText[1].textContent = siteContent["main-content"]["about-content"];

  // Mid Img

  let midImg = document.querySelector('#middle-img');
  midImg.src = siteContent["main-content"]["middle-img-src"];

  // Bottom Content

  let bottomContent = document.querySelector('.bottom-content');
  let bottomContentTitles = bottomContent.querySelectorAll('h4');
  bottomContentTitles[0].textContent = siteContent["main-content"]["services-h4"];
  bottomContentTitles[1].textContent = siteContent["main-content"]["product-h4"];
  bottomContentTitles[2].textContent = siteContent["main-content"]["vision-h4"];
  let bottomContentText = bottomContent.querySelectorAll('p');
  bottomContentText[0].textContent = siteContent["main-content"]["services-content"];
  bottomContentText[1].textContent = siteContent["main-content"]["product-content"];
  bottomContentText[2].textContent = siteContent["main-content"]["vision-content"];

// Contact

let contact = document.querySelector('.contact');
let contactTitle = contact.querySelector('h4');
contactTitle.textContent = siteContent["contact"]["contact-h4"];
let contactText = contact.querySelectorAll('p');
contactText[0].textContent = siteContent["contact"]["address"];
contactText[1].textContent = siteContent["contact"]["phone"];
contactText[2].textContent = siteContent["contact"]["email"];

// Footer

let footer = document.querySelector('footer');
footer.textContent = siteContent["footer"]["copyright"];