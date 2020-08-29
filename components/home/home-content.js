import React from "react";
import './home-content.scss'
import { Divider ,message } from 'antd';


export default class HomeContent extends React.Component  {
    constructor(props) {
        super(props)
        this.state = {
            coursesData : [{
                cover:'https://edu-tob.bdimg.com/v1/pc/%E6%96%87%E5%BA%93%E9%A6%96%E9%A1%B5-%E9%99%90%E6%97%B6%E4%BF%83%E9%94%80-1597153756539.png',
                title:'历史其实很简单：趣味细说生猛大明朝,历史其实很简单：趣味细说生猛大明朝,历史其实很简单：趣味细说生猛大明朝',
                price:9.90,
            },{
                cover:'https://edu-tob.bdimg.com/v1/pc/6b7187eba8088bfe1323f619cb74de2c-1596597262098.PNG',
                title:'历史其实很简单：趣味细说生猛大明朝',
                price:9.90,
            },{
                cover:'https://edu-tob.bdimg.com/v1/pc/%E6%96%87%E5%BA%93%E9%A6%96%E9%A1%B5-%E9%99%90%E6%97%B6%E4%BF%83%E9%94%80-1597153756539.png',
                title:'历史其实很简单：趣味细说生猛大明朝,历史其实很简单：趣味细说生猛大明朝',
                price:9.90,
            },{
                cover:'https://edu-tob.bdimg.com/v1/pc/%E6%96%87%E5%BA%93%E9%A6%96%E9%A1%B5-%E9%99%90%E6%97%B6%E4%BF%83%E9%94%80-1597153756539.png',
                title:'历史其实很简单：趣味细说生猛大明朝',
                price:9.90,
            }],
            docData : [{
                cover:'https://edu-tob.bdimg.com/v1/pc/%E6%96%87%E5%BA%93%E9%A6%96%E9%A1%B5-%E9%99%90%E6%97%B6%E4%BF%83%E9%94%80-1597153756539.png',
                title:'历史其实很简单：趣味细说生猛大明朝,历史其实很简单：趣味细说生猛大明朝,历史其实很简单：趣味细说生猛大明朝',
                price:9.90,
            },{
                cover:'https://edu-tob.bdimg.com/v1/pc/6b7187eba8088bfe1323f619cb74de2c-1596597262098.PNG',
                title:'历史其实很简单：趣味细说生猛大明朝',
                price:9.90,
            },{
                cover:'https://edu-tob.bdimg.com/v1/pc/%E6%96%87%E5%BA%93%E9%A6%96%E9%A1%B5-%E9%99%90%E6%97%B6%E4%BF%83%E9%94%80-1597153756539.png',
                title:'历史其实很简单：趣味细说生猛大明朝,历史其实很简单：趣味细说生猛大明朝',
                price:9.90,
            },{
                cover:'https://edu-tob.bdimg.com/v1/pc/%E6%96%87%E5%BA%93%E9%A6%96%E9%A1%B5-%E9%99%90%E6%97%B6%E4%BF%83%E9%94%80-1597153756539.png',
                title:'历史其实很简单：趣味细说生猛大明朝',
                price:9.90,
            },{
                cover:'https://edu-tob.bdimg.com/v1/pc/%E6%96%87%E5%BA%93%E9%A6%96%E9%A1%B5-%E9%99%90%E6%97%B6%E4%BF%83%E9%94%80-1597153756539.png',
                title:'历史其实很简单：趣味细说生猛大明朝,历史其实很简单：趣味细说生猛大明朝',
                price:9.90,
            },{
                cover:'https://edu-tob.bdimg.com/v1/pc/%E6%96%87%E5%BA%93%E9%A6%96%E9%A1%B5-%E9%99%90%E6%97%B6%E4%BF%83%E9%94%80-1597153756539.png',
                title:'历史其实很简单：趣味细说生猛大明朝',
                price:9.90,
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
        console.log(this.props.courses)
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
                <div className="home-content">
                    <div className="home-courses">
                        <div className="home-courses-img">

                        </div>
                        <div className="home-courses-title">
                            推荐课程
                        </div>
                        <div className="home-courses-list">
                            {
                                this.state.coursesData.map(item=>{
                                    return (
                                        <div className="home-courses-item">
                                            <div className="home-courses-item-cover">
                                                <img src={item.cover} alt=""/>
                                            </div>
                                            <div className="home-courses-item-title">{item.title}</div>
                                            <div className="home-courses-item-price">¥ {item.price}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="home-courses">
                        <div className="home-courses-img">

                        </div>
                        <div className="home-courses-title">
                            推荐文章
                        </div>
                        <div className="home-courses-list">
                            {
                                this.state.docData.map(item=>{
                                    return (
                                        <div className="home-courses-item home-courses-item-doc">
                                            <div className="home-courses-item-cover home-courses-item-cover-doc">
                                                <img src={item.cover} alt=""/>
                                            </div>
                                            <div className="home-courses-item-title">{item.title}</div>
                                            <div className="home-courses-item-price">¥ {item.price}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
