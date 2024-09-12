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

function mostrarSigno(signo) {
    const signoData = {
        aries: {
            nome: "Áries",
            partesCorpo: "cabeça, crânio, couro cabeludo, rosto",
            desafiosSaude: "enxaquecas, dores de cabeça, problemas nos ouvidos e nariz."
        },
        touro: {
            nome: "Touro",
            partesCorpo: "toda a região do pescoço e garganta. Abrange a boca, língua, laringe e cordas vocais. A glândula taurina é a tireoide.",
            desafiosSaude: "pessoas com destaque em Touro podem ter vulnerabilidade na garganta, com mais tendência a infecções e problemas diversos. Tem potencial para hipo ou hiper tireoidíssimo quando há desequilíbrios, bem como o crescimento anormal da tireoide, resultando em bócio."
        },
        gemeos: {
            nome: "Gêmeos",
            partesCorpo: "este versátil signo rege todo o aparelho respiratório, pulmões, ombros, braços e mãos.",
            desafiosSaude: " todas as afecções respiratórias são governadas por Gêmeos, como a asma ou a bronquite. Algumas pessoas com Gêmeos destacado podem ter maior vulnerabilidade a gripes e resfriados. Os problemas nos ombros, braços e mãos, como tendinite, bursite e lesões por esforço repetitivo, também podem acontecer com quem tem este signo em destaque."
        },
        cancer: {
            nome: "Câncer",
            partesCorpo: "a região do ventre, notadamente o estômago, bem como os seios e as glândulas mamárias. O esôfago também está sob a sua regência.",
            desafiosSaude: "os empáticos cancerianos, regidos pela Lua, são famosos por terem o estômago mais sensível, com mais tendência a azias e úlceras estomacais. O útero também é regido por Câncer (mas não os ovários.) Tem tendência a inchaços e retenção de líquidos."
        },
        leao: {
            nome: "Leão",
            partesCorpo: " à medida em que se tornam mais velhos, pessoas com Leão em destaque no mapa precisam aprender a moderar o temperamento forte e também os prazeres à mesa para que não sejam entupidas as veias e artérias com excesso de gordura, podendo gerar problemas cardíacos."
        },
        virgem: {
            nome: "Virgem",
            partesCorpo: "o meticuloso signo de Virgem tem regência sobre os intestinos, em especial o delgado.",
            desafiosSaude: "Virgem o signo que rege a alimentação, e a pessoa virginiana não demora a perceber que precisa ser mais seletivo e saudável para se alimentar para não ter problemas como colites, cólicas intestinais e disfunções gástricas, também mais comuns quando se torna muito nervoso e perfeccionista."
        },
        libra: {
            nome: "Libra",
            partesCorpo: "o clássico signo de Libra rege a região da cintura e também os rins, com grande sensibilidade neste par de órgãos.",
            desafiosSaude: " mais do que qualquer outro, precisa observar a adequada ingestão de líquidos. Infecções urinárias, por exemplo, podem levar a inflamação nos rins, que se não tratada podem ser fatal."
        },
        escorpiao: {
            nome: "Escorpião",
            partesCorpo: " o intenso signo de Escorpião tem regência sobre a bexiga e órgãos sexuais e reprodutores, como pênis, próstata, vagina, ânus e, também, sobre o intestino grosso.",
            desafiosSaude: "não é incomum que pessoas com Escorpião em destaque possam ter as dolorosas hemorroidas. Precisa ter especial cuidado com doenças sexualmente transmissíveis."
        },
        sagitario: {
            nome: "Sagitário",
            partesCorpo: "o otimista signo de Sagitário, governado por Júpiter, rege o quadril, o fêmur e as coxas, bem como o fígado e o pâncreas.",
            desafiosSaude: "um estilo desregrado de vida pode levar pessoas com destaque no signo de Sagitário a problemas no fígado e também com sobrepeso. Há potencial também de em movimentos de crise quebrarem a bacia ou o fêmur."
        },
        capricornio: {
            nome: "Capricórnio",
            partesCorpo: "o focado signo de Capricórnio ter regência sobre as partes duras do corpo, como dentes, ossos e joelhos.",
            desafiosSaude: " não é incomum pessoas com forte destaque de Capricórnio ou de Saturno, o seu regente, tenham tratamentos dentários prolongados para realizar uma recorrência neste tipo de questão. Abrange todas as questões ortopédicas e de reumatismo."
        },
        aquario: {
            nome: "Aquário",
            partesCorpo: " o agitado signo de Aquário a região do tornozelo e calcanhares, bem como a circulação sanguínea.",
            desafiosSaude: "Pessoas com o signo de Aquário em destaque quando estão em desequilíbrio podem ter problemas de pressão alta ou varizes. Aquário ou o seu regente, Urano, em destaque também pode ocasionar propensão a acidentes."
        },
        peixes: {
            nome: "Peixes",
            partesCorpo: "o sistema linfático é governando pelo sensível signo de Peixes, que também rege os pés, ficando mais vulneráveis a fascite plantar e deformidades nos dedos.",
            desafiosSaude: "em função de grande sensibilidade, pessoas com Peixes em destaque no mapa podem ter doenças de difícil diagnóstico, além de sintomas alérgicos. São especialmente vulneráveis, bem como quem tem Netuno, o regente de Peixes, em destaque, a todo tipo de química, medicamento, álcool e drogas, precisando tomar cuidado com isto. Atribui-se a glândula pineal a Peixes em razão da conexão dela com processos de meditação e conexão espiritual."
        },
    }
    
    const {nome, partesCorpo, desafiosSaude} = signoData[signo];

    document.querySelector(".icones-signos-iframe").innerHTML = `
        <div class="signo-parte-corpo">
            <h2>${nome}</h2>
            <p><strong>Partes do corpo que rege:</strong> ${partesCorpo}</p>
            <p><strong>Possíveis desafios na saúde:</strong> ${desafiosSaude}</p>
        </div>
    `
}