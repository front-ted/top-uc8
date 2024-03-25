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
    },
    config: {
        acertos_para_vitoria: 0 // 0 = >50% de acertos.
    }
}
var perguntas = [
    {
        titulo: "Selecione a ametropia correta de acordo com a imagem.",
        pergunta: "<img src='img/img1-1.png' class='img-fluid'>",
        respostas: [
            {
                botao: "a",
                validacao: false,
                texto: "Miopia"
            },
            {
                botao: "b",
                validacao: true,
                texto: "Astigmatismo"
            },
            {
                botao: "c",
                validacao: false,
                texto: "Normal"
            },
            {
                botao: "d",
                validacao: false,
                texto: "Presbiopia"
            },
        ],
        feedbacks: {
            
            positivo: "Excelente! Você acertou! Esta imagem ilustra o astigmatismo, uma distorção na visão causada pela curvatura irregular da córnea.", 
            negativo: "Infelizmente, sua resposta está incorreta. Lembre-se de prestar atenção aos detalhes na próxima vez."
            
        }
    },
    {
        titulo: "Selecione a ametropia correta de acordo com a imagem.",
        pergunta: "<img src='img/img1-2.png' class='img-fluid'>",
        respostas: [
            {
                botao: "a",
                validacao: false,
                texto: "Astigmatismo"
            },
            {
                botao: "b",
                validacao: true,
                texto: "Miopia"
            },
            {
                botao: "c",
                validacao: false,
                texto: "Hipermetropia"
            },
            {
                botao: "d",
                validacao: false,
                texto: "Normal"
            },
        ],
        feedbacks: {
            
            positivo: "Ótimo! Você acertou! Essa imagem representa a miopia, onde objetos próximos são nítidos, mas os distantes ficam embaçados.", 
            negativo: "Infelizmente, sua resposta está incorreta. Lembre-se de prestar atenção aos detalhes na próxima vez."
            
        }
    },
    {
        titulo: "Selecione a ametropia correta de acordo com a imagem.",
        pergunta: "<img src='img/img1-3.png' class='img-fluid'>",
        respostas: [
            {
                botao: "a",
                validacao: true,
                texto: "Hipermetropia"
            },
            {
                botao: "b",
                validacao: false,
                texto: "Miopia"
            },
            {
                botao: "c",
                validacao: false,
                texto: "Normal"
            },
            {
                botao: "d",
                validacao: false,
                texto: "Astigmatismo"
            },
        ],
        feedbacks: {
            
            positivo: "Perfeito! Você acertou! Esta é a hipermetropia, onde a visão de perto é mais difícil do que a de longe.", 
            negativo: "Infelizmente, sua resposta está incorreta. Lembre-se de prestar atenção aos detalhes na próxima vez."
            
        }
    },
    {
        titulo: "Selecione a ametropia correta de acordo com a imagem.",
        pergunta: "<img src='img/img1-4.png' class='img-fluid'>",
        respostas: [
            {
                botao: "a",
                validacao: false,
                texto: "Normal"
            },
            {
                botao: "b",
                validacao: false,
                texto: "Astigmatismo"
            },
            {
                botao: "c",
                validacao: false,
                texto: "Hipermetropia"
            },
            {
                botao: "d",
                validacao: true,
                texto: "Presbiopia"
            },
        ],
        feedbacks: {
            
            positivo: "Muito bem! A presbiopia é a dificuldade para enxergar objetos de perto, causada pelo envelhecimento do cristalino do olho. Muito comum em pessoas com mais de 40 anos de idade.", 
            negativo: "Infelizmente, sua resposta está incorreta. Lembre-se de prestar atenção aos detalhes na próxima vez."
            
        }
    },
    {
        titulo: "Selecione a ametropia correta de acordo com a imagem.",
        pergunta: "<img src='img/img2-1.png' class='img-fluid'>",
        respostas: [
            {
                botao: "a",
                validacao: false,
                texto: "Astigmatismo"
            },
            {
                botao: "b",
                validacao: true,
                texto: "Normal"
            },
            {
                botao: "c",
                validacao: false,
                texto: "Hipermetropia"
            },
            {
                botao: "d",
                validacao: false,
                texto: "Presbiopia"
            },
        ],
        feedbacks: {
            
            positivo: "Muito bem! Vista normal, sem ametropias.", 
            negativo: "Infelizmente, sua resposta está incorreta. Lembre-se de prestar atenção aos detalhes na próxima vez."
            
        }
    },
    {
        titulo: "Selecione a ametropia correta de acordo com a imagem.",
        pergunta: "<img src='img/img2-2.png' class='img-fluid'>",
        respostas: [
            {
                botao: "a",
                validacao: false,
                texto: "Presbiopia"
            },
            {
                botao: "b",
                validacao: false,
                texto: "Astigmatismo"
            },
            {
                botao: "c",
                validacao: false,
                texto: "Hipermetropia"
            },
            {
                botao: "d",
                validacao: true,
                texto: "Miopia"
            },
        ],
        feedbacks: {
            
            positivo: "Ótimo! Você acertou! Essa imagem representa a miopia, onde objetos próximos são nítidos, mas os distantes ficam embaçados.", 
            negativo: "Infelizmente, sua resposta está incorreta. Lembre-se de prestar atenção aos detalhes na próxima vez."
            
        }
    },
    {
        titulo: "Selecione a ametropia correta de acordo com a imagem.",
        pergunta: "<img src='img/img2-3.png' class='img-fluid'>",
        respostas: [
            {
                botao: "a",
                validacao: false,
                texto: "Normal"
            },
            {
                botao: "b",
                validacao: true,
                texto: "Astigmatismo"
            },
            {
                botao: "c",
                validacao: false,
                texto: "Miopia"
            },
            {
                botao: "d",
                validacao: false,
                texto: "Hipermetropia"
            },
        ],
        feedbacks: {
            
            positivo: "Excelente! Você acertou! Esta imagem ilustra o astigmatismo, uma distorção na visão causada pela curvatura irregular da córnea.", 
            negativo: "Infelizmente, sua resposta está incorreta. Lembre-se de prestar atenção aos detalhes na próxima vez."
            
        }
    },
    {
        titulo: "Selecione a ametropia correta de acordo com a imagem.",
        pergunta: "<img src='img/img2-4.png' class='img-fluid'>",
        respostas: [
            {
                botao: "a",
                validacao: true,
                texto: "Hipermetropia"
            },
            {
                botao: "b",
                validacao: false,
                texto: "Astigmatismo"
            },
            {
                botao: "c",
                validacao: false,
                texto: "Miopia"
            },
            {
                botao: "d",
                validacao: false,
                texto: "Normal"
            },
        ],
        feedbacks: {
            
            positivo: "Perfeito! Você acertou! Esta é a hipermetropia, onde a visão de perto é mais difícil do que a de longe.", 
            negativo: "Infelizmente, sua resposta está incorreta. Lembre-se de prestar atenção aos detalhes na próxima vez."
            
        }
    },
    {
        titulo: "Selecione a ametropia correta de acordo com a imagem.",
        pergunta: "<img src='img/img3-1.png' class='img-fluid'>",
        respostas: [
            {
                botao: "a",
                validacao: false,
                texto: "Astigmatismo"
            },
            {
                botao: "b",
                validacao: false,
                texto: "Hipermetropia"
            },
            {
                botao: "c",
                validacao: true,
                texto: "Normal"
            },
            {
                botao: "d",
                validacao: false,
                texto: "Miopia"
            },
        ],
        feedbacks: {
            
            positivo: "Muito bem! Vista normal, sem ametropias.", 
            negativo: "Infelizmente, sua resposta está incorreta. Lembre-se de prestar atenção aos detalhes na próxima vez."
            
        }
    },
    {
        titulo: "Selecione a ametropia correta de acordo com a imagem.",
        pergunta: "<img src='img/img3-2.png' class='img-fluid'>",
        respostas: [
            {
                botao: "a",
                validacao: true,
                texto: "Hipermetropia"
            },
            {
                botao: "b",
                validacao: false,
                texto: "Astigmatismo"
            },
            {
                botao: "c",
                validacao: false,
                texto: "Miopia"
            },
            {
                botao: "d",
                validacao: false,
                texto: "Normal"
            },
        ],
        feedbacks: {
            
            positivo: "Perfeito! Você acertou! Esta é a hipermetropia, onde a visão de perto é mais difícil do que a de longe.", 
            negativo: "Infelizmente, sua resposta está incorreta. Lembre-se de prestar atenção aos detalhes na próxima vez."
            
        }
    },
    {
        titulo: "Selecione a ametropia correta de acordo com a imagem.",
        pergunta: "<img src='img/img3-3.png' class='img-fluid'>",
        respostas: [
            {
                botao: "a",
                validacao: true,
                texto: "Miopia"
            },
            {
                botao: "b",
                validacao: false,
                texto: "Astigmatismo"
            },
            {
                botao: "c",
                validacao: false,
                texto: "Hipermetropia"
            },
            {
                botao: "d",
                validacao: false,
                texto: "Presbiopia"
            },
        ],
        feedbacks: {
            
            positivo: "Ótimo! Você acertou! Essa imagem representa a miopia, onde objetos próximos são nítidos, mas os distantes ficam embaçados.", 
            negativo: "Infelizmente, sua resposta está incorreta. Lembre-se de prestar atenção aos detalhes na próxima vez."
            
        }
    },
    {
        titulo: "Selecione a ametropia correta de acordo com a imagem.",
        pergunta: "<img src='img/img3-4.png' class='img-fluid'>",
        respostas: [
            {
                botao: "a",
                validacao: false,
                texto: "Normal"
            },
            {
                botao: "b",
                validacao: false,
                texto: "Presbiopia"
            },
            {
                botao: "c",
                validacao: false,
                texto: "Hipermetropia"
            },
            {
                botao: "d",
                validacao: true,
                texto: "Astigmatismo"
            },
        ],
        feedbacks: {
            
            positivo: "Excelente! Você acertou! Esta imagem ilustra o astigmatismo, uma distorção na visão causada pela curvatura irregular da córnea.", 
            negativo: "Infelizmente, sua resposta está incorreta. Lembre-se de prestar atenção aos detalhes na próxima vez."
            
        }
    },
    {
        titulo: "Selecione a ametropia correta de acordo com a imagem.",
        pergunta: "<img src='img/img4-1.png' class='img-fluid'>",
        respostas: [
            {
                botao: "a",
                validacao: true,
                texto: "Astigmatismo"
            },
            {
                botao: "b",
                validacao: false,
                texto: "Hipermetropia"
            },
            {
                botao: "c",
                validacao: false,
                texto: "Presbiopia"
            },
            {
                botao: "d",
                validacao: false,
                texto: "Normal"
            },
        ],
        feedbacks: {
            
            positivo: "Excelente! Você acertou! Esta imagem ilustra o astigmatismo, uma distorção na visão causada pela curvatura irregular da córnea.", 
            negativo: "Infelizmente, sua resposta está incorreta. Lembre-se de prestar atenção aos detalhes na próxima vez."
            
        }
    },
    {
        titulo: "Selecione a ametropia correta de acordo com a imagem.",
        pergunta: "<img src='img/img4-2.png' class='img-fluid'>",
        respostas: [
            {
                botao: "a",
                validacao: false,
                texto: "Presbiopia"
            },
            {
                botao: "b",
                validacao: false,
                texto: "Hipermetropia"
            },
            {
                botao: "c",
                validacao: false,
                texto: "Presbiopia"
            },
            {
                botao: "d",
                validacao: true,
                texto: "Normal"
            },
        ],
        feedbacks: {
            
            positivo: "Muito bem! Vista normal, sem ametropias.", 
            negativo: "Infelizmente, sua resposta está incorreta. Lembre-se de prestar atenção aos detalhes na próxima vez."
            
        }
    },
    {
        titulo: "Selecione a ametropia correta de acordo com a imagem.",
        pergunta: "<img src='img/img4-3.png' class='img-fluid'>",
        respostas: [
            {
                botao: "a",
                validacao: false,
                texto: "Astigmatismo"
            },
            {
                botao: "b",
                validacao: true,
                texto: "Miopia"
            },
            {
                botao: "c",
                validacao: false,
                texto: "Presbiopia"
            },
            {
                botao: "d",
                validacao: false,
                texto: "Hipermetropia"
            },
        ],
        feedbacks: {
            
            positivo: "Ótimo! Você acertou! Essa imagem representa a miopia, onde objetos próximos são nítidos, mas os distantes ficam embaçados.", 
            negativo: "Infelizmente, sua resposta está incorreta. Lembre-se de prestar atenção aos detalhes na próxima vez."
            
        }
    },
    {
        titulo: "Selecione a ametropia correta de acordo com a imagem.",
        pergunta: "<img src='img/img4-4.png' class='img-fluid'>",
        respostas: [
            {
                botao: "a",
                validacao: false,
                texto: "Presbiopia"
            },
            {
                botao: "b",
                validacao: true,
                texto: "Hipermetropia"
            },
            {
                botao: "c",
                validacao: false,
                texto: "Astigmatismo"
            },
            {
                botao: "d",
                validacao: false,
                texto: "Miopia"
            },
        ],
        feedbacks: {
            
            positivo: "Perfeito! Você acertou! Esta é a hipermetropia, onde a visão de perto é mais difícil do que a de longe.", 
            negativo: "Infelizmente, sua resposta está incorreta. Lembre-se de prestar atenção aos detalhes na próxima vez."
            
        }
    },
    
  
]