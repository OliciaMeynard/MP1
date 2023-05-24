const sportsCarArr = [
    {name: "Bugatti La Voiture Noire", img: "./imgs/1-sports.png", year: 2023, milage: "30k", fuel: "diesel"},
    {name: "Pagani Zonda HP Barchetta", img: "./imgs/2-sports.png", year: 2023, milage: "30k", fuel: "diesel"},
    {name: "Bugatti Centodieci", img: "./imgs/3-sports.png", year: 2023, milage: "30k", fuel: "diesel"},
    {name: "Bugatti La Voiture Noire", img: "./imgs/4-sports.png", year: 2023, milage: "30k", fuel: "diesel"},
    {name: "Pagani Zonda HP Barchetta", img: "./imgs/5-sports.png", year: 2023, milage: "30k", fuel: "diesel"},
    {name: "Bugatti Centodieci", img: "./imgs/6-sports.png", year: 2023, milage: "30k", fuel: "diesel"},
    {name: "Pagani Zonda HP Barchetta", img: "./imgs/7-sports.png", year: 2023, milage: "30k", fuel: "diesel"},
    {name: "Bugatti Centodieci", img: "./imgs/8-sports.png", year: 2023, milage: "30k", fuel: "diesel"}
]


const luxCarsArr = [
    {name: "Rolls-Royce Boat Tail", img: "./imgs/1-lux.png", year: 2023, milage: "30k", fuel: "diesel"},
    {name: "Rolls-Royce Sweptail", img: "./imgs/2-lux.png", year: 2023, milage: "30k", fuel: "diesel"},
    {name: "Mercedes-Maybach Exelero", img: "./imgs/3-lux.png", year: 2023, milage: "30k", fuel: "diesel"},
    {name: "Rolls-Royce Boat Tail", img: "./imgs/4-lux.png", year: 2023, milage: "30k", fuel: "diesel"},
    {name: "Rolls-Royce Sweptail", img: "./imgs/5-lux.png", year: 2023, milage: "30k", fuel: "diesel"},
    {name: "Mercedes-Maybach Exelero", img: "./imgs/6-lux.png", year: 2023, milage: "30k", fuel: "diesel"},
    {name: "Rolls-Royce Sweptail", img: "./imgs/7-lux.png", year: 2023, milage: "30k", fuel: "diesel"},
    {name: "Mercedes-Maybach Exelero", img: "./imgs/8-lux.png", year: 2023, milage: "30k", fuel: "diesel"}
]


const sportsCarContainer = document.querySelector('.sportscar-tab')
const luxCarContainer = document.querySelector('.luxcar-tab')

const renderAllCars = (container, arr) =>{

    arr.map(car => {
        const markup = `<div class="car-card">
        <img src="${car.img}" alt="" class="car-card-img">
        <h2 class="car-card-name">${car.name}</h2>
        <p class="${car.year}">2023</p>
        
        <div class="icons-div-card">
           <div class="icon-card-info">
            <i class="fa-solid fa-gauge"></i>
            <p>${car.milage}</p>
           </div> 
           <div class="icon-card-info">
            <i class="fa-solid fa-gas-pump"></i>
            <p>${car.fuel}</p>
            </div>
        </div>
        <button class="btn-view-details">View Details</button>
        </div>`


        return container.insertAdjacentHTML('afterbegin', markup);
    })


}

renderAllCars(sportsCarContainer, sportsCarArr)
renderAllCars(luxCarContainer, luxCarsArr)