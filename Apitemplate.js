
const validatevalue = () => {
   let userDetail = {
      username: ``,
      useremail: ``
   }
   const Name = document.querySelector(`.name`).value;
   const Email = document.querySelector(`.email`).value;
   const   err = document.querySelector(`.err`);

    if (Name === `` || Email === ``) {
      err.innerHTML = `please fill out the form`;
    }else{
        userDetail.username = Name;
        userDetail.useremail = Email;
    }
    return userDetail
  };

  