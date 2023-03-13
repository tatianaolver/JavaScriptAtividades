var populacaoA = 80000;
var populacaoB = 200000;
var taxaA = 0.03;
var taxaB = 0.015;

var anos = 0;

while(populacaoA<populacaoB){
    anos ++;
    if(populacaoA>populacaoB){
        break;
    }

    console.log("População A é de " + populacaoA.toFixed());
    console.log("População B é de " + populacaoB.toFixed());

    populacaoA += populacaoA*taxaA;
    populacaoB += populacaoB*taxaB;
}

    console.log("População do pais A é de " + populacaoA.toFixed());
    console.log("População do pais B é de " + populacaoB.toFixed());

    console.log("Serão necessários " +anos+ " anos para que a população do país A ultrapasse ou iguale o país B.");