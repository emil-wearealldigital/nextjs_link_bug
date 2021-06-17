export default function Page(props) {
    return <div>
        <h1>It should take 3 seconds only when we REFRESH this page</h1>
        <h2>Not when we navigate on the client though...</h2>
    </div>;
}

export async function getServerSideProps(context) {
    await new Promise(res => {
        setTimeout(res, 3000)
    });

    return {
        props: {
            data: []
        },
    }
}