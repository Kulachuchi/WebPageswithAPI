function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

const serviceID = "service_sbs8zap";
const templateID = "template_9lepnwp";

emailjs.send(serviceID,templateID,params)
.then(
    res =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message has been sent successfully");
    })
    .catch((err)=>console.log(err));
}
/*Codes in this js file for the Email API is from YouTuber Code with Voran */