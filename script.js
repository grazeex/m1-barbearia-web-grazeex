const barbearia = {
    cortes: [
        { id: 1, tipo: "Militar", valor: 20 },
        { id: 2, tipo: "Samurai", valor: 35 },
        { id: 3, tipo: "Pompadour", valor: 20 },
        { id: 4, tipo: "Moicano", valor: 10 },
        { id: 5, tipo: "Razor part", valor: 5 },
    ],
  
    barbas: [
        { id: 1, tipo: "Capitão Jack", valor: 20 },
        { id: 2, tipo: "Van Dyke", valor: 20 },
        { id: 3, tipo: "Barba Média", valor: 20 },
        { id: 4, tipo: "Barba Baixa", valor: 20 },
        { id: 5, tipo: "Barba Zero", valor: 15 },
    ],
    estaAberto: true,
};
  
  
function buscaCortePorId(id) {
    const corte = barbearia.cortes.find(c => c.id === id);
    return corte ? corte : "Corte não encontrado";
}

function buscaBarbaPorId(id) {
    const barba = barbearia.barbas.find(b => b.id === id);
    return barba ? barba : "Barba não encontrada";
}

function verificaStatusBarbearia() {
    return barbearia.estaAberto ? "Estamos abertos" : "Estamos fechados";
}

function retornaTodosCortes() {
    return barbearia.cortes;
}

function retornaTodasBarbas() {
    return barbearia.barbas;
}

function criaPedido(nomeCliente, corteId, barbaId) {
    const corte = buscaCortePorId(corteId);
    const barba = buscaBarbaPorId(barbaId);

    const pedido = {
        nome: nomeCliente,
        pedidoCorte: corte.tipo,
        pedidoCortePreco: corte.valor,
        pedidoBarba: barba.tipo,
        pedidoBarbaPreco: barba.valor,
      };
      return pedido;
}


function atualizarServico(lista, id, valor, tipo) {
    const index = lista.findIndex(item => item.id === id);
    if (index !== -1) {
        lista[index].tipo = novoTipo;
        lista[index].valor = novoValor;
    }
    return lista;
}

function calculaTotal(pedido) {
    return pedido.pedidoCortePreco + pedido.pedidoBarbaPreco;
}
  
  
