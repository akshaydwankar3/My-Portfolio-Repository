function SendEmail(){
    let params ={
        from_name : document.getElementById("Name").value,
        email_id : document.getElementById("Sender").value,
        message : document.getElementById("Message").value
    };
    emailjs.send("service_xpviw2s", "template_jxaahyq", params).then(function(res) {
        alert("success", res.status);
    });
}