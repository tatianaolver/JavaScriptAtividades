function exibirMaior(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value)
    var num3 = parseFloat(document.getElementById("num3").value)
    var num4 = parseFloat(document.getElementById("num4").value)
    var num5 = parseFloat(document.getElementById("num5").value)

    if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5){
        alert("Maior número é: " + num1)
    
        } else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5){
        alert("Maior número é: " + num2)

        } else if(num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5){
        alert('Maior número é: ' + num3)

        } else if(num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5){
        alert('Maior número é: ' + num4)

        } else{
        alert('Maior número é: ' + num3)
        }
}