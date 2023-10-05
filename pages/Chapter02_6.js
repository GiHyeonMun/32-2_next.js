import fetch from 'isomorphic-unfetch';

export async function getStaticProps() {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const repo = await res.json()
    return {
        props: { repo },
          revalidate: 60,
    }
}

export default function Chapter02_6({repo}) {
    return (
        <>
            <div>
                {repo.name}
            </div>
            <div>
                {repo.description}
            </div>
        </>
    )
}