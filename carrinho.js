// Função para atualizar o preço total de cada produto baseado na quantidade
function atualizarPrecoTotal(produtoLinha) {
    const quantidade = produtoLinha.querySelector('.Quantidade').value;
    const vdCriatura = parseFloat(produtoLinha.querySelector('.vdCriatura').innerText.replace('VD', ''));
    const vdTotal = quantidade * vdCriatura;

    // Atualiza o valor total do produto na linha
    produtoLinha.querySelector('.vdTotal').innerText = `VD ${vdTotal}`;
}

// Função para calcular o total final do carrinho
function calcularTotalFinal() {
    let totalFinal = 0;
    const produtos = document.querySelectorAll('tbody tr');

    produtos.forEach(produtoLinha => {
        const vdTotal = parseFloat(produtoLinha.querySelector('.vdTotal').innerText.replace('VD', ''));
        totalFinal += vdTotal;
    });

    // Atualiza o valor total final no HTML
    document.getElementById('totalFinal').innerText = `VD ${totalFinal}`;
}

// Adiciona eventos para alterar a quantidade e recalcular o total
const quantidades = document.querySelectorAll('.Quantidade');

quantidades.forEach(quantidade => {
    quantidade.addEventListener('input', function() {
        const produtoLinha = this.closest('tr'); // Seleciona a linha correspondente
        atualizarPrecoTotal(produtoLinha); // Atualiza o total do produto
        calcularTotalFinal(); // Recalcula o total final
    });
});

// Função para remover um produto do carrinho
function removerProduto(produtoLinha) {
    produtoLinha.remove();
    calcularTotalFinal(); // Recalcula o total final após remoção
}

// Adiciona eventos para remover produtos
const removerBotoes = document.querySelectorAll('.removerCriatura');

removerBotoes.forEach(botao => {
    botao.addEventListener('click', function() {
        const produtoLinha = this.closest('tr'); // Seleciona a linha correspondente
        removerProduto(produtoLinha); // Remove o produto
    });
});

// Calcula o total inicial na página carregada
calcularTotalFinal();
