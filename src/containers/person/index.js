import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Addperson } from '../../redux/action/person'

class Person extends Component {
    submit = () => {
        const name = this.Nodename.value
        const age = this.Nodeage.value * 1
        const personObj = { id: "001", name, age }
        this.props.Addperson(personObj)
        this.Nodename.value = ""
        this.Nodeage.value = ''
    }
    render() {
        console.log("我是person",this.props)
        return (
            <div>
                <h2>我是person组件</h2>
                <h4>上面count组件和为{this.props.count}</h4>
                <input ref={c => this.Nodename = c} placeholder='name' />
                <input ref={c => this.Nodeage = c} placeholder='age' />
                <button onClick={this.submit}>提交</button>
                <ul>
                    {
                        this.props.person.personList.map((item)=>{
                            return (<li key={item.id}>姓名{item.name}年龄是{item.age}</li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default connect(
    state => ({
        person: state,
        count:state.count
    }), {
    Addperson
}
)(Person)
