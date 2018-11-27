import React, { Component } from "react";

import { Query } from "react-apollo";
import gql from "graphql-tag";

import Card from "../Card";
import { Wrapper, Text, Grid, Line, LargeCircle, SmallCircle } from "./styles";

const IMPRINTS_QUERY = gql`
    query IMPRINTS_QUERY {
        imprints {
            id
            artist
            location
            image
            startDate
        }
    }
`;

class Imprints extends Component {
    render() {
        return (
            <Wrapper>
                <Text>Check out some sample Imprints below 👇</Text>

                <Query query={IMPRINTS_QUERY}>
                    {({ data, error, loading }) => {
                        if (loading) return <p>Loading...</p>;
                        if (error) return <p>Opps! something went wrong :[</p>;

                        return (
                            <Grid>
                                {data.imprints.map(item => (
                                    <Card item={item} key={item.id} />
                                ))}
                            </Grid>
                        );
                    }}
                </Query>

                <Line />
                <LargeCircle />
                <SmallCircle />
            </Wrapper>
        );
    }
}

export default Imprints;
