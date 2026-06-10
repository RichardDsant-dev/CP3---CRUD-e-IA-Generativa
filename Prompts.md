1º Prompt

Crie uma aplicação web de página única (single HTML file) com HTML, CSS e JavaScript puro — sem frameworks ou bibliotecas externas.
O tema da aplicação é uma Watchlist de Filmes (lista de filmes para assistir).




2º prompt: Detalhamento
Crie uma aplicação web de página única em HTML, CSS e JavaScript puro, sem frameworks ou bibliotecas externas. O tema é uma Watchlist de Filmes. A página começa exibindo apenas a tela de login, com a seção da lista completamente oculta. O formulário de login tem dois campos, um para usuário e outro para senha, e as credenciais válidas são usuário aluno e senha fiap2025. Se os campos estiverem vazios ao submeter, uma mensagem de erro deve aparecer na tela. Se as credenciais estiverem erradas, outra mensagem de erro deve aparecer na tela. Se estiverem corretas, a tela de login some e a seção da lista aparece.
Os dados da lista são armazenados em um array de strings, sem objetos dentro do array, com pelo menos três filmes já cadastrados como estado inicial. O usuário pode adicionar um filme ao final da lista, adicionar um filme ao início da lista, editar qualquer item individualmente usando o prompt nativo do navegador, e remover qualquer item individualmente. A remoção deve usar o índice do item no array com splice, nunca o valor, para evitar remover itens duplicados. Ao editar, se o usuário cancelar ou confirmar com o campo vazio, o item original deve permanecer sem alteração. Não é permitido salvar um item vazio, e a mensagem de erro deve aparecer na tela, não no console.
Todo o código JavaScript deve ser organizado em funções nomeadas, sem nenhum código solto fora de funções, exceto a declaração das variáveis globais e a chamada inicial de renderização. A função de renderização deve reconstruir o innerHTML da lista a cada chamada, refletindo o estado atual do array. Cada item exibido deve ter um botão de editar e um botão de remover ao lado. O visual deve ser limpo, com a tela de login centralizada na página e as mensagens de erro visíveis em destaque na tela.


ChatGPT — funções com nomes em inglês, o que dificulta a leitura para quem está aprendendo em português.

Gemini — usou um metodo mais complexo para montar a lista, difícil de explicar, não consegui entender muito bem.

Claude — demorou um pouco para fazer o codigo.