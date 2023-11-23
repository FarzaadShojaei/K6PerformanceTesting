

export default function(){
var url='https://run.mocky.io/v3/0a08ccd3-27e4-4a42-a3db-0392a59b52fe';

var param={
    headers:{
        'Content-Type' : 'application/json'
    }
}

var payload=JSON.stringify({
    email:"abc@gmail.com",
    password:"abscsdsa"


})

let response=http.post(url,param,payload)


}