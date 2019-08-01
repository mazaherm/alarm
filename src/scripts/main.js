// DIGITAL CLOCK
const clockElement = document.getElementById('digitalClock')
const timeFormat = document.getElementById('timeFormat')

let alarmTime = null
let currentTime = null

// Display digital clock

const digitalClock = () => {
  let date = new Date(),
      hour = date.getHours(),
      mins = date.getMinutes(),
      secs = date.getSeconds()
  
  hour = updateTime(hour)
  mins = updateTime(mins)
  secs = updateTime(secs)

  setFormat(hour, mins, secs)

  currentTime = hour + ':' + mins + ':' + secs
  
// Play alarm
const alarmSound = document.getElementById('alarmSound')
  if (alarmTime === currentTime) {
    alarmSound.loop = true
    alarmSound.play()
    dismissAlarmBtn.style.display = 'block'
  }
}

// Update time every second
setInterval(() => {
  digitalClock(), 1000
})

// Update time so that numbers are always double digits
updateTime = k => k < 10 ? '0' + k : k

// Set alarm time
setAlarmTime = () => {
  let acHour = document.getElementById('acHour')
  let acMins = document.getElementById('acMins')
  const setAlarmBtn = document.getElementById('setAlarm')

  setAlarmBtn.addEventListener('click', () => {
    alarmTime = acHour.value + ':' + acMins.value + ':00'
  })
}

// Dismiss alarm
const dismissAlarmBtn = document.getElementById('dismissAlarm')
dismissAlarm = () => {
  dismissAlarmBtn.addEventListener('click', () => {
    if (!alarmSound.paused) {
      alarmSound.pause()
      alarmSound.currentTime = 0
      alarmTime = null
      dismissAlarmBtn.style.display = 'none'
    }
  })
}

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

toggleButtonText = () => {
  timeFormat.addEventListener('click', () => {
    let initialText = '24 hr'
    timeFormat.innerHTML === initialText ? timeFormat.innerHTML = '12 hr' : timeFormat.innerHTML = initialText
  })
}

// Create drop downs for setting alarm
const createHours = document.getElementById('acHour')
const createMins = document.getElementById('acMins')
createSelect = (initial, final, time) => {
  for (let i = initial; i <= final; i++) {
    let number = parseInt(i)
    number = updateTime(number)
    let child = document.createElement("OPTION");
    let childValue = document.createTextNode(number)
    child.appendChild(childValue)
    time.appendChild(child)
    time.appendChild(child)
  }
}

// Creates hours selector
createSelect(0, 23, createHours)
// Creates mins selector
createSelect(0, 59, createMins)

/**
 * Call Functions Here
 */

digitalClock()
toggleButtonText()
setAlarmTime()
dismissAlarm()
