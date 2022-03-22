
let upAllUsersArray = JSON.parse(localStorage.getItem("SignedUpUsers"));
for(i=0 ; i<upAllUsersArray.length ; i++)
{
    document.querySelector("h2").innerHTML = `Welcome ${upAllUsersArray[i].upNameValue}`;
}
