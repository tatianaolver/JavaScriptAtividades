function informar(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var num3 = parseInt(document.getElementById("num3").value);
    var num4 = parseInt(document.getElementById("num4").value);
    var num5 = parseInt(document.getElementById("num5").value);

    var soma = num1+num2+num3+num4+num5;
    var media = soma/5;

    alert("A soma dos números inseridos é: " +soma+ " e a média é de: " +media+ ".")
    location.reload();
}