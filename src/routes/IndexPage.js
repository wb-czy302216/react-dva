import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Link } from "dva/router";
import { Menu, Icon } from 'antd';


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class App extends React.Component {
  state = {
    current: 'mail',
  }
  handleClick = (e) => {
    //console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <div>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="mail">
            <Icon type="mail"><Link to="search">search</Link></Icon>
          </Menu.Item>
          <Menu.Item key="app">
            <Icon type="appstore"><Link to="commitTime">commitTime</Link></Icon>
          </Menu.Item>
        </Menu>
        {this.props.children}
      </div>
    );
  }
}
export default connect()(App);