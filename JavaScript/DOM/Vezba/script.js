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
    body: JSON.stringify({
        title: "foo",
        body: "var",
        userId: 1
 }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(user)
}).then(response => response.json())
  .then(response => {
    // Handle response 
    console.log('Response: ', response);
  })
  .catch((error) => {
    // Handle error 
    console.log('Error message: ', error);
})