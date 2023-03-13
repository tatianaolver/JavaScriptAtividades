function validarSenha(name, senha)
{
    var name = document.getElementById(name).value;
    var senha = document.getElementById(senha).value;
		
    if (name == senha)
    {
    	alert('Insira uma senha diferente de seu nome!');
    }
    else
    {
      	alert('Log in realizado!');
    }
}