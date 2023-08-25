

const validatevalue = (event) => {
  event.preventDefault()

let userDetail = {
    username: ``,
    useremail: ``,
    userphone: ``,
    userpassword:``
 }
   const Name = document.querySelector(`.name`).value;
   const Email = document.querySelector(`.email`).value;
   const Phone = document.querySelector(`.phone`).value;
    const Password = document.querySelector(`.email`).value;
   
   const   err = document.querySelector(`.err`);

    if (Name === `` || Email === `` || Phone === `` || password === ``) {
      err.innerHTML = `please fill out the form`;
    }else{
        userDetail.username = Name;
        userDetail.useremail = Email;
        userDetail.userphone = Phone;
        userDetail.userpassword = Password;
        err.innerHTML = ``;

        return userDetail
    }
    
  };


  const uploadata = (data) =>{
     const response = await fetch(``)
  }

 