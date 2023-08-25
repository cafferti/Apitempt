userDetail = {
    email: ``,
    Password: ``
}
const getinput = () =>{
    event.preventDefault()
 const  Email = document.querySelector(`.email`).value
 const Password =   document.querySelector(`.password`).value
 const message = document.querySelector(`.message`)

 if(Email === `` || Password === ``){
    message.innerHTML = (`please input your enail or password`)
 }else{
    userDetail.email = Email
    userDetail.Password = Password
    console.log(userDetail);

    return userDetail
 }

}