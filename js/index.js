// Your code goes here





const allBusImages = document.querySelectorAll('img');

allBusImages.forEach((image) => {
  image.addEventListener('mouseenter', (event) => {
    image.style.transform = 'scale(1.1)';
    image.style.transition = 'transform 0.5s';
    console.log(event.target);
  });

  image.addEventListener('mouseleave', (event) => {
    image.style.transform = 'scale(1.0)';
    image.style.transition = 'transform 0.5s';
    console.log(event.target);
  });
});


const textTop = document.querySelectorAll('p');
textTop.forEach((text) => {
  text.addEventListener('mouseover', (event) => {
    event.target.style.color = 'orange';
  });
});


// const textTop = document.querySelector('.intro p');
//
// textTop.addEventListener('mouseover', (event) => {
//     event.target.style.color = 'orange';
//   });

const link = document.querySelector('img');
  link.addEventListener('click', (event) => {
    console.log('link was clicked');
    console.log(event.target);
    event.preventDefault();
  });


// keydown
const log = document.querySelector('p');
  document.addEventListener('keydown', logKey);
  function logKey(e) {
    log.textContent += ` ${e.code}`;
  };



//Add item
const body = document.querySelector('body');

const el = document.createElement('div');
el.style.width = '105px';
el.style.height = '105px';
el.style.background = '#cdf';
el.style.padding = '5px';
el.style.display = 'flex';
el.style.justifyContent = 'center';
el.style.alignContent = 'center';
el.style.margin = 'auto';
el.textContent = 'Use Mouse to make me big or SMALL';
body.append(el);

function zoom(event) {
  event.preventDefault();
  scale += event.deltaY * -0.01;

  // Restrict scale
  scale = Math.min(Math.max(.125, scale), 4);

   // Apply scale transform
   el.style.transform = `scale(${scale})`;
}

let scale = 1;
// const el = document.querySelector('div');
el.onwheel = zoom;

let topHead = document.querySelector('.main-navigation');
topHead.addEventListener('mouseover', (event) => {
  event.target.style.backgroundColor = 'red';
});

//Connect to the HTML file
const headNavTags = document.querySelector('.main-navigation');
//Using ES5 to target the 'a' tags by their position in the HTML collection.
let navFirst = document.getElementsByTagName('a')[0];
let navSecond = document.getElementsByTagName('a')[1];
let navThird = document.getElementsByTagName('a')[2];
let navFourth = document.getElementsByTagName('a')[3];

//Create the event listener
headNavTags.addEventListener('click', function(event) {
    navFirst.style.color = 'white';
    navSecond.style.color = 'white';
    navThird.style.color = 'white';
    navFourth.style.color = 'white';
    //event.stopPropagation(); //updated to use preventDefault
    event.preventDefault(); //use preventDefault (more clever way);
});


const page = document.querySelector('body');

const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'pink', 'darkorchid', 'teal', 'dodgerblue', 'crimson', 'orchid'];

const randomColor = arr => {
  page.style.backgroundColor = arr[Math.floor((Math.random()*10) +1)]
}

window.addEventListener('resize', () => randomColor(colors));




 // drag / drop
 // load
 // focus
 // resize
 // scroll
 // select
 // dblclick
