# rc-antd-tags 文档
### 描述：嗯~~~人懒，不想写文档，看备注吧

```ts
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
```

----

## example
```js
import React from 'react';
import ReactDOM from 'react-dom';
import Tags from 'rc-antd-tags';
class Demo extends React.Component<any,any>{
    constructor(props) {
        super(props);
    }
    render(){
        return <Tags
            title='已选条件'
            dataSource={[
                {
                    name: 'name',
                    value: '张学友'
                },
                {
                    name: 'address',
                    value: '杭州'
                },
                {
                    name: 'type',
                    value: '演唱会'
                },
            ]}
            closable={true}
            onClose={(item, number) => {
                console.log(item, number)
            }}
        ></Tags>
    }
}


ReactDOM.render(<Demo/>, document.getElementById('root'));

```