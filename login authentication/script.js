let users = [
    { username: "eashwar", password: "123456" },
    { username: "saireddy", password: "eash123" },
    // Add more users as needed
  ];
  
  function  login() {
    event.preventDefault();
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    
    const username = usernameInput.value;
    const password = passwordInput.value;
    console.log(username, password);
    
    let status = false;
    users.forEach((ele) => {
      if (ele.username == username && ele.password==password) {
        status = true;
      }
    })
    console.log(status);
  
    if (status) {
        window.location.href = "secured.html";
        
    } else {
      alert("Invalid Username/Password. Please try again.");
    }
  }
  
  const loginButton = document.getElementById('login-button');
  loginButton.addEventListener('click', login);