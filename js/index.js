// Your code goes here

//Mouseover
//Establishing our variables

//Connets the JS to the HTML file
let topHead = document.querySelector('.main-navigation');

//Create the event listener
topHead.addEventListener('mouseover', function(event) {
    event.target.style.backgroundColor = 'Red';
})

//Click
//Establishing our variables

//Connets the JS to the HTML file
const origImg = document.querySelector('.intro img');
//Allows our new var to have access to the alternate img tags
const alternateImgInfo = origImg.alt;

//Create the event listener
origImg.addEventListener('click', function(event) {
    window.alert(`${alternateImgInfo}`)
    event.stopPropagation()
});

//dblClick
//Establishing our variables

//Connect to the HTML file
const headNavTags = document.querySelector('.main-navigation');
//Using ES5 to target the 'a' tags by their position in the HTML collection.
let navFirst = document.getElementsByTagName('a')[0];
let navSecond = document.getElementsByTagName('a')[1];
let navThird = document.getElementsByTagName('a')[2];
let navFourth = document.getElementsByTagName('a')[3];

//Create the event listener
headNavTags.addEventListener('dblclick', function(event) {
    navFirst.style.color = 'white';
    navSecond.style.color = 'white';
    navThird.style.color = 'white';
    navFourth.style.color = 'white';
    event.stopPropagation();
});

//Focus/blur
let allInputFields = document.querySelectorAll('input[type="text"]')
inputFieldArray = Array.from(allInputFields);


  inputFieldArray.forEach(function(inputField) {
    inputField.addEventListener('focus', function(){
      event.target.style.background = 'orange';
      event.stopPropagation();
    })
  })

  inputFieldArray.forEach(function(inputField) {
    inputField.addEventListener('blur', function(){
      event.target.style.background = 'lightgreen';
      event.stopPropagation();
    })
  });


  //Make img's disappear on click and reapper on click anywhere other than img
const images = document.querySelectorAll('img');

const page = document.querySelector('body')

page.addEventListener('click', event => {
    images.forEach(function (el) {
        if (event.target.tagName !== 'IMG') {
            el.style.visibility = 'visible'
        }
    })
})

images.forEach((el) => el.addEventListener('click', event => event.target.style.visibility = 'hidden'));


// assign a random color to the background any time the window is resized

const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'pink', 'darkorchid', 'teal', 'dodgerblue', 'crimson', 'orchid'];

const randomColor = arr => {
    page.style.backgroundColor = arr[Math.floor((Math.random() * 10) + 1)]
}

window.addEventListener('resize', () => randomColor(colors));


//Nav changes color when mouse enters and returns to default on leave
const headerNav = document.querySelector('.main-navigation');

headerNav.addEventListener('mouseenter', (event) => event.target.style.backgroundColor = '#FFEBCD');

headerNav.addEventListener('mouseleave', (event) => event.target.style.backgroundColor = '');
