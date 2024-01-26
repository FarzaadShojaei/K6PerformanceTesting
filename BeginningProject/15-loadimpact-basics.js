import http from 'k6/http';
import check from k6;
import {Rate,Trend} from 'k6/metrics'
import { group } from 'k6';


export let errorRate=new Rate('errors');
let groupDuration=Trend("groupDuration")
export let options={
    vus:10,
    duration:'2s',
    threashold:{
        errors:['rate<0.1'], //10% errors
        'groupDuration{groupName:groupGetUsers}' : ['avg< 200'],
        'groupDuration{groupName:groupGetGroups}' : ['avg< 300']
    }

}





function groupWithMetrics(nameOgGroup,groupFunction){
 let start=new Date();

 group(nameOgGroup,groupFunction);

 let end=new Date();

  groupDuration.add(end-start,{groupName:nameOgGroup})
}

export default function(){
  groupWithMetrics("groupGetUsers",function(){
    const responseGetUsers=http.get('https://run.mocky.io/v3/06037804-8e27-4b42-ac00-79f0bf3a5005');
    const checkGetUsers=check(responseGetUsers,{
        "is response of API1 is 200 :" : r=> r.status === 200

    })

    errorRate.add(!checkGetUsers)
});
groupWithMetrics("groupGetGroups",function(){
const responseGetGroups=http.get('https://run.mocky.io/v3/06037804-8e27-4b42-ac00-79f0bf3a5005');
const checkGetGroups=check(responseGetGroups,{
    "is response of API1 is 200 :" : r=> r.status === 200

})
errorRate.add(!checkGetGroups)

})
}







