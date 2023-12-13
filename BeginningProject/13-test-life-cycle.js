

var counter=1;



export function setup(){
    console.log(`Inside Setup ${counter}`)
}

export default function(){
console.log(`Inside Setup - ${counter} VU=${__VU} ITER=${__ITER}`)
counter=counter+1;

}

export function teardown(){
    console.log(`Inside Setup - ${counter}`)
}