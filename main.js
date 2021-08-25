const form = document.getElementsByTagName('form')[0].addEventListener('submit',(e)=>e.preventDefault())

const validate = (form) =>{
    const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!regex.test(form.email.value)){
       document.querySelector('.error').style = 'display:block'
       document.querySelector('.icon').style = 'display:block'
       document.querySelector('.input-helper > input').style = 'border: 1.9px solid var(--Soft-Red)'
       return false
    }
    document.querySelector('.error').style = ''
       document.querySelector('.icon').style = ''
       document.querySelector('.input-helper > input').style = ''
    return true
}