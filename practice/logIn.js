const USER_DETAILS = {
  nitesh: { email: "nitesh123@gmail.com", password: "123456" },
  javed: { email: "javed444@gmail.com", password: "30490rrei" },
  haidar: { email: "haidar4839@gmail.com", password: "namaste2342" },
  vikas: { email: "yadavjee786@my.com", password: "agaliBaarHamariSarakar" },
  rahul: { email: "rahula@templerun.com", password: "humDoHamaraEk" },
};

const login = () => {
  const userName = prompt("Enter Your userName :");
  if (userName in USER_DETAILS) {
    const userEmail = prompt("Enter Your email:");
    if (userEmail === USER_DETAILS[userName].email) {
      const userPassword = prompt("Enter Your password:");
      if (userPassword === USER_DETAILS[userName].password) {
        console.log(`${userName} welcome 🤗`);
      }
    } else {
      login();
    }
  } else {
    const wantToSignIn = confirm(
      "user does not exist\nDo you want to sign in",
    );
    if (wantToSignIn) {
      signIn();
    }
  }
};

const signIn = () => {
  const newUserName = prompt("Enter User Name:");
  if (newUserName in USER_DETAILS) {
    console.log("user already exists/n");
    signIn();
  }
  const userEmail = prompt("Enter Your email:");
  const userPassword = prompt("Enter Your password:");
  USER_DETAILS[newUserName] = { email: userEmail, password: userPassword };
  console.log(newUserName, USER_DETAILS[newUserName]);
};

login();
