export async function getServerSideProps() {
    const userRequest = await fetch('https://api.github.com/repos/vercel/next.js');
    const userData = await userRequest.json();

    return {
        props: {
            user: userData,
        },
    };
}

function Chapter2_2(props) {
    return <div>Welcome, {props.user.name}!</div>;
}

export default Chapter2_2;