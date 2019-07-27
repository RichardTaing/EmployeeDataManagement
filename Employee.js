// Initialize Firebase

var firebaseConfig = {
  apiKey: "AIzaSyAIr73tfbcaTERPmTbYZfnWcwemF5Hm7IM",
  authDomain: "project1-c7e8d-68c8d.firebaseapp.com",
  databaseURL: "https://project1-c7e8d-68c8d.firebaseio.com",
  projectId: "project1-c7e8d",
  storageBucket: "",
  messagingSenderId: "1028263948344",
  appId: "1:1028263948344:web:c3cc8b011a46c270"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Create a variable to reference the database.
var database = firebase.database();

// Initial Values
var employeeName = "";
var role = "";
var startDate = 0;
var monthlyRate = "";

// Capture Button Click
$("#submit").on("click", function(event) {
  event.preventDefault();

  // Grabbed values from text-boxes
  employeeName = $("#name-input")
    .val()
    .trim();
  role = $("#role-input")
    .val()
    .trim();
  startDate = $("#startDate-input")
    .val()
    .trim();
  monthlyRate = $("#monthlyrate-input")
    .val()
    .trim();

  // Code for "Setting values in the database"
  database.ref().set({})

  database.ref().push({
    employeeName: employeeName,
    role: role,
    startDate: startDate,
    monthlyRate: monthlyRate,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  });
});

// Firebase watcher .on("child_added"
database.ref().on(
  "child_added",
  function(childSnapshot) {
    // storing the snapshot.val() in a variable for convenience
    var sv = childSnapshot.val();

    // Console.loging the last user's data
    console.log(sv.employeeName);
    console.log(sv.role);
    console.log(sv.startDate);
    console.log(sv.monthlyRate);

    // console.log(childSnapshot.val().employeeName);
    // console.log(childSnapshot.val().role);
    // console.log(childSnapshot.val().startDate);
    // console.log(childSnapshot.val().monthlyRate);

    // fucntion to append data in a table

    // Change the HTML to reflect
    $("#employeelist").append(
    "<tr><td class='name'>" + sv.employeeName + "</td><td class='role''>" + sv.role + "</td><td class='startdate''>" + sv.startDate + "</td><td class='monthlyrate''>" + sv.monthlyRate + "</td><td class='monthlyrate''>" + sv.monthlyRate + "</td><td class='monthlyrate''>" + sv.monthlyRate + "</td></tr>"
    );

    // $("#name-input").text(sv.employeeName);
    // $("#role-input").text(sv.role);
    // $("#startDate-input").text(sv.startDate);
    // $("#monthlyrate-input").text(sv.monthlyRate);

    // Handle the errors
  },
  function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  }
);

// database
//   .ref()
//   .orderByChild("dateAdded")
//   .limitToLast(1)
//   .on("child_added", function(childSnapshot) {
//     var sv = childSnapshot.val();
//     // Change the HTML to reflect
//     $("#name-input").text(sv.employeeName);
//     $("#role-input").text(sv.role);
//     $("#startDate-input").text(sv.startDate);
//     $("#monthlyrate-input").text(sv.monthlyRate);
//   });
