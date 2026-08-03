const nameTag = document.querySelector('.name-tag');
const name = document.querySelector('.name');

const ageTag = document.querySelector('.age-tag');
const age = document.querySelector('.age');

const myData = JSON.parse(localStorage.getItem('myData')) || {};

nameTag.textContent = localStorage.getItem('myName');
ageTag.textContent = localStorage.getItem('myAge');

if(myData.name) {
    nameTag.textContent = myData.name;
}
if(myData.age) {
    ageTag.textContent = myData.age;
}

name.addEventListener('input', (e) => {
    myData.name = e.target.value;
    localStorage.setItem('myData', JSON.stringify(myData));
    nameTag.innerText = e.target.value;
});

age.addEventListener('input', (e) => {
    myData.age = e.target.value;
    localStorage.setItem('myData', JSON.stringify(myData));
    ageTag.innerText = e.target.value;

})
