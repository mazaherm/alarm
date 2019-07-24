// DIGITAL CLOCK
const clockElement = document.getElementById('digitalClock')
const timeFormat = document.getElementById('timeFormat')
const createHours = document.getElementById('hour')
const createMins = document.getElementById('mins')

// Display digital clock

const digitalClock = () => {
  let date = new Date(),
      hour = date.getHours(),
      mins = date.getMinutes(),
      secs = date.getSeconds()
  
  hour = updateTime(hour)
  mins = updateTime(mins)
  secs = updateTime(secs)

  setTimeout(() => {
    digitalClock(), 1000
  })

  setFormat(hour, mins, secs)
}

// update time so that numbers are always double digits
updateTime = k => k < 10 ? '0' + k : k

// Set time format
setFormat = (hour, mins, secs) => {
  if (timeFormat.innerHTML === '12 hr') {
    clockElement.innerText = hour + ':' + mins + ':' + secs
  } else if (timeFormat.innerHTML === '24 hr') {
    let midday = (hour >= 12) ? "PM" : "AM"
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour)
    clockElement.innerText = hour + ':' + mins + ':' + secs + ' ' + midday
  }
}

// Button to toggle between time format
toggleButtonText = () => {
  timeFormat.addEventListener('click', () => {
    let initialText = '24 hr'
    if (timeFormat.innerHTML === initialText) {
      timeFormat.innerHTML = '12 hr'
    } else if (timeFormat.innerHTML !== initialText) {
      timeFormat.innerHTML = initialText
    }
  })
}

// Create drop downs for setting alarm
createDropDown = () => {
  // loops hours
  for (let i = 0; i <= 23; i++) {
    let number = parseInt(i)
    number = updateTime(number)
    let child = document.createElement("OPTION")
    let childValue = document.createTextNode(number)
    child.appendChild(childValue)
    createHours.appendChild(child)
  }
  // loops mins
  for (let i = 0; i <= 59; i++) {
    let number = parseInt(i)
    number = updateTime(number)
    let child = document.createElement("OPTION");
    let childValue = document.createTextNode(number)
    child.appendChild(childValue)
    createMins.appendChild(child)
  }
}

/**
 * Call Functions Here
 */

digitalClock()
toggleButtonText()
createDropDown()
