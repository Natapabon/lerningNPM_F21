 // set up a Fetch function and get some data
 function getData(cb) { //cb is short for callback, which is just a function we want to run when an operation is done
    // retrieve our data object
    // use the fetch API to retrive some data
    fetch("./includes/functions.php") // go and get the data (fetch boy!)
        .then(res => res.json()) // good dog! clean the stick (convert the data to a plain JS object)
        .then(data => {
            // do anything else here that we want with our data
            //call a function to generate our dynamic content

            buildTeam(data[0]);
        })
    .catch(error => console.error(error)); // catch and report any errors
}

export { getData }