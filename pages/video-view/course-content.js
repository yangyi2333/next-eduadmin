import React from "react";
import './course-content.scss'

export default class VideoView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabIndex:0,
            currentCourseIndex:2,
            categoryList:[{
                name:'HTML基础',
                children:[{
                    name:'HTML标签-div',
                    type:'video',
                    length:'30:00',
                    index:1
                },{
                    name:'HTML标签-img',
                    type:'video',
                    length:'15:10',
                    index:2
                }]
            },{
                name:'JS基础',
                children:[{
                    name:'javascript的历史',
                    type:'video',
                    length:'20:45',
                    index:3
                },{
                    name:'javascript的类型',
                    type:'video',
                    length:'30:00',
                    index:4
                }]
            }],
            commentList:[{
                name:'小张',
                time:'2020-01-01',
                avatar:'',
                content:'这个课程太值了，很棒，推荐'
            },{
                name:'小王',
                time:'2020-01-01',
                avatar:'',
                content:'老师非常好，而且有不会的加微信也细心指导，老师实在讲的太好了，而且有问必答，自己是个行业小白，对未来有很多忧虑，老师也一一答复，让我增强了信心，特别负责人的一个老师，一个好人'
            }]
        }
    }
    componentDidMount(){

    }
    render(){
        return(
            <div className="course-content">
                <div className="course-container">
                    <div className="course-container-main">
                        <div className="course-main-tab">
                            <div className={`course-main-tab-item ${this.state.tabIndex === 0 && 'course-main-tab-select'}`}
                                onClick={()=>{this.setState({tabIndex:0})}}
                            >简介</div>
                            <div className={`course-main-tab-item ${this.state.tabIndex === 1 && 'course-main-tab-select'}`}
                                 onClick={()=>{this.setState({tabIndex:1})}}
                            >目录</div>
                        </div>
                        <div className="course-main-tab-content">
                            { this.state.tabIndex === 0 &&
                                <div className="course-detail">
                                    <img src="https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/doc/pic/item/6a63f6246b600c33fee92a93154c510fd8f9a1dd.jpg" alt=""/>
                                </div>
                            }
                            { this.state.tabIndex === 1 &&
                                <div className="course-category">
                                    <ul>
                                      { this.state.categoryList.map(item=>{
                                          return (
                                              <li key={item.name} className="course-category-item">
                                                  <div className="course-category-chapter">
                                                      <span className="course-category-item-tag course-tag-chapter">章节</span>
                                                      <span className="course-category-chapter-name">{item.name}</span>
                                                  </div>
                                                  {
                                                      item.children.map(section =>{
                                                          return (
                                                              <div className={`course-category-section ${this.state.currentCourseIndex === section.index && 'course-category-active'}`}>
                                                                  <span className="course-category-item-tag course-tag-section">课时</span>
                                                                  <span className="course-category-item-type">视频</span>
                                                                  <span className="course-category-section-name">{section.name}</span>
                                                                  <span className="course-category-section-length">{section.length}</span>
                                                              </div>
                                                          )
                                                      })
                                                  }
                                              </li>
                                          )
                                      }) }
                                    </ul>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="course-container-right">
                        <div className="course-container-right-item">
                            <div className="course-container-headBar">
                                评论
                            </div>
                            <ul className="course-container-item-content">
                                <li></li>
                            </ul>
                            <div className="course-container-footBar">
                                <span>更多></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
