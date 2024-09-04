var estruturageral = {
    mensagemfinal: {
        positiva: [
            "Muito bem! Você arrasou!",
            "Se você quiser, você pode praticar novamente clicando no botão abaixo."
        ],
        negativa: [
            "Foi por pouco!",
            "Talvez seja interessante revisar o conteúdo e tentar de novo.",
            "Para reiniciar, basta clicar no botão abaixo."
        ]
    }
}
var perguntas = [
    {
        titulo: "Sistema Visual - Escolha a resposta correta",
        pergunta: "Qual é a estrutura do olho responsável por regular a quantidade de luz recebida?",
        respostas: [
            {
                botao: "a",
                validacao: false,
                texto: "Córnea"
            },
            {
                botao: "b",
                validacao: false,
                texto: "Humor aquoso"
            },
            {
                botao: "c",
                validacao: true,
                texto: "Íris"
            },
            {
                botao: "d",
                validacao: false,
                texto: "Cristalino"
            },
          
        ],
        feedbacks: {
            
            positivo: "Correto! A íris regula a quantidade de luz recebida pelo olho, controlando o tamanho da pupila.", 
            negativo: "Ops! Parece que você errou! A íris é responsável por regular a quantidade de luz que entra no olho, ajustando o tamanho da pupila. Tente novamente na próxima pergunta!"
            
        }
    },
    {
        titulo: "Sistema Visual - Escolha a resposta correta",
        pergunta: "Qual é a função principal da retina?",
        respostas: [
            {
                botao: "a",
                validacao: false,
                texto: "Regular a quantidade de luz."
            },
            {
                botao: "b",
                validacao: false,
                texto: "Focalizar a imagem na retina."
            },
            {
                botao: "c",
                validacao: true,
                texto: "Converter luz em impulsos elétricos."
            },
            {
                botao: "d",
                validacao: false,
                texto: "Transmitir impulsos elétricos para o cérebro."
            },
          
        ],
        feedbacks: {
            
            positivo: "Excelente! A retina converte a luz em impulsos elétricos, que são então transmitidos para o cérebro para processamento visual.", 
            negativo: "Quase lá, mas não é a resposta correta! A função principal da retina é converter a luz em impulsos elétricos, que são então enviados ao cérebro para processamento visual. Continue tentando!"
            
        }
    },
    {
        titulo: "Sistema Visual - Escolha a resposta correta",
        pergunta: "Qual é a estrutura ocular responsável por pelo menos 70% do poder refrativo total?",
        respostas: [
            {
                botao: "a",
                validacao: true,
                texto: "Córnea"
            },
            {
                botao: "b",
                validacao: false,
                texto: "Humor aquoso"
            },
            {
                botao: "c",
                validacao: false,
                texto: "Cristalino"
            },
            {
                botao: "d",
                validacao: false,
                texto: "Humor vítreo"
            },
          
        ],
        feedbacks: {
            
            positivo: "Isso aí! A córnea é responsável por pelo menos 70% do poder refrativo total do olho.", 
            negativo: "Não foi desta vez! A córnea é a estrutura ocular que contribui com pelo menos 70% do poder refrativo total do olho. Tente novamente e preste atenção nos detalhes!"
            
        }
    },
    {
        titulo: "Sistema Visual - Escolha a resposta correta",
        pergunta: "Onde ocorre a refração inicial da luz no olho?",
        respostas: [
            {
                botao: "a",
                validacao: false,
                texto: "Retina"
            },
            {
                botao: "b",
                validacao: true,
                texto: "Córnea"
            },
            {
                botao: "c",
                validacao: false,
                texto: "Cristalino"
            },
            {
                botao: "d",
                validacao: false,
                texto: "Íris"
            },
          
        ],
        feedbacks: {
            
            positivo: "Correto! A refração inicial da luz ocorre na córnea.", 
            negativo: "Parece que você se confundiu um pouco! A refração inicial da luz no olho ocorre na córnea. Continue, você consegue acertar na próxima pergunta!"
            
        }
    },
    {
        titulo: "Sistema Visual - Escolha a resposta correta",
        pergunta: "Qual é a função dos cones na retina?",
        respostas: [
            {
                botao: "a",
                validacao: true,
                texto: "Captação das cores."
            },
            {
                botao: "b",
                validacao: false,
                texto: "Captação da iluminação."
            },
            {
                botao: "c",
                validacao: false,
                texto: "Conversão de luz em impulsos elétricos."
            },
            {
                botao: "d",
                validacao: false,
                texto: "Transmissão de impulsos elétricos para o cérebro."
            },
          
        ],
        feedbacks: {
            
            positivo: "Muito bem! Os cones na retina são responsáveis pela captação das cores.", 
            negativo: "Quase lá, mas não é isso! Os cones na retina são responsáveis pela captação das cores, não da iluminação. Continue tentando!"
            
        }
    },
    {
        titulo: "Sistema Visual - Escolha a resposta correta",
        pergunta: "Qual é a estrutura ocular que contribui com aproximadamente 13,00 dioptrias para o poder refrativo?",
        respostas: [
            {
                botao: "a",
                validacao: false,
                texto: "Córnea"
            },
            {
                botao: "b",
                validacao: false,
                texto: "Humor aquoso"
            },
            {
                botao: "c",
                validacao: true,
                texto: "Cristalino"
            },
            {
                botao: "d",
                validacao: false,
                texto: "Humor vítreo"
            },
          
        ],
        feedbacks: {
            
            positivo: "Isso mesmo! O cristalino contribui com aproximadamente 13,00 dioptrias para o poder refrativo do olho.", 
            negativo: "Não foi desta vez! O cristalino é a estrutura ocular que contribui com aproximadamente 13,00 dioptrias para o poder refrativo total. Continue focado e tente novamente!"
            
        }
    },
    {
        titulo: "Sistema Visual - Escolha a resposta correta",
        pergunta: "Onde ocorre a conversão de impulsos elétricos em sinais neurais? ",
        respostas: [
            {
                botao: "a",
                validacao: false,
                texto: "Cristalino"
            },
            {
                botao: "b",
                validacao: false,
                texto: "Retina"
            },
            {
                botao: "c",
                validacao: false,
                texto: "Nervo óptico"
            },
            {
                botao: "d",
                validacao: true,
                texto: "Cérebro"
            },
          
        ],
        feedbacks: {
            
            positivo: "Excelente! A conversão de impulsos elétricos em sinais neurais ocorre no cérebro.", 
            negativo: "Parece que você se confundiu um pouco! A conversão de impulsos elétricos em sinais neurais ocorre no cérebro, não na retina. Continue tentando!"
            
        }
    },
    {
        titulo: "Sistema Visual - Escolha a resposta correta",
        pergunta: "Qual é a última etapa do processo de formação de imagens no sistema visual?",
        respostas: [
            {
                botao: "a",
                validacao: false,
                texto: "Refração na córnea."
            },
            {
                botao: "b",
                validacao: false,
                texto: "Conversão de impulsos elétricos em sinais neurais."
            },
            {
                botao: "c",
                validacao: false,
                texto: "Conversão de impulsos elétricos em sinais neurais."
            },
            {
                botao: "d",
                validacao: true,
                texto: "Interpretação das imagens no cérebro."
            },
          
        ],
        feedbacks: {
            
            positivo: "Isso aí! A última etapa do processo de formação de imagens no sistema visual é a interpretação das imagens no cérebro.", 
            negativo: "Quase lá, mas não é isso! A última etapa do processo de formação de imagens no sistema visual é a interpretação das imagens no cérebro. Continue tentando e você chegará lá!"
            
        }
    },
]