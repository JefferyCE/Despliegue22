function printDate(){
    var d = new Date;
    const dias = [
        'Domingo',
        'Lunes',
        'Martes',
        'Miércoles',
        'Jueves',
        'Viernes',
        'Sábado',
      ];
      const mes = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
      ]
    let p = document.getElementById("newText1");
    p.innerHTML = 'Hoy es '+dias[d.getDay()]+', '+(d.getDate()>9?d.getDate():('0'+d.getDate()))+' de '+mes[d.getMonth()]+' del '+d.getFullYear()+' y son las '+(d.getHours()>19?d.getHours():('0'+d.getHours()))+':'+(d.getMinutes()>9?d.getMinutes():('0'+d.getMinutes()))+' horas.';
}

function timelapse(){
    var name;
    var d = new Date;
    do{
        name = prompt('Escribe tu nombre y tus 2 apellidos.');
        var words;
        if(name != null){
            words = name.split(' ')
            if(words.length < 3 || words.length > 3){
                alert('Tienes que escribir un nombre y 2 apellidos.')
            }
        }
    } while(name != null && (words.length < 3 || words.length > 3));
    var od = new Date;
    
    let p = document.getElementById("newText2");
    
    if(name != null){
        p.innerHTML = 'En introducir '+name+' ha tardado '+Math.trunc(((od.getTime()-d.getTime())*0.001))+' segundos.';
    } else{
        p.innerHTML = 'Has cancelado la función.'
    }
   
}

function letterDNI(){
    const letters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    var numDNI;
    do{
        numDNI = prompt('Ingresa solo el número de tu DNI:')
        if(!isNaN(numDNI) && numDNI != null){
            if(numDNI.length === 8){
                alert('Número de DNI ingresado con éxito.')
            } else{
                alert('Ingrese un número de DNI correcto entre el 00000000 y 99999999.')
            }
        }
    } while((isNaN(numDNI) || numDNI.length > 8 || numDNI.length < 8) && numDNI != null);

    let p = document.getElementById("newText3");

    if(numDNI != null){
        p.innerHTML = 'Tu DNI es: '+numDNI+'-'+letters[numDNI%23]
    }
}