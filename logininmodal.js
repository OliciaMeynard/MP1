
  /////////////////LOGIN MODAL

  const logInBtn = document.querySelector('.log-in-btn')
  const body = document.body
  
  logInBtn.addEventListener('click', e => {
    e.preventDefault()


    const markup = `
    <section class="login-in-modal">
    <div class="inner-section-div"> 
      <div class="overlay-log-in"> </div>
 
       <form action="" class="login-modal-form ">
        <h2 class="loginheader">
          Login
        </h2>
  
        <div class="email-div">
         <label class="universal-label" for="pickup">Email</label>
          <div class="div-for-input ">
           <input class="universal-input" type="email" name="email" id="email-login">
  
         </div>
        </div>
  
        <div class="password-div">
         <label  class="universal-label" for="pickup">Password</label>
          <div class="div-for-input ">
           <input class="universal-input" type="password" name="password" id="password-login">
  
         </div>
        </div>
    
         
         <button class="btn-view-details">Login</button>
         <div class="div-close-btn-login">
           <i class="fa-solid fa-circle-xmark close-btn-modal-order"></i>
         </div>
         <a href="signup.html" class="not-yet-registered-link">Sign Up instead</a>
        </form>
        </div>
  </section>
 `



return body.insertAdjacentHTML('beforeend', markup)

})

body.addEventListener('click', e =>{

    const clicked = e.target.closest('.div-close-btn-login')
    if(!clicked) return
    if(clicked){
        const logInModal = document.querySelector('.login-in-modal')
        logInModal.remove()
      }
      
      if(overlayClicked){
      const logInModal = document.querySelector('.login-in-modal')
      logInModal.remove()

    }

})

body.addEventListener('click', e =>{


    const clicked = e.target.closest('.overlay-log-in')
    if(!clicked) return
    if(clicked){
        const logInModal = document.querySelector('.login-in-modal')
        logInModal.remove()
      }
      
      if(overlayClicked){
      const logInModal = document.querySelector('.login-in-modal')
      logInModal.remove()

    }

})


