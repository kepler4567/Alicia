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
        var Caminho = `./assets/fotos/Foto (${numfoto}).jpg`
        foto.setAttribute('src', Caminho)
        foto.style.display = "inline"
    }

}

function BuscarMotivo() {

    var numMotivos = document.getElementById("numMotivo").value
    var Motivos = document.getElementById('Motivos')
    Motivos.style.display = "Block"
    document.getElementById('Carta').style.display = 'none'


    if (numMotivos < 0 || numMotivos > 99 || numMotivos == "") {
        Motivos.innerHTML = "Escolha um número de 0 a 99"
        return
    }

    var MotivosParaTeAmar = [
        "Te amo por que você me faz rir",
        "Te amo por que você é o amor da minha vida",
        "Te amo por que você é meu descanso",
        "Te amo por que você me faz feliz",
        "Te amo por que você é especial para mim",
        "Te amo por que você me faz esquecer meus problemas",
        "Amo seu corpinho",
        "Você é esperta",
        "Te amo por que pensamos da mesma forma",
        "Você me faz sentir especial",
        "Amo seus beijos",
        "Você é meu sentido",
        "Te amo por que você é gostosa",
        "Ter amo pois somos compatíveis",
        "Te amo pois você me completa",
        "Te amo por que vamos superar tudo juntos",
        "Te amo por que independente do problema você vai estar do meu lado",
        "Te amo porque você me alegra",
        "Te amo por que combinamos",
        "Amo seu sorriso",
        "Te amo por que você me completa",
        "Te amo por que temos uma conexão",
        "Te amo por que você é meu viver",
        "Te amo por que temos objetivos",
        "Te amo por que você me faz ter mais ânimo",
        "Amo suas gracinhas",
        "Te amo por que vocẽ me da esperança",
        "Te amo por que você pensa no nosso futuro",
        "Você é por quem me apaixonei",
        "Te amo por que você me apoia",
        "Nos apaixonamos no primeiro dia",
        "Te amo por que temos um futuro juntos",
        "te amo porque você é minha gatinha",
        "Te amo porque você me acalma",
        "Te amo por que você é minha vida",
        "Te amo por que te amo",
        "Te amo por que você me faz bem",
        "Te amo por que você me suporta",
        "Amo suas gracinhas",
        "Você me faz sonhar",
        "Amo sua cara de bunda",
        "Te amo por que você é carinhosa",
        "Te amo por que você me ama",
        "Te amo por que você tras paz",
        "Você é minha gostosona",
        "Te amo por que você me faz sentir especial",
        "Te amo por que você divide tudo comigo",
        "Amo quando você esta safada",
        "Te amo por que você me faz ser uma pessoa melhor",
        "Amo suas caretas",
        "Te amo por que você vai na academia comigo( Bem as vezes)",
        "Amo o seu colinho",
        "Amo suas brincadeiras",
        "Amo nossas bricadeiras",
        "Te amo por que você tira seus finais de semana pra me aguentar",
        "Te amo pois nossos momentos são únicos",
        "Amo suas gracinhas",
        "Te amo por que você me da um sentido na vida",
        "Te amo por que te amar é bom",
        "Você é minha gatinha",
        "Amo o seu olhar",
        "Te amo por que você não desiste de mim",
        "Te amo por que confio em você",
        "Te amo por que amo te amo",
        "Você é meu bebezinho",
        "Te amo por que você me descansa",
        "Amo sua família",
        "Amo te ver quando acorda",
        "Te amo por que você me faz ser mais confiante",
        "Te amo pois você visita outras comuns comigo",
        "Te amo por que você é o meu lar",
        "Te amo por que você é fofa",
        "você me deixa esperançoso",
        "Te amo pois nós somos nós mesmos com o outro",
        "Te amo por que você não tem medo de andar de moto comigo",
        "Te amo por que fazemos tudo juntos",
        "Te amo por que você especial para mim",
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

    ]

    Motivos.innerHTML = MotivosParaTeAmar[numMotivos - 1]

}


function LerCarta() {
    var carta = document.getElementById('Carta')
    carta.style.display = "block"
    document.getElementById('Motivos').style.display = "none"
}