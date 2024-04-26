//alert("Olá, mundo!")
function dataHora(){
    const dataAtual = new Date()
    const dataFormatada = dataAtual.toLocaleDateString()
    const horaFormatada = dataAtual.getHours()
    const minFormatado = dataAtual.getMinutes()
    const segFormatado = dataAtual.getSeconds()
    const dataHoraFormatada = String(dataFormatada + " - " + horaFormatada + ":" + minFormatado + ":" + segFormatado)
    document.getElementById("txtRetornoDataHora").setAttribute("value", dataHoraFormatada)
}

function validarCPF(){
    //validar só pelo tamanho da string, no momentos
    const cpf = String(document.getElementById("txtValidadeCPF").value)
    if (cpf.length() == 11){
        cpfValidade = "CPF VÁLIDO!"
        document.getElementById("txtValidadeCPF").setAttribute("value", cpfValidade)
    }else{
        cpfValidade = "CPF INVÁLIDO!"
        document.getElementById("txtValidadeCPF").setAttribute("value", cpfValidade)
    }
}

function validarCNPJ(){
    //validar só pelo tamanho da string, no momentos
    const cnpj = String(document.getElementById("txtValidadeCNPJ").value)
    if (cnpj.length() == 14){
        cnpjValidade = "CNPJ VÁLIDO!"
        document.getElementById("txtValidadeCNPJ").setAttribute("value", cnpjValidade)
    }else{
        cnpjValidade = "CNPJ INVÁLIDO!"
        document.getElementById("txtValidadeCNPJ").setAttribute("value", cnpjValidade)
    }
}

function valorAbsoluto(){
    document.getElementById("txtRetornoValorAbsoluto").setAttribute("value", "Valor Absoluto")
}

function arredondar(){
    //faltar corrigir
    const num_frac = parseFloat(document.getElementById("txtRetornoNumeroArredondado").value)
    num_int = num_frac.toFixed(0)
    document.getElementById("txtRetornoNumeroArredondado").setAttribute("value", num_int)
}

function comissao(){
    const taxa_comissao = 0.1
    const venda = parseFloat(document.getElementById("venda").value)
    const comissao = taxa_comissao * venda
    document.getElementById("txtComissaoPorVenda").setAttribute("value", comissao)
}