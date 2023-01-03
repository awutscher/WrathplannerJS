function newChar(){
    let charName = prompt("Insert Charactername please")
    localStorage.setItem(charName, "instances")
}