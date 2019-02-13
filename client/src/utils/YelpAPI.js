import axios from "axios";

// CRP from OMDB search activity
// require("dotenv").config();

// const BASEURL = "https://api.yelp.com/v3/businesses/search;
// // const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";

// export default {
//   search: function(query) {
//     return axios.get(BASEURL + query);
//   }
// };

export default {
    // Get dining from yelp search 
    getYelp: function (term, location) {
        // let appId = process.env.appId;
        // let appKey = process.env.appKey;
        const URL = "https://api.yelp.com/v3/businesses/search" + term + location;
        console.log(URL)
        return axios.get(URL)
    },

// need to update for Yelp API
    // Gets all books
    getFlights: function () {
        return axios.get("/api/flights");
    },

    // Gets the book with the given id
    getFlight: function (id) {
        return axios.get("/api/flights/" + id);
    },

    // Saves a book to the database
    saveFlight: function (savedFlights) {
        return axios.post("/api/books", savedFlights);
    },

    // Deletes the book with the given id
    deleteFlight: function (id) {
        return axios.delete("/api/flights/" + id);
    }

}
