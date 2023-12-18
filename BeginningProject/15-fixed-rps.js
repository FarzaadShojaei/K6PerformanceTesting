import http from 'k6/http';




export default function(){
    http.get("https://run.mocky.io/v3/06037804-8e27-4b42-ac00-79f0bf3a5005");
}

