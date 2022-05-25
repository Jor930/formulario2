
function validar() {
    var result_val_email = validar_email();
    var result_val_passw = validar_password();
    var result_val_rpassw = validar_repit_password();
    var result_val_direcc = validar_direcc();
    var result_val_local = validar_locate();
    var result_val_code = validar_code();
    var result_val_num = validar_cel_tel();
    /*var result_val_cel = validar_cel();
    var result_val_tel =validar_tel();*/
    var result_val_com = validar_comuna();
    var result_val_check = comprobar_Checks();

    return (result_val_email && result_val_passw && result_val_rpassw && result_val_direcc && result_val_local && result_val_code && /*result_val_cel && result_val_tel &&*/ result_val_num && result_val_com && result_val_check);
}

function validar_formato_email(email){
    var idx_arroba = email.indexOf("@");
    if (idx_arroba < 1){
    return false;
    }else {        
        var idx_punto = email.indexOf(".")
        if (idx_punto <= idx_arroba + 2 || idx_punto == email. length - 1){
            return false;
        }       
        return true;
    }
}

function validar_email(){
    var email = document.getElementById("email").value;
    var div = document.getElementById("msj-email");
    if (email != ""){
        if (validar_formato_email(email)){
            div.innerHTML = "";
            return true;
        }else {
            div.innerHTML = "el formato del email no es valido";
            div.className = "text-danger"
            return false;
        }  

    } else {
        div.innerHTML = "el email no puede estar en blanco";
        div.className = "text-danger"
        return false;
    }    
}

function validar_password() {
    var val_passw = document.getElementById("password").value;
    var div = document.getElementById("msj-passw");
        if(val_passw.length > 2 && val_passw.length < 7){
            div.innerHTML = "";
            return true;
        } else{
            div.innerHTML = "la contraseña sebe de ser de almenos 6 caracteres";
            div.className = "text-danger";
            return false;
        }  
}

function validar_repit_password(val_passw){
    var val_passw = document.getElementById("password").value;
    var val_rpassw = document.getElementById("rpassword").value;
    var div = document.getElementById("msj-passw");
    var div2 = document.getElementById("msj-rpassw")
    if(val_rpassw != ""){
        if(val_rpassw.length > 2 && val_rpassw.length < 7){
            if(val_passw == val_rpassw){
                div.innerHTML = "";
                return true;
            } else{
                div.innerHTML = "las contraseñas no coinciden";
                div.className = "text-danger";
                return false;
            }
        } else{
            return false;
        }
    }else{
        div2.innerHTML = "repita su contraseña";
        div2.className = "text-danger"
        return false;
    }
}

function validar_direcc() {
    var direcc = document.getElementById("Direccion").value;
    var div = document.getElementById("msj-Direccion");
    if (direcc != ""){      
            div.innerHTML = "";
            return true;

    } else {
        div.innerHTML = "la direccion no puede estar en blanco";
        div.className = "text-danger"
        return false;
    }    
}

function validar_code() {
    var code = document.getElementById("cpostal").value;
    var div = document.getElementById("msj-cpostal");
    if (code != ""){
        if(isNaN(code)){
            div.innerHTML = "formato no valido";
            return false
        }else{
            div.innerHTML = "";
            return true
        }     
    } else {
        div.innerHTML = "el codigo postal no puede estar en blanco";
        div.className = "text-danger"
        return false;
    }    
}

function validar_locate() {
    var local = document.getElementById("localidad").value;
    var div = document.getElementById("msj-localidad");
    if (local != ""){      
            div.innerHTML = "";
            return true;

    } else {
        div.innerHTML = "la localidad no puede estar en blanco";
        div.className = "text-danger"
        return false;
    }    
}

function validar_comuna(){
    var comuna = document.getElementById("comuna").value;
    var  div = document.getElementById("msj-comuna");
    if(comuna == "" || comuna == 0){
        div.innerHTML = "No se ha seleccionado una comuna";
        div.className = "text-danger";
        return false;
    } else{
        div.innerHTML = "";
        return true;
    }
}
function validar_cel_tel() {
    var celular = document.getElementById("celular").value;
    var telefono = document.getElementById("telefono").value;
    var div = document.getElementById("msj-celular");
    if ( celular != "" && telefono != ""){
        if(isNaN(celular && telefono)==true){
            div.innerHTML="formato no valido";
            return false;
        }else {
            return true;
        }    
    }else {
        div.innerHTML = "debe de colocar almenos un numero de contacto";
        div.className="text-danger";
        return false;
    }

}





function comprobar_Checks() {
    var checkbox = document.getElementsByName("gridCheck");
    var div = document.getElementById("msj-check");
    var contador = 0;
    for(var i=1; i< checkbox.length; i++) {
        if(checkbox[i].checked)
            contador++
    }
    if(contador == 0){
        div.innerHTML = "Seleccione al menos 2";
        div.className = "text-danger";
        return false;
    }
}