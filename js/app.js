var firebaseConfig = {
    apiKey: "AIzaSyApJJ8BysCE2PKxXEYvprLIP371KrVlobo",
    authDomain: "test123-4a3ee.firebaseapp.com",
    projectId: "test123-4a3ee",
    storageBucket: "test123-4a3ee.appspot.com",
    messagingSenderId: "819540481144",
    appId: "1:819540481144:web:d63e987cc9718c3b2f898d",
    measurementId: "G-KHSVQ2ZJPB"
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