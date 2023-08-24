let userDetails = {}

const validatevalue = (event) => {

    event.preventDefault(); 

   const Name = document.querySelector(`.name`).value;
   const Email = document.querySelector(`.email`).value;
   const err = document.querySelector(`.err`);

    if (Name === `` || Email === ``) {
      err.innerHTML = `please fill out the form`;
    }else{
        err.innerHTML = ``
         return  {
            userName : Name ,
            userEmail : Email
         }
    }
  };
