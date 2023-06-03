//Cuadrado

function areacuadrado(){

    var answerp = document.getElementById("answerp");
    var side = parseFloat(document.getElementById("side").value);
    
    var area = side**2

    answerp.innerHTML = "El área del Cuadrado es: " + area + " cm²";
}

function perimetrocuadrado(){

    var answerp = document.getElementById("answerp");
    var side = parseFloat(document.getElementById("side").value);

    var perimetro = side*4

    answerp.innerHTML = "El perímetro del Cuadrado es: " + perimetro + " cm";
}

//Triángulo

function perimetrotriangulo(){

    var answerp = document.getElementById("answerp");
    var side1 = parseFloat(document.getElementById("side1").value);
    var side2 = parseFloat(document.getElementById("side2").value);
    var side3 = parseFloat(document.getElementById("side3").value);

    var perimetro = side1 + side2 + side3;

    answerp.innerHTML = "El perímetro del Triángulo es: " + perimetro + " cm";
}


function areatriangulo(){

    var answerp = document.getElementById("answerp");
    var base = parseFloat(document.getElementById("base").value);
    var high = parseFloat(document.getElementById("high").value);

    var area = (base * high)/2;

    answerp.innerHTML = "El área del Triángulo es: " + area + " cm²";
}

//Círculo

function diametrocirculo(){

    var answerp = document.getElementById("answerp");
    var radio = parseFloat(document.getElementById("radio").value);
    
    var diametro = radio*2

    answerp.innerHTML = "El diametro del Círculo es: " + diametro + " cm";
}

function perimetrocirculo(){

    var answerp = document.getElementById("answerp");
    var radio = parseFloat(document.getElementById("radio").value);
    
    var perimetro = (radio*2)*Math.PI

    answerp.innerHTML = "El perimetro del Círculo es: " + perimetro + " cm";
}

function areacirculo(){

    var answerp = document.getElementById("answerp");
    var radio = parseFloat(document.getElementById("radio").value);
    
    var area = (radio**2)*Math.PI

    answerp.innerHTML = "El área del Círculo es: " + area + " cm²";

}