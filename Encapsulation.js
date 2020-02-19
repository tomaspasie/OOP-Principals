const Dog = function(name,breed){
    let n = name, b = breed;

    this.name = function(){
        return console.log('The dog is named ' + n + '.');
    }

    this.breed = function(){
        return console.log('The breed of the dog is ' + b + '.');
    }

}

const firstDog = new Dog ('Zed',"English Bull Terrier");
firstDog.name();
firstDog.breed();
