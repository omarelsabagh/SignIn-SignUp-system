

let SignUpBtn = document.querySelector("#SignUpBtnId");

let nameReg =  /^[a-zA-Z ]+$/;
let emailReg =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let passwordReg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;




SignUpBtn.addEventListener( "click" , onClickSignUp );


let upAllUsersArray ;
if(localStorage.getItem("SignedUpUsers") ==null)
{
    upAllUsersArray = [];
}
else
{
    upAllUsersArray = JSON.parse(localStorage.getItem("SignedUpUsers"));
}

function onClickSignUp()
{
   
        var oneSignupObject = {
            upNameValue : document.getElementById("upNameValueId").value,
            upEmailValue : document.getElementById("upEmailValueId").value,
            upPasswordValue : document.getElementById("upPasswordValueId").value
        
        
        };

        if(nameReg.test(document.getElementById("upNameValueId").value) ) //NameReg
        {
            if(emailReg.test(document.getElementById("upEmailValueId").value) ) //EmailReg
            {
           
                if(passwordReg.test(document.getElementById("upPasswordValueId").value) ) //PasswordReg
                {
                

                    upAllUsersArray.push(oneSignupObject);
                    document.querySelector("#sucessMsg").classList.replace("d-none","d-flex");

                    document.querySelector("#errorPassword").classList.replace("d-flex","d-none");
                    


                }
                else
                {
                    document.querySelector("#errorPassword").classList.replace("d-none","d-flex");
                    document.querySelector("#sucessMsg").classList.replace("d-flex","d-none");
                }

               
                document.querySelector("#errorEmail").classList.replace("d-flex","d-none") ;

            }
            else
            {
                document.querySelector("#errorEmail").classList.replace("d-none","d-flex");
                document.querySelector("#sucessMsg").classList.replace("d-flex","d-none");

            }

            document.querySelector("#errorName").classList.replace("d-flex","d-none");
            

        }     
        else
        {
            document.querySelector("#errorName").classList.replace("d-none","d-flex");
            document.querySelector("#sucessMsg").classList.replace("d-flex","d-none");
        }
        
                   

    localStorage.setItem("SignedUpUsers" , JSON.stringify(upAllUsersArray)) ;  //local storage

  
 
}

 