'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.
        */

        return queryInterface.bulkInsert(
            'products', [
                {
                    name: 'Do que as coisas são feitas',
                    description: 'Do que é feito o livro? E a porta? E a vela? Do que é feito o colchão? E o balde? E a panela? Nessa aventura, o aprendizado acontece junto com a diversão. Por meio das rimas, vamos descobrindo, de forma lúdica e instigante, do que são feitas as coisas. Neste livro são apresentados materiais que fazem parte do dia a dia das crianças, seus usos e propriedades.',
                    price: 25.00,
                    quantity: 100,
                    image: "do-que-as-coisas-sao-feitas-deitado.jpg",
                    created_at: '2019-05-22',
                    updated_at: '2019-05-22'
                },
                {
                    name: 'Som, luz e seus efeitos especiais',
                    description: 'Você sabe como chega aos seus olhos o que você vê? E o que você ouve, como chega aos seus ouvidos? A feira de ciências é o momento perfeito para descobrir coisas novas e ela aconteceria em uma semana. Olga e seu amigo tinham uma missão: descobrir tudo sobre o som e a luz. Junte-se a eles nessa jornada e entenda também como o som e a luz se propagam.',
                    price: 25.00,
                    quantity: 100,
                    image: "Som-luz-e-efeitos-frente.jpg",
                    created_at: '2019-05-22',
                    updated_at: '2019-05-22'
                },
                {
                    name: 'Qual é o nome disso?',
                    description: 'Qual o nome disso? Qual o nome daquilo? Que todas as coisas têm nome você já sabe, mas será que as novas e as velhas são diferentes? Já parou para pensar em como era o ferro de passar roupa da vovó? Será que era muito diferente daquele que você tem hoje em casa? Com rimas e ilustrações, este livro explica de forma divertida como são os objetos de ontem e de hoje, do que são feitos e suas funções. Nessa viagem pelo tempo, descobrimos muito mais do que apenas o nome das coisas: descobrimos também como elas mudam com o passar dos anos.',
                    price: 25.00,
                    quantity: 100,
                    image: "Qual-e-o-nome-disso-frente.jpg",
                    created_at: '2019-05-22',
                    updated_at: '2019-05-22'
                },
                {
                    name: 'Jornada rumo ao infinito',
                    description: 'Depois de várias tentativas, Yuri e seus amigos finalmente conseguiram lançar o foguete. O sonho de Yuri era ser astronauta. Durante toda a sua infância, ele tinha ouvido histórias sobre o espaço. E a mais marcante foi a do primeiro homem a sair da Terra: o astronauta Yuri Gagarin. Mas o nosso herói, Yuri, queria ir mais longe. Yuri queria ver o universo de perto e descobrir todos os mistérios daquele infinito de estrelas. Com este livro você também aprenderá sobre as principais invenções que nos permitem observar e viajar … rumo ao infinito.',
                    price: 25.00,
                    quantity: 100,
                    image: "Jornada-rumo-ao-infinito-frente.jpg",
                    created_at: '2019-05-22',
                    updated_at: '2019-05-22'
                },
                {
                    name: 'Vacina é tudo de bom',
                    description: 'Tudo bem, eu sei que você não gosta de tomar vacina. Mas já parou para pensar no quanto ela é importante para sua saúde?  Já pensou por que tomamos vacina? Para entender tudo isso é preciso de muita imaginação. E de uma viagem no tempo. O destino? A Inglaterra. O ano? 1796. Nessa viagem, acompanhando o médico e cientista Edward Jenner, vamos descobrir a importância de prevenir da doença antes dela acontecer. Finalmente você vai entender por que vacina é tudo de bom!',
                    price: 25.00,
                    quantity: 100,
                    image: "Vacina-e-tudo-de-bom-frente.jpg",
                    created_at: '2019-05-22',
                    updated_at: '2019-05-22'
                },
                {
                    name: 'O micromundo',
                    description: 'Você não pode enxergar, mas existe um micromundo em sua volta. Miguel era um menino de 8 anos que amava as aulas de ciências. Ainda mais quando a professora levava a turma ao laboratório. Era dia de ver um mundo muito pequeno. Eles fariam isso usando uma lente muito poderosa: o microscópio. Com o poder de aumentar um milhão de vezes a visão do olho humano, as crianças puderam ver as células da pele. Então, Miguel descobriu existir um outro mundo. Estava presente em sua vida, mas ele não podia ver. Era pequeno demais para enxergar. Um mundo muito pequeno. Ou melhor, um micromundo.',
                    price: 25.00,
                    quantity: 100,
                    image: "O-micromundo-frente.jpg",
                    created_at: '2019-05-22',
                    updated_at: '2019-05-22'
                },
                {
                    name: 'O Menino que queria Voar',
                    description: 'Um livro que vai inspirar você a viver seus sonhos e a nunca desistir deles! Alberto era um menino da fazenda muito curioso. Enquanto seus irmãos corriam pelos cafezais, ele ficava no celeiro brincando de dirigir trator e sonhando em ser maquinista.  Alberto cresceu um pouco e aprendeu a dirigir aquelas máquinas, levando o café de lá para cá. Em suas viagens, o menino observava os céus e isso foi dando a ele mais vontade de descobrir o que o mundo ainda poderia lhe mostrar. Ele não queria mais observar apenas o céu, queria tocar as nuvens. Alberto Santos Dumont queria voar e não ia parar até construir uma máquina que lhe permitisse realizar seu sonho: voar.',
                    price: 25.00,
                    quantity: 100,
                    image: "O-menino-que-queria-voar-frente.jpg",
                    created_at: '2019-05-22',
                    updated_at: '2019-05-22'
                },
                {
                    name: 'Nino e a casa dos Bichos',
                    description: 'Nino é um gato. Ele mora na casa do Lobato. Quando o dono abre a porta, o animal começa a perseguir o rato. O rato entra no buraco do tatu, que corre do bichinho. O tatu avista um ninho e …. lá se vai fugindo o passarinho. Começa assim uma perseguição. Nino atrás do rato. O rato se escondendo no buraco. O tatu fugindo do rato e perseguindo o passarinho. O passarinho fugindo do tatu. Ao longo desse corre-corre, eles vão encontrando a casa dos outros bichinhos. Todos vão fugindo só porque Nino começou a perseguir o ratinho. Esse gato só arruma confusão!',
                    price: 25.00,
                    quantity: 100,
                    image: "Nino-e-as-casas-dos-bichos-frente.jpg",
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
        
        return queryInterface.bulkDelete('products', null, {});        
    }
};
