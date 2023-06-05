$("button").click(function (e) { 
    var weight=$("#weight").val();
    let height=$("#height").val();
    let height_sqr=Math.pow(height,2);
    let BMI=(eval(weight/height_sqr)).toFixed(2);
    if(weight==="" && height==="")
    {
        alert("Enter correct data ");
        $(".input_field h1").remove();
    }
    else if(BMI<18.5){
        $(".input_field").append(`<h1></h1>`);
        $(".input_field h1").text(`you are underweigth ${BMI} `).css("color","blue");
        
    }
    else if(BMI >18.5 && BMI < 24.9){
        $(".input_field").append(`<h1></h1>`);
        $(".input_field h1").text(`you are healthy ${BMI} `).css("color","green");
    }
    else if( BMI < 24.9){
        $(".input_field").append(`<h1></h1>`);
        $(".input_field h1").text(`you are overweight ${BMI} `).css("color","red");
    }
    else{
        alert("error");
    } 
  $("#weight").val("");
  $("#height").val("");

});

