

const wheel = document.querySelector('#top-wheel');
const leftBtn = document.querySelector('#left-btn')
const rightBtn = document.querySelector('#right-btn');
const enterBtn = document.querySelector('#enter-btn');
const wheelText = document.querySelector("#wheel-text");

//--------------------------------------------------Arrow buttons--------------------------------------------------//

let rotateValue = wheel.style.transform; 
let rotateSum;
let linkNum = 1;                            //Defined global for other functions use too


const leftBtnFunc = () => {
    rotateSum = rotateValue + 'rotate(-90deg)';
    wheel.style.transform = rotateSum;
    rotateValue = rotateSum;
    if (linkNum === 4) {
        linkNum -= 3;
    } else {
    linkNum += 1;
    }
    textBlockFunc();
 };

const rightBtnFunc = () => { 
    rotateSum = rotateValue + 'rotate(90deg)';
    wheel.style.transform = rotateSum;
    rotateValue = rotateSum;
    if (linkNum === 1) {
        linkNum += 3;
    } else {
        linkNum -=1;
    }
    textBlockFunc();
};

setInterval(rightBtnFunc, 4000);

//--------------------------------------------------wheel text--------------------------------------------------//

const textOne = '<h2>- Tool up -</h2> <p>Text added by JavaScript. <br>I\'m such a noob this is so basic...</p><p>New p element test.</p>';
const textTwo = '<h2>- Don your gear -</h2> <p>A load of other jazz. <br>I\'m still such a noob this is so basic...</p><p>This is item 2 though</p>';
const textThree = '<h2>- Knick nacs -</h2> <p>A load of other jazz. <br>I\'m still such a noob this is so basic...</p><p>Special items!</p>';
const textFour = '<h2>- Wizardry -</h2> <p>A load of other jazz. <br>I\'m still such a noob this is so basic...</p><p>Whazz that magic!!</p>';

const enterOne = 'Weapons';
const enterTwo = 'Armour';
const enterThree = 'Items';
const enterFour = 'Wizardry';
// Enter the Forge

let wheelBoxText = textOne;         //Defined global for other functions use too
let enterBtnText = enterOne;

wheelText.innerHTML = wheelBoxText;
enterBtn.innerHTML = enterBtnText;

const textBlockFunc = () => {
 if (linkNum === 1) {
        wheelBoxText = textOne; 
        enterBtnText = enterOne; 
    } else if (linkNum === 2) {
        wheelBoxText = textTwo;
        enterBtnText = enterTwo; 
    } else if (linkNum === 3) {
        wheelBoxText = textThree;
        enterBtnText = enterThree; 
    } else if (linkNum === 4) {
        wheelBoxText = textFour;
        enterBtnText = enterFour; 
    }
    enterBtn.innerHTML = enterBtnText;
    wheelText.innerHTML = wheelBoxText;
};

//--------------------------------------------------Enter button--------------------------------------------------//

// add on enter button hover hide arrows

const linkOne = 'https://www.google.com/search?q=medieval+weapons&tbm=isch&ved=2ahUKEwjG-bDKj7jxAhUGwIUKHYgiAW0Q2-cCegQIABAA&oq=medieval+weapons&gs_lcp=CgNpbWcQAzIFCAAQsQMyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BwgAELEDEEM6BAgAEENQhYIBWJmJAWCUigFoAHAAeACAAVWIAaADkgEBN5gBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=QpjYYMbQHIaAlwSIxYToBg&bih=1009&biw=1920&hl=en';
const linkTwo = 'https://www.google.com/search?q=medieval+armour&hl=en&sxsrf=ALeKk034p6xOnZTox6Bak1xrvIhJpI3-ng:1624807487632&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj7q4PJj7jxAhUNEcAKHYERB8IQ_AUoAXoECAEQBA&biw=1920&bih=1009';
const linkThree = 'https://www.google.com/search?q=magic+items&tbm=isch&ved=2ahUKEwipoLTTj7jxAhVK3RoKHVhSALwQ2-cCegQIABAA&oq=magic+items&gs_lcp=CgNpbWcQAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BAgjECc6BAgAEEM6CAgAELEDEIMBOgUIABCxAzoHCAAQsQMQQ1CC4gFYlvYBYMP3AWgAcAB4AIABTogBsgWSAQIxMZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=VZjYYOmhGMq6a9ikgeAL&bih=1009&biw=1920&hl=en';
const linkFour = 'https://www.google.com/search?q=game+spells&tbm=isch&ved=2ahUKEwjnhrrqj7jxAhUDKhoKHewVCm4Q2-cCegQIABAA&oq=game+spells&gs_lcp=CgNpbWcQAzICCAAyBggAEAUQHjIGCAAQBRAeMgYIABAIEB4yBggAEAgQHjoECCMQJzoECAAQQzoICAAQsQMQgwE6BAgAEAM6BQgAELEDOgcIABCxAxBDULMiWNw1YJ02aABwAHgBgAHgAYgB5QaSAQYxMC4wLjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=hZjYYKewLIPUaOyrqPAG&bih=1009&biw=1920&hl=en';

const enterBtnFunc = () => {
    if (linkNum === 1) {
        window.location.href=linkOne;
    } else if (linkNum === 2) {
        window.location.href=linkTwo;
    } else if (linkNum === 3) {
        window.location.href=linkThree;
    } else if (linkNum === 4) {
        window.location.href=linkFour;
    }
};


const textHoverChange = () => {
    enterBtn.innerHTML = 'Enter the Forge'; //---------------------sort--------------------
};

const textHoverChange2 = () => {
    setTimeout(() => {
    enterBtn.innerHTML = enterBtnText; //---------------------sort--------------------
    }, 500);
};


//--------------------------------------------------Event Listeners--------------------------------------------------//

leftBtn.addEventListener('click', leftBtnFunc);
rightBtn.addEventListener('click', rightBtnFunc);
        
enterBtn.addEventListener('click', enterBtnFunc);
enterBtn.addEventListener('mouseover', textHoverChange);
enterBtn.addEventListener('mouseout', textHoverChange2);



