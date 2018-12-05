const { forwardTo } = require("prisma-binding");

const Query = {
    // No custom logic, the query exactly the same as it is in Prisma
    // so we can forward the query from Yoga to Prisma
    imprints: forwardTo("db"),
    imprint: forwardTo("db"),
    assetses: forwardTo("db"),
    assetsesConnection: forwardTo("db")
};

module.exports = Query;
