var isLoggedIn = true;
var userEmailVerifed = false;
var validCardInfo = true;


 /*   if (isLoggedIn) {
    console.log("Logged in");
    if (userEmailVerifed) {
        console.log("Email verified");
    }
    if (validCardInfo) {
        console.log("You can make a purchase");
    }
}
*/

if (isLoggedIn && userEmailVerifed && validCardInfo) {
    console.log("Verification succesfully, You can make a purchase");
}
else
{
    console.log("You cannot make a purchase, please check your account details");
}

// || jedna z nich musi byc prawdziwa
// && wszystkie musza byc prawdziwe