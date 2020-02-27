import React, {Component} from 'react';
import {Menu} from "semantic-ui-react";
import './item.scss';
import {Link, withRouter} from 'react-router-dom';

export class SideBarItem extends Component {

  shouldBeHighlighted() {
    const {pathname} = this.props.location;
    if (this.props.path === '/') {
      return pathname === this.props.path;
    }
    return pathname.includes(this.props.path);
  }

  render() {
    const highlight = this.shouldBeHighlighted() ? 'highlight-item' : null;
    return (
      <Link to={{pathname: this.props.path}}>
        <Menu.Item className={['sidebar-item', highlight].join(' ')}>
          <div className='sidebar-item-alignment-container'>
            {/* <span><Icon size='large' name={this.props.icon}/> </span> */}
            <span>{this.props.label}</span>
          </div>
        </Menu.Item>
      </Link>
    );
  }
}

export default withRouter(SideBarItem);