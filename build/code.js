const response = document.querySelector(".button");
const data= document.querySelector("#textarea1");
if(response){
    response.addEventListener("click",async()=>{
        const respon = await fetch("https://icanhazdadjoke.com",{
            method: "GET",
            headers : {
                Accept : "application/json"
            } 
        });const respons = await respon.json();
        data.value = respons.joke;
    }
    );

}
else{
    console.log("invalid response")
}