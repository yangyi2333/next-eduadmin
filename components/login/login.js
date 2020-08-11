import React from "react";
import './login.scss'
import { Divider ,message } from 'antd';
import {authRequest, request} from "../../utils/request";

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loginType:1,//1:密码登录，2.验证码登录
            loginData:{
                username:'',
                password:'',
                smsCode:'',
            },
            validateData:{
                username:'',
                password:'',
            },
            codeEventTime:60,//倒计时起始时间
            codeEvent: {
                sendSuccess: false,//验证码是否发送成功
                setInter: "",//验证码倒计时
            },
        }
    }
    handleLoginIn = ()=>{
        let validateData = {};
        this.handleClearError ((data)=>{
            validateData = data;
        });
        if(!this.state.loginData.username) {
            validateData['username'] = "请输入手机号";
            this.setState({validateData});
            return;
        }
        if(this.state.loginType === 1){//手机号密码登录
            if(!this.state.loginData.password) {
                validateData['password'] = "请输入密码";
                this.setState({validateData});
                return;
            }
            let params = {
                username:this.state.loginData.username,
                password:this.state.loginData.password,
                clientId:'wechat:1234'
            };
            authRequest('post',`login`,params).then(res=>{
                if(res){
                    message.success('登录成功');
                    localStorage.setItem('eduUserInfo',JSON.stringify(res));
                    history.go(0)
                }
            });
        }else if(this.state.loginType === 2){//手机号验证码登录
            if(!this.state.loginData.smsCode) {
                validateData['password'] = "请输入验证码";
                this.setState({validateData});
                return;
            }
            let params = {
                mobile:this.state.loginData.username,
                smsCode:this.state.loginData.smsCode,
                clientId:'wechat:1234'
            };
            authRequest('post',`loginWithSmsCode`,params).then(res=>{
                if(res){
                    message.success('登录成功');
                    localStorage.setItem('eduUserInfo',JSON.stringify(res));
                    history.go(0)
                }
            });
        }
    };
    handleClearError (callback) {//清除错误信息
        let {validateData} = this.state;
        validateData.username = "";
        validateData.password = "";
        callback(validateData)
        this.setState({validateData});
    };
    handleGetSmsCode = ()=>{
        let {validateData,codeEvent} = this.state;
        if(!this.state.codeEvent.sendSuccess) {
            validateData['username'] = "";
            if(!this.state.loginData['username']) {
                validateData['username'] = "请输入手机号";
                this.setState({validateData})
                return;
            }
            authRequest('get',`smsCode`,{mobile:this.state.loginData['username']}).then(res=>{
                codeEvent.sendSuccess = true;
                codeEvent.time = 60;
                this.setState({codeEventTime:60},()=>{
                    codeEvent.setInter = setInterval(() => {
                        if(this.state.codeEventTime > 0) {
                            this.setState({codeEventTime:this.state.codeEventTime-1})
                        }else {
                            codeEvent.sendSuccess = false;
                        }
                    },1000);
                    this.setState({codeEvent})
                })
            });
        }
    };
    handleClickLoginType = ()=>{
        if(this.state.loginType === 1){
            this.setState({loginType:2})
        }else if(this.state.loginType === 2){
            this.setState({loginType:1})
        }
    };
    handlePassword = (data)=>{
        let {loginData} = this.state;
        loginData.password = data.target.value;
        this.setState({loginData})
    };
    handleUsername = (data)=>{
        let {loginData} = this.state;
        loginData.username = data.target.value;
        this.setState({loginData})
    };
    handleSmsCode = (data)=>{
        let {loginData} = this.state;
        loginData.smsCode = data.target.value;
        this.setState({loginData})
    };
    render(){
        return(
            <div id="login" className="login-bg" style={{display:this.props.value ? 'block' :'none'}}>
                <div className="login-box">
                    <Divider>使用手机号登录</Divider>
                    <div className="login-content">
                        <div className="input-box">
                            <div className="input-box-icon">
                                <img src={'/images/login-user.png'} alt="" />
                            </div>
                            <input type="number" placeholder="请输入手机号" value={this.state.loginData.username} onChange={this.handleUsername} />
                            {this.state.validateData.username && <p className="login-content-error">{this.state.validateData.username}</p>}
                        </div>
                        { this.state.loginType === 1 &&
                            <div className="input-box">
                                <div className="input-box-icon">
                                    <img src={'/images/login-password.png'} alt="" />
                                </div>
                                <input type="password" value={this.state.loginData.password} onChange={this.handlePassword} placeholder="请输入密码" />
                                {this.state.validateData.password && <p className="login-content-error">{this.state.validateData.password}</p>}
                            </div>
                        }
                        { this.state.loginType === 2 &&
                            <div className="input-box">
                                <div className="input-box-icon">
                                    <img src={'/images/login-password.png'} alt=""/>
                                </div>
                                <input type="number" value={this.state.loginData.smsCode} placeholder="请输入验证码" class="input-left" onChange={this.handleSmsCode}/>
                                {this.state.validateData.password && <p className="login-content-error">{this.state.validateData.password}</p>}
                                <div className="input-btn" onClick={this.handleGetSmsCode}>{this.state.codeEvent['sendSuccess'] ? `${this.state.codeEventTime}s` : '获取验证码'}</div>
                            </div>
                        }
                        <div className="login-type-change" onClick={this.handleClickLoginType}>{ this.state.loginType === 1 ? '验证码登录' : '密码登录'}</div>
                        <button className="login-button" onClick={this.handleLoginIn}>登录</button>
                    </div>
                </div>
            </div>
        )
    }
}
