import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import Link from "next/link";
import moment from "moment";

const SINGLE_IMPRINT_QUERY = gql`
    query SINGLE_IMPRINT_QUERY($id: ID!) {
        imprint(where: { id: $id }) {
            id
            artist
            location
            image
            startDate
        }
    }
`;

const Wrapper = styled.div`
    max-width: 75em;
    padding: 0 12px;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 63px 0px 53px;
`;

const Logo = styled.img`
    margin-top: -13px;
`;

const LinkWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Text = styled.p`
    color: ${props => props.theme.text};
    font-weight: 100;
    text-transform: uppercase;
    font-size: 16px;
    letter-spacing: 4px;
    line-height: 24px;
    margin: 1px 20px 0 0;
    font-family: "trumpgothicpro", Inconsolata, Helvetica, sans-serif;

    span {
        color: ${props => props.theme.white};
    }
`;

const Bg = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0px;
    left: 0px;
    background-size: cover;
    opacity: 0.4;
    display: block;
    z-index: -1;
    background-repeat: no-repeat;
    background-position: center center;
`;

const Artist = styled.h1`
    font-size: 55px;
    font-weight: 600;
    text-transform: uppercase;
    overflow-wrap: break-word;
    font-family: trumpgothicpro, Inconsolata, Helvetica, sans-serif;
    margin: 0px 0px 60px;
    color: ${props => props.theme.white};
    line-height: 1;
    letter-spacing: 4px;

    @media (min-width: 30em) {
        font-size: 66px;
    }

    @media (min-width: 48em) {
        font-size: 112px;
    }

    @media (min-width: 64em) {
        font-size: 144px;
    }
`;

const Details = styled.div`
    display: flex;

    > div {
        display: flex;
        justify-content: space-between;
        @media (min-width: 48em) {
            margin-right: 50px;
        }
    }

    svg {
        margin-right: 20px;
    }
`;

const DetailsText = styled.p`
    font-size: 18px;
    font-family: "franklin-gothic-urw", Helvetica, sans-serif;
    font-weight: 400;
    margin: 2px 5px 0 0;
    color: ${props => props.theme.white};
    line-height: 1;

    @media (min-width: 48em) {
        font-size: 22px;
    }

    span {
        display: block;
        font-size: 14px;
        font-family: "franklin-gothic-urw", Helvetica, sans-serif;
        letter-spacing: 1px;
        text-transform: uppercase;
        opacity: 0.6;
        margin-top: 5px;
    }
`;

class Detail extends Component {
    render() {
        return (
            <Wrapper>
                <Header>
                    <Link href={{ pathname: "/" }}>
                        <Logo
                            src="./static/zaggy_white.svg"
                            alt="Amondo Logo"
                            width={94}
                        />
                    </Link>
                    <LinkWrapper>
                        <Text>
                            GET YOUR <span>PERSONALISED</span>
                            <br /> IMPRINT ON AMONDO IOS
                        </Text>
                        <a href="/">
                            <svg
                                width="174"
                                height="50"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill="#FFF"
                                    d="M173.242 44.848a4.979 4.979 0 0 1-4.985 4.98H5.147a4.985 4.985 0 0 1-4.99-4.98V5.142A4.992 4.992 0 0 1 5.147.157h163.11a4.984 4.984 0 0 1 4.983 4.986l.002 39.705z"
                                />
                                <path
                                    fill="#000"
                                    d="M38.166 24.72c-.037-4.19 3.431-6.23 3.59-6.324-1.965-2.864-5.01-3.255-6.08-3.286-2.556-.27-5.037 1.53-6.34 1.53-1.328 0-3.334-1.504-5.496-1.46-2.782.043-5.384 1.653-6.812 4.155-2.945 5.1-.748 12.594 2.074 16.716 1.412 2.02 3.061 4.273 5.22 4.194 2.113-.087 2.902-1.347 5.452-1.347 2.526 0 3.267 1.347 5.469 1.296 2.267-.036 3.694-2.028 5.057-4.065 1.631-2.314 2.286-4.593 2.312-4.71-.053-.018-4.403-1.678-4.446-6.7zm-4.16-12.322c1.137-1.421 1.914-3.354 1.698-5.316-1.644.073-3.7 1.138-4.885 2.527-1.048 1.225-1.984 3.232-1.742 5.12 1.847.138 3.744-.932 4.93-2.331zM68.74 39.955h-2.953l-1.617-5.081h-5.621l-1.54 5.081h-2.875l5.57-17.3h3.439l5.596 17.3zm-5.058-7.213l-1.462-4.518c-.155-.462-.445-1.548-.872-3.26h-.052c-.17.737-.445 1.824-.822 3.26l-1.436 4.518h4.645zm19.38.822c0 2.122-.574 3.799-1.72 5.03-1.027 1.096-2.303 1.643-3.825 1.643-1.643 0-2.824-.59-3.542-1.77h-.052v6.571H71.15v-13.45c0-1.335-.035-2.704-.103-4.108h2.438l.155 1.978h.052c.924-1.49 2.327-2.234 4.209-2.234 1.472 0 2.7.581 3.683 1.745.985 1.165 1.477 2.696 1.477 4.595zm-2.824.102c0-1.214-.273-2.215-.822-3.003-.599-.822-1.404-1.233-2.412-1.233-.684 0-1.306.23-1.86.68-.557.455-.921 1.05-1.091 1.785a3.629 3.629 0 0 0-.13.845v2.08c0 .908.28 1.673.836 2.299s1.279.937 2.168.937c1.044 0 1.856-.403 2.437-1.206.583-.805.874-1.866.874-3.184zm17.172-.102c0 2.122-.574 3.799-1.722 5.03-1.025 1.096-2.3 1.643-3.823 1.643-1.643 0-2.823-.59-3.541-1.77h-.052v6.571h-2.772v-13.45c0-1.335-.035-2.704-.102-4.108h2.437l.155 1.978h.052c.923-1.49 2.326-2.234 4.21-2.234 1.47 0 2.698.581 3.683 1.745.982 1.165 1.475 2.696 1.475 4.595zm-2.824.102c0-1.214-.274-2.215-.823-3.003-.6-.822-1.401-1.233-2.411-1.233-.685 0-1.306.23-1.862.68-.556.455-.919 1.05-1.09 1.785a3.7 3.7 0 0 0-.128.845v2.08c0 .908.278 1.673.832 2.299.556.624 1.28.937 2.171.937 1.044 0 1.856-.403 2.438-1.206.582-.805.873-1.866.873-3.184zm18.866 1.438c0 1.471-.511 2.669-1.537 3.593-1.127 1.01-2.696 1.514-4.712 1.514-1.862 0-3.354-.358-4.484-1.077l.642-2.31a7.598 7.598 0 0 0 4.007 1.105c1.044 0 1.856-.237 2.44-.708.58-.47.87-1.102.87-1.89 0-.702-.238-1.293-.718-1.773-.477-.48-1.274-.926-2.387-1.338-3.029-1.13-4.542-2.784-4.542-4.96 0-1.423.53-2.589 1.592-3.496 1.059-.909 2.47-1.363 4.236-1.363 1.574 0 2.882.275 3.926.822l-.693 2.26c-.975-.531-2.077-.796-3.311-.796-.975 0-1.737.24-2.283.719a2.054 2.054 0 0 0-.693 1.566c0 .684.264 1.25.794 1.694.462.41 1.3.855 2.517 1.335 1.489.6 2.582 1.3 3.285 2.103.701.801 1.05 1.804 1.05 3zm9.163-5.544h-3.055v6.057c0 1.54.539 2.31 1.618 2.31.495 0 .906-.043 1.23-.129l.077 2.105c-.546.204-1.265.307-2.155.307-1.095 0-1.95-.334-2.567-1.001-.615-.668-.925-1.789-.925-3.363v-6.288h-1.82v-2.08h1.82v-2.284l2.722-.822v3.106h3.055v2.082zm13.784 4.055c0 1.918-.548 3.492-1.643 4.723-1.148 1.268-2.671 1.9-4.57 1.9-1.831 0-3.288-.608-4.375-1.822-1.087-1.214-1.63-2.747-1.63-4.594 0-1.933.559-3.517 1.68-4.748 1.12-1.232 2.63-1.848 4.53-1.848 1.83 0 3.303.607 4.415 1.822 1.063 1.18 1.593 2.702 1.593 4.567zm-2.875.09c0-1.15-.246-2.137-.744-2.96-.581-.996-1.412-1.493-2.488-1.493-1.114 0-1.96.498-2.542 1.493-.497.824-.743 1.826-.743 3.012 0 1.15.246 2.137.743 2.959.6.995 1.437 1.492 2.517 1.492 1.058 0 1.89-.507 2.488-1.518.511-.839.769-1.836.769-2.985zm11.884-3.787a4.813 4.813 0 0 0-.873-.077c-.975 0-1.73.368-2.26 1.105-.461.65-.693 1.472-.693 2.464v6.545h-2.77l.026-8.546c0-1.438-.035-2.747-.104-3.927h2.414l.102 2.387h.076c.293-.82.754-1.481 1.386-1.976.618-.446 1.284-.669 2.003-.669.256 0 .488.019.693.051v2.643zm12.396 3.21a6.5 6.5 0 0 1-.102 1.257h-8.314c.032 1.232.434 2.175 1.206 2.825.7.58 1.607.872 2.72.872 1.23 0 2.354-.196 3.364-.59l.434 1.924c-1.18.515-2.574.77-4.182.77-1.934 0-3.453-.569-4.558-1.706-1.102-1.138-1.655-2.665-1.655-4.581 0-1.882.514-3.448 1.542-4.697 1.077-1.334 2.531-2.001 4.362-2.001 1.798 0 3.159.667 4.083 2 .732 1.06 1.1 2.37 1.1 3.927zm-2.643-.72c.018-.82-.163-1.53-.538-2.13-.48-.77-1.217-1.156-2.209-1.156-.906 0-1.643.376-2.206 1.13-.462.6-.736 1.318-.82 2.155h5.773v.002zM62.765 12.013c0 1.53-.459 2.682-1.375 3.455-.85.714-2.056 1.071-3.618 1.071-.775 0-1.438-.034-1.993-.101v-8.36a14.706 14.706 0 0 1 2.346-.177c1.489 0 2.61.323 3.367.97.848.733 1.273 1.78 1.273 3.142zm-1.437.037c0-.992-.262-1.752-.787-2.282s-1.292-.795-2.303-.795c-.429 0-.794.029-1.097.089v6.355c.168.026.475.038.92.038 1.043 0 1.848-.29 2.415-.87.566-.58.852-1.424.852-2.535zm9.054 1.3c0 .942-.27 1.714-.808 2.32-.564.622-1.311.933-2.245.933-.9 0-1.616-.298-2.15-.896-.533-.596-.8-1.35-.8-2.257 0-.949.275-1.727.826-2.332.551-.604 1.292-.907 2.226-.907.9 0 1.622.298 2.17.894.52.58.78 1.329.78 2.244zm-1.413.043c0-.565-.123-1.05-.366-1.454-.286-.49-.693-.734-1.222-.734-.547 0-.963.245-1.249.734-.244.404-.365.897-.365 1.479 0 .565.122 1.05.365 1.455.295.488.706.733 1.236.733.52 0 .928-.248 1.222-.746.252-.412.379-.901.379-1.467zm11.626-3.057l-1.918 6.128h-1.248l-.794-2.661a19.916 19.916 0 0 1-.493-1.98h-.025a14.495 14.495 0 0 1-.492 1.98l-.844 2.66h-1.262l-1.804-6.127h1.4l.693 2.913c.168.689.306 1.345.416 1.967h.025c.102-.512.27-1.165.506-1.954l.87-2.925h1.11l.833 2.863c.202.698.365 1.37.491 2.017h.038c.092-.63.232-1.302.416-2.017l.744-2.863h1.337v-.001zm7.062 6.128h-1.362v-3.51c0-1.082-.41-1.623-1.235-1.623-.404 0-.73.149-.984.446-.251.298-.378.65-.378 1.05v3.636h-1.363v-4.376c0-.538-.017-1.122-.05-1.754h1.198l.064.958h.038c.158-.298.395-.543.705-.74.37-.228.783-.344 1.235-.344.572 0 1.048.185 1.426.555.471.454.706 1.131.706 2.03v3.672zm3.757 0h-1.36v-8.94h1.36m8.021 5.825c0 .943-.269 1.715-.807 2.32-.564.623-1.313.934-2.245.934-.9 0-1.617-.298-2.15-.896-.533-.596-.8-1.35-.8-2.256 0-.95.275-1.728.826-2.333.551-.604 1.292-.907 2.224-.907.901 0 1.623.298 2.171.894.52.58.781 1.329.781 2.244zm-1.414.044c0-.565-.122-1.05-.365-1.454-.285-.49-.693-.734-1.221-.734-.549 0-.965.245-1.25.734-.244.404-.365.897-.365 1.479 0 .566.123 1.05.366 1.455.295.489.706.733 1.236.733.52 0 .927-.248 1.22-.746.254-.412.379-.901.379-1.467zm8.008 3.07h-1.223l-.102-.705h-.037c-.419.563-1.016.845-1.79.845-.579 0-1.047-.186-1.4-.555-.32-.335-.479-.753-.479-1.248 0-.749.312-1.32.94-1.715.627-.395 1.508-.589 2.643-.58v-.114c0-.807-.424-1.21-1.273-1.21-.604 0-1.137.152-1.598.453l-.276-.894c.569-.352 1.272-.53 2.102-.53 1.601 0 2.405.846 2.405 2.536v2.257c0 .612.03 1.1.088 1.46zm-1.414-2.105v-.945c-1.503-.026-2.255.386-2.255 1.235 0 .32.086.559.262.719.175.16.399.239.665.239.3 0 .579-.095.834-.283a1.16 1.16 0 0 0 .494-.965zm9.156 2.106h-1.21l-.063-.984h-.038c-.386.749-1.044 1.123-1.968 1.123-.739 0-1.353-.29-1.84-.87-.488-.58-.732-1.332-.732-2.256 0-.992.264-1.796.795-2.41.513-.571 1.143-.857 1.891-.857.823 0 1.4.277 1.727.832h.026V7.523h1.363v7.289c0 .597.016 1.147.048 1.65zm-1.412-2.584v-1.022a1.552 1.552 0 0 0-.53-1.255 1.34 1.34 0 0 0-.912-.334c-.508 0-.906.202-1.199.606-.29.404-.436.92-.436 1.55 0 .607.139 1.098.418 1.476.295.403.693.605 1.191.605.447 0 .805-.168 1.076-.505.263-.31.392-.685.392-1.121zm13.063-.53c0 .942-.269 1.714-.807 2.32-.564.622-1.31.933-2.245.933-.898 0-1.615-.298-2.15-.896-.533-.596-.8-1.35-.8-2.256 0-.95.275-1.728.826-2.333.551-.604 1.292-.907 2.227-.907.898 0 1.622.298 2.168.894.52.58.781 1.329.781 2.244zm-1.411.043c0-.565-.123-1.05-.366-1.454-.287-.49-.693-.734-1.223-.734-.546 0-.962.245-1.25.734-.244.404-.365.897-.365 1.479 0 .566.123 1.05.366 1.455.295.489.706.733 1.236.733.52 0 .93-.248 1.223-.746.251-.412.379-.901.379-1.467zm8.737 3.07h-1.361v-3.51c0-1.08-.411-1.621-1.237-1.621-.404 0-.73.148-.982.445s-.379.65-.379 1.05v3.636h-1.363v-4.376c0-.538-.016-1.122-.048-1.754h1.196l.063.958h.038c.16-.297.397-.543.706-.74.37-.228.783-.344 1.236-.344.57 0 1.047.185 1.425.555.472.454.706 1.131.706 2.03v3.672zm9.169-5.107h-1.5v2.977c0 .757.266 1.135.794 1.135a2.4 2.4 0 0 0 .607-.064l.035 1.034c-.269.101-.623.152-1.058.152-.538 0-.957-.164-1.26-.491-.304-.328-.455-.88-.455-1.653v-3.09h-.896v-1.02h.896V9.21l1.335-.403v1.525h1.5v1.022h.002zm7.212 5.108h-1.363v-3.484c0-1.099-.411-1.648-1.234-1.648-.632 0-1.064.318-1.3.955-.04.134-.064.298-.064.49v3.686h-1.361v-8.94h1.361v3.694h.026c.43-.672 1.044-1.007 1.84-1.007.565 0 1.032.184 1.402.555.462.461.693 1.148.693 2.055v3.644zm7.44-3.354c0 .244-.018.45-.05.617h-4.087c.019.606.214 1.068.592 1.388.346.286.792.429 1.338.429.604 0 1.155-.097 1.652-.29l.213.946c-.58.252-1.265.378-2.056.378-.95 0-1.697-.28-2.238-.838-.543-.56-.812-1.31-.812-2.25 0-.925.25-1.694.756-2.308.528-.655 1.242-.983 2.143-.983.881 0 1.55.328 2.003.983.365.52.546 1.164.546 1.928zm-1.3-.352c.01-.405-.08-.753-.264-1.047-.236-.378-.597-.568-1.084-.568-.445 0-.807.185-1.084.555-.226.295-.36.648-.405 1.06h2.837z"
                                />
                            </svg>
                        </a>
                    </LinkWrapper>
                </Header>
                <Query
                    query={SINGLE_IMPRINT_QUERY}
                    variables={{ id: this.props.id }}
                >
                    {({ data, error, loading }) => {
                        if (loading) return <p>Loading...</p>;
                        if (error) return <p>Opps! something went wrong :[</p>;

                        return (
                            <React.Fragment>
                                <Bg
                                    style={{
                                        backgroundImage: `url(${
                                            data.imprint.image
                                        })`
                                    }}
                                    alt=""
                                />
                                <Artist>{data.imprint.artist}</Artist>
                                <Details>
                                    <div>
                                        <svg height="24" width="28">
                                            <g fill="none">
                                                <path
                                                    d="M25.007 22.667H2.027A.672.672 0 0 1 1.353 22V8h24.33v14a.673.673 0 0 1-.675.667zm-22.98-20h3.38v2c0 .368.303.666.676.666a.672.672 0 0 0 .676-.666v-2h13.517v2c0 .368.304.666.676.666a.672.672 0 0 0 .676-.666v-2h3.379c.372 0 .676.298.676.666v3.334H1.352V3.333c0-.368.303-.666.676-.666zm22.98-1.334h-3.38V.667A.672.672 0 0 0 20.953 0a.672.672 0 0 0-.676.667v.666H6.759V.667A.672.672 0 0 0 6.083 0a.672.672 0 0 0-.676.667v.666h-3.38C.91 1.333 0 2.231 0 3.333V22c0 1.103.91 2 2.028 2h22.979c1.118 0 2.027-.897 2.027-2V3.333c0-1.102-.91-2-2.027-2z"
                                                    fill="#fff"
                                                />
                                                <path
                                                    d="M13.25 20h-4.5c-.414 0-.75-.29-.75-.643 0-.353.336-.643.75-.643h3.75v-2.571h-2.25c-.414 0-.75-.29-.75-.643s.336-.643.75-.643h2.25v-2.571H8.75c-.414 0-.75-.288-.75-.643 0-.355.336-.643.75-.643h4.5c.414 0 .75.288.75.643v7.714c0 .354-.336.643-.75.643m5.25 0c-.275 0-.5-.29-.5-.643v-7.714c0-.355.225-.643.5-.643s.5.288.5.643v7.714c0 .354-.225.643-.5.643"
                                                    fill="#fff"
                                                />
                                            </g>
                                        </svg>
                                        <DetailsText>
                                            {moment(
                                                data.imprint.startDate
                                            ).format("DD MMMM YYYY")}
                                            <span>date</span>
                                        </DetailsText>
                                    </div>

                                    <div>
                                        <svg
                                            height="26"
                                            width="26"
                                            viewBox="0 0 26 26"
                                        >
                                            <path
                                                d="M24.6301384 20.7872741l-6.8424654 3.4210973V5.2117024l6.8424654-3.42109727V20.7872741zM9.57671456 1.79060513L16.41918 5.2117024v18.996669l-6.84246544-3.4210973V1.79060513zM8.2082215 20.7872741l-6.8424654 3.4210973V5.2117024l6.8424654-3.42109727V20.7872741zM25.6756671.1019515c-.2025369-.12452793-.4543397-.13547544-.6664561-.03010565l-7.904416 3.95205158L9.20037897.07184585c-.19295753-.09579072-.41875888-.09579072-.6117164 0L.37770408 4.1771626C.14642875 4.2934799 0 4.5302198 0 4.78885477V25.3154384c0 .23674.12316438.4570586.32433286.5815866.10947945.0684219.23401232.1026329.35991368.1026329.10400547 0 .20937944-.0246319.30654245-.0725273l7.904416-3.9520515 7.9030475 3.9520515c.1943261.0971592.4214959.0971592.6130849 0l8.2109585-4.1053167C25.8549397 21.7041282 26 21.4701251 26 21.2101217V.68353805c0-.23673994-.1231644-.4570586-.3243329-.58158654z"
                                                fill="#fff"
                                            />
                                        </svg>
                                        <DetailsText>
                                            {data.imprint.location}
                                            <span>LOCATION</span>
                                        </DetailsText>
                                    </div>
                                </Details>
                            </React.Fragment>
                        );
                    }}
                </Query>
            </Wrapper>
        );
    }
}

export default Detail;