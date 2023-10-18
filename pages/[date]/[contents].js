export async function getServerSideProps({ params }) {
    const { contents } = params;
    return {
        props: {
            contents,
        },
    };
}

function Greet(props) {
    return (
        <h1> Hello, {props.contents}! </h1>
    );
}

export default Greet;