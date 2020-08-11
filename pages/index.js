import React from "react";
import Head from 'next/head'
import Swiper from '../components/swiper/swiper'
import HomeNav from '../components/home/home-nav'
import HomeContainer from '../components/home/home-content'
import {request} from "../utils/request";
import Link from 'next/link'
import { Button } from 'antd';
import { SearchOutlined} from '@ant-design/icons';
import Login from '../components/login/login'
import './index.scss'

function handleSearch() {

}
export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loginFlag:false,
            swiperData:[]
        }
    }
    componentDidMount(){
    };
    handleLogin = ()=>{
        this.setState({loginFlag:true})
    };
    render() {
        return (
            <div className="container">
                <Head>
                    <title>Create Next App</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <main>
                    <Login value={this.state.loginFlag}> </Login>
                    <div className="container-head">
                        <Swiper value={this.state.swiperData}> </Swiper>
                        <div className="header-search">
                            <input type="text" onKeyUp={handleSearch} placeholder="输入关键词搜索内容"/>
                            <div className="header-search-icon">
                                <Button type="link" icon={<SearchOutlined />} />
                            </div>
                            {/*<SearchOutlined style={{position:'absolute',top:'11px',right:'10px',fontSize:'20px'}}/>*/}
                        </div>
                    </div>
                    <div className="home-nav-box">
                        <HomeNav onLogin={this.handleLogin}> </HomeNav>
                    </div>
                    <HomeContainer></HomeContainer>
                </main>

                {/*<footer>*/}
                {/*<img src="/vercel.svg" alt="Vercel Logo" className="logo" />*/}
                {/*</footer>*/}
            </div>
        )
    }

}
