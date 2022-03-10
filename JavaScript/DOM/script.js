// var prvi = document.createElement("div");
// var drugi = document.createElement("div");
// prvi.style.height = "300px";
// prvi.style.width = "300px";
// prvi.style.backgroundColor = "red";
// prvi.style.border = "2px solid black";
// prvi.style.display = "flex";
// prvi.style.justifyContent = "center";
// prvi.style.alignItems = "center";

// drugi.style.height = "100px";
// drugi.style.width = "100px";
// drugi.style.backgroundColor = "blue";
// drugi.style.border = "2px solid black";
// document.body.appendChild(prvi);
// document.getElementsByTagName('body')[0].appendChild(prvi)
// prvi.appendChild(drugi);

var ctr = document.getElementById("container");
ctr.style.display = "flex";
ctr.style.justifyContent = "flex-start";
ctr.style.flexWrap = 'wrap'
ctr.style.margin = '10px'
function generateCard(vals) {
  var prvi = document.createElement("div");
  prvi.style.height = "320px";
  prvi.style.width = "320px";
  prvi.style.backgroundColor = "purple";
  prvi.style.border = "4px solid black";
  prvi.style.color = 'white'
  prvi.style.margin = '10px'
  prvi.style.borderRadius = '10px'
  prvi.style.padding = '10px'
  prvi.innerHTML = vals.fact
  return prvi;
}
fetch("https://catfact.ninja/facts")
.then((res)=> {
    return  res.json();
})
.then((res)=> {
    for (let i = 0; i < res.data.length; i++) {
        ctr.appendChild(generateCard(res.data[i]))
    }
})
.catch(()=> {
    console.log(err);
})
