//pagina  1
function mostrarValores(){
    let nombre = "kenny";
    let edad = 32;
    let esStudiante = true;
    document.write("nombre: ", nombre + "<br>")
    document.write("edad: " ,edad + "<br>")
    document.write("¿es estudiante ?: ", esStudiante + "<br>") 
    nombre = "luis";
    edad = 20;
    esStudiante; false;
    document.write("nombre: " , nombre + "<br>")
    document.write("edad; ", edad + "<br>") 
    document.write("¿es estudiante ?" , esStudiante + "<br>")
    }
//pagina2
    function operacionesMatematicas(){
        let a = 10;
        let b = 5;
        document.write("<strong>Resultado De operaciones:</strong><br>");
        document.write("la suma es: ", a+b, "<br>");
        document.write("la resta es: ", a-b, "<br>");
        document.write("la multiplicacion es: ", a*b, "<br>");
        document.write("la divicion es: ", a/b, "<br>");
        document.write("<strong>Resultado De comparaciones:</strong><br>");
        document.write("a es mayor que b? " , a>b , "<br>");
        document.write("a es menor que b? " , a<b , "<br>");
        document.write("a es igual a b? ", a==b, "<br>");
        document.write("a es diferente a b? " , a!=b , "<br>");    
    }
//pagina 3
    function verificarCondicion(){
        let esMayorDeEdad= true;
        let tieneLicencia = false;
        const puedeConducir = esMayorDeEdad && tieneLicencia;
        document.write("<strong>puede conducir ? </strong>, " + puedeConducir + "<br><br>")
    
        const mensajeBienvenida = "!hola, bienvenido al sistema"
        document.write("<strong< mensaje de bienvenida </strong>" + mensajeBienvenida  )
        } 