var loggedInWithEmail = false;
var loggedInWithFB = false;
var loggedInWithGoogle = false;
var loggedInWithApple = false;


if (loggedInWithEmail || loggedInWithFB || loggedInWithGoogle || loggedInWithApple) {
  console.log("User is logged in with at least one method.");
} else {
  console.log("User is not logged in with any method.");
}

// || jedna z nich musi byc prawdziwa
// && wszystkie musza byc prawdziwe