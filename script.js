function nextScreen(num){

document.querySelectorAll(".screen").forEach(screen=>{
screen.classList.remove("active")
})

document.getElementById("screen"+num).classList.add("active")

}



function createTulip(){

let tulip=document.createElement("div")

tulip.innerHTML="🌷"

tulip.className="falling"

tulip.style.left=Math.random()*100+"%"

document.body.appendChild(tulip)

setTimeout(()=>{
tulip.remove()
},4000)

}

setInterval(createTulip,400)