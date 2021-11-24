// import the scss files first!
import{ getData } from "./components/TheDataMiner.js";

(() => {
    const   theTeam = document.querySelector("#teamSection"),
            theTemplate = document.querySelector("#bio-template").content;


    function buildTeam(info) {

        info.forEach(person => {
            let panel = theTemplate.cloneNode(true); // make a copy of the template content
            let containers = panel.firstElementChild.children; // get a reference to the template content

            // cycle through the child elements inside the <section> tag in the <template> tag
            // and update their attributes 
            
            // add the image
            containers[0].querySelector("img").src = `images/${person.biopic}`;

            // update the text
            containers[1].textContent = person.name;
            containers[2].textContent = person.role;
            containers[3].textContent = person.nickname;

            // put the virtual panel in the team selection in our HTML
            theTeam.appendChild(panel);
        });

    }

    //invoke the getData function
    getData(buildTeam);
})();