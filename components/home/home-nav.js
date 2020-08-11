import React from "react";
import './home-nav.scss'
import {authRequest, apiRequest} from "../../utils/request";

export default class HomeNav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loginFlag:false,
        }
    }
    handleLogin = ()=>{
        apiRequest('get',`swipers`).then(res=>{
            console.log('res',res)
            if(res){
                console.log(res)
            }
        });
        // this.props.onLogin()
    }
    render(){
        return (
            <div>
                <ul className="header-nav">
                    <li className="header-nav-item">百度</li>
                    <li className="header-nav-item">谷歌</li>
                    <li className="header-nav-item">腾讯</li>
                    <li className="header-nav-item">淘宝</li>
                    <li className="header-nav-item">爱奇艺</li>
                    <li className="header-nav-item" onClick={this.handleLogin}>登录</li>
                </ul>
            </div>
        )
    }
}
