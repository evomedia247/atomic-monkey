'use strict';

/**
 * Work.js controller
 *
 * @description: A set of functions called "actions" for managing `Work`.
 */

module.exports = {

  /**
   * Retrieve work records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.work.search(ctx.query);
    } else {
      return strapi.services.work.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a work record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.work.fetch(ctx.params);
  },

  /**
   * Count work records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.work.count(ctx.query, populate);
  },

  /**
   * Create a/an work record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.work.add(ctx.request.body);
  },

  /**
   * Update a/an work record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.work.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an work record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.work.remove(ctx.params);
  }
};