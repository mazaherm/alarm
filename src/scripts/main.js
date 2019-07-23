// DIGITAL CLOCK
const timeFormat = document.getElementById('timeFormat')

let digitalClock = () => {
  const clockElement = document.getElementById('digitalClock')
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

  if (timeFormat.innerHTML === '24 hr') {
    clockElement.innerText = hour + ':' + mins + ':' + secs
  } else if (timeFormat.innerHTML === '12 hr') {
    let midday = (hour >= 12) ? "PM" : "AM"
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour)
    clockElement.innerText = hour + ':' + mins + ':' + secs + ' ' + midday
  }
}

let toggleButtonText = () => {
  timeFormat.addEventListener('click', () => {
    let initialText = '24 hr'
    if (timeFormat.innerHTML === initialText) {
      timeFormat.innerHTML = '12 hr'
    } else if (timeFormat.innerHTML !== initialText) {
      timeFormat.innerHTML = initialText
    }
  })
}

/**
 * Call Functions Here
 */

digitalClock()
toggleButtonText()
