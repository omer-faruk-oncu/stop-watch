const milisec = document.getElementById("miliseconds") 
const sec = document.getElementById("seconds") 
const min = document.getElementById("minutes") 
const btnStart = document.getElementById("start") 
const btnStop = document.getElementById("stop") 
const btnReset = document.getElementById("reset") 

let milisecond = 0
let second = 0
let minute = 0
let intervalId

const start = () =>{
    clearInterval(intervalId)
    intervalId = setInterval(()=>{
        milisecond++
        
        if (milisecond == 100){
        milisecond = 0
        second++
        }
        if (second == 60){
        second = 0
        minute++
        }
    milisec.textContent = milisecond
    sec.textContent = second
    min.textContent = minute
    },10)
}

const stop = () => {
    clearInterval(intervalId)
} 

const reset = () => {
    stop()
    milisecond = 0
    second = 0
    minute = 0

    milisec.textContent = "00"
    sec.textContent = "00"
    min.textContent = "00"
} 


btnStart.addEventListener('click',()=>{
    
    start()
})

btnStop.addEventListener('click',()=>{
    stop()
})

btnReset.addEventListener('click',()=>{
    reset()
})

