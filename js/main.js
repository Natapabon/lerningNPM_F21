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

            //add same data to our custom dataset attribute for each biopanel, we'll retrive this and use itas our query parameter later

            panel.firstElementChild.dataset.key = person.id;
            
            // add the image
            containers[0].querySelector("img").src = `images/${person.biopic}`;

            // update the text
            // containers[1].textContent = person.name;
            // containers[2].textContent = person.role;
            // containers[3].textContent = person.nickname;

            // put the virtual panel in the team selection in our HTML
            theTeam.appendChild(panel);
        });

    }

    //add a function thatretrives thedata-key attribute from each of our bio panels
    function getMoreData(event){
        //find the element I am currently clicking on; if is has a custom data atribute, then use that to make a new datase call for that one row of data the custom data attribute will be th ID that goes with that row of data in the database 
        if (event.target.closest("section").dataset.key){
            //then do another DB call for a specific row of data
            //the one that corresponds to the key

            let key = event.target.closest("section").dataset.key;

            getData({id: key}, function(data){
                console.log(data);
            });
        }

        // debugger;
    }

    theTeam.addEventListener("click", getMoreData);

    //invoke the getData function
    //pass an object and callback to getData (the params and cb arguments)
    //this should tell our dataMiner to retrive one user's data
    getData(null, buildTeam);
})();