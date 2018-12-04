import React from "react";

import {
    StyledFooter,
    FooterMessage,
    FooterMeta,
    Social,
    IconWrapper,
    Icon,
    AppStoreButton
} from "./styles";

const Footer = ({ imprint }) => (
    <StyledFooter>
        <FooterMessage>
            <h1>
                You just experienced <span>{imprint.asset_order.length}</span>{" "}
                moments from&nbsp;
                <span>{imprint.artist}</span> @ <span>{imprint.location}</span>
            </h1>
        </FooterMessage>
        <FooterMeta>
            <Social>
                <h3>SHARE THIS EXPERIENCE WITH YOUR FRIENDS</h3>
                <IconWrapper>
                    <Icon href="/" target="_blank" rel="noopener noreferrer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="34"
                            width="34"
                            viewBox="0 0 34 34"
                        >
                            <path
                                d="M18.1605015 34H1.87653933C.8398517 34 0 33.1596277 0 32.1233438V1.87652446C0 .83997708.83998346 0 1.87653933 0H32.1235931C33.1598848 0 34 .83997708 34 1.87652446V32.1233438C34 33.1597594 33.159753 34 32.1235931 34h-8.6640854V20.8333265h4.4194447l.6617491-5.1312864h-5.0811938v-3.2760027c0-1.4856258.4125383-2.49803032 2.5429061-2.49803032l2.7171815-.00118787V5.33735613c-.469926-.0625338-2.0828733-.20224404-3.9594126-.20224404-3.9175919 0-6.5996812 2.39130217-6.5996812 6.78274432v3.7841837h-4.4307901v5.1312864h4.4307901V34z"
                                fill="#fff"
                            />
                        </svg>
                    </Icon>

                    <Icon href="/" target="_blank" rel="noopener noreferrer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="28"
                            width="34"
                            viewBox="0 0 34 28"
                        >
                            <path
                                d="M34 3.3146981c-1.2492811.5622253-2.5943537.9424345-4.0052829 1.1123154 1.4408641-.8736728 2.5464576-2.2590106 3.0673242-3.9092816-1.3490633.8089564-2.8398188 1.3974723-4.4323526 1.7129651C27.360451.8574937 25.5463987 0 23.5387688 0c-3.8496217 0-6.9728241 3.1650416-6.9728241 7.0682556 0 .5541354.0598697 1.092091.1796092 1.6098229-5.7973825-.2952691-10.93619773-3.1063921-14.37870553-7.387793-.60069216 1.0475983-.94394554 2.2630552-.94394554 3.5573853 0 2.4511375 1.23132063 4.6150958 3.10324588 5.8831346-1.14151528-.0343805-2.21917007-.3559409-3.16111953-.8817627v.0869631c0 3.4259302 2.40476616 6.2835682 5.59781666 6.9307329-.58472775.1658363-1.20138575.2487541-1.83799962.2487541-.44902312 0-.88806724-.0424697-1.31314232-.1253882.88806725 2.8070784 3.46246437 4.8517154 6.51581882 4.9063203-2.3868057 1.8970021-5.3962555 3.0275189-8.6631455 3.0275189-.56277507 0-1.11956332-.0323582-1.6643772-.0970746C3.08728075 26.8290358 6.75529708 28 10.6927273 28 23.524799 28 30.5395317 17.2307695 30.5395317 7.8893465c0-.3074036-.0059868-.6148072-.0179612-.9161432C31.8846043 5.9761646 33.0680281 4.7323941 34 3.3146981"
                                fill="#fff"
                            />
                        </svg>
                    </Icon>

                    <Icon
                        href={`mailto:?subject=Amondo Event – Chronixx&body=Check out ${
                            imprint.asset_order.length
                        } moments from ${
                            imprint.artist
                        } on https://www.amondo.com/chronixx-181111`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            viewBox="0 0 550.795 550.795"
                        >
                            <g fill="#fff">
                                <path d="M501.613 491.782c12.381 0 23.109-4.088 32.229-12.16L377.793 323.567c-3.744 2.681-7.373 5.288-10.801 7.767-11.678 8.604-21.156 15.318-28.434 20.129-7.277 4.822-16.959 9.737-29.045 14.755-12.094 5.024-23.361 7.528-33.813 7.528h-.612c-10.453 0-21.72-2.503-33.813-7.528-12.093-5.018-21.775-9.933-29.045-14.755-7.277-4.811-16.75-11.524-28.434-20.129-3.256-2.387-6.867-5.006-10.771-7.809L16.946 479.622c9.119 8.072 19.854 12.16 32.234 12.16h452.433zM31.047 225.299C19.37 217.514 9.015 208.598 0 198.555V435.98l137.541-137.541c-27.516-19.21-62.969-43.562-106.494-73.14zM520.059 225.299c-41.865 28.336-77.447 52.73-106.75 73.195l137.486 137.492V198.555c-8.815 9.841-19.059 18.751-30.736 26.744z" />
                                <path d="M501.613 59.013H49.181c-15.784 0-27.919 5.33-36.42 15.979C4.253 85.646.006 98.97.006 114.949c0 12.907 5.636 26.892 16.903 41.959 11.267 15.061 23.256 26.891 35.961 35.496 6.965 4.921 27.969 19.523 63.012 43.801 18.917 13.109 35.368 24.535 49.505 34.395 12.05 8.396 22.442 15.667 31.022 21.701.985.691 2.534 1.799 4.59 3.269 2.215 1.591 5.018 3.61 8.476 6.107 6.659 4.816 12.191 8.709 16.597 11.683 4.4 2.975 9.731 6.298 15.985 9.988 6.249 3.685 12.143 6.456 17.675 8.299 5.533 1.842 10.655 2.766 15.367 2.766h.612c4.711 0 9.834-.924 15.368-2.766 5.531-1.843 11.42-4.608 17.674-8.299 6.248-3.69 11.572-7.02 15.986-9.988 4.406-2.974 9.938-6.866 16.598-11.683 3.451-2.497 6.254-4.517 8.469-6.102 2.057-1.476 3.605-2.577 4.596-3.274 6.684-4.651 17.1-11.892 31.104-21.616 25.482-17.705 63.01-43.764 112.742-78.281 14.957-10.447 27.453-23.054 37.496-37.803 10.025-14.749 15.051-30.22 15.051-46.408 0-13.525-4.873-25.098-14.598-34.737-9.736-9.627-21.265-14.443-34.584-14.443z" />
                            </g>
                        </svg>
                    </Icon>
                </IconWrapper>
            </Social>
            <div>
                <h3>AMONDO IOS</h3>
                <AppStoreButton>
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
                </AppStoreButton>
            </div>
        </FooterMeta>
    </StyledFooter>
);

export default Footer;
