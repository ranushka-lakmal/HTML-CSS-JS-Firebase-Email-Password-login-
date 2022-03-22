//add your credentials
var firebaseConfig = {
    apiKey: "ADD_API",
    authDomain: "ADD_AUTH",
    projectId: "ADD_PROJID",
    storageBucket: "ADD_STORAGE",
    messagingSenderId: "ADD_MESSAGE",
    appId: "ADD_APPID",
    measurementId: "ADD_MESUREMENT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
firebase.auth.Auth.Persistence.Local;


$("#btn-login").click(function () {

    function signIn() {
        var email = document.getElementById("email");
        var password = document.getElementById("password");
        const promise = auth.signInWithEmailAndPassword(email.value, password.value);
        promise.catch(e => alert(e.message));

    }

});


$("#signOut").click(function () {
    function signOut() {
        auth.signOut();
        alert("SignOut Successfully from System");
    }

});

function signOut() {
    auth.signOut();
    alert("SignOut Successfully from System");
}

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        var email = user.email;
        
        alert("Active user " + email);

    } else {
        alert("No Active user Found")
    }
});
