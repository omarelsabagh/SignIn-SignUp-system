

let SignInBtn = document.querySelector("#SignInBtnId");






SignInBtn.addEventListener( "click" , onClickSignIn );


let upAllUsersArray = JSON.parse(localStorage.getItem("SignedUpUsers"));

function onClickSignIn()
{
     let inEmailValue = document.querySelector("#inEmailId").value;
     let inPasswordValue = document.querySelector("#inPasswordId").value;

     
   for(let i=0 ; i<upAllUsersArray.length ; i++)
   {
        if(inEmailValue.toLowerCase() == upAllUsersArray[i].upEmailValue.toLowerCase()  && inPasswordValue.toLowerCase() == upAllUsersArray[i].upPasswordValue.toLowerCase())
        {
          let inBtnLink = document.querySelector("#inBtnLinkId");
          inBtnLink.setAttribute("href" , "home.html");
          document.querySelector("#inWarningId").classList.replace("d-flex","d-none");
          break;
        }
        else
        {
          document.querySelector("#inWarningId").classList.replace("d-none","d-flex");
          
          
        }
    
     
   }
  
  
   
  
 

}

