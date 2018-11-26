const { forwardTo } = require("prisma-binding");

const Query = {
    // No custom logic, the query exactly the same as it is in Prisma
    // so we can forward the query from Yoga to Prisma
    imprints: forwardTo("db")
    // async imprints(parent, args, ctx, info) {
    //     const imprints = await ctx.db.query.imprints();
    //     return imprints;
    // }
};

module.exports = Query;
