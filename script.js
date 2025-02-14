
let carrinho = [];
let total = 0;

function adicionarCarrinho(nomeProduto, precoProduto) {
    carrinho.push({ nome: nomeProduto, preco: precoProduto });
    total += precoProduto;
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const itensCarrinho = document.getElementById("itensCarrinho");
    const totalCarrinho = document.getElementById("totalCarrinho");
    
    // Limpar lista
    itensCarrinho.innerHTML = '';
    
    // Adicionar itens ao carrinho
    carrinho.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        itensCarrinho.appendChild(li);
    });

    // Atualizar total
    totalCarrinho.textContent = total.toFixed(2);
    
    // Atualizar carrinho no menu
    const carrinhoLink = document.getElementById("carrinhoLink");
    carrinhoLink.textContent = `Carrinho (${carrinho.length})`;
}