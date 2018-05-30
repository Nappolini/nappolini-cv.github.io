/*
    Mobile nave toggle js 
    
    1. when nav icon is clicked add nav is oppen  



*/



const offsiteToggle = document.querySelector('.jsOffsiteToggle')
// offsiteToggle.addEventListener('click', e => document.body.classList.add('nav-is-open'))


offsiteToggle.addEventListener('click', e => document.body.classList.toggle('nav-is-open'))