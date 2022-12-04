const icons = document.getElementById('icons');

const otter = document.querySelector('#icons span:first-child');
const bluebird = document.querySelector('#icons span:nth-child(2)');
const github =document.querySelector('#icons span:nth-child(3)');
const notion = document.querySelector('#icons span:last-child');

function jumpToSharlayan(){
    window.open("https://sharlayan.in/home");
}

function jumpToTwitter(){
    window.open("https://twitter.com/home");
}

function jumpToGithub(){
    window.open("https://github.com/Faculty178");
}

function jumpToNotion(){
    window.open("https://www.notion.so/faculty1789-happyjellyfish/Dashboard-483854c44cb74962a87ead97376ffeb3");
}

otter.addEventListener("click", jumpToSharlayan);
bluebird.addEventListener("click", jumpToTwitter);
github.addEventListener("click", jumpToGithub);
notion.addEventListener("click", jumpToNotion);