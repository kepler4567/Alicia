function TrocarIMG() {
    var falhaCarregarFoto = document.getElementById('Falha')
    falhaCarregarFoto.style.display = 'none'
    var numfoto = document.getElementById('numFoto').value
    var foto =  document.getElementById('Foto')

    if (numfoto <= 0 || numfoto >= 78) {

        falhaCarregarFoto.innerHTML = "Digite um valor entre 1 e 77 "
        falhaCarregarFoto.style.display = 'block'
        foto.style.display = "none"
    }
    else {
        var Caminho = `./assets/Fotos/foto (${numfoto}).jpg`
        foto.setAttribute('src', Caminho)
        foto.style.display = "inline"
    }

}

function verificarSenha() {
    var senha = document.getElementById("senha").value

    if(senha == "teste") {
        document.getElementById('entrar').style.display = 'inline'
    }
    else {
        document.getElementById('entrar').style.display = 'none'
    }
}

function BuscarMotivo() {

    var numMotivos = document.getElementById("numMotivo").value
    var Motivos = document.getElementById('Motivos')
    Motivos.style.display = "Block"
    document.getElementById('Carta').style.display = 'none'


    if (numMotivos < 0 || numMotivos > 99 || numMotivos == "") {
        Motivos.innerHTML = "Escolha um número de 1 a 100"
        return
    }

    var MotivosParaTeAmar = [
        "Te amo por que você me faz rir",
        "Te amo por que você é meu descanso",
        "Te amo por que você me faz feliz",
        "Te amo por que você me faz esquecer os meus problemas",
        "Te amo por que você é especial para mim",
        "Amo seu corpinho",
        "Amo seu jeito",
        "Te amo por que pensamos da mesma forma",
        "Você me faz sentir especial",
        "Amo seus beijos",
        "Você é meu sentido",
        "Amo seu cabelo",
        "Te amo por que você é a melhor definição de uma namorada para mim",
        "Ter amo pois somos compatíveis",
        "Te amo pois você me completa",
        "Te amo pois nunca vamos brigar ou bagoar um ao outro",
        "Te amo por que vamos superar tudo juntos",
        "Te amo por que independente do problema você vai estar do meu lado",
        "Te amo porque você me alegra",
        "Te amo por que combinamos",
        "Amo seu sorriso",
        "Te amo por que temos uma conexão",
        "Te amo por que você é meu viver",
        "Te amo por que temos os mesmos objetivos",
        "Te amo por que você me faz ter mais ânimo",
        "Amo suas gracinhas",
        "Amo seus olhos",
        "Te amo por que vocẽ me da esperança",
        "Te amo por que você pensa no nosso futuro",
        "Te amo pois você me ama como eu sou",
        "Te amo por que você me apoia",
        "Te amo pois nos apaixonamos no primeiro dia que nos vimos",
        "Te amo por que temos um futuro juntos",
        "Te amo pois você é minha melhor amiga",
        "Te amo porque você me acalma",
        "Te amo por que você me faz bem",
        "Te amo por que você me suporta",
        "Amo suas gracinhas",
        "Te amo por que você me suporta mesmo eu te irritando toda hora",
        "Amo seu nariz",
        "Te amo por que você é carinhosa",
        "Te amo por que você trás paz",
        "Te amo por que você me faz sentir especial",
        "Te amo por que você divide tudo comigo",
        "Te amo por que você conta tudo para mim",
        "Te amo pois você compartilha comigo os melhores memes",
        "Te amo por que você me faz ser uma pessoa melhor",
        "Amo suas brincadeiras",
        "Te amo pois nossos momentos são únicos",
        "Amo suas gracinhas",
        "Te amo por que você me da um sentido na vida",
        "Amo seu beijo",
        "Amo nossas bricadeiras",
        "Amo o seu olhar",
        "Eu te amo porque você me alegra nos meus dias mais ruins",
        "Te amo por que você não desiste de mim",
        "Te amo por que confio em você",
        "Te amo por que você me descansa",
        "Amo sua família",
        "Amo seu carinho",
        "Amo o jeito que você cuida de mim quando estamos juntos",
        "Te amo pois posso contar sempre com você",
        "Te amo por que você me faz ser mais confiante",
        "Te amo por que você é o meu lar",
        "Te amo por que você é fofa",
        "Amo o seu sorriso",
        "Te amo pois você me mostrou como é um relacionamento feliz",
        "você me deixa esperançoso",
        "Te amo pois nós somos nós mesmos com o outro",
        "Te amo por que você me trás segurança",
        "Te amo por que vamos evoluimos juntos",
        "Amo a forma em que você olha para mim",
        "Amo te ver de pijama",
        "Te amo por que servimos a Deus juntos",
        "Te amo pois estamos na mesma comunhão",
        "Amo nossos poucos momentos juntos",
        "Amo o seu carinho",
        "Te amo por que não escondemos nada um do outro",
        "Amo seu jeito",
        "Amo seu toque",
        "Te amo por que você tirou toda minha tristeza",
        "Amo seu abraço",
        "Te amo por que você confia em mim",
        "Você é o amor da minha vida",
        "Te amo pois formamos um belo casal",
        "Te amo pois você cuida de mim desde o céu",
        "Te amo pois você aceita ver filme de terror comigo",
        "Te amo pois você sempre da o seu melhor por mim",
        "Te amo pois você enxerga os meus lados positivos",
        "Te amo pois você é uma pessoa incrível",
        "Te amo pois você aceitou fazer um contrato comigo lá em cima",
        "Te amo pois os momentos com você são os melhores",
        "Te amo pois temos um namoro saudável, leve e feliz",
        "Te amo pois você tirar seu tempo para conversasar comigo",
        "Eu amo cada segundo que passo contigo",
        "Te amo pois você tem um coração muito bom",
        "Eu amo seu cheiro",
        "Eu amo o modo de você se vistir",
        "Eu amo seu abraço",
        "Eu amo seu beijo"
    ]

    Motivos.innerHTML = MotivosParaTeAmar[numMotivos]

}


function LerCarta() {
    var carta = document.getElementById('Carta')
    carta.style.display = "block"
    document.getElementById('Motivos').style.display = "none"
}