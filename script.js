                // ACCESS TO THE HTML PARTS USING DOM (document object model)
      let btn = document.querySelector("#btn1");
      let btn1 = document.querySelector("#btn2")
      let pop = document.querySelector("#pop");
     let result1 = document.querySelector("#result1");
     let result2 = document.querySelector("#result2");
 
            //FUNCTION TO CALL USER'S INPUT

   function inputs(){
           let inputValue = document.querySelector("#input").value; 
           let input = Number(inputValue)
           return input;

    }

    // FUNCTION TO CHECK IF THE INPUT VALUE IS EMPTY IF EMPTY THEN NO OUTPUT

 function condition(){
        
    let inputValue = document.querySelector("#input").value; 
    let input = Number(inputValue)
           
    if(inputValue.trim()===""){
   pop.innerHTML="please enter a number";
   result1.style.display="none"
   result2.style.display="none"

}
else{
    pop.innerHTML="";
    result1.style.display="block"
    result2.style.display="block"
    
}
 }
    // FUNCTION TO CALCULATE AREA OF A CIRCLE

     function area(){

    inputs();

   result1.innerHTML="Area of cricle is " + 3.142  * inputs() * inputs();
 }
        //FUNCTION TO CALCULATE CIRCUMFERENCE OF A CIRCLE

 function circumference(){
    inputs();
     result2.innerHTML="Circumference of circle if " + 2 * 3.142 * inputs(); 
 }

          // EVENT TO CALL AREA AND CONDITION FUNCTION
btn.onclick = function(){

condition();

area();

} 

       // EVENT TO CALL CIRCUMFERENCE AND CONDITION FUNCTION

btn1.onclick = function(){

      condition();

     circumference();
}
