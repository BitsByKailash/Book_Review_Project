document.addEventListener("DOMContentLoaded", () => {
    const redirectButton = document.getElementById("redirectLink1");
    console.log("Succesfull load of js dom");
    const redirectToCreateReview = () => {
        console.log("Successful Trigger");
        window.location.href = "/createReview";
    };
    if (redirectButton) {
        redirectButton.addEventListener("click", redirectToCreateReview);
        console.log("Attached event listener");
    }
    
});
document.addEventListener("DOMContentLoaded", () => {
    const redirectButton = document.getElementById("redirectLink2");
    console.log("Succesfull load of js dom");
    const redirectToCreateReview = () => {
        console.log("Successful Trigger");
        window.location.href = "/";
    };
    if (redirectButton) {
        redirectButton.addEventListener("click", redirectToCreateReview);
        console.log("Attached event listener");
    }
    
});

