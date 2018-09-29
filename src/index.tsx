import React from 'react';
import { Row, Col, Tag } from 'antd';

interface TagsDataSourceProps{
    name: string; //用于唯一标识
    value: string | JSX.Element; //标签显示内容
    color?: string; //标签颜色 若为空则使用TagsProps color
    closable?: boolean; //标签是否可关闭 若不设置则使用TagsProps closable
    className?: string;
    style?: React.CSSProperties;
    [propName: string]: any;  //其它属性
}

interface TagsProps{
    title: string | JSX.Element; // tags 标题
    dataSource: TagsDataSourceProps[];  //tag 数组
    closable: boolean;  //tags 是否可以关闭
    onClose?: (item:TagsDataSourceProps, number: any) => void; //标签关闭时触发
    reset?: boolean | JSX.Element;
    onReset?: Function;
    color?: string;     //标签颜色 http://ant-design.gitee.io/components/tag-cn/
    className?: string;
    style?: React.CSSProperties;
}

export default class Tags extends React.Component<TagsProps,any>{
    constructor(props:TagsProps){
        super(props);
    }
    render(){
        const color = this.props.color || '';
        const style = this.props.style || {};
        const { title, className, reset, onReset } = this.props;
        // console.log(Array.from(this.props.dataSource));
        return <Row className={className || ''} style={{margin: '10px 0', ...style}}>
            {
                title && <Col style={{textAlign: 'right'}} span={2}> {title}：</Col>
            }
            <Col span={title ? 22 : 24}>
                {Array.from(this.props.dataSource).map((item:any, key) => <Tag 
                    className={className || ''}
                    style={item.style !== undefined ? {marginBottom: 5, ...item.style} : {marginBottom: 5}}
                    key={item.name} 
                    color={item.color || color} 
                    closable={item.closable === undefined ? this.props.closable : item.closable} 
                    onClose={() => {this.props.onClose && this.props.onClose(item, key)}}
                >
                    {item.value}
                </Tag>)}
                {
                    reset !== undefined && reset !== false && reset !== true && reset
                }
                {
                    reset !== undefined && reset === true && <Tag
                    >
                        <div onClick={() => {
                            onReset && onReset()
                        }}>重置</div>
                    </Tag>
                }
            </Col>
        </Row>
    }
}