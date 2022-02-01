const button = document.getElementById('button');

let displayMovies = (allMovies) => {

    for(let count =0; count < allMovies.length; count ++){
        const maDiv = document.createElement('div');
        maDiv.classList.add('division');
        tableau.appendChild(maDiv);



        const maDivImg = document.createElement('div');
        maDivImg.classList.add('img_panel');
        maDiv.appendChild(maDivImg);
        const img = document.createElement('img');
        img.src=allMovies[count].poster_path;
        img.classList.add('affiche')
        img.id = 'image' + (count+1);
        maDivImg.appendChild(img);

        const maDivTxt = document.createElement('div');
        maDivTxt.classList.add('text_panel');
        maDiv.appendChild(maDivTxt);
        const title = document.createElement('div');
        title.classList.add('title')
        maDivTxt.appendChild(title);
        const text = document.createElement('div');
        text.classList.add('text')
        maDivTxt.appendChild(text);
        title.innerText += allMovies[count].original_title;
        text.innerText += allMovies[count].overview;

    }

}


// const result = JSON.parse(`{
//     "results": [
//         {
//             "id": 399566,
//             "original_title": "Godzilla vs. Kong",
//             "overview": "À une époque où les monstres parcourent la Terre, et alors que l’humanité lutte pour son avenir, Godzilla et King Kong, les deux forces les plus puissantes de la nature, entrent en collision dans une bataille spectaculaire inédite. Alors que Monarch se lance dans une mission périlleuse en terrain inconnu, et qu’il découvre des indices sur les origines des Titans, un complot humain menace d’éradiquer ces créatures – qu’elles soient bonnes ou mauvaises – de la surface de la planète.",
//             "poster_path": "https://image.tmdb.org/t/p/original/4bTShLVFnVKK31cowgjdAIZV84T.jpg",
//             "vote_average": 8.3
//         },
//         {
//             "id": 615678,
//             "original_title": "Thunder Force",
//             "overview": "Après l'invention d'une formule donnant des super-pouvoirs aux gens ordinaires, deux amies d'enfance devenues d'improbables super-héroïnes s'allient pour braver le crime.",
//             "poster_path": "https://image.tmdb.org/t/p/original/279yOM4OQREL36B3SECnRxoB4MZ.jpg",
//             "vote_average": 5.8
//         },
//         {
//             "id": 460465,
//             "original_title": "Mortal Kombat",
//             "overview": "Une nouvelle variation de l'univers de la saga vidéoludique \\"Mortal Kombat\\".",
//             "poster_path": "https://image.tmdb.org/t/p/original/8yhtzsbBExY8mUct2GOk4LDDuGH.jpg",
//             "vote_average": 7.3
//         },
//         {
//             "id": 791373,
//             "original_title": "Zack Snyder's Justice League",
//             "overview": "Bruce Wayne est déterminé à faire en sorte que le sacrifice ultime de Superman ne soit pas vain. Pour cela, avec l'aide de Diana Prince, il met en place un plan pour recruter une équipe de métahumains afin de protéger le monde d'une menace apocalyptique imminente. La tâche s'avère plus difficile qu'il ne l'imaginait, car chacune des recrues doit faire face aux démons de son passé, et les surpasser, pour se rassembler et former une ligue de héros sans précédent. Désormais unis, Batman, Wonder Woman, Aquaman, Cyborg et Flash réussiront-ils à sauver la planète de Steppenwolf, DeSaad, Darkseid et de leurs terribles intentions ?",
//             "poster_path": "https://image.tmdb.org/t/p/original/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg",
//             "vote_average": 8.5
//         },
//         {
//             "id": 634528,
//             "original_title": "The Marksman",
//             "overview": "Poursuivis par les membres d’un cartel mexicain, une mère et son fils traversent la frontière qui sépare le Mexique de l’Arizona et se retrouvent sur les terres de Jim Hanson. Aigri, vieillissant, celui-ci dénonce traditionnellement les immigrés clandestins aux autorités. Mais quand la mère est tuée dans une fusillade, l’américain récalcitrant décide d’aider le jeune Miguel à fuir. Le vétéran de guerre veuf et désabusé et le garçon orphelin vont devoir traverser les Etats-Unis, poursuivis par des criminels et des policiers corrompus.",
//             "poster_path": "https://image.tmdb.org/t/p/original/opWOQ6t3IaKD5SwprmbSQiF0g4y.jpg",
//             "vote_average": 7.1
//         },
//         {
//             "id": 412656,
//             "original_title": "Chaos Walking",
//             "overview": "Dans un futur proche, les femmes ont disparu. Le monde de Todd Hewitt n’est habité que par des hommes, tous soumis au Bruit, une mystérieuse force qui révèle leurs pensées et permet à chacun de connaître celles des autres. Lorsqu’une jeune femme, Viola, atterrit en catastrophe sur cette planète, elle s’y retrouve en grand danger… Todd jure de la protéger mais, pour réussir, il va devoir révéler sa force intérieure et percer les sombres secrets qui étouffent son monde…",
//             "poster_path": "https://image.tmdb.org/t/p/original/gg5F86ew2Qae6Pw9DnPAeqkttPo.jpg",
//             "title": "Chaos Walking",
//             "vote_average": 7.4
//         },
//         {
//             "id": 615457,
//             "original_title": "Nobody",
//             "overview": "Hutch Mansell, un père et un mari frustré, totalement déconsidéré par sa famille, se contente d’encaisser les coups, sans jamais les rendre. Il n’est rien. Une nuit, alors que deux cambrioleurs pénètrent chez lui, il fait le choix de ne pas intervenir, plutôt que de risquer une escalade sanglante. Une décision qui le discrédite définitivement aux yeux de son fils Blake, et qui semble l’éloigner encore plus de sa femme Becca. Cet incident réveille chez cet homme blessé des instincts larvés qui vont le propulser sur une voie violente, révélant des zones d’ombres et des compétences létales insoupçonnées. Dans une avalanche de coups de poings, de fusillades et de crissements de pneus, il va tout faire pour tirer sa famille des griffes d’un redoutable ennemi et s’assurer que, plus jamais, personne ne le prenne pour un moins que rien.",
//             "poster_path": "https://image.tmdb.org/t/p/original/nABUVQAVOry1zKBrZI4eauNGgI9.jpg",
//             "title": "Nobody",
//             "vote_average": 8.6
//         },
//         {
//             "id": 527774,
//             "original_title": "Raya and the Last Dragon",
//             "overview": "Il y a de cela fort longtemps, au royaume imaginaire de Kumandra, humains et dragons vivaient en harmonie. Mais un jour, une force maléfique s’abattit sur le royaume et les dragons se sacrifièrent pour sauver l’humanité. Lorsque cette force réapparait cinq siècles plus tard, Raya, une guerrière solitaire, se met en quête du légendaire dernier dragon pour restaurer l’harmonie sur la terre de Kumandra, au sein d’un peuple désormais divisé. Commence pour elle un long voyage au cours duquel elle découvrira qu’il lui faudra bien plus qu’un dragon pour sauver le monde, et que la confiance et l’entraide seront essentiels pour conduire au succès cette périlleuse mission.",
//             "poster_path": "https://image.tmdb.org/t/p/original/qDnumcHRzK9ljWtG5L1zRPhFRJg.jpg",
//             "vote_average": 8.3
//         },
//         {
//             "id": 632357,
//             "original_title": "The Unholy",
//             "overview": "",
//             "poster_path": "https://image.tmdb.org/t/p/original/b4gYVcl8pParX8AjkN90iQrWrWO.jpg",
//             "vote_average": 5.5
//         },
//         {
//             "id": 664767,
//             "original_title": "Mortal Kombat Legends: Scorpion's Revenge",
//             "overview": "Lord Raiden, protecteur d'Earthrealm, doit rassembler dans une bataille ultime les plus grands combattants de son royaume, afin de le défendre du démoniaque Shang Tsung.",
//             "poster_path": "https://image.tmdb.org/t/p/original/4VlXER3FImHeFuUjBShFamhIp9M.jpg",
//             "vote_average": 8.4
//         },
//         {
//             "id": 793723,
//             "original_title": "Sentinelle",
//             "overview": "De retour à Nice après une mission traumatisante, une soldate d'élite n'hésite pas à utiliser ses talents meurtriers pour traquer l'agresseur de sa sœur.",
//             "poster_path": "https://image.tmdb.org/t/p/original/AmUGn1rJ9XDDP6DYn9OA2uV8MIg.jpg",
//             "vote_average": 6
//         },
//         {
//             "id": 458576,
//             "original_title": "Monster Hunter",
//             "overview": "Notre monde en cache un autre, dominé par de puissants et dangereux monstres. Lorsque le Lieutenant Artemis et son unité d’élite traversent un portail qui les transporte dans ce monde parallèle, ils subissent le choc de leur vie. Au cours d’une tentative désespérée pour rentrer chez elle, le brave lieutenant rencontre un chasseur mystérieux, qui a survécu dans ce monde hostile grâce à ses aptitudes uniques. Faisant face à de terrifiantes et incessantes attaques de monstres, ces guerriers font équipe pour se défendre et trouver un moyen de retourner dans notre monde.",
//             "poster_path": "https://image.tmdb.org/t/p/original/lBe4axSdKFyfKw1pZwlRt08nAr6.jpg",
//             "vote_average": 7.1
//         },
//         {
//             "id": 544401,
//             "original_title": "Cherry",
//             "overview": "Un aide-soignant militaire est de retour de la guerre en Irak. Atteint de stress post-traumatique, il se met à braquer des banques pour financer sa dépendance aux opiacés.",
//             "poster_path": "https://image.tmdb.org/t/p/original/pwDvkDyaHEU9V7cApQhbcSJMG1w.jpg",
//             "vote_average": 7.6
//         },
//         {
//             "id": 587807,
//             "original_title": "Tom & Jerry",
//             "overview": "Tom, le chat et Jerry, la souris n'ont plus de domicile. Ils emménagent dans un hôtel chic de New York où Kayla a trouvé un emploi. Mais pour qu'elle puisse le garder, il faut impérativement qu'elle chasse Jerry avant la réception d'un mariage...",
//             "poster_path": "https://image.tmdb.org/t/p/original/iPUcRfdAp85OJAPmdCfpvyu3cjk.jpg",
//             "vote_average": 7.3
//         },
//         {
//             "id": 587996,
//             "original_title": "Bajocero",
//             "overview": "Sur une route sombre et peu fréquentée, un véhicule pénitentiaire est détourné. Le policier survivant doit trouver un moyen d'empêcher les criminels de finir leur job.",
//             "poster_path": "https://image.tmdb.org/t/p/original/zDAuCDoxCJ0m1DFoCDSx5znfcm8.jpg",
//             "vote_average": 6.4
//         },
//         {
//             "id": 644083,
//             "original_title": "Twist",
//             "overview": "Oliver est un jeune artiste urbain qui vit dans les rues de Londres. Après avoir rencontré une bande de graffeurs menée par la charismatique Dodge, Oliver se retrouve pris dans un piège. Il doit voler une peinture d'une valeur inestimable pour un certain Fagin.",
//             "poster_path": "https://image.tmdb.org/t/p/original/29dCusd9PwHrbDqzxNG35WcpZpS.jpg",
//             "vote_average": 7.1
//         },
//         {
//             "id": 464052,
//             "original_title": "Wonder Woman 1984",
//             "overview": "Suite des aventures de Diana Prince, alias Wonder Woman, Amazone devenue une super-héroïne dans notre monde. Après la Première guerre mondiale, direction les années 80 ! Cette fois, Wonder Woman doit affronter deux nouveaux ennemis, particulièrement redoutables : Max Lord et Cheetah.",
//             "poster_path": "https://image.tmdb.org/t/p/original/c45kCPD0U3stFeqgHPsEhfGuVhX.jpg",
//             "vote_average": 6.8
//         },
//         {
//             "id": 775996,
//             "original_title": "Outside the Wire",
//             "overview": "Un pilote de drone est envoyé surveiller une zone militaire. Il se retrouve à travailler pour un officier androïde chargé de localiser un dispositif apocalyptique avant les insurgés.",
//             "poster_path": "https://image.tmdb.org/t/p/original/vLWVOOO2IU75WVZMOKmgKvQosnb.jpg",
//             "vote_average": 6.5
//         },
//         {
//             "id": 581387,
//             "original_title": "백두산",
//             "overview": "Un jour, un volcan de la montagne Baekdu entre en éruption et crée la panique en Corée. Une représentante du gouvernement, Jeon Yu Gyeong, va à la rencontre du professeur Kang Bong Rae qui étudie la montagne Baekdu et alerte depuis trois ans déjà des possibles éruptions sans jamais être écouté. Une mission du nom de EOD (Explosive Ordnance Disposal) est alors mise en place avec à sa tête Jo In Chang pour se rendre en Corée du Nord et maîtriser les évènements.",
//             "poster_path": "https://image.tmdb.org/t/p/original/nswaOO9r9vgk2xJoRIguoxknrgA.jpg",
//             "vote_average": 6.6
//         }
//     ]
// }`);

let tableau = document.getElementById('tableau');

button.addEventListener('click', ()=>{
    fetch('movies.json')
    .then( response => response.json() )
    .then( result => {
        console.log(result);
        displayMovies(result.results);
    })
})