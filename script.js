let glassCounter = 0
let waterQuantity = 0
let glassCapacity = 0

function setGlassQuantity() {
  document
    .querySelector('.glass-capacity-button')
    .addEventListener('click', () => {
      const glassCapacityInput = document.querySelector('.glass-capacity-input')
      glassCapacity = glassCapacityInput.value
      document.querySelector('.glass-capacity-display').innerText =
        glassCapacity
    })
}
setGlassQuantity()

const waterGlassDisplay = document.querySelector('.water-glass')
if (glassCounter <= 1) {
  waterGlassDisplay.innerText = `${glassCounter} verre`
} else {
  waterGlassDisplay.innerText = `${glassCounter} verres`
}

function setWaterGlassDisplay() {
  document.querySelector('.add-half-glass').addEventListener('click', () => {
    glassCounter = glassCounter + 0.5
    if (glassCounter <= 1) {
      waterGlassDisplay.innerText = `${glassCounter} verre`
    } else {
      waterGlassDisplay.innerText = `${glassCounter} verres`
    }
    setWaterQuantityDisplay()
  })
  document.querySelector('.add-a-glass').addEventListener('click', () => {
    glassCounter++
    if (glassCounter <= 1) {
      waterGlassDisplay.innerText = `${glassCounter} verre`
    } else {
      waterGlassDisplay.innerText = `${glassCounter} verres`
    }
    setWaterQuantityDisplay()
  })
}
setWaterGlassDisplay()

const waterQuantityDisplay = document.querySelector('.water-quantity')
if (waterQuantity === 0 || waterQuantity === 1) {
  waterQuantityDisplay.innerText = `${waterQuantity} centilitre`
} else if (waterQuantity < 100) {
  waterQuantityDisplay.innerText = `${waterQuantity} centilitres`
} else {
  waterQuantityDisplay.innerText = `${waterQuantity / 100} litres`
}

function setWaterQuantityDisplay() {
  waterQuantity = glassCounter * glassCapacity
  if (waterQuantity < 100) {
    waterQuantityDisplay.innerText = `${waterQuantity} centilitres`
  } else {
    waterQuantityDisplay.innerText = `${waterQuantity / 100} litres`
  }
}

function reset() {
  document.querySelector('.reset').addEventListener('click', () => {
    glassCounter = 0
    waterQuantity = 0
    waterGlassDisplay.innerText = glassCounter
    waterQuantityDisplay.innerText = `${waterQuantity} centilitre`
  })
}
reset()
