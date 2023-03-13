function calcularIntervalo(){
    let n1 = parseInt(document.getElementById("numero1").value);
    let n2 = parseInt(document.getElementById("numero2").value);

    for(i=0;i<n2;i++){
        if(i>n1 && i<n2){
            var divEl = document.createElement("div");
            var textEl = document.createTextNode(i);
            divEl.appendChild(textEl);
            document.getElementById("intervalo").appendChild(divEl)
        }
    }

}