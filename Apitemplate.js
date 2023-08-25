const   err = document.querySelector(`.err`)

const validatevalue = () => {

let userDetail = {
    name: ``,
    email: ``,
    phone: ``,
    password:``
 }
   const Name = document.querySelector(`.name`).value;
   const Email = document.querySelector(`.email`).value;
   const Phone = document.querySelector(`.phone`).value;
    const Password = document.querySelector(`.password`).value;
   
  ;

    if (Name === `` || Email === `` || Phone === `` || Password === ``) {
      err.innerHTML = `please fill out the form`;
    }else{
        userDetail.name = Name;
        userDetail.email = Email;
        userDetail.phone = Phone;
        userDetail.password = Password;
        err.innerHTML = ``;
        console.log(userDetail)
        return userDetail
    }
    
  };


  const uploadata = async (data) =>{
     const response = await fetch(`https://amica.onrender.com/users`,{
      method: `POST`,
      headers: {
        "Content-type": `application/json`,
      },
      body: JSON.stringify(data),
     })

     const postdata = await response.json(data);
     console.log(postdata)
     
  }

  submitform = async (event) => {
  event.preventDefault()
     const postdata =  validatevalue()
     if(postdata != null ){
     await uploadata(postdata)
      err.innerHTML = `succesful`
     }else{
      err.innerHTML = `please fill in the required details or Try again later`
     }

    
  }

 