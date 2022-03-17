document.getElementById("dugme").addEventListener("click", (e) => {
    e.preventDefault()
    // mejl = document.getElementById("mail").value;
    // ime = document.getElementById("name").value;
    // juzer = document.getElementById("user").value;
    // pasv = document.getElementById("passw").value;
    const obj = {
      email: e.target.form[0].value,
      name: e.target.form[1].value,
      password: e.target.form[2].value,
      username: e.target.form[3].value
    }
    console.log(obj);
});

fetch('https://serene-fortress-45917.herokuapp.com/v1/auth/signup' , 
{
    method: 'POST',
    headers: {
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    credentials: 'include',
    body: 'foo=bar&lorem=ipsum'
  })
  .then(res.json())
  .then(res => {
    // Handle response 
    console.log('Response: ', res);
  })
  .catch(err => {
    // Handle error 
    console.log('Error message: ', error);
})