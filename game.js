let honey = 0;
let collectionInterval = 0
let mods = 0
let automod = 0
let user = {
  items: [],
  autotool: []
}
let clickUpgrades = {
  scraper: {
    price: 10,
    quantity: 0,
    multiplier: 1,
  },
  hive: {
    price: 20,
    quantity: 0,
    multiplier: 2,
  }
}

let automaticUpgrades = {
  beekeeper: {
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
  honey++
  if (mods >= 1) {
    honey += mods
  }
  update()
};

function update() {
  document.getElementById("count").innerHTML = "amount of honey = " + honey.toString()
  hive()
  scraper()
  beekeeper()
  robots()
};

function addClickTool(tools) {
  clickUpgrades[tools].quantity++
  user.items.push(clickUpgrades[tools]);
  mods += clickUpgrades[tools].multiplier;
  console.log(clickUpgrades[tools].multiplier);
  console.log(mods);
  document.getElementById("modifier").innerText = "Modifier to click + " + mods.toString()
  honey -= clickUpgrades[tools].price
  clickUpgrades[tools].price += Math.floor(Math.random() * clickUpgrades[tools].price);
  update();
  return mods;

}
function addAutoTool(fun) {
  automaticUpgrades[fun].quantity++
  user.autotool.push(automaticUpgrades[fun])
  automod += automaticUpgrades[fun].multiplier
  document.getElementById("auto").innerText = "auto mod " + automod.toString()
  honey -= automaticUpgrades[fun].price
  automaticUpgrades[fun].price += Math.floor(Math.random() * automaticUpgrades[fun].price);
  update();
  return automod;

}
function scraper() {
  if (honey < clickUpgrades.scraper.price) {
    document.getElementById("scraper").classList.add("disabled")
  }
  else {
    document.getElementById("scraper").classList.remove("disabled")
  }
  document.getElementById("scraper").innerText = clickUpgrades.scraper.price.toString()
  document.getElementById("count-1").innerText = clickUpgrades.scraper.quantity.toString()
}

function hive() {
  if (honey < clickUpgrades.hive.price) {
    document.getElementById("hive").classList.add("disabled")
  }
  else {
    document.getElementById("hive").classList.remove("disabled")
  }
  document.getElementById("hive").innerText = clickUpgrades.hive.price.toString()
  document.getElementById("count-2").innerText = clickUpgrades.hive.quantity.toString()
}
function beekeeper() {
  if (honey < automaticUpgrades.beekeeper.price) {
    document.getElementById("beekeeper").classList.add("disabled")
  }
  else {
    document.getElementById("beekeeper").classList.remove("disabled")
  }
  document.getElementById("beekeeper").innerText = automaticUpgrades.beekeeper.price.toString()
  document.getElementById("count-3").innerText = automaticUpgrades.beekeeper.quantity.toString()
}
function robots() {
  if (honey < automaticUpgrades.robots.price) {
    document.getElementById("robots").classList.add("disabled")
  }
  else {
    document.getElementById("robots").classList.remove("disabled")
  }
  document.getElementById("robots").innerText = automaticUpgrades.robots.price.toString()
  document.getElementById("count-4").innerText = automaticUpgrades.robots.quantity.toString()
}


hive()
scraper()
beekeeper()
robots()
update();


setInterval(function () { honey += automod; }, 3000);
setInterval(function () { update(); }, 3000);