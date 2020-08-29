
import { Carousel } from 'antd';
import './swiper.scss'

export default function swiper({value}){
    return(
        <div className="home-swiper">
            <Carousel autoplay>
                {
                    value.map(item => {
                        return (
                            <div className="home-swiper-slide">
                                <img src={item.cover} alt=""/>
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}
