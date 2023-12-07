import { sleep } from "k6";
import { Counter,Trend } from "k6/metrics";


var retryTrend=new Trend('GETAPI_MAX_RETRY_TREND')
var retryCounter=new Counter("GetAPI_MAX_RETRY");
var maxAttempts=5;
retryCounter.add(5)
export default function(){
for(var retries=5;retries>0;retries-- ){
   var numberOfAttempts=maxAttempts - retries +1;
   retryTrend.add(numberOfAttempts)
   const response=http.get('https://run.mocky.io/v3/06037804-8e27-4b42-ac00-79f0bf3a5005');

if(response.status !==404){
console.log(`Response is not Correct. attempt is ${numberOfAttempts} VU=${__VU} ITER=${__ITER} sleeping for 1 seconds`)

sleep(1)



}
else{
retries == 0;
}

}

}