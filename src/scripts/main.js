// DIGITAL CLOCK

let digitalClock = () => {
  let date = new Date(),
      hour = date.getHours(),
      mins = date.getMinutes(),
      secs = date.getSeconds()
  
  updateTime = k => {
    return k < 10 ? '0' + k : k
  }

  hour = updateTime(hour)
  mins = updateTime(mins)
  secs = updateTime(secs)

  setTimeout(() => {
    digitalClock(), 1000
  })

  document.getElementById('digitalClock').innerText = hour + ':' + mins + ':' + secs
}

digitalClock()
