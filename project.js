const bar= document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close')

function expandText(blogdetails) {
    document.getElementById('shortText' + blogdetails).style.display = 'none';
    document.getElementById('fullText' + blogdetails).style.display = 'flex';
}

if(bar){
    bar.addEventListener('click' , () => {
        nav.classList.add('active'); 
    })
}

if(close){
    close.addEventListener('click',()=> {
        nav.classList.remove('active');
    })
}