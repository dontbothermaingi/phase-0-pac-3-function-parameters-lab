function introduction(name){
    return `Hi my name is ${name}` 
}
console.log(introduction("Maingi"))

function introductionWithLanguage(name,language){
     return `Hi, my name is ${name} and I am learning to program in ${language}`
}
console.log(introductionWithLanguage("Maingi"," JavaScript"))

function introductionWithLanguageOptional(name,language = "JavaScript"){
    console.log (`Hi, my name is ${name} and I am learning to program in ${language}`)
}
introductionWithLanguageOptional("DENIS");

