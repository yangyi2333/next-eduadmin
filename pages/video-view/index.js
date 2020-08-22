import React from "react";
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import './video-view.scss'

export default class VideoView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url:"http://file.nextlord.com/77f54d33-503e-4b6d-81fa-5819274174af.mp4",
            name:'5总体概述.mp4',
            courseList:[{
                name:'孩子拖拉磨蹭，爱拖延的3个主要原因！'
            },{
                name:'孩子拖拉磨蹭，爱拖延的3个主要原因！'
            },{
                name:'孩子拖拉磨蹭，爱拖延的3个主要原因！'
            }],
            currentIndex:1,
            description:'孩子老是拖拉磨蹭?孩子学习缺乏计划性?孩子做作业缺乏专注力?孩子不爱坚持？ 这是每个父母头痛的问题，又不知道如何解决? 儿童时间管理专家、畅销书《不急不催，轻松让孩子学会时间管理》作者何小英老师，让孩子告别拖拉磨蹭，提升专注力！',

        }
    }

    componentDidMount() {
        let player = videojs('video-container',{
            bigPlayButton: true,
            textTrackDisplay: false,
            posterImage: false,
            errorDisplay: false
        }, function onPlayerReady() {
            console.log('onPlayerReady', this)
        });
        player.src(this.state.url);
        player.load();
        // player.play();
        this.setState({player});
    };
    // destroy player on unmount
    componentWillUnmount() {
        if (this.state.player) {
            this.state.player.dispose()
        }
    }
    handleCourseItem(index){
        if(index !== this.state.currentIndex){

        }
    }
    render(){
        return (
            <div className="video-page">
                <div className="video-page-container">
                    <div className="video-container">
                        <div className="video-content">
                            <div className="video-content-title">
                                <span>{this.state.name}</span>
                            </div>
                            <div className="video-content-video">
                                <video id="video-container" className="video-js vjs-default-skin vjs-big-play-centered"
                                       style={{
                                           width: 1000,
                                           height: 560,
                                           float:'left',
                                       }}
                                       controls preload="auto" >
                                    <source src={this.state.url} type="video/mp4" />
                                </video>
                                <div className="video-content-nav">
                                    <div className="video-content-nav-title">
                                        <span>课程列表</span>
                                        <span className="video-content-nav-num">4个</span>
                                    </div>
                                    <ul className="video-content-list">
                                        {
                                            this.state.courseList.map((item,index)=>{
                                                return (
                                                    <li key={item.name}
                                                        className={`video-content-list-item ${index === this.state.currentIndex ? 'video-content-list-itemActive' : ''}`}
                                                        onClick={this.handleCourseItem.bind(this,index)}
                                                    >{item.name}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="video-content-detail">
                                <div className="video-content-courseName">
                                    <span>天途教管平台特色功能演示操作</span>
                                    <span className="video-content-uploadTime">2020-08-22</span>
                                </div>
                                <div className="video-content-detail-description">
                                    {this.state.description}
                                </div>
                                <div className="video-content-detail-price">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
