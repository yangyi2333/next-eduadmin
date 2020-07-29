import Head from 'next/head'
import Swiper from '../components/swiper/swiper'
import HomeNav from '../components/home/home-nav'
import Link from 'next/link'
import { Button } from 'antd';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Swiper> </Swiper>
      <main>
          <div className="home-nav-box">
              <HomeNav> </HomeNav>
          </div>
          <div className="header-wrapper">
              <div className="header-banner"></div>
              <div className="header-search"></div>
          </div>
      </main>

      {/*<footer>*/}
          {/*<img src="/vercel.svg" alt="Vercel Logo" className="logo" />*/}
      {/*</footer>*/}

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          width: 100%;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .home-nav-box{
          position: absolute;
          top: 0;
          right: 0;
          z-index:1;
        }

        .header-wrapper{
          width: 100%;
          height: 320px;
          position: absolute;
          top: 0;
          left: 0;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
        ul,li{
            padding: 0;
            margin: 0;
            list-style: none;
        }
      `}</style>
    </div>
  )
}
