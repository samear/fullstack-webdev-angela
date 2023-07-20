function HouseKeeper(yearsOfExperience, name, cleaningRepertoire) {
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
    this.clean = function() {
        alert("clenning...")
    }
}


var houseKeeper1 = new HouseKeeper(12, "Jane", ["bedroom"]);
var houseKeeper2 = new HouseKeeper(24, "Sam", ["ceilling", "yard", "balcone"]);

console.log(houseKeeper1.name + " is");
houseKeeper1.clean();
console.log(houseKeeper1.cleaningRepertoire);