import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Select, Button, Layout } from 'antd';
import '../../css/count.css'
import { addOne, delnum, add, oddadd } from '../../redux/action/count'
// ui组件
class Count extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selValue: 1
    }
  }
  addOne = () => {
    this.props.addOne(1)
  }
  handleChange = (value) => {
    this.setState({
      selValue: value * 1
    })
  };

  delnum = () => {
    const { selValue } = this.state
    this.props.delnum(selValue)
  }
  add = () => {
    const { selValue } = this.state
    this.props.add(selValue)
  }
  oddadd = () => {
    const { selValue } = this.state
    const {count}=this.props
    return count % 2 ===0? " " :this.props.oddadd(selValue)

  }
  render() {
    const { Option } = Select;
    const { Header, Footer, Sider, Content } = Layout;
    console.log("count",this.props.person)
    return (
      <Fragment>
        <Layout>
          <Sider>Sider</Sider>
          <Layout>
            <Header>
              <h1 style={{float:"left"}}>和为{this.props.count}</h1>
              &nbsp;
              <h3 style={{float:"right"}}>person组件有{this.props.person.length}人</h3>
            </Header>
            <Content>
              <Select defaultValue="1" style={{ width: 120 }} onChange={this.handleChange}>
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
              </Select>
              <Button onClick={this.addOne}>点我+1</Button>
              <Button onClick={this.add}>+</Button>
              <Button onClick={this.delnum}>-</Button>
              <Button onClick={this.asyn}>异步＋</Button>
              <Button onClick={this.oddadd}>奇数加</Button></Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </Fragment>
    )
  }
}
// // 容器组件

export default connect(
  state => ({
    count: state.count , //count赋值取到位
    person:state.personList
  }),
  {
    addOne,
    delnum,
    add, 
    oddadd
  }//数据处理事件   action
)(Count)