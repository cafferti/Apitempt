userDetail = {
  email: ``,
  Password: ``,
};
const getinput = () => {
  const Email = document.querySelector(`.email`).value;
  const Password = document.querySelector(`.password`).value;
  const message = document.querySelector(`.message`);

  if (Email === `` || Password === ``) {
    message.innerHTML = `please input your enail or password`;
  } else {
    userDetail.email = Email;
    userDetail.Password = Password;

    return userDetail;
  }
};

validate = async (data) => {
  try {
    const response = await fetch(`https://httpbin.org/post`, {
      method: `POST`,
      headers: {
        "Content-type": `application/json`,
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const userDetail = await response.json();
      console.log(userDetail.data);
    } else {
      console.error("Login failed:", response.statusText);
    }
  } catch (error) {
    console.error("Network error:", error);
  }
};

userlogin = async (event) => {
  event.preventDefault();
  let userDetail = getinput();
  if (getinput != null) {
    validate(userDetail);
  }
};
