const loginDetails = [
  { email: "Sagar@pw",
   password: "S12435pw",
  },
  {
    email: "Yogesh@pw",
    password: "Y252435pw",
  },
  {
    email: "Harsh@pw",
    password: "S1035pw",
  },
];

function login_page(userEmail, userPassword) {
  //Condition 1 Email And Password Both Are match
  const conditionmatch = loginDetails.find(
    (u) => u.email === userEmail && u.password === userPassword
  );

  //Condition 2 Email matched but Password doesn't match
  const conditionNotmatchWithPassword = loginDetails.find(
    (u) => u.email === userEmail && u.password !== userPassword
  );

  if (conditionmatch) {
    return `Login Successfull`;
  } else if (conditionNotmatchWithPassword) {
    return `Password Not match`;
  } else {
    return `login failed`;
  }
}

console.log(login_page("Sagar@pw", "S12435pw"));
