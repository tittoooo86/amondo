const Mutation = {
    async createAsset(parent, args, ctx, info) {
        const item = await ctx.db.mutation.createAssets(
            {
                data: {
                    ...args
                }
            },
            info
        );

        return item;
    }
};

module.exports = Mutation;
