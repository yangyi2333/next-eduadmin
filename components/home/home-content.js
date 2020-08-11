import React from "react";
import './home-content.scss'
import { Divider ,message } from 'antd';
import {request} from "../../utils/request";


export default class HomeContent extends React.Component  {
    constructor(props) {
        super(props)
        this.state = {
            coursesData : [{
                cover:'',
                title:'',
                price:'',
            }],
            classifyList: [{
                icon:'/images/classify-course.png',
                title:'课程',
                tag:[{label:'Javascript'},{label:'Java'},{label:'前端入门'},{label:'Python'},{label:'从0学会后端开发'},{label:'UI设计秘籍'},{label:'前端项目实战'}]
            },{
                icon:'/images/classify-code.png',
                title:'代码',
                tag:[{label:'简单的CSS3特效'},{label:'用js实现爬虫'},{label:'android控件'},{label:'Java后台demo'},{label:'自定义弹窗封装'},{label:'vue组件化'},{label:'前端项目实战'}]
            },{
                icon:'/images/classify-topic.png',
                title:'话题',
                tag:[{label:'今天中午吃什么'},{label:'Python'},{label:'前端面试题'},{label:'Java面试题'},{label:'自定义弹窗封装'},{label:'vue组件化'},{label:'前端项目实战'}]
            },{
                icon:'/images/classify-q&a.png',
                title:'问答',
                tag:[{label:'今天中午吃什么'},{label:'Python'},{label:'CSS'},{label:'HTML'},{label:'Android'},{label:'Java'},{label:'生活'}]
            }]
        }
    }
    render(){
        return (
            <div className="home-container">
                <div className="home-classify">
                    {
                        this.state.classifyList.map((item,index)=>{
                            return (
                                <div key={item.icon} className="classify-item">
                                    <div className="classify-item-icon">
                                        <img src={item.icon} alt=""/>
                                    </div>
                                    <div className="classify-item-title">{item.title}</div>
                                    <div className="classify-item-tag">
                                        {
                                            item.tag.map((tagItem,index)=>{
                                                return <span key={index} className="classify-item-tag-item">{tagItem.label}</span>
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="home-courses">
                    <div className="home-courses-img">

                    </div>
                    <div className="home-courses-title">
                        推荐课程
                    </div>
                    <div className="home-courses-list">
                        {/*{*/}
                            {/*this.state.coursesData.map(item=>{*/}

                            {/*})*/}
                        {/*}*/}
                    </div>
                </div>
            </div>
        )
    }
}
