const countersElem = document.querySelectorAll('.counter');

countersElem.forEach((currELem)=>{
currELem.innerText = "0";

const  counterup = ()=>{
  let  currNum = +currELem.innerText;
  const dataNum = currELem.getAttribute('data-ceil');

  const increment = dataNum / 15;
  currNum  =  Math.floor(currNum + increment);

  if(currNum < dataNum){
    currELem.innerText = currNum;
    setTimeout(counterup  ,50);
  }else{
    currELem.innerText = dataNum;
  }
}
counterup();
})




// countersElem.forEach((counterElem) =>{
//     counterElem.innerText = "0";

//     const incrementsElem = () =>{
//       let currentNum = +counterElem.innerText;
//       const dataceil = counterElem.getAttribute('data-ceil');
//     //   console.log(dataceil);
//     const increment = dataceil / 15;
//    currentNum = Math.floor(currentNum + increment);

//    if(currentNum < dataceil){
//     counterElem.innerText= currentNum;
//     setTimeout(incrementsElem , 50)
//    }else{
//     counterElem.innerText = dataceil;
//    }

      
//     }
//     incrementsElem();
// })

