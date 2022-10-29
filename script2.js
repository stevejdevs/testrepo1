function sumaredades(){
    let inputedad1 = document.getElementById("edad1").value;
    let inputedad2 = document.getElementById("edad2").value;
    let inputedad3 = document.getElementById("edad3").value;
    
    let edad1 = Number(inputedad1);
    let edad2 = Number(inputedad2);
    let edad3 = Number(inputedad3);

    let total= edad1+edad2+edad3


     alert("La suma de edades es " + total );

}