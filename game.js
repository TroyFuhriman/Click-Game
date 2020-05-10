let cheese = 0;
let collectionInterval = 0
let mods = 0
let automod = 0
let user = {
  items: [],
  autotool: []
}
let clickUpgrades = {
  pickaxe: {
    price: 10,
    quantity: 0,
    multiplier: 1,
  },
  drill: {
    price: 20,
    quantity: 0,
    multiplier: 2,
  }
}

let automaticUpgrades = {
  rover: {
    price: 60,
    quantity: 0,
    multiplier: 20
  },
  robots: {
    price: 200,
    quantity: 0,
    multiplier: 100
  }
}

function mine() {
  cheese++
  if (mods >= 1) {
    cheese += mods
  }
  update()
};

function update() {
  document.getElementById("count").innerHTML = "amount of cheese = " + cheese.toString()
  drill()
  pickaxe()
  rover()
  robots()
};

function addClickTool(tools) {
  clickUpgrades[tools].quantity++
  user.items.push(clickUpgrades[tools]);
  mods += clickUpgrades[tools].multiplier;
  console.log(clickUpgrades[tools].multiplier);
  console.log(mods);
  document.getElementById("modifier").innerText = "Modifier to click + " + mods.toString()
  cheese -= clickUpgrades[tools].price
  clickUpgrades[tools].price += Math.floor(Math.random() * clickUpgrades[tools].price);
  update();
  return mods;

}
function addAutoTool(fun) {
  automaticUpgrades[fun].quantity++
  user.autotool.push(automaticUpgrades[fun])
  automod += automaticUpgrades[fun].multiplier
  document.getElementById("auto").innerText = "auto mod " + automod.toString()
  cheese -= automaticUpgrades[fun].price
  automaticUpgrades[fun].price += Math.floor(Math.random() * automaticUpgrades[fun].price);
  update();
  return automod;

}
function pickaxe() {
  if (cheese < clickUpgrades.pickaxe.price) {
    document.getElementById("pickaxe").classList.add("disabled")
  }
  else {
    document.getElementById("pickaxe").classList.remove("disabled")
  }
  document.getElementById("pickaxe").innerText = "Pickaxe = " + clickUpgrades.pickaxe.price
  document.getElementById("count-1").innerText = clickUpgrades.pickaxe.quantity.toString()
}

function drill() {
  if (cheese < clickUpgrades.drill.price) {
    document.getElementById("drill").classList.add("disabled")
  }
  else {
    document.getElementById("drill").classList.remove("disabled")
  }
  document.getElementById("drill").innerText = "drill = " + clickUpgrades.drill.price
  document.getElementById("count-1").innerText = clickUpgrades.pickaxe.quantity.toString()
}
function rover() {
  if (cheese < automaticUpgrades.rover.price) {
    document.getElementById("rover").classList.add("disabled")
  }
  else {
    document.getElementById("rover").classList.remove("disabled")
  }
  document.getElementById("rover").innerText = "rover = " + automaticUpgrades.rover.price
}
function robots() {
  if (cheese < automaticUpgrades.robots.price) {
    document.getElementById("robots").classList.add("disabled")
  }
  else {
    document.getElementById("robots").classList.remove("disabled")
  }
  document.getElementById("robots").innerText = "robots = " + automaticUpgrades.robots.price
}


drill()
pickaxe()
rover()
robots()
update();


setInterval(function () { cheese += automod; }, 3000);
setInterval(function () { update(); }, 3000);