let mode = document.querySelector('.mode')
let body = document.querySelector('body')
let twitterbtn = document.querySelector('.twitter')
let discordbtn = document.querySelector('.discord')
let githubbtn = document.querySelector('.github')
let mlcard = document.querySelector('.ml-card')
let btndocs = document.querySelector('.btn-docs')
let pdocs = document.querySelector('.docs p')
let newscard = document.querySelector('.news-card')
let joincard = document.querySelector('.join-us-card')

let darkmode = 0

mode.addEventListener('click', () => {
  if (darkmode == 0) {
    mode.innerHTML = "<img src='./assets/sun.png'/>"
    darkmode = 1
    body.classList.toggle('dark-body')
    mode.classList.toggle('dark-mode-btn')
    /*githubbtn.classList.toggle('dark-mode-btn')
    twitterbtn.classList.toggle('dark-mode-btn')
    /*discordbtn.classList.toggle('dark-mode-btn')*/
    mlcard.classList.toggle('dark-ml-card')
    btndocs.classList.toggle('dark-btn-docs')
    pdocs.classList.toggle('dark-p-docs')
    newscard.classList.toggle('dark-news-card')
    joincard.classList.toggle('dark-join-card')
  } else if ((darkmode = 1)) {
    mode.innerHTML = "<img src='./assets/moon.png'/>"
    darkmode = 0
    body.classList.toggle('dark-body')
    mode.classList.toggle('dark-mode-btn')
    /*githubbtn.classList.toggle('dark-mode-btn')
    twitterbtn.classList.toggle('dark-mode-btn')
    /*discordbtn.classList.toggle('dark-mode-btn')*/
    mlcard.classList.toggle('dark-ml-card')
    btndocs.classList.toggle('dark-btn-docs')
    pdocs.classList.toggle('dark-p-docs')
    newscard.classList.toggle('dark-news-card')
    joincard.classList.toggle('dark-join-card')
  }
})
