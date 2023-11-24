'use strict';

/**
 * fact-check service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fact-check.fact-check');
