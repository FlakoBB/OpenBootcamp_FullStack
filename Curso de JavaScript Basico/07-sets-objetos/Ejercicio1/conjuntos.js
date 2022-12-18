const familia = new Set(["Rainer", "Rocio", "Kevin", "Ramses"])
console.log(`Set Original`)
familia.forEach(integrante => console.log(integrante))

familia.add("Flako")
console.log("Set + Yo")
familia.forEach(integrante => console.log(integrante))

familia.add("JavaScript")
console.log("Set + JS")
familia.forEach(integrante => console.log(integrante))