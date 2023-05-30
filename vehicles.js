const sportsCarArr = [
    {name: "La Voiture Noire", img: "./imgs/1-sports.png", year: 2023, milage: "30k", fuel: "diesel", brand: "Bugatti"},
    {name: "Zonda HP Barchetta", img: "./imgs/2-sports.png", year: 2023, milage: "30k", fuel: "diesel", brand: "Pagani"},
    {name: "Centodieci", img: "./imgs/3-sports.png", year: 2023, milage: "30k", fuel: "diesel", brand: "Bugatti"},
    {name: "BugattiLa Voiture Noire", img: "./imgs/4-sports.png", year: 2023, milage: "30k", fuel: "diesel", brand: "Bugatti"},
    {name: "Zonda HP Barchetta", img: "./imgs/5-sports.png", year: 2023, milage: "30k", fuel: "diesel", brand: "Pagani"},
    {name: "Bugatti Centodieci", img: "./imgs/6-sports.png", year: 2023, milage: "30k", fuel: "diesel", brand: "Bugatti"},
    {name: "Pagani Zonda HP Barchetta", img: "./imgs/7-sports.png", year: 2023, milage: "30k", fuel: "diesel", brand: "Pagani"},
    {name: "Bugatti Centodieci", img: "./imgs/8-sports.png", year: 2023, milage: "30k", fuel: "diesel", brand: "Bugatti"}
]


const luxCarsArr = [
    {name: "Boat Tail", img: "./imgs/1-lux.png", year: 2023, milage: "30k", fuel: "diesel", brand: "Rolls-Royce"},
    {name: "Sweptail", img: "./imgs/2-lux.png", year: 2023, milage: "30k", fuel: "diesel", brand: "Rolls-Royce"},
    {name: "Maybach Exelero", img: "./imgs/3-lux.png", year: 2023, milage: "30k", fuel: "diesel", brand: "Mercedes"},
    {name: "Boat Tail", img: "./imgs/4-lux.png", year: 2023, milage: "30k", fuel: "diesel", brand: "Rolls-Royce"},
    {name: "Sweptail", img: "./imgs/5-lux.png", year: 2023, milage: "30k", fuel: "diesel", brand: "Rolls-Royce"},
    {name: "Maybach Exelero", img: "./imgs/6-lux.png", year: 2023, milage: "30k", fuel: "diesel", brand: "Mercedes"},
    {name: "Sweptail", img: "./imgs/7-lux.png", year: 2023, milage: "30k", fuel: "diesel", brand: "Rolls-Royce"},
    {name: "Maybach Exelero", img: "./imgs/8-lux.png", year: 2023, milage: "30k", fuel: "diesel", brand: "Mercedes"}
]


const sportsCarContainer = document.querySelector('.sportscar-tab')
const luxCarContainer = document.querySelector('.luxcar-tab')

const renderAllCars = (container, arr) =>{

    arr.map(car => {
        const markup = `<div class="car-card">
        <img src="${car.img}" alt="" class="car-card-img">
        <h2 class="car-card-name">${car.name}</h2>

        <div class="car-card-year-price-div">
        <p class="car-year-card">${car.year}"</p>
        <h3 class="car-price">P12000</h3>
        </div>
       
        
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
        <a href="singleproductpage.html" class="btn-view-details">View Details</a>
        <div class="car-card-brand-div"><h3>${car.brand}</h3></div>

        </div>`


        return container.insertAdjacentHTML('afterbegin', markup);
    })


}

renderAllCars(sportsCarContainer, sportsCarArr)
renderAllCars(luxCarContainer, luxCarsArr)