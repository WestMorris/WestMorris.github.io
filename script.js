const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
const INPUT = document.getElementById('peso');
//Al presionar calcular 
CALCULAR.addEventListener('click', procedimiento);
//Al presionar enter en el input
INPUT.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        procedimiento();
        event.preventDefault();
    }
});


function calculo(peso) {
    let valor; 
    if (peso > 20) {
        valor = 1500+((peso-20)*20);
    } else if (peso > 10) {
        valor = 1000+((peso-10)*50);
    }else{
        valor = peso*100;
    } 
    valor = valor/24;
    return valor.toFixed(0);
}

function superficieCoporal(peso) {
    let valor = ((peso*4) + 7) / (peso + 90);
    return valor;

}
function procedimiento() {
    const DATO = document.getElementById('peso').value;
    if (DATO > 30) {
        let flujo = superficieCoporal(DATO);
        let diario1=flujo*1500;
        let diario2=flujo*2000;
        FLU.innerHTML='Valor 1500: '+diario1.toFixed(0)+' cc/hr'
        MAN.innerHTML='Valor 2000: '+diario2.toFixed(0)+' cc/hr'
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    }else if (DATO > 0){
        ERROR.style.display = 'none'
        //console.log(calculo(DATO));
        //let flujo = calcFlujo(DATO);
        //let mantenimiento = flujo*1.5;
        let flujo = calculo(DATO);
        let mantenimiento = flujo*1.5;
        FLU.innerHTML = flujo + ' cc/hr';
        MAN.innerHTML = 'm+m/2 ' + mantenimiento + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
}