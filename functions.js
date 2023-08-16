function sayMyName() {
    // function defination
    console.log("Udayraj");
}

sayMyName //Its is a refernence
sayMyName();

function addtwonumbers(a,b){
     console.log(a+b);
}
addtwonumbers(4,6);
 
function addition(a,b){
    return a+b
}

console.log(addition(4,3));

function name(username="enter user name"){

        result = `your name is ${username}`
        return result
    
}

console.log(name("udayraj"))
