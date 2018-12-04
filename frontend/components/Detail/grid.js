import React, { Component } from "react";
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";
import Masonry from "react-masonry-component";

import { GridContainer, GridItem } from "./styles";
import { perPage } from "../../config";

const ALL_ASSETS_QUERY = gql`
    query ALL_ASSETS_QUERY($skip: Int =0, $first: Int = ${perPage}) {
        assetses(first: $first, skip: $skip, orderBy: createdAt_DESC) {
            id
            url
        }
    }
`;

const masonryOptions = {
    transitionDuration: 0,
    gutter: 30
};

class Grid extends Component {
    render() {
        return (
            <Query query={ALL_ASSETS_QUERY} variables={{ skip: 0 }}>
                {({ data, error, loading }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error: {error.message}</p>;
                    return (
                        <GridContainer>
                            <Masonry
                                options={masonryOptions}
                                updateOnEachImageLoad={false}
                            >
                                {data.assetses.map((item, i) => {
                                    let height = i % 2 === 0 ? 200 : 100;
                                    return (
                                        <GridItem key={item.id}>
                                            <img src={item.url} alt="" />
                                        </GridItem>
                                    );
                                })}
                            </Masonry>
                        </GridContainer>
                    );
                }}
            </Query>
        );
    }
}

export default Grid;
