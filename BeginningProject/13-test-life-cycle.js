

var counter=1;



export function setup(){
    console.log(`Inside Setup ${counter}`)
    return "My name is ABCD"
}

export default function(data){
console.log(`Inside Setup - ${counter} VU=${__VU} ITER=${__ITER} DATA is ${data}`)
counter=counter+1;

}

export function teardown(data){
    console.log(`Inside Teardown - ${counter} DATA is ${data}`)
}