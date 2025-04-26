const estoqueLivros = [
    { id: 1043, titulo: 'A Jornada do Herói', autor: 'Carlos Mendes', quantidade: 5 },
    { id: 2897, titulo: 'Mistérios da Noite', autor: 'Ana Luiza Prado', quantidade: 2 },
    { id: 3721, titulo: 'Códigos Perdidos', autor: 'Eduardo Silva', quantidade: 8 },
    { id: 4982, titulo: 'Além das Estrelas', autor: 'Fernanda Costa', quantidade: 3 },
    { id: 6509, titulo: 'Segredos do Submundo', autor: 'Marcos Tavares', quantidade: 6 },
    { id: 7820, titulo: 'Histórias que Encantam', autor: 'Juliana Ribeiro', quantidade: 10 },
    { id: 8355, titulo: 'O Último Guardião', autor: 'Thiago Neves', quantidade: 4 }
];

const addLivrosAoEstoque = (id, titulo, autor, quantidade) => {
    
    estoqueLivros.push({
        id,
        titulo,
        autor,
        quantidade,
    });
    console.log('Livro adicionado com sucesso!')
}

const remLivroPeloId = (idLivro) => {
    const verificaIdNoEstoque = !!estoqueLivros.find(livro => livro.id === idLivro);
    if (verificaIdNoEstoque) {
        for (let indice = 0; indice < estoqueLivros.length; indice++) {
            if (estoqueLivros[indice].id === idLivro) {    
                console.log(`O livro de ID ${idLivro} foi removido com sucesso!`);         
                estoqueLivros.splice(indice, 1);
                break;
            }
        }
    }
    else
    console.log(`O livro de ID ${idLivro} não foi encontrado`);
}

const atualizaQtdeLivro = (idLivro, novaQtde)  =>{
    const verificaIdNoEstoque = !!estoqueLivros.find(livro => livro.id === idLivro); 
    if (verificaIdNoEstoque) {
        for (let livro of estoqueLivros) {
            if (livro.id === idLivro) {
                livro.quantidade = novaQtde
                console.log(`A quantidade do livro ${livro.titulo} foi atualizada para ${novaQtde}`);
                break;
            }
        }
    } else {
        console.log(`O id ${idLivro} não foi encontrado no estoque.`);
    }
}
    
const listarLivros = () => {
    if(estoqueLivros.lenght === 0) {
        console.log('O estoque de livros está vazio!')
    } else {
        console.log(`O estoque contém ${estoqueLivros.length} títulos.`)
        for (let livro of estoqueLivros){
            console.log(`
            ID ${livro.id}
            Livro: ${livro.titulo}
            Autor: ${livro.autor}
            Quantidade: ${livro.quantidade}
                `);
        }

    }
}

listarLivros();