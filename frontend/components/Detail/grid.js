import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import Masonry from "react-masonry-component";
import InfiniteScroll from "react-infinite-scroller";

import { GridContainer, GridItem } from "./styles";
import { perPage } from "../../config";

const ALL_ASSETS_QUERY = gql`
    query ALL_ASSETS_QUERY($first: Int!, $skip: Int!) {
        assetses(first: $first, skip: $skip, orderBy: createdAt_ASC) {
            id
            url
        }
        assetsesConnection {
            aggregate {
                count
            }
        }
    }
`;

const masonryOptions = {
    transitionDuration: 0,
    gutter: 30
};

class Grid extends Component {
    state = {
        assets: null
    };

    render() {
        let props = this.props;

        return (
            <InfiniteScroll
                pageStart={0}
                loadMore={() => props.loadMorePosts()}
                hasMore={props.hasMore}
                loader={
                    <div>
                        <div className="loader">Loading ...</div>
                    </div>
                }
            >
                <GridContainer>
                    <Masonry
                        options={masonryOptions}
                        updateOnEachImageLoad={false}
                    >
                        {this.props.data.assetses.map(item => (
                            <GridItem key={item.url}>
                                <img src={item.url} alt="" />
                            </GridItem>
                        ))}
                    </Masonry>
                </GridContainer>
            </InfiniteScroll>
        );
    }
}

const GridWithData = graphql(ALL_ASSETS_QUERY, {
    options(props) {
        return {
            variables: {
                skip: 0,
                first: perPage
            },
            fetchPolicy: "network-only"
        };
    },
    props: ({ ownProps, data, meta = {}, variables }) => ({
        data,
        hasMore: data.assetses.length < data.assetsesConnection.aggregate.count,
        loadMorePosts: () => {
            data.fetchMore({
                variables: {
                    skip: data.assetses.length
                },
                updateQuery: (prevState, { fetchMoreResult }) => {
                    if (!fetchMoreResult) return prevState;

                    return {
                        ...prevState,
                        assetses: [
                            ...prevState.assetses,
                            ...fetchMoreResult.assetses
                        ]
                    };
                }
            });
        }
    })
})(Grid);

export default GridWithData;
