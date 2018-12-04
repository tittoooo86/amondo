import React, { Component } from "react";
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";

import { Wrapper, Bg } from "./styles";
import Header from "./header";
import Grid from "./grid";
import Footer from "./footer";

const SINGLE_IMPRINT_QUERY = gql`
    query SINGLE_IMPRINT_QUERY($id: ID!) {
        imprint(where: { id: $id }) {
            id
            artist
            location
            image
            startDate
            asset_order
        }
    }
`;

const CREATE_ASSETS_MUTATION = gql`
    mutation CREATE_ASSETS_MUTATION($url: String!, $origID: Int!) {
        createAsset(url: $url, origID: $origID) {
            id
        }
    }
`;

class Detail extends Component {
    // generateAssets = async (e, createAssetsMutation) => {
    //     console.log(order.map(String));

    //     // Assets.map(async asset => {
    //     //     // console.log(asset.file.url);
    //     //     const res = await createAssetsMutation({
    //     //         variables: {
    //     //             url: asset.file.url,
    //     //             origID: asset.id
    //     //         }
    //     //     });
    //     // });
    // };
    render() {
        return (
            <Wrapper>
                {/* <Mutation
                    mutation={CREATE_ASSETS_MUTATION}
                    variables={this.state}
                >
                    {(createAssets, { loading, error }) => (
                        <button
                            onClick={e => this.generateAssets(e, createAssets)}
                        >
                            generate
                        </button>
                    )}
                </Mutation> */}
                <Query
                    query={SINGLE_IMPRINT_QUERY}
                    variables={{ id: this.props.id }}
                >
                    {({ data, error, loading }) => {
                        if (loading) return <p>Loading...</p>;
                        if (error) return <p>Opps! something went wrong :[</p>;

                        console.log(data.imprint);

                        return (
                            <React.Fragment>
                                <Header imprint={data.imprint} />

                                <Bg
                                    style={{
                                        backgroundImage: `url(${
                                            data.imprint.image
                                        })`
                                    }}
                                    alt=""
                                />

                                <Grid />
                                <Footer imprint={data.imprint} />
                            </React.Fragment>
                        );
                    }}
                </Query>
            </Wrapper>
        );
    }
}

export default Detail;
