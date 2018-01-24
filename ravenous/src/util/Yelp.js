/* Yelp.js */
/*
Yelp purpose: This file handles the Yelp API call and requests information
for the users business and location search, also accounting for the type of
search the user would like to sort the results by.
*/

const apiKey = 'ovujUoEwiRd8nZRqpSGbB6knvoqN-fRHHcca0UxbSQacCslXHfQvJyeXVvT5sT1ELR8BxqYOYWnCfscln-sLsp6rB2wyCMUjilQI78k3bNfhV5K4t0-uCRh4zR9oWnYx';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, { headers: { Authorization: `Bearer ${apiKey}`}}).then(
      response => {
        return response.json();
      }
    ).then(
      jsonResponse => {
        if(jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => ({
            // business return data found here:
            //  https://www.yelp.com/developers/documentation/v3/business
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
          }));
        }
      }
    );
  }
};

export default Yelp;
