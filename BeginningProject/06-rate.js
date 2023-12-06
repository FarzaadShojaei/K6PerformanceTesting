import {http} from 'k6/http';
import { check } from 'k6';
import { Rate} from 'k6/metrics';


export let errorRate=new Rate('errors')
var getApiTrend=new Trend("TREND_Get_Api_Duration");
var getApiTrendWaiting=new Trend("TREND_Get_Api_Waiting")
var googlegetApiTrend=new Trend("TREND_Google_GET_API_Duration")
var googlegetApiTrendWaiting=new Trend("TREND_Google_Get_Api_Waiting")

export let options={
thresholds:{
    errors:['rate<0.1'] //i.e 10% error
}

}

export default function(){
  let response=  http.get('https://run.mocky.io/v3/0a08ccd3-27e4-4a42-a3db-0392a59b52fe')
  console.log(`respone body length ${response.body.length} for VU= ${__VU} ITERA=${__ITER}`)

  const check1=check(response,{

    'is response status is 200 :' : (r) => r.status===200,
    'body size is 0 bytes :' :(r)=> r.body.length ==0
  })
errorRate.add(!check1);
getApiTrend.add(response.timings.duration)
getApiTrendWaiting.add(response.timings.waiting)
googlegetApiTrendWaiting.add(response.duration.waiting)



const googleResponse=http.get('https://www.google.com/');
googlegetApiTrend.add(googleResponse.timings.duration)
googlegetApiTrendWaiting.add(googleResponse.duration.waiting)

const check2=check(response,{

   
    'body size is 12 bytes :' :(r)=> r.body.length ==12
  })
errorRate.add(!check2);
}
