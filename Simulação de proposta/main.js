// Função para formatar moeda com o símbolo "R$"
function formatCurrency(input) {
    let value = input.value.replace(/\D/g, '');  // Remove todos os caracteres não numéricos
    value = (value / 100).toFixed(2);            // Divide por 100 para representar decimais
    value = value.replace(".", ",");             // Substitui ponto por vírgula
    input.value = `R$ ${value}`;
}

// Função que extrai o valor numérico de um campo de entrada formatado
function getNumericValue(inputId) {
    const input = document.getElementById(inputId);
    return parseFloat(input.value.replace(/[^\d,-]/g, '').replace(',', '.')) || 0;
}


var cordenacao = document.getElementById("valor-cordenacao")

// Verifica e executa a função ao alterar qualquer um dos campos
document.getElementById("Input-Valor-venda").onchange = executeCount;
document.getElementById("Input-Financiamento").onchange = executeCount;
document.getElementById("Input-Subsidio").onchange = executeCount;
document.getElementById("Input-FGTS").onchange = executeCount;
document.getElementById("Input-Renda").onchange = executeCount;

// Função principal que executa o cálculo
    function executeCount() {
    // Extrai valores numéricos dos inputs
    var Valor_venda = getNumericValue("Input-Valor-venda");
    var Financiamento = getNumericValue("Input-Financiamento");
    var Subsidio = getNumericValue("Input-Subsidio");
    var FGTS = getNumericValue("Input-FGTS");
    var Renda = getNumericValue("Input-Renda");

    // Realiza o cálculo
    let resultado = Valor_venda - Financiamento + Subsidio - FGTS - Renda;
    let comissao_Cordenacao = Valor_venda * 0.036;
    cordenacao.textContent = ` R$ ${comissao_Cordenacao.toFixed(2).replace(".", ",")}`
    if (Valor_venda != 0 && Financiamento != 0 && Subsidio != 0 && FGTS != 0 && Renda != 0) { 
        
    }
}



