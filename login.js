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
    

    return userDetail
 }

}

const validatuser = async (data) =>{
  const response = await fetch(`https://amica.onrender.com/login`,{
    method: `POST`,
      headers: {
        "Content-type": `application/json`,
      },
      body: JSON.stringify(data),
  })

   const userDetail = await response.json()
   console.log(userDetail)
  
}

 const userlogin = async (event) =>{
    event.preventDefault()
    const userdata = await getinput()
    if(userdata !== null){
        validatuser(userdata)
        console.log(userdata);
    }else{
        message.innerHTML = (`please input your enail or password`) 
    }
 }