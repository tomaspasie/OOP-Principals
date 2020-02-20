const Dog = function(name,breed){
    let n = name, b = breed;

    this.name = function(){
        return name;
    }

    this.breed = function(){
        return breed;
    }

    const nameAndBreed = function(){
        return name + " " + breed;
    }

    this.dogInfo = function(){
        return nameAndBreed();
    }

}

module.exports = Dog;