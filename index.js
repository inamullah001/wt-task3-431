$(function () {
    $("#myForm").submit(handleFormSubmit);
  });
  
  function handleFormSubmit(e) {

    var isValid = true;

    var name = $("#name").val();
    var pass = $("#password").val();
    var con_pass = $("#confirm_password").val();
    $("span").remove();

    $("#name , #password , #confirm_password").removeClass("error");

    
    if( name.length < 5){
        $("#name").addClass("error");
        $("<span>Name must be greater than 5 digits</span>").insertAfter($("#name"));
        isValid = false;
    }    

    if( pass.length < 8)
    {
      $("#password").addClass("error");
      $("<span>Password must be greater than 8 digits</span>").insertAfter($("#password"));
      isValid = false;
    }

    if ( (pass != con_pass) || con_pass.length < 8){

        $("#confirm_password").addClass("error");
        $("<span>Password and Confirm Password must match and must be greater than 8 digits</span>").insertAfter($("#confirm_password"));
        isValid = false;
    }

    if( isValid)
    {
      alert("Form is being submitted");
    }else{
      e.preventDefault();
    }
    
    const express = require("express");
    const app = express();
    const importdata= require("./data.json");
    
    let port = process.env.PORT || 3000;
    
    app.get("/",(req, res) =>{
      res.send(importdata);
    });
    
    
    app.listen(port);
    ©