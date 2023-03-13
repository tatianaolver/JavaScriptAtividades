function calculoPopulacao(){
    var populacaoA = parseInt(document.getElementById("populacaoA").value);
    var populacaoB = parseInt(document.getElementById("populacaoB").value);
    var taxaA = parseFloat(document.getElementById("taxaA").value);
    var taxaB = parseFloat(document.getElementById("taxaB").value);
    var anos = 0;

    
    while(populacaoA<populacaoB){ 
        anos ++;
        if(populacaoA>populacaoB){
            break;
        }

        populacaoA += populacaoA*taxaA;
        populacaoB += populacaoB*taxaB;
    }

        console.log("A população do país A é de: " + populacaoA.toFixed());
        console.log("A população do país B é de: " + populacaoB.toFixed());
        console.log("Serão necessários "+anos+ " anos para que o país A supere o país B populacionalmente.")

    }