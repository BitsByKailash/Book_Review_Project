console.log("Javascript loaded on:", window.location.pathname);
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

//     if (!submitButton) {
//         console.error("Submit button not found!");
//         return;
//     }
//     console.log(`adding event listener to ${submitButton}`);
//     submitButton.addEventListener("click", async function (event) {
        
//         event.preventDefault(); //Prevent page reloads
//         console.log("Submitting form via Javascript.........");
//         const review = document.getElementById("reviewText").value;
//         const bookName = document.getElementById("bookName").value;
//         const bookImage = document.querySelector('input[name = "bookImage"]').files[0];
//         if (review.trim() === "") 
//         {
//             alert("Please enter a valid review before submitting.");
//             return;
//         }
//         try {
//             console.log("Sending request......");
//             console.log("Review Text:",review);
//             const response = await fetch("/createReview",{
//                     method: "POST",
//                     headers: {"Content-Type": "application/json",},
//                     body: JSON.stringify({ reviewText: review, bookName: bookName, bookImage: bookImage}),
//                 }
//             );
//             console.log(response);
//             if (!response.ok) {
//                 throw new Error(`Server error: ${response.status} ${response.statusText}`);
//             }
            
//             const responseData = await response.json();
//             console.log(responseData);
//             alert("Review submitted successfully!");
//             window.location.href = "/createReview";            
//         } catch (error) {
//             console.error("Error submitting review:",error);
//             //alert("Something went worng");
//         }
//     });
// });

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM Content loaded");
    const submitButton = document.getElementById("submitButton");

    if (!submitButton) {
        console.error("Submit button not found!");
        return;
    }
    console.log(`adding event listener to ${submitButton}`);
    submitButton.addEventListener("click", async function (event) {
        event.preventDefault(); // Prevent page reload
        console.log("Submitting form via Javascript.........");

        const review = document.getElementById("reviewText").value;
        const bookName = document.getElementById("bookName").value;
        const bookImage = document.querySelector('input[name="bookImage"]').files[0];
        
        if (review.trim() === "") {
            alert("Please enter a valid review before submitting.");
            return;
        }

        const formData = new FormData();
        formData.append("reviewText", review);
        formData.append("bookName", bookName);
        if (bookImage) {
            formData.append("bookImage", bookImage);
        }

        try {
            console.log("Sending request......");
            console.log("Review Text:", review);
            
            const response = await fetch("/createReview", {
                method: "POST",
                body: formData // No need to set Content-Type; it gets set automatically for FormData
            });
            
            console.log(response);
            if (!response.ok) {
                throw new Error(`Server error: ${response.status} ${response.statusText}`);
            }
            
            const responseData = await response.json();
            console.log(responseData);
            alert("Review submitted successfully!");
            window.location.href = "/createReview";
        } catch (error) {
            console.error("Error submitting review:", error);
        }
    });
});
