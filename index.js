// code your solution here
function saturdayFun(def = "roller-skate"){
    return `This Saturday, I want to ${def}!`
   }

saturdayFun("bathe my dog")

function mondayWork(def = "go to the office"){
    return `This Monday, I will ${def}.`
   }

mondayWork("work from home")

function wrapAdjective(symb){
   return function wrapper(mess){
        return `You are ${symb}${mess}${symb}!`
    }
}
    
wrapAdjective()