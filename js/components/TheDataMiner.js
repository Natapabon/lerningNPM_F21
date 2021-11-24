 // set up a Fetch function and get some data
 function getData(params, cb) { //cb is short for callback, which is just a function we want to run when an operation is done
    //params is the optional object that we`re going to pass to ur data miner; this will let us pass things like a user ID or name that we can use in our DB query to get one row of data - a more specific query => { id:1 } or { id:1, name: "Natalia" }
    
    // retrieve our data object
    // use the fetch API to retrive some data
    let baseURL = "./includes/index.php"; 

    if (params) { // this is the option object we pass to the DataMiner
        let keys = Object.keys(params); // Object.keys creates an array of the keys => ["id", "name"]
        // loop through the keys using the Array.map method (look on MDN) and create a query string => id=1&&name=Natalia
        let newQStringParams = keys.map(key => `${key}=${params[key]}`).join("&&");

        //take the original baseURL which is index.php (see above) and add the query string to it
        baseURL += `?${newQStringParams}`;
        //so that it BECOMES ./includes/index.php?id=1
    }

    fetch(baseURL) // this  baseURL is the query string we buid above
    //go and get the data (fetch boy!)
        .then(res => res.json()) // good dog! clean the stick (convert the data to a plain JS object)
        .then(data => {
            // do anything else here that we want with our data
            //call a function to generate our dynamic content

            cb(data[0]);
        })
    .catch(error => console.error(error)); // catch and report any errors
}

export { getData }