import axios from "axios";

require("dotenv").config();

const BASEURL = "https://api.yelp.com/v3/businesses/search";
// const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";

export default {
  search: function(query) {
    return axios.get(BASEURL + query);
  }
};
