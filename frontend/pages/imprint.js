import Detail from "../components/Detail";

const DetailPage = props => (
    <div>
        <Detail id={props.query.id} />
    </div>
);

export default DetailPage;
