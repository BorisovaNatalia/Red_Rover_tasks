function describeAnimal(animal) {
    result = "This ";
    result += (("color" in animal) ? animal.color : "colorless") + " ";
    result += (("name" in animal) ? animal.name : "unknown creature") + " ";
    result += (("legs" in animal) ? "has " + animal.legs : "does not have") + " legs";
    return result;
}
console.log(describeAnimal({ name: "dog", legs1: 4, color: "yellow" }));