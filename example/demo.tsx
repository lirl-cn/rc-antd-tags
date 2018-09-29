import React from 'react';
import ReactDOM from 'react-dom';
import Tags from '../src';


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