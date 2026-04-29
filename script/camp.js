let images = document.querySelectorAll('.gallery img');
let model = document.querySelector('#model');
let modelImg = document.querySelector('#modelImg');
let closeBtn = document.querySelector('#closeBtn');
let modelDescr = document.querySelector('#modelDesc');


images.forEach(img =>{
    img.addEventListener('click', ()=>{
        model.style.display = "block";
        modelImg.src =img.src;
        modelDescr.textContent = img.alt;
    })
})

closeBtn.addEventListener('click', () =>{
    model.style.display = "none";
    modelDescr.textContent = '';
})
model.addEventListener('click', e => {
    if(e.target === model) {
        model.style.display = "none";
    }
})