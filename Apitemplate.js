

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
        err.innerHTML = ``;
    }
    return userDetail
  };

  const PostData = async (data) => {
    const response = await fetch(`https://httpbin.org/post`, {
      method: `POST`,
      headers: {
        "Content-type": `application/json`,
      },
      body: JSON.stringify(data),
    });
    const jokedata = await response.json();
    console.log(jokedata);
  };

  function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission behavior
  
    const userDetail = validatevalue();
    PostData(userDetail);
  }
  



  

  

