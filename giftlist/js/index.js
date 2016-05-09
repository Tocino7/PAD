 $("#login-button").click(function(event){
		/* event.preventDefault();
	 
	 $('form').fadeOut(500);
	 $('.wrapper').addClass('form-success');*/
	var user=$("#usuario").val();
	var passw=$("#pass").val()
	$.ajax({type: "POST", 
						url: "http://localhost/giftlist/prueba.php",
                      	data: ({Usuario: user, Pass: passw}),
                      cache: false,
                      dataType: "text",
                      success: Login
                    });
					return false;
				
				});
				
function Login(data){       
alert(data);
}

 $("#registro-button").click(function(event){
		/* event.preventDefault();
	 
	 $('form').fadeOut(500);
	 $('.wrapper').addClass('form-success');*/
	var user=$("#usuario").val();
	var passw=$("#pass").val();
	var telefono=$("#telefono").val()
	$.ajax({type: "POST", 
						url: "http://localhost/giftlist/registro.php",
                      	data: ({Usuario: user, Pass: passw, Telefono: telefono}),
                      cache: false,
                      dataType: "text",
                      success: Registro
                    });
					return false;
				
				});
				
function Registro(data){       
alert(data);
}
					



