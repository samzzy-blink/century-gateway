//local reviews data
const reviews = [
   
    {
        id: 1,
        name: "Samzzy Blink",
        job: "Web Developer And Web Tutor",
        img: "./images/samzzy.jpg",
        text: "Front End Developer: JavaScriot| React guy."
    },
    {
        id: 2,
        name: "Andrew Iteye",
        job: "Web Tutor",
        img: "./images/andrew.jfif",
        text: "A great personel in Century Gateway ltd "
    },
    {
        id: 3,
        name: "Favour",
        job: "Graphic Designer",
        img: "./images/favour.jfif",
        text: " Outstanding Graphic Designer. an Expect in his field"
    }
]



// select items
 const img = document.getElementById("person-img");
 const author = document.getElementById("author");
 const job = document.getElementById("job");
 const info = document.getElementById("info");

 const prevBtn = document.querySelector('.prev-btn');
 const nextBtn = document.querySelector('.next-btn');
 const randomBtn = document.querySelector('.random-btn');


 // set starting items
 let currentItem = 0;


 window.addEventListener('DOMContentLoaded', ()=>{
    showPerson();
 });

 // show person based on items
 const showPerson = (person) => {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
 };

 //show next person
 nextBtn.addEventListener('click', ()=>{
     currentItem++;
     if(currentItem > reviews.length - 1){
         currentItem = 0;
     }
     showPerson();
 });

  //show prev person
 prevBtn.addEventListener('click', ()=>{
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson();
});
// show random person
randomBtn.addEventListener('click', ()=>{
    currentItem = Math.floor(Math.random() * reviews.length);
    console.log(currentItem);
    showPerson()
});