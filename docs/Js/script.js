
document.addEventListener("DOMContentLoaded", function() { 

    "use strict";

    function obtenerCivs() {
        let thisId = event.currentTarget.id;

        const civDetails = document.querySelector(".civDetails");
        civDetails.style.display = "block";
        const civShield = document.querySelector(".civShield");
        civShield.style.display = "flex";

        const api = `https://github.com/Lighting-Sun/AgeII_Infographic/tree/master/docs/data/Civs.json`;

        fetch(api,{mode: 'no-cors','headers': {
            'Access-Control-Allow-Origin': '*',
        }})
            .then(respuesta => respuesta.json())
            .then(datos => imprimirHtml(datos.civilizations[thisId]));
    
    }

    function imprimirHtml(datos) {

     console.log(datos);
        // datos.forEach(civilization => {
            const {name,expansion,army_type,unique_unit,
                    unique_tech,team_bonus,civilization_bonus,Shield,Sound} = datos;

            const nameCiv = document.querySelector('#name');
            const titleCiv = document.querySelector('#civTitle');
            const espansionCiv = document.querySelector('#expansion');
            const armyTypeCiv = document.querySelector('#armyType');
            const uniqueUnitCiv = document.querySelector('#uniqueUnit');
            const uniqueTechCiv = document.querySelector('#uniqueTech');
            const teamBonusCiv = document.querySelector('#teamBonus');
            const civilizationBonusCiv = document.querySelector('#civBonus');
            
            const civilizationShield = document.querySelector('#civShieldImg')
            
            const civilizationSound = document.querySelector('#civSound');

            nameCiv.innerHTML = `${name}`;
            titleCiv.innerHTML = `${name}`;

            espansionCiv.innerHTML = `${expansion}`;
            armyTypeCiv.innerHTML = `${army_type}`;
            uniqueUnitCiv.innerHTML = `${unique_unit}`;
            uniqueTechCiv.innerHTML = `${unique_tech}`;
            teamBonusCiv.innerHTML = `${team_bonus}`;
            civilizationBonusCiv.innerHTML = `${civilization_bonus}`;

            civilizationShield.src = `${Shield}`;
            civilizationSound.src = `${Sound}`
            
            if (!civilizationSound.paused && civilizationSound.duration > 0) {
                civilizationSound.currentTime = 0;
            }else{
                
            }
            playAudio();
            function playAudio() { 
                civilizationSound.play(); 
            }
            function stopAudio() {
                civilizationSound.pause(); 
            }

        // });
    }

    const selectorCivs = '.iconoCiv'
    const iconoCivs = document.querySelectorAll(selectorCivs);
    // console.log(iconoCivs);
    
    for (let i = 0; i< iconoCivs.length; i++){
        iconoCivs[i].addEventListener("click" , obtenerCivs, false);
    }

    
    // console.log(buttonSound.querySelector("img").src);    

    function muteMe(elem) {
        elem.muted = true;
        elem.pause();
    }

    function unMuteMe(elem) {
        elem.muted = false;
        elem.play();
    }

    function mutePage() {
        document.querySelectorAll("video, audio").forEach( elem => muteMe(elem) );
    }

    function unMutePage() {
        document.querySelectorAll("video, audio").forEach( elem => unMuteMe(elem) );
    }


    const buttonSound = document.querySelector(".soundButton");
    const noButtonSound = document.querySelector(".noSoundButton");

    buttonSound.addEventListener("click",function(){
        buttonSound.style.display = "none";
        noButtonSound.style.display = "block";
        mutePage();
    });

    noButtonSound.addEventListener("click",function(){
        buttonSound.style.display = "block";
        noButtonSound.style.display = "none";
        unMutePage();
    });


    // Change maps

    const bookmarks = document.querySelectorAll(".bookmark")

    for (let i = 0; i< bookmarks.length; i++){
        bookmarks[i].addEventListener("click" , cambiarMapas, false);
    }

    function cambiarMapas () {
        let thisId = event.currentTarget.id;

        const map = document.querySelector(".mapaActual");

        map.src = `images/Maps/map_${thisId}.png`

        const europeIcons = document.querySelectorAll(".europe");
        const asiaIcons = document.querySelectorAll(".asia");
        const americaIcons = document.querySelectorAll(".america");
        const africaIcons = document.querySelectorAll(".africa");

        for (let i = 0; i< europeIcons.length; i++){
            europeIcons[i].style.display = "none";
        }
        for (let i = 0; i< asiaIcons.length; i++){
            asiaIcons[i].style.display = "none";
        }
        for (let i = 0; i< americaIcons.length; i++){
            americaIcons[i].style.display = "none";
        }
        for (let i = 0; i< africaIcons.length; i++){
            africaIcons[i].style.display = "none";
        }


        switch (thisId) {
            case "africa":
                for (let i = 0; i< africaIcons.length; i++){
                    africaIcons[i].style.display = "block";
                }
                break;
            case "america":
                for (let i = 0; i< americaIcons.length; i++){
                    americaIcons[i].style.display = "block";
                }
                break;
            case "asia":
                for (let i = 0; i< asiaIcons.length; i++){
                    asiaIcons[i].style.display = "block";
                }
                break;
            case "europe":
                for (let i = 0; i< europeIcons.length; i++){
                    europeIcons[i].style.display = "block";
                }
                break;
            default:
                break;
        }



    }



});    


