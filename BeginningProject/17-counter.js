import {Counter} from 'k6/metrics';
var myCounter=new Counter('my counter')

export default function(){
    myCounter.add(1)
    myCounter.add(2)
}