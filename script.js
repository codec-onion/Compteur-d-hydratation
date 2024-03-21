let glassCounter = 0
let waterQuantity = 0
let glassCapacity = 0
// let glassCounterStorage
// let waterQuantityStorage
// let glassCapacityStorage
if (localStorage.getItem('glassCounter')) {
  glassCounter = parseFloat(localStorage.getItem('glassCounter'))
} else {
  localStorage.setItem('glassCounter', glassCounter)
}
if (localStorage.getItem('waterQuantity')) {
  waterQuantity = parseInt(localStorage.getItem('waterQuantity'))
} else {
  localStorage.setItem('waterQuantity', waterQuantity)
}
if (localStorage.getItem('glassCapacity')) {
  glassCapacity = parseInt(localStorage.getItem('glassCapacity'))
} else {
  localStorage.setItem('glassCapacity', glassCapacity)
}

const glassCapacityDisplay = document.querySelector('.glass-capacity-display')
glassCapacityDisplay.innerText =
  glassCapacity > 1
    ? `${glassCapacity} centilitres`
    : `${glassCapacity} centilitre`
function setGlassCapacity() {
  document
    .querySelector('.glass-capacity-button')
    .addEventListener('click', () => {
      const glassCapacityInput = document.querySelector('.glass-capacity-input')
      if (parseInt(glassCapacityInput.value) === 0) {
        glassCapacityInput.setAttribute('style', 'border: 2px solid red')
        return
      }
      glassCapacity = parseInt(glassCapacityInput.value)
      document.querySelector('.glass-capacity-display').innerText =
        glassCapacity > 1
          ? `${glassCapacity} centilitres`
          : `${glassCapacity} centilitre`
      glassCapacityInput.value = 0
      localStorage.setItem('glassCapacity', glassCapacity)
      document.querySelector('.warning-message').innerText = ''
    })
}
setGlassCapacity()

const glassCounterDisplay = document.querySelector('.water-glass')
if (glassCounter <= 1) {
  glassCounterDisplay.innerText = `${glassCounter} verre`
} else {
  glassCounterDisplay.innerText = `${glassCounter} verres`
}
function setGlassCounterDisplay() {
  document.querySelector('.add-half-glass').addEventListener('click', () => {
    if (glassCapacity === 0) {
      document.querySelector('.warning-message').innerText =
        'Vous devez renseigner la contenance de votre verre 😞'
      return
    }
    glassCounter = glassCounter + 0.5
    if (glassCounter <= 1) {
      glassCounterDisplay.innerText = `${glassCounter} verre`
    } else {
      glassCounterDisplay.innerText = `${glassCounter} verres`
    }
    localStorage.setItem('glassCounter', glassCounter)
    setWaterQuantityDisplay(2)
  })
  document.querySelector('.add-a-glass').addEventListener('click', () => {
    if (glassCapacity === 0) {
      document.querySelector('.warning-message').innerText =
        'Vous devez renseigner la contenance de votre verre 😞'
      return
    }
    glassCounter++
    if (glassCounter <= 1) {
      glassCounterDisplay.innerText = `${glassCounter} verre`
    } else {
      glassCounterDisplay.innerText = `${glassCounter} verres`
    }
    localStorage.setItem('glassCounter', glassCounter)
    setWaterQuantityDisplay(1)
  })
}
setGlassCounterDisplay()

const waterQuantityDisplay = document.querySelector('.water-quantity')
if (waterQuantity === 0 || waterQuantity === 1) {
  waterQuantityDisplay.innerText = `${waterQuantity} centilitre`
} else if (waterQuantity < 100) {
  waterQuantityDisplay.innerText = `${waterQuantity} centilitres`
} else {
  waterQuantityDisplay.innerText = `${waterQuantity / 100} litres`
}
function setWaterQuantityDisplay(divisor) {
  waterQuantity = waterQuantity + glassCapacity / divisor
  if (waterQuantity < 100) {
    waterQuantityDisplay.innerText = `${waterQuantity} centilitres`
  } else {
    waterQuantityDisplay.innerText = `${waterQuantity / 100} litres`
  }
  localStorage.setItem('waterQuantity', waterQuantity)
}

function reset() {
  document.querySelector('.reset').addEventListener('click', () => {
    glassCounter = 0
    waterQuantity = 0
    glassCapacity = 0
    glassCounterDisplay.innerText = `${glassCounter} verre`
    waterQuantityDisplay.innerText = `${waterQuantity} centilitre`
    glassCapacityDisplay.innerText = glassCapacity
    localStorage.clear()
  })
}
reset()
