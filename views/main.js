document.addEventListener("DOMContentLoaded", () => {
    const redirectButton = document.getElementById("redirectLink1");
    //console.log("Succesfull load of js dom");
    const redirectToCreateReview = () => {
        //console.log("Successful Trigger");
        window.location.href = "/createReview";
    };
    if (redirectButton) {
        redirectButton.addEventListener("click", redirectToCreateReview);
        //console.log("Attached event listener");
    }
    
});
document.addEventListener("DOMContentLoaded", () => {
    const redirectButton = document.getElementById("redirectLink2");
    //console.log("Succesfull load of js dom");
    const redirectToCreateReview = () => {
       // console.log("Successful Trigger");
        window.location.href = "/";
    };
    if (redirectButton) {
        redirectButton.addEventListener("click", redirectToCreateReview);
        //console.log("Attached event listener");
    }
    
});
document.addEventListener("DOMContentLoaded", () => {
    const redirectButton = document.getElementById("redirectLink3");
    //console.log("Succesfull load of js dom");
    const redirectToCreateReview = () => {
        //console.log("Successful Trigger");
        window.location.href = "/statistics";
    };
    if (redirectButton) {
        redirectButton.addEventListener("click", redirectToCreateReview);
        //console.log("Attached event listener");
    }
    
});
// document.addEventListener("DOMContentLoaded", () => {
//     console.log("DOM Content loaded");
//     const submitButton = document.getElementById("submitButton");
//     console.log(`adding event listener to ${submitButton}`);
//     submitButton.addEventListener("submit", async function (event) {
//         event.preventDefault(); //Prevent page reloads
//         const review = document.getElementById("reviewText").value;
//         const bookName = document.getElementById("bookName").value;
//         if (review.trim() === "") 
//         {
//             alert("Ploease enter a valid review before submitting.");
//             return;
//         }
//         try {
//             const response = await fetch("/createReview",
//                 {
//                     method: "POST",
//                     headers: {"Content-Type": "application/json",},
//                     body: JSON.stringify({ reviewText: review}),
//                 }
//             );
//             if (response.ok) {
//                 alert("Review submitted successfully!");
//                 getElementById("reviewText").reset();
//                 document.getElementById("bookName").reset();
//             }
//             else {
//                 alert("Failed to submit review. Please try again.");
//             }
//         } catch (error) {
//             console.error("Error submitting review:",error);
//             alert("Something went worng");
//         }
//     });
// });

