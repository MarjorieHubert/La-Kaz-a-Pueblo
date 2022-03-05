let onglet1 = document.querySelector('.onglet1'); 
let onglet2 = document.querySelector('.onglet2');
let onglet3 = document.querySelector('.onglet3');
let onglet4 = document.querySelector('.onglet4');
let contenu1 = document.querySelector('.contenu1');
let contenu2 = document.querySelector('.contenu2');
let contenu3 = document.querySelector('.contenu3');
let contenu4 = document.querySelector('.contenu4');
let ongletclass1 = document.querySelector('.ongletclass1');
let ongletclass2 = document.querySelector('.ongletclass2');
let ongletclass3 = document.querySelector('.ongletclass3');
let ongletclass4 = document.querySelector('.ongletclass4');

onglet1.addEventListener('click', ()=>{
   contenu1.style.display = "block";
   contenu2.style.display = "none";
   contenu3.style.display = "none";
   contenu4.style.display = "none";
   ongletclass1.className = "active onglets";
   ongletclass2.className = "container-onglets onglets";
   ongletclass3.className = "container-onglets onglets";
   ongletclass4.className = "container-onglets onglets";
   console.log("onglet1");
})

onglet2.addEventListener('click', ()=>{
  contenu1.style.display = "none";
  contenu2.style.display = "block";
  contenu3.style.display = "none";
  contenu4.style.display = "none";
  ongletclass1.className = "container-onglets onglets";
  ongletclass2.className = "active onglets";
  ongletclass3.className = "container-onglets onglets";
  ongletclass4.className = "container-onglets onglets";
  console.log("onglet2");
})

onglet3.addEventListener('click', ()=>{
  contenu1.style.display = "none";
  contenu2.style.display = "none";
  contenu3.style.display = "block";
  contenu4.style.display = "none";
  ongletclass1.className = "container-onglets onglets";
  ongletclass2.className = "container-onglets onglets";
  ongletclass3.className = "active onglets";
  ongletclass4.className = "container-onglets onglets";
  console.log("onglet3");
})

onglet4.addEventListener('click', ()=>{
  contenu1.style.display = "none";
  contenu2.style.display = "none";
  contenu3.style.display = "none";
  contenu4.style.display = "block";
  ongletclass1.className = "container-onglets onglets";
  ongletclass2.className = "container-onglets onglets";
  ongletclass3.className = "container-onglets onglets";
  ongletclass4.className = "active onglets onglets";
  console.log("onglet4");
})



// onglets.forEach(onglet => {
//   onglet.addEventListener('click', () => {
//     if(onglet.classList.contains('active')) {
//       return;
//     } else {
//       onglet.classList.add('active');
//     }

//     index = onglet.getAttribute('data-anim');

//     for(i = 0; i < onglets.length; i++) {
//       if(onglets[i].getAttribute('data-anim') != index) {
//         onglets[i].classList.remove('active');
//       }
//     }

//     for(j = 0; j < contenu.length; j++) {
//       if(contenu[j].getAttribute('data-anim') == index) {
//         contenu[j].classList.add('activeContenu');
//       } else {
//         contenu[j].classList.remove('activeContenu');
//       }
//     }
//   })
// })