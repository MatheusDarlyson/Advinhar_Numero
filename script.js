var numeroSecreto = parseInt(Math.random() * 1001)

function Advinhar(){
    const número = document.getElementById("number").value;

    if (número == numeroSecreto){
        alert('Parabéns, você acertou!')
    }else if (número > numeroSecreto){
        alert('Ops... Tente de novo, o número secreto é menor que este!')
    }else if (número < numeroSecreto){
        alert('Ops... Tente de novo, o número secreto é maior que este!')
    }
}
