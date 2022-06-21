'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

const axios = require("axios");

async function getGameInfo(slug) {
  const jsdom = require("jsdom");
  const { JSDOM } = jsdom;
  const body = await axios.get(`https://www.gog.com/game/${slug}`);
  console.log(body.data)
  const dom = new JSDOM(body.data);

  const description = dom.window.document.querySelector('.description');

  return {
    rating: 'BR0',
    short_description: description.textContent.slice(0, 160),
    description: description.innerHTML
  }
}

module.exports = {
  populate: async (params) => {
    const gogApiUrl = `https://catalog.gog.com/v1/catalog?limit=48&order=desc:trending&productType=in:game,pack,dlc,extras&page=1&countryCode=BR&locale=en-US&currencyCode=BRL`;

    const { data: { products }} = await axios.get(gogApiUrl);

    console.log(await getGameInfo(products[0].slug));
  }
};
