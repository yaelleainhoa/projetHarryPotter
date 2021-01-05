window.addEventListener("load", function(){ // lance le code une fois que la page est chargé 


// Apparition du menu, pour la version mobile et ordinateur
    let buttonElement = document.querySelector('.menuReduit')
    let menu = document.querySelector('.menuGrand') 
    let buttonback = document.querySelector('.bouttonBack')
    
 
    let x = window.matchMedia("(max-width: 767px)");

    let maFonction =  () => {if(x.matches) {menu.classList.add("menuTranslate3"); menu.classList.remove("menuTranslate4"); 
                            buttonElement.classList.add("hideMenuReduit")}
                            else {menu.classList.add("menuTranslate1"); menu.classList.remove("menuTranslate2") }}

    let Deux = () =>  {if(x.matches) {menu.classList.add("menuTranslate4") ;menu.classList.remove("menuTranslate3");
                        buttonElement.classList.remove("hideMenuReduit")}
                        else {menu.classList.add("menuTranslate2"); menu.classList.remove("menuTranslate1") }
                         }

    buttonElement.addEventListener('click', maFonction);
    buttonback.addEventListener('click', Deux);
            





// Apparition de la page élèves, avec adaptation de le translation du menu en dessous du "+"
    let buttonStudents = document.querySelector('.seeStudent')
    let pageEleves = document.querySelector('#eleves')
    let pageMaisonCreateur = document.querySelector('.createur')
    let pageMaisonExplication = document.querySelector('.explications')
    let boutonPlus = document.querySelector('.boutonPlus')
    let management = document.querySelector('#management')


    let apparition = () => {
        pageEleves.classList.remove("hide"); pageEleves.classList.add("show"); pageMaisonCreateur.classList.add("hide");
        pageMaisonExplication.classList.add("hide"); boutonPlus.classList.add("show"); boutonPlus.classList.remove("hide");
    let maFonctionBis =  () => {
        if(x.matches) {menu.classList.add("sousBoutonPlus1"); menu.classList.remove("sousBoutonPlus2");
            buttonElement.classList.add("hideMenuReduit")
        }
        else {menu.classList.remove("menuTranslate1"); menu.classList.add("sousBoutonPlus1"); menu.classList.remove("sousBoutonPlus2") }}
    

    let DeuxBis = () =>  {if(x.matches) {menu.classList.add("menuTranslate4") ;menu.classList.remove("menuTranslate3");
        buttonElement.classList.remove("hideMenuReduit")}
        else {menu.classList.remove("menuTranslate2"); menu.classList.add("sousBoutonPlus2");menu.classList.remove("sousBoutonPlus1") }
         }
    buttonElement.addEventListener('click',maFonctionBis)
    buttonback.addEventListener('click', DeuxBis);

}

// Apparition du form avec adaptation de la position des élèves
    let elevesPosition = () => {
        pageEleves.classList.add("elevesPosBis");
        {if(x.matches) {pageEleves.classList.remove("elevesPosBis"); pageEleves.classList.add("elevesPos"); }}
    }

    buttonStudents.addEventListener('click',apparition);
    buttonStudents.addEventListener('click',elevesPosition);

    let formAjust = () => {if(x.matches)  { pageEleves.classList.remove("elevesPosBis"); pageEleves.classList.toggle("elevesPos");}
    }

    let formDisparition = () => {if((management.classList.contains("fadeIn"))) {management.classList.add("fadeOut"); management.classList.remove("fadeIn");}
    else {management.classList.add("fadeIn"); management.classList.remove("fadeOut");}
   }

    boutonPlus.addEventListener('click', formDisparition);
    boutonPlus.addEventListener('click', formAjust);
  

   })




// Utilisation de l'API pour chercher les élèves
    function ajaxGet(url, callback) {
        var req = new XMLHttpRequest();
        req.open("GET", url);
        req.addEventListener("load", function () {
            if (req.status >= 200 && req.status < 400) {
                // Appelle la fonction callback en lui passant la réponse de la requête
                callback(req.responseText);
            } else {
                console.error(req.status + " " + req.statusText + " " + url);
            }
        });
        req.addEventListener("error", function () {
            console.error("Erreur réseau avec l'URL " + url);
        });
        req.send(null);
    }


    // Affiche les élèves pour Poufsouffle
        var pageElevePoufsouffle = document.getElementById("Poufsouffle");
        ajaxGet("http://hp-api.herokuapp.com/api/characters", function (reponse) {
            var pageEtudiant = JSON.parse(reponse);
            pageEtudiant.forEach(function (eleve) {
                var ficheEleve = document.createElement("div");
                ficheEleve.classList.add("fiche");
                var cercle = document.createElement("div")
                cercle.classList.add("conteneur")
                var imageEleveUrl = eleve.image;
                var imageEleve = document.createElement("img");
                imageEleve.src = imageEleveUrl;
                imageEleve.classList.add("image");
                cercle.appendChild(imageEleve)
                var nom = document.createElement("h5");
                nom.textContent = eleve.name;
                var maison = eleve.house;
                if (maison=="Hufflepuff"){
                    ficheEleve.appendChild(cercle);
                    ficheEleve.appendChild(nom);
                    pageElevePoufsouffle.appendChild(ficheEleve);
                    }

            });
        });

    // Affiche les élèves pour Serpentard
        var pageEleveSerpentard = document.getElementById("Serpentard");
        ajaxGet("http://hp-api.herokuapp.com/api/characters", function (reponse) {
            var pageEtudiant = JSON.parse(reponse);
            pageEtudiant.forEach(function (eleve) {
                var ficheEleve = document.createElement("div");
                ficheEleve.classList.add("fiche");
                var cercle = document.createElement("div")
                cercle.classList.add("conteneur")
                var imageEleveUrl = eleve.image;
                var imageEleve = document.createElement("img");
                imageEleve.src = imageEleveUrl;
                imageEleve.classList.add("image");
                cercle.appendChild(imageEleve)
                var nom = document.createElement("h5");
                nom.textContent = eleve.name;
                var maison = eleve.house;
                if (maison=="Slytherin"){
                    ficheEleve.appendChild(cercle);
                    ficheEleve.appendChild(nom);
                    pageEleveSerpentard.appendChild(ficheEleve);
                    }

            });
        });


    // Affiche les élèves pour Serdaigle
        var pageEleveSerdaigle = document.getElementById("Serdaigle");
        ajaxGet("http://hp-api.herokuapp.com/api/characters", function (reponse) {
            var pageEtudiant = JSON.parse(reponse);
            pageEtudiant.forEach(function (eleve) {
                var ficheEleve = document.createElement("div");
                ficheEleve.classList.add("fiche");
                var cercle = document.createElement("div")
                cercle.classList.add("conteneur")
                var imageEleveUrl = eleve.image;
                var imageEleve = document.createElement("img");
                imageEleve.src = imageEleveUrl;
                imageEleve.classList.add("image");
                cercle.appendChild(imageEleve)
                var nom = document.createElement("h5");
                nom.textContent = eleve.name;
                var maison = eleve.house;

                if (maison=="Ravenclaw"){
                    ficheEleve.appendChild(cercle);
                    ficheEleve.appendChild(nom);
                    pageEleveSerdaigle.appendChild(ficheEleve);
                    }
                
                
            });
        });



    // Affiche les élèves pour Gryffondor
        var pageEleveGryffondor = document.getElementById("Gryffondor");
        ajaxGet("http://hp-api.herokuapp.com/api/characters", function (reponse) {
            var pageEtudiant = JSON.parse(reponse);
            pageEtudiant.forEach(function (eleve) {
                var ficheEleve = document.createElement("div");
                ficheEleve.classList.add("fiche");
                var cercle = document.createElement("div")
                cercle.classList.add("conteneur")
                var imageEleveUrl = eleve.image;
                var imageEleve = document.createElement("img");
                imageEleve.src = imageEleveUrl;
                imageEleve.classList.add("image");
                cercle.appendChild(imageEleve)
                var nom = document.createElement("h5");
                nom.textContent = eleve.name;
                var maison = eleve.house;
                if (maison=="Gryffindor"){
                    ficheEleve.appendChild(cercle);
                    ficheEleve.appendChild(nom);
                    pageEleveGryffondor.appendChild(ficheEleve);
                    }

            });
        });




// Changement de la page une fois que l'utilisateur fait une sélection dans le form

    // Affiche les élèves pour Gryffondor
        function createGryffondor() {

            document.getElementById("Gryffondor").innerHTML = "";

            var genreChoix = document.getElementById("genre").value
            var ageChoix = document.getElementById("age").value
            var especeChoix = document.getElementById("espece").value

        var pageEleveGryffondorBis = document.getElementById("Gryffondor");
        ajaxGet("http://hp-api.herokuapp.com/api/characters", function (reponse) {
            var pageEtudiant = JSON.parse(reponse);
            pageEtudiant.forEach(function (eleve) {
                var ficheEleve = document.createElement("div");
                ficheEleve.classList.add("fiche");
                var cercle = document.createElement("div")
                cercle.classList.add("conteneur")
                var imageEleveUrl = eleve.image;
                var imageEleve = document.createElement("img");
                imageEleve.src = imageEleveUrl;
                imageEleve.classList.add("image");
                cercle.appendChild(imageEleve)
                var nom = document.createElement("h5");
                nom.textContent = eleve.name;

                var maison = eleve.house;
                var genreEleve = eleve.gender;
                var ageEleve = eleve.yearOfBirth;
                var especeEleve = eleve.species;
                if ((maison=="Gryffindor")&&(especeEleve==especeChoix || especeChoix=="neutre")&&(genreChoix==genreEleve || genreChoix=="neutre")&&(ageChoix==ageEleve || ageChoix=="neutre"))
                {   ficheEleve.appendChild(cercle);
                    ficheEleve.appendChild(nom);
                    pageEleveGryffondorBis.appendChild(ficheEleve);
                    }

            });
        });
        
        }

    // Affiche les élèves pour Serdaigle
        function createSerdaigle() {

            document.getElementById("Serdaigle").innerHTML = "";

            var genreChoix = document.getElementById("genre").value
            var ageChoix = document.getElementById("age").value
            var especeChoix = document.getElementById("espece").value

        var pageEleveSerdaigleBis = document.getElementById("Serdaigle");
        ajaxGet("http://hp-api.herokuapp.com/api/characters", function (reponse) {
            var pageEtudiant = JSON.parse(reponse);
            pageEtudiant.forEach(function (eleve) {
                var ficheEleve = document.createElement("div");
                ficheEleve.classList.add("fiche");
                var cercle = document.createElement("div")
                cercle.classList.add("conteneur")
                var imageEleveUrl = eleve.image;
                var imageEleve = document.createElement("img");
                imageEleve.src = imageEleveUrl;
                imageEleve.classList.add("image");
                cercle.appendChild(imageEleve)
                var nom = document.createElement("h5");
                nom.textContent = eleve.name;

                var maison = eleve.house;
                var genreEleve = eleve.gender;
                var ageEleve = eleve.yearOfBirth;
                var especeEleve = eleve.species;
                if ((maison=="Ravenclaw")&&(especeEleve==especeChoix || especeChoix=="neutre")&&(genreChoix==genreEleve || genreChoix=="neutre")&&(ageChoix==ageEleve || ageChoix=="neutre"))
                {   ficheEleve.appendChild(cercle);
                    ficheEleve.appendChild(nom);
                    pageEleveSerdaigleBis.appendChild(ficheEleve);
                    }

            });
        });

        }

    // Affiche les élèves pour Serpentard
        function createSerpentard() {

            document.getElementById("Serpentard").innerHTML = "";

            var genreChoix = document.getElementById("genre").value
            var ageChoix = document.getElementById("age").value
            var especeChoix = document.getElementById("espece").value

        var pageEleveSerpentardBis = document.getElementById("Serpentard");
        ajaxGet("http://hp-api.herokuapp.com/api/characters", function (reponse) {
            var pageEtudiant = JSON.parse(reponse);
            pageEtudiant.forEach(function (eleve) {
                var ficheEleve = document.createElement("div");
                ficheEleve.classList.add("fiche");
                var cercle = document.createElement("div")
                cercle.classList.add("conteneur")
                var imageEleveUrl = eleve.image;
                var imageEleve = document.createElement("img");
                imageEleve.src = imageEleveUrl;
                imageEleve.classList.add("image");
                cercle.appendChild(imageEleve)
                var nom = document.createElement("h5");
                nom.textContent = eleve.name;

                var maison = eleve.house;
                var genreEleve = eleve.gender;
                var ageEleve = eleve.yearOfBirth;
                var especeEleve = eleve.species;
                if ((maison=="Slytherin")&&(especeEleve==especeChoix || especeChoix=="neutre")&&(genreChoix==genreEleve || genreChoix=="neutre")&&(ageChoix==ageEleve || ageChoix=="neutre"))
                {   ficheEleve.appendChild(cercle);
                    ficheEleve.appendChild(nom);
                    pageEleveSerpentardBis.appendChild(ficheEleve);
                    }

            });
        });

        }


    // Affiche les élèves pour Poufsouffle
        function createPoufsouffle() {

            document.getElementById("Poufsouffle").innerHTML = "";

            var genreChoix = document.getElementById("genre").value
            var ageChoix = document.getElementById("age").value
            var especeChoix = document.getElementById("espece").value

        var pageElevePoufsouffleBis = document.getElementById("Poufsouffle");
        ajaxGet("http://hp-api.herokuapp.com/api/characters", function (reponse) {
            var pageEtudiant = JSON.parse(reponse);
            pageEtudiant.forEach(function (eleve) {
                var ficheEleve = document.createElement("div");
                ficheEleve.classList.add("fiche");
                var cercle = document.createElement("div")
                cercle.classList.add("conteneur")
                var imageEleveUrl = eleve.image;
                var imageEleve = document.createElement("img");
                imageEleve.src = imageEleveUrl;
                imageEleve.classList.add("image");
                cercle.appendChild(imageEleve)
                var nom = document.createElement("h5");
                nom.textContent = eleve.name;

                var maison = eleve.house;
                var genreEleve = eleve.gender;
                var ageEleve = eleve.yearOfBirth;
                var especeEleve = eleve.species;
                if ((maison=="Hufflepuff")&&(especeEleve==especeChoix || especeChoix=="neutre")&&(genreChoix==genreEleve || genreChoix=="neutre")&&(ageChoix==ageEleve || ageChoix=="neutre"))
                {   ficheEleve.appendChild(cercle);
                    ficheEleve.appendChild(nom);
                    pageElevePoufsouffleBis.appendChild(ficheEleve);
                    }

            });
        });

        }