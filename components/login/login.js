import './login.scss'
import { Divider } from 'antd';
// import userIcon from '../../public/images/login-user.png'

export default function Login({}) {
    let loginType = 1; //1:密码登录，2.验证码登录
    let loginData = {
        username:'',
        password:'',
    };
    return(
        <div className="login-bg">
            <div className="login-box">
                <Divider>使用手机号登录</Divider>
                {   loginType === 1 &&
                    <div className="login-content">
                        <div className="login-content-box">
                            <div className="input-box">
                                <div className="input-box-icon">
                                    <img src={'/images/login-user.png'} alt="" />
                                </div>
                                <input type="number" placeholder="请输入手机号" />
                            </div>
                            {/*<p className="login-content-error" v-show="item.errorMsg">{{item.errorMsg}}</p>*/}
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
