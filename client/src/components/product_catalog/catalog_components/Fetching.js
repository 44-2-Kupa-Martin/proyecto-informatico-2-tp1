export default function Fetching(props) {
    // --Component Body--
    return (
        <div>
            <p>fetching</p>
            {props.tooLong ? <p>This is taking too long</p> : null}
        </div>
    );
}