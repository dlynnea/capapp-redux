import React, {Component} from 'react'
// import { slide as Menu } from "react-burger-menu"
import SideBarItem from './SideBarItem/SideBarItem';
import {Menu, Divider} from 'semantic-ui-react';
import './_menu.scss';
import {SideBarHeader} from './header/SideBarHeader';
// import {Subscriptions} from './Subscriptions/Subscriptions';
// import {SideBarFooter} from './SideBarFooter/SideBarFooter';

export default class SideBar extends Component {
    
  render() {
    return (
      <Menu borderless vertical stackable fixed='left' className='side-nav'>
        <SideBarItem path='/' label='Home'/>
        <SideBarItem path='/' label='Profile'/>
        <Divider/>
        <SideBarHeader title='Library'/>
        <SideBarItem label='Space'/>
        <SideBarItem label='Tech'/>
        <SideBarItem label='Wellness'/>
        <Divider/>
        {/* <Subscriptions/> */}
        <SideBarHeader title='More from Cluster'/>
        <SideBarItem label='Podcasts'/>
        <Divider/>
        <SideBarItem label='Weather'/>
        <Divider/>
        {/* <SideBarFooter/> */}
      </Menu>
    );
  }
}