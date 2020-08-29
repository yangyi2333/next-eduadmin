import React from "react";
import Head from 'next/head'
import Swiper from '../components/swiper/swiper'
import HomeNav from '../components/home/home-nav'
import HomeContainer from '../components/home/home-content'
import {authRequest, request} from "../utils/axios";
import Link from 'next/link'
import { Button } from 'antd';
import { SearchOutlined} from '@ant-design/icons';
import Login from '../components/login/login'
import './index.scss'

function handleSearch() {

}
export default class Home extends React.Component{
    static async getInitialProps({ req }) {
        let data = '';
        request('get',`courses`,{page:0,size:10}).then(res=>{
            if(res){
                console.log(res)
                data = res.data.content;
            }
        });
        // const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
        return { data }
    }

    constructor(props){
        super(props);
        this.state = {
            loginFlag:false,
            swiperData:[],
            courseData:[],
        }
    }
    componentDidMount(){
        this.getSwipers();
        request('get',`courses`,{page:0,size:4}).then(res=>{
            if(res.data && res.data.content){
                this.setState({courseData:res.data.content})
            }
        });
    };
    getSwipers(){
        request('get',`swipers`).then(res=>{
            if(res.data && res.data.content){
                this.setState({swiperData:res.data.content})
            }
        });
    };
    handleLogin = ()=>{
        this.setState({loginFlag:true})
    };
    render() {
        console.log(this.props)
        return (
            <div className="container">
                <Head>
                    <title>Create Next App</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <main>
                    <Login value={this.state.loginFlag} onClose={()=>{this.setState({loginFlag:false})}}> </Login>
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
                    <HomeContainer courses={this.state.courseData}></HomeContainer>
                </main>

                {/*<footer>*/}
                {/*<img src="/vercel.svg" alt="Vercel Logo" className="logo" />*/}
                {/*</footer>*/}
            </div>
        )
    }

}
