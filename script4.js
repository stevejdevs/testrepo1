function mostrarMenores(){
    let inputName = "nombre"
    let inputAge = "edad"

    console.log("Menor/es de 10 años:")

    for(x = 1; x <=3; x++){
        let nombre = document.getElementById(inputName + x).value;
        let edad = document.getElementById(inputAge + x).value;

        if(edad < 10 && edad != ''){
            console.log(nombre)
        }
    }
}
