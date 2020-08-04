import './home-nav.scss'
import Login from '../login/login'

export default function () {
    return (
        <div>
            <Login> </Login>
            <ul className="header-nav">
                <li className="header-nav-item">百度</li>
                <li className="header-nav-item">谷歌</li>
                <li className="header-nav-item">腾讯</li>
                <li className="header-nav-item">淘宝</li>
                <li className="header-nav-item">爱奇艺</li>
                <li className="header-nav-item">登录</li>
            </ul>
        </div>
    )
}
