'use strict';

/**
 * fact-check router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::fact-check.fact-check');
