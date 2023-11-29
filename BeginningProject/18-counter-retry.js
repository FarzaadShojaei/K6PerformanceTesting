import { sleep } from "k6";
import { Counter } from "k6/metrics";

var retryCounter=new Counter("GetAPI_MAX_RETRY");

export default function(){
for(var retries=5;retries>0;retries-- ){
   const response=http.get('https://run.mocky.io/v3/06037804-8e27-4b42-ac00-79f0bf3a5005');

if(response.status !==404){
console.log(`Response is not Correct. attempt is ${retries}`)

sleep(1)



}
else{

}

}

}