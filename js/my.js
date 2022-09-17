
setInterval(getdate,1000)
function getdate(){
   const d = new Date()
const fg = document.getElementById("dem").innerHTML=d.toLocaleTimeString()
}

const d = new Date()
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const get = `${d.getFullYear()}-${months[d.getMonth()]}-${days[d.getDay()]}`
const zx = document.getElementById("demo").innerHTML=get;
console.log(zx);
