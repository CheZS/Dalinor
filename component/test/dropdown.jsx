import React from 'react';
import { Menu, Dropdown, Button, Icon, message } from 'antd';

function handleButtonClick(e) {
  message.info('Click on left button.');
  console.log('click left button', e);
}

function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd menu item</Menu.Item>
    <Menu.Item key="3">3d menu item</Menu.Item>
  </Menu>
);

class DropdownTest extends React.Component {
  render() {
    return (
      <div>
        <Dropdown.Button onClick={handleButtonClick} overlay={menu} type="ghost">
          Dropdown
        </Dropdown.Button>
        <Dropdown.Button
          onClick={handleButtonClick} overlay={menu}
          type="ghost" disabled
          style={{ marginLeft: 8 }}
        >
          Dropdown
        </Dropdown.Button>
        <Dropdown overlay={menu}>
          <Button type="ghost" style={{ marginLeft: 8 }}>
            Button <Icon type="down" />
          </Button>
        </Dropdown>
      </div>
    );
  }
}

export default DropdownTest;
