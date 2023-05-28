


/*****NAVBAR TOGGLE *****/
const menutoggle = document.querySelector('.toggle')
const navList = document.querySelector('.main-nav-list')
menutoggle.addEventListener( 'click', e =>{
    e.preventDefault()

    menutoggle.classList.toggle('active')
    navList.classList.toggle('active')

} )


/*****TABS *****/
const tabContainer = document.querySelector('.tabs')
const allTabBtns = document.querySelectorAll('.featured-tab-btn')
const tabContents = document.querySelectorAll('.tab-content')

tabContainer.addEventListener('click', (e)=>{
    e.preventDefault()
    const clicked = e.target.closest('.featured-tab-btn')
    if(!clicked) return

    allTabBtns.forEach(b=>b.classList.remove('active-tab'))
    // console.log(clicked.dataset.tab)

    clicked.classList.add('active-tab')
    tabContents.forEach(t=> t.classList.remove('tab-content-active'))
    document.querySelector(`.tab-content-${clicked.dataset.tab}`).classList.add('tab-content-active')

})

/*****Slide animation *****/

const allSections = document.querySelectorAll('.section')
window.addEventListener('scroll', checkSections)


checkSections()

function checkSections(){
  
    const triggerBottom = window.innerHeight / 5 * 4
    allSections.forEach( section =>{
        const sectTop = section.getBoundingClientRect().top
        if(sectTop< triggerBottom){
            section.classList.add('show')
        }
        else{
            section.classList.remove('show')
        }

    })

}

////////////////////ARROW
const heroSec = document.querySelector('.section-hero')
const obs = new IntersectionObserver(
    function (entries) {
      const ent = entries[0];
      // console.log(ent);
  
      if (ent.isIntersecting === false) {
        document.querySelector('.aside-arrow').classList.add('show-arrow');
        // document.body.classList.add("sticky");
      }
      if (ent.isIntersecting === true) {
        document.querySelector('.aside-arrow').classList.remove('show-arrow');
        // document.body.classList.remove("sticky");
      }
    },
    {
      // In the viewport //
      root: null,
      threshold: 0,
      rootMargin: '-144px',
    }
  );
  obs.observe(heroSec);


  ////////////////////text animation



  let words = document.querySelectorAll(".word");
  words.forEach((word) => {
    let letters = word.textContent.split(" ");
    word.textContent = "";
    letters.forEach((letter) => {
      let span = document.createElement("span");
      span.textContent = letter;
      span.className = "letter";
      word.append(span);
    });
  });
  
  let currentWordIndex = 0;
  let maxWordIndex = words.length - 1;
  words[currentWordIndex].style.opacity = "1";
  
  let rotateText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord =
      currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
    // rotate out letters of current word
    Array.from(currentWord.children).forEach((letter, i) => {
      setTimeout(() => {
        letter.className = "letter out";
      }, i * 80);
    });
    // reveal and rotate in letters of next word
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i) => {
      letter.className = "letter behind";
      setTimeout(() => {
        letter.className = "letter in";
      }, 340 + i * 80);
    });
    currentWordIndex =
      currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
  };
  
  rotateText();
  setInterval(rotateText, 3000);

