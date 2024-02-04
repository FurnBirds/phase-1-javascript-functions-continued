// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

//saturdayFun("study")

function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(v = "*") {
    
    return function(x = `special`){
        return(`You are ${v}${x}${v}!` )
    }
    
};

console.log(wrapAdjective("%")("a dedicated programmer"))