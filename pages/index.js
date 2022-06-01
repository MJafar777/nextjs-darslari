// import Head from 'next/head';

// export default function Home() {
//   return(
//     <>
//       {/* <Head>
//           <title>SEO Demo with NextJS</title>
//           <meta
//             name="description"
//             content="This is an application to demo the seo features of NextJS"
//           />
//           <meta name="og:title" content="SEO Demo with NextJS" />
//           <link rel="icon" href="/favicon.ico" />
//       </Head> */}
//       <h1>Hello World</h1>
//     </>
//   )
// }



import { getSession, signIn, signOut } from "next-auth/client";

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};

export default function Home({ session }) {
  return (
    <div>
      {session ? (
        <button onClick={() => signOut()}>Akkauntdan chiqish</button> //2 + akkaunt info
      ) : (
        <button onClick={() => signIn()}>Akkauntga kirish</button> //1
      )}

      {session && (
        <>
          <h1>Kirilgan: {session.user.email}</h1>
          <h3>Nom: {session.user.name}</h3>
          <img src={session.user.image} alt={session.user.name} />
        </>
      )}
    </div>
  );
}
