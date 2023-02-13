const loginForm = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#logUsername').value.trim();
  const password = document.querySelector('#logPassword').value.trim();

  console.log(username, password);
  if (username && password) {
      const response = await fetch('/api/users/login', {
          method: 'POST',
          body: JSON.stringify({username, password}),
          headers: {'Content-Type': 'application/json'},
      });

      if (response.ok) {
          document.location.replace('/projects/:id');
      } else {
          alert(response.statusText);
      }
  }
};  



// const registerForm = async (event) => {
//     event.preventDefault();
  
//     const regUsername = document.querySelector('#regUsername').value.trim();
//     const regPassword = document.querySelector('#regPassword').value.trim();
  
//     if (regUsername && regPassword) {
//       const response = await fetch('/api/users/login', {
//         method: 'POST',
//         body: JSON.stringify({ email, password }),
//         headers: { 'Content-Type': 'application/json' },
//       });
  
//       if (response.ok) {
//         document.location.replace('/projects:id');
//       } else {
//         alert(response.statusText);
//       }
//     }
//   };
  
  document
    .querySelector('#logBtn')
    .addEventListener('click', loginForm);
  
//   document
//     .querySelector('#regBtn')
//     .addEventListener('click', registerForm);
  