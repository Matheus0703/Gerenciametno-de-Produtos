const axios = require('axios');

async function testarApi() {
    try {
        // Testando a criação de um produto
        const novoProduto = await axios.post('http://localhost:3000/products', {
            name: 'Celular',
            price: 1500,
            category: 'Eletrônicos'
        });
        console.log('✅ Produto criado:', novoProduto.data);

        // Obtendo a lista de produtos
        const produtos = await axios.get('http://localhost:3000/products');
        console.log('📄 Lista de produtos:', produtos.data);

        // Atualizando um produto (substitua {id} pelo ID de um produto existente)
        const produtoAtualizado = await axios.put(`http://localhost:3000/products/${novoProduto.data._id}`, {
            name: 'Notebook',
            price: 3500,
            category: 'Computadores'
        });
        console.log('🔄 Produto atualizado:', produtoAtualizado.data);

        // Excluindo um produto
        const deletarProduto = await axios.delete(`http://localhost:3000/products/${novoProduto.data._id}`);
        console.log('🗑️ Produto excluído:', deletarProduto.data);
    } catch (error) {
        console.error('❌ Erro ao testar API:', error.response ? error.response.data : error.message);
    }
}

testarApi();