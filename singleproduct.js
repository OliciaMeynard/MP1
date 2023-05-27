gsap.registerPlugin(Flip);

const links = document.querySelectorAll('.nav-item a')
const activeNav = document.querySelector('.active-nav')

links.forEach((link) =>{
    link.addEventListener('click', (e) =>{
       gsap.to(links, {color : "#252525"});
       if(document.activeElement === link){
        gsap.to(link, { color: "#385ae0"});
    }

    //move the line
    const state = Flip.getState(activeNav);
    link.appendChild(activeNav)
    Flip.from(state,{
        duration: 0.5,
        absolute: true,
        ease: 'elastic.out(1,0.5)',
    })
    })


})


const cards = document.querySelectorAll('.card-car-angles')

cards.forEach((card, index) =>{
    card.addEventListener('click', () =>{
        //get state
        const state = Flip.getState(cards)

        //add active class to the clicked one and inactive to others
        const isCardActive = card.classList.contains("active")
        cards.forEach((otherCards, otherIdx) =>{
            otherCards.classList.remove('active')
            otherCards.classList.remove('in-inactive')
            if(!isCardActive && index !== otherIdx){
                otherCards.classList.add('in-inactive')
            }
        })

        if(!isCardActive)card.classList.add("active")
        Flip.from(state,{
            duration: 0.5,
            absolute: true,
            // ease: 'elastic.out(1,0.5)',
        })
    })
})

///////////////////MODAL


///active-section-modal

const modalOrder = document.querySelector('.section-modal')
const ctaBtnOrder = document.querySelector('.cta-btn')
const overlayOrderModal = document.querySelector('.overlay')
const closebtnModalOrder = document.querySelector('.close-btn-modal-order')

const closeModalorder = () =>{
    modalOrder.classList.remove('active-section-modal')

}

ctaBtnOrder.addEventListener('click', (e)=>{
    e.preventDefault()
    modalOrder.classList.add('active-section-modal')
})

overlayOrderModal.addEventListener('click', closeModalorder)

closebtnModalOrder.addEventListener('click', closeModalorder)