
import { Carousel } from 'antd';
import './swiper.scss'

export default function swiper({value}){
    console.log('data',value)
    return(
        <div className="home-swiper">
            <Carousel autoplay>
                <div className="home-swiper-slide">
                    <img src="http://file.nextlord.com/c76fe379-c1d1-43c8-a530-95fe6a5c64d7.jpg" alt=""/>
                </div>
                <div className="home-swiper-slide">
                    <img src="http://file.nextlord.com/bdf66764-d59e-4a17-bb69-d30117add084.jpg" alt=""/>
                </div>
            </Carousel>
        </div>
    )
}
