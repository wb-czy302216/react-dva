import React from 'react';
import { Select } from 'antd';
import style from './Search.css';

const Option = Select.Option;

class IndexPage extends React.Component {
    render() {
        return (
          <div className={style.normal}>
            <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.props.handleChange}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="Lili">Lili</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
            <Select defaultValue="lucy" style={{ width: 120 }} allowClear disabled>
              <Option value="lucy">Lucy</Option>
            </Select>
          </div>
        );
    }
}
export default IndexPage;
