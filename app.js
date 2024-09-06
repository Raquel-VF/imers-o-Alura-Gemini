function calcularSigno() {
    const dataNascimento = new Date(document.getElementById ('dataNascimento').value);
    const dia = dataNascimento.getDate();
    const mes = dataNascimento.getMonth() + 1; 

    let signo = " ";
    let descricao = " ";

    if ((dia >= 21 && mes == 3) || (dia <= 19 && mes == 4)) {
        signo = "Áries"
        descricao = "Áries o signo que nasceu para começar as brigas, mas jura que só quer paz. Corajosos? Sim. Paciente? Nem em sonho. Tente acalmar, mas cuidado: eles têm um talento especial para ser do contra!"
    } else if ((dia >= 20 && mes == 4) || (dia <= 20 && mes == 5)) {
        signo = "Touro"
        descricao = "Touro, o mestre da teimosia gourmet. Se tiver comida envolvida, ele aparece; se envolver mudanças, ele some. Mas não mexa no sofá dele, porque ali é território sagrado!"
    } else if ((dia >= 21 && mes == 5) || (dia <= 20 && mes == 6 )) {
        signo = "Gêmeos"
        descricao = "Gêmeos, o camaleão humano. Você nunca sabe quem vai encontrar: o filósofo ou o comediante. Cuidado, pode começar a conversa sobre o clima e terminar discutindo teorias da conspiração!"
    }else if ((dia >= 21 && mes == 6) || (dia <= 22 && mes == 7 )) {
        signo = "Câncer"
        descricao = "Câncer, o amigo que traz o lencinho... e as lágrimas também. Sensível? Com certeza. Manipulador emocional? Talvez. Mas lembre-se: por trás de todo drama, há uma tigela de pipoca e um filme choroso."
    }else if ((dia >= 23 && mes == 7) || (dia <= 22 && mes == 8 )) {
        signo = "Leão"
        descricao = "Leão, o signo que acha que o Sol só nasceu por causa dele. Se precisar de alguém para te animar, chame um leonino... mas esteja pronto para ouvir tudo sobre as conquistas dele antes!"
    }else if ((dia >= 23 && mes == 8) || (dia <= 22 && mes == 9 )) {
        signo = "Virgem"
        descricao = "Virgem, o perfeccionista nato que tem um checklist até para respirar. Crítico? Talvez. Organizado? Com certeza. Só não peça para ele relaxar – isso não está na lista de tarefas!"
    }else if ((dia >= 23 && mes == 9) || (dia <= 22 && mes == 10 )) {
        signo = "Libra"
        descricao = "Libra, o diplomata indeciso do zodíaco. Consegue ver todos os lados da questão... e ainda assim, vai te deixar escolher. Se você quer tomar decisões rápidas, talvez precise de outro signo."
    }else if ((dia >= 23 && mes == 10) || (dia <= 21 && mes == 11 )) {
        signo = "Escorpião"
        descricao = "Escorpião, o investigador particular do zodíaco. Se ele não descobriu, é porque não vale a pena. Apaixonado? Sim. Intenso? Muito. Só cuidado com segredos – eles não duram muito ao lado de um escorpiano!"
    }else if ((dia >= 22 && mes == 11) || (dia <= 21 && mes == 12 )) {
        signo = "Sagitário"
        descricao = "Sagitário, o aventureiro que tem uma passagem de avião sempre pronta. Vai te contar mil histórias, mas talvez esqueça de como voltar para casa. Otimista? Totalmente. Responsável? Nem sempre."
    }else if ((dia >= 22 && mes == 12) || (dia <= 19 && mes == 1 )) {
        signo = "Capricórnio"
        descricao = "Capricórnio, o CEO do zodíaco. Trabalha mais que o relógio, mas relaxa menos que uma pedra. Ambicioso? Muito. Divertido? Talvez... em reuniões de negócios."
    }else if ((dia >= 20 && mes == 1) || (dia <= 18 && mes == 2 )) {
        signo = "Aquário"
        descricao = "Aquário, o gênio excêntrico que não segue regras... exceto as que ele mesmo criou. Ama a humanidade, mas pessoas... nem tanto. Inovador? Sempre. Previsível? Nunca."
    }else if ((dia >= 19 && mes == 1) || (dia <= 20 && mes == 3 )) {
        signo = "Peixes"
        descricao = "Peixes, o sonhador profissional que vive mais em outro mundo do que no seu próprio. Sensível? Com certeza. Conectado à realidade? Isso depende do dia da semana."
    }
    document.querySelector(".seu-signo").innerText = signo;

    document.querySelector(".descricao").innerText = descricao;

}