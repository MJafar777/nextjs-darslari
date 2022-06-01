import '/styles/globals.css'
// import Script from 'next/script';
// import { NextSeo } from 'next-seo';
import { Provider } from "next-auth/client"

function MyApp({ Component, pageProps }) {
  return (
    <>
//       <Script 
//         strategy='lazyOnload'
//         src={`https://www.googletagmanager.com/gtag/js?id=G-P5D2FYMTJD`}
//       />
//       <Script strategy='lazyOnload'>
//         {`
//           window.dataLayer = window.dataLayer || [];
//           function gtag(){dataLayer.push(arguments);}
//           gtag('js', new Date());
//           gtag('config', 'G-P5D2FYMTJD', {
//             page_path: window.location.pathname,
//           });
//         `}
//       </Script>
    
//       <NextSeo
//         title='This is Next JS tutorial'
//         titleTemplate='Javohir Hakimov'
//         description='This is just test!!!'
//       />
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp;
