let glassCounter = 0;
let waterQuantity = 0;

const waterGlassDisplay = document.querySelector(".water-glass");
waterGlassDisplay.innerText = "0 verre";

function setWaterGlassDisplay() {
  document.querySelector(".add-half-glass").addEventListener("click", () => {
    glassCounter = glassCounter + 0.5;
    if (glassCounter <= 1) {
      waterGlassDisplay.innerText = `${glassCounter} verre`;
    } else {
      waterGlassDisplay.innerText = `${glassCounter} verres`;
    }
    setWaterQuantityDisplay();
  });
  document.querySelector(".add-a-glass").addEventListener("click", () => {
    glassCounter++;
    if (glassCounter <= 1) {
      waterGlassDisplay.innerText = `${glassCounter} verre`;
    } else {
      waterGlassDisplay.innerText = `${glassCounter} verres`;
    }
    setWaterQuantityDisplay();
  });
}
setWaterGlassDisplay();

const waterQuantityDisplay = document.querySelector(".water-quantity");
waterQuantityDisplay.innerText = "0 centilitre.";

function setWaterQuantityDisplay() {
  waterQuantity = glassCounter * 30;
  if (waterQuantity < 100) {
    waterQuantityDisplay.innerText = `${waterQuantity} centilitres.`;
  } else {
    waterQuantityDisplay.innerText = `${waterQuantity / 100} litres.`;
  }
}

function reset() {
  document.querySelector(".reset").addEventListener("click", () => {
    glassCounter = 0;
    waterQuantity = 0;
    waterGlassDisplay.innerText = glassCounter;
    waterQuantityDisplay.innerText = `${waterQuantity} centilitre.`;
  });
}
reset();
