// Lista de mensagens
const mensagens = [
    "Você é incrível! Espero que seu dia seja tão especial quanto você. 💖",
    "Parabéns por ser uma pessoa tão única e especial. 🎉",
    "Que seu aniversário seja repleto de amor e alegria. 🎂",
    "Nunca se esqueça do quanto você é importante. 🌟",
    "Espero que esse dia traga tudo o que você merece de melhor! 😊"
  ];
  
  // Função para alterar a mensagem
  function alterarMensagem() {
    const mensagemElemento = document.getElementById("mensagem");
    const mensagemAtual = mensagemElemento.textContent; // Mensagem atual exibida
  
    // Filtra as mensagens para excluir a atual
    const mensagensDisponiveis = mensagens.filter(msg => msg !== mensagemAtual);
  
    // Seleciona uma mensagem aleatória dentre as disponíveis
    const randomIndex = Math.floor(Math.random() * mensagensDisponiveis.length);
    const novaMensagem = mensagensDisponiveis[randomIndex];
  
    // Atualiza o conteúdo da mensagem
    mensagemElemento.textContent = novaMensagem;
  }
  