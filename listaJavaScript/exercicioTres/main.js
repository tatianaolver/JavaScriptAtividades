function validarCadastro(){
    var  nome = new String (document.getElementById("nome").value);
    var idade =  parseInt(document.getElementById("idade").value);
    var salario = parseFloat(document.getElementById("salario").value);
    var sexo = new String(document.getElementById("sexo").value);
    var estadoCivil = new String (document.getElementById("estadoCivil").value);



    if(nome.length<4){
        alert("Erro. O nome completo informado deve possuir pelo menos 4 caracteres para que o cadastro seja realizado.")
    }
    else if(idade<=0 || idade>150){
        alert("Erro. A idade informada deve ser maior que 0 e menor que 150 anos para que o cadastro seja realizado.")
    }
    else if(salario<=0){
        alert("Erro. O salário informado deve ser maior que 0 para que o cadastro seja realizado.")
    }
    else if(sexo[0]!== 'F' && sexo[0]!=='M'){
        alert("Erro. O sexo informado deve ser F para feminino ou M para masculino.")
    }
    else if(estadoCivil[0]!=='S' && estadoCivil[0]!=='C' && estadoCivil[0]!=='D' && estadoCivil[0]!=='V'){
        alert("Erro. O estado civil informado não é uma opção válida! Tente novamente.")
    }
    else{
        alert("Cadastrado realizado com sucesso!")
        location.reload();
 
    }

    
}