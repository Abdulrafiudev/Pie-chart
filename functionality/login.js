// Making password visible when clicking on the padlock icon

let password = document.querySelector(`.password_input`)
let close_padlock = document.querySelector(`.lock_padlock`)
let open_padlock = document.querySelector(`.padlock_icon`)

let toggle_padlock = false


  
close_padlock.addEventListener(`click`, () => {
  if(!toggle_padlock){
    password.setAttribute(`type`, `text`)
    close_padlock.classList.add(`invisible_padlock`)
    open_padlock.classList.add(`visible_padlock`)
    toggle_padlock = true
  }
    
  })
open_padlock.addEventListener(`click`, () => {
    password.setAttribute(`type`, `password`)
    open_padlock.classList.remove(`visible_padlock`)
    close_padlock.classList.remove(`invisible_padlock`)
    toggle_padlock = false
  
  })

// Email Validation
function email_validator(){
  let email_input = document.querySelector(`.email_input`);
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let value = email_input.value
  let is_valid_email = emailRegex.test(value)
  let error_email_message = document.querySelector(`.invalid_email`)

 
    if(!is_valid_email){
        
      error_email_message.innerHTML = `invalid E-mail`
      error_email_message.classList.add(`visible_invalid_email_error_message`)
  
    }
    else{
      error_email_message.classList.remove(`visible_invalid_email_error_message`)
 
  
  }
    
}
document.querySelector(`.email_input`).addEventListener(`input`, () => {
  email_validator()
})

//Password Validation

function password_validator(){
  let password_length = password.value.length
  let error_password_message = document.querySelector(`.invalid_password`)
  
  if (password_length < 8){
     error_password_message.innerHTML = `Password must be at least 8 characters`
     error_password_message.classList.add(`visible_invalid_email_error_message`)
  }

  else{
    error_password_message.classList.remove(`visible_invalid_email_error_message`)
  }
}
password.addEventListener(`input`, () => {
  password_validator()
})





