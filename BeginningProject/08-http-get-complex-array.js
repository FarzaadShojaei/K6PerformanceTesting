import http from "k6/http";

export default function(){
    let response=   http.get('https://run.mocky.io/v3/0a08ccd3-27e4-4a42-a3db-0392a59b52fe');


    let body=JSON.parse(response.body)

    body.data.forEach(element=>{
        console.log(`value of name from data is ${element.name}`)

        element.array.forEach(elementArray=>{
            console.log(`value of property array is ${elementArray}`)
        })
    });
}