function idade(dia_nascimento, mes_nascimento, ano_nascimento) {
    let d = new Date,
        ano_atual = d.getFullYear();
        mes_atual = d.getMonth() + 1;
        dia_atual = d.getDate();

        console.log("ano atual: " + ano_atual);
        console.log("mes atual: " + mes_atual);
        console.log("dia atual: " + dia_atual);

        ano_nascimento = +ano_nascimento;
        mes_nascimento = +mes_nascimento;
        dia_nascimento = +dia_nascimento;

        quantos_anos = ano_atual - ano_nascimento;

    if (mes_atual < mes_nascimento || mes_atual == mes_nascimento && dia_atual < dia_nascimento) {
        quantos_anos--;
    }

    return quantos_anos < 0 ? 0 : quantos_anos;
}

function maior18(dia, mes, ano){
    
    if(idade(dia, mes, ano) >= 18){
        console.log("Você tem mais que 18 anos");
    }else{
        console.log("Você não tem mais que 18 anos");
    }
}

function inputData(){

    let d = document.querySelector('input#data').valueAsDate;
    let dia = d.getUTCDate();
    let mes = d.getUTCMonth() + 1; 
    let ano = d.getUTCFullYear();

    console.log('Dia: ',dia);
    console.log('Mes: ',mes);
    console.log('Ano: ',ano);

    maior18(dia,mes,ano);
}