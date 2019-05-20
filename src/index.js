// import image data
import images from '../data/images.js';

//import template function
import template from './images-template.js';
import header from './header-template.js';

// import html to dom function
import htmlToDOM from './html-to-dom.js';

// reference the ul parent
const photoList = document.getElementById('photos');
const title = document.getElementById('header');

// loop through the image data
images.forEach(photo => {
    // convert image object to html using template
    const html = template(photo);
    // convert html to dom using html-to-dom
    const dom = htmlToDOM(html);
    // append to list parent
    photoList.appendChild(dom);
});

// stretch goal header
const headerTitle = header();
const dom2 = htmlToDOM(headerTitle);
title.appendChild(dom2);