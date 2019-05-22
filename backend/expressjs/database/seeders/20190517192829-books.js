'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.
        */

        return queryInterface.bulkInsert(
            'books', [
                {
                    name: 'O Poder da Autorresponsabilidade',
                    description: 'Muitas pessoas têm consciência de que precisam assumir as rédeas da própria vida, porém não sabem como fazer isso na prática. Este livro traz ao leitor o conceito de autorresponsabilidade. Trata-se de um manual que apresenta a metodologia das 6 leis para a conquista da autorresponsabilidade, de modo que o leitor assuma o comando de sua vida. Aplicando esse conceito, você será capaz de levar alta performance à vida pessoal e profissional, saindo de um estado não satisfatório para uma vida de abundância e de sucesso. Aqui você vai aprender a: 1. Calar-se em vez de criticar. 2. Dar sugestão em vez de reclamar. 3. Buscar a solução em vez de buscar culpados. 4. Fazer-se de vencedor em vez de vitimizar-se. 5. Aprender com os erros em vez de justificá-los. 6. Julgar as atitudes, e não as pessoas.',
                    price: 19.90,
                    quantity: 100,
                    created_at: '2019-05-22',
                    updated_at: '2019-05-22'
                },
                {
                    name: 'O Milagre Da Manhã',
                    description: 'Conheça o método simples e eficaz que vai proporcionar a vida dos sonhos — antes das 8 horas da manhã! Hal Elrod explica os benefícios de acordar cedo e desenvolver todo o nosso potencial e as nossas habilidades. O milagre da manhã permite que o leitor alcance níveis de sucesso jamais imaginados, tanto na vida pessoal quanto profissional. A mudança de hábitos e a nova rotina matinal proposta por Hal vai proporcionar melhorias significativas na saúde, na felicidade, nos relacionamentos, nas finanças, na espiritualidade ou quaisquer outras áreas que necessitem ser aprimoradas.',
                    price: 39.90,
                    quantity: 91,
                    created_at: '2019-05-22',
                    updated_at: '2019-05-22'
                },
                {
                    name: 'F*Deu Geral - Um Livro Sobre Esperança?',
                    description: 'Vivemos em uma época interessante. Materialmente, nunca estivemos melhor — temos mais liberdade, mais saúde e mais riqueza do que em qualquer momento da história da humanidade. No entanto, tudo ao redor parece terrivelmente f*dido: aquecimento global, governantes horrorosos, economia em crise e todos constantemente ofendidos nas redes sociais. Temos acesso a tecnologia, educação e comunicação de maneiras que nossos ancestrais jamais sonhariam e, mesmo assim, sentimos essa desesperança esmagadora. O que está acontecendo, afinal? Se você também está se fazendo essa pergunta, o livro de Mark Manson é sua próxima leitura obrigatória. Em A sutil arte de ligar o f*da-se, Manson, de maneira brilhante, deu forma à ansiedade que permeia a vida moderna — agora, em F*deu geral, ele desvia seu olhar das falhas inevitáveis de cada indivíduo para as inúmeras calamidades que tomam o mundo. Ao trazer desde pesquisas psicológicas até pérolas da sabedoria atemporal de filósofos como Platão e Nietzsche (e Tom Waits), Manson disseca religião e política e trata de como as duas, desconfortavelmente, vieram a se assemelhar. Também explora nossa relação com o dinheiro, o entretenimento e a internet, e desafia de modo franco nossas definições de fé, felicidade, liberdade e, até mesmo, a própria definição de esperança. Um passeio inusitado e divertido pela dor em nossos corações e o estresse em nossas vidas.',
                    price: 34.90,
                    quantity: 82,
                    created_at: '2019-05-22',
                    updated_at: '2019-05-22'
                },
                {
                    name: 'Mais Esperto Que o Diabo – o Mistério Revelado da Liberdade e do Sucesso',
                    description: 'Napoleon Hill revela que quebrou o código mental do diabo e o forçou a confessar os seus segredos. O manuscrito que resultou deste feito - "Mais Esperto que o Diabo"- mostrou-se tão controverso, que acabou escondido por mais de 70 anos. Usando sua habilidade legendária para chegar a raiz do potencial humano, Hill cava profundamente para identificar os maiores obstáculos que enfrentamos na busca de nossas metas pessoais - incluindo o medo, procrastinação, a raiva e a inveja - como ferramentas orquestradas pelo próprio diabo. Esses métodos ocultos de controle podem levar-nos a ruína, e Hill revela os 7 princípios que eficazmente poderão combater a alienação e levar-nos finalmente ao triunfo e ao sucesso. Fascinante, provocativo e encorajador, "Mais Esperto que o Diabo" mostra como criar a sua própria senha para o sucesso, harmonia e realização em um momento de tantas incertezas e medos.',
                    price: 42.90,
                    quantity: 73,
                    created_at: '2019-05-22',
                    updated_at: '2019-05-22'
                },
                {
                    name: 'A Garota do Lago',
                    description: 'Summit Lake, uma pequena cidade entre montanhas, é esse tipo de lugar, bucólico e com encantadoras casas dispostas à beira de um longo trecho de água intocada. Duas semanas atrás, a estudante de direito Becca Eckersley foi brutalmente assassinada em uma dessas casas. Filha de um poderoso advogado, Becca estava no auge de sua vida. Atraída Instintivamente pela notícia, a repórter Kelsey Castle vai até a cidade para investigar o caso. ...E Logo Se Estabelece Uma Conexão Íntima Quando Um Vivo Caminha Nas Mesmas Pegadas Dos Mortos...E enquanto descobre sobre as amizades de Becca, sua vida amorosa e os segredos que ela guardava, a repórter fica cada vez mais convencida de que a verdade sobre o que aconteceu com Becca pode ser a chave para superar as marcas sombrias de seu próprio passado.',
                    price: 39.90,
                    quantity: 64,
                    created_at: '2019-05-22',
                    updated_at: '2019-05-22'
                }
            ],
            {}
        );

    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.
        */
        
        return queryInterface.bulkDelete('books', null, {});        
    }
};
