import Head from 'next/head'
import Swiper from '../components/swiper/swiper'
import HomeNav from '../components/home/home-nav'
import Link from 'next/link'
import { Button } from 'antd';
import { SearchOutlined} from '@ant-design/icons';

function handleSearch() {

}
export default function Home(props) {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <div className="container-head">
              <Swiper> </Swiper>
              <div className="header-search">
                  <input type="text" onKeyUp={handleSearch}/>
                  <div className="header-search-icon">
                      <Button type="link" icon={<SearchOutlined />} />
                  </div>
                  {/*<SearchOutlined style={{position:'absolute',top:'11px',right:'10px',fontSize:'20px'}}/>*/}
              </div>
          </div>
          <div className="home-nav-box">
              <HomeNav> </HomeNav>
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
        .container-head{
          position: absolute;
          top: 0;
          right: 0;
        }
        .home-nav-box{
          position: absolute;
          top: 0;
          right: 0;
          z-index:1;
        }
        .header-search{
            position:absolute;
            left:50%;
            top:50%;
            width: 500px;
            height:42px;
            margin-top:-21px;
            margin-left:-250px;
        }
        .header-search-icon{
            position:absolute;
            top:3px;
            right:5px;
            font-size:20px;
            :hover{cursor:pointer}
        }
        .header-search input{
            padding:12px 42px 12px 20px;
            box-sizing:border-box;
            width: 100%;
            height:100%;
            font-size:16px;
            line-height:18px;
            box-shadow:0 0 10px 6px rgba(0,7,24,0.1);
            border-radius:6px;
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
