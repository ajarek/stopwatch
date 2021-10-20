const time = document.querySelector('.time')

let seconds =0
function myGo() {
    idVar = setInterval(() => {
        timer()
    }, 1000)
}

let timer = () => {
    seconds++
    let hrs = Math.floor(seconds / 3600)
    let min = Math.floor((seconds - hrs * 3600) / 60)
    let sec = seconds % 60
    if(sec<10){sec='0'+sec}
    if(min<10){min='0'+min}
    if(hrs<10){hrs='0'+hrs}
    time.innerHTML=`${hrs}:${min}:${sec}`

}

function myStop() {
    clearInterval(idVar)
}

function myReset() {
    clearInterval(idVar)
    time.innerHTML = '00:00:00'
    seconds=0
}