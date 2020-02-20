const Dog = function(name,breed){
    let n = name, b = breed;

    this.name = function(){
        return name;
    }

    this.breed = function(){
        return breed;
    }

}

module.exports = Dog;
