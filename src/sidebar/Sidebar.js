import React, {Component} from 'react'
import SideBarItem from './SideBarItem/SideBarItem';
import {Menu, Divider} from 'semantic-ui-react';
import './_menu.scss';
import {SideBarHeader} from './header/SideBarHeader';
// import {SideBarFooter} from './SideBarFooter/SideBarFooter';

export default class SideBar extends Component {
    
  render() {
    return (
      <Menu borderless vertical stackable fixed='left' className='side-nav'>
        <SideBarItem path='/' label='home'/>
        <SideBarItem path='/profile' label='profile'/>
        <Divider/>
        <SideBarHeader title='Feeds'icon='fire'/>
        <SideBarItem path='' label='space'/>
        <SideBarItem path='' label='tech'/>
        <SideBarItem path='' label='wellness'/>
        <SideBarItem path='' label='another'/>
        <SideBarItem path='' label='something'/>
        <Divider/>
        <SideBarHeader title='Other'/>
        <SideBarItem label='podcasts'/>
        <Divider/>
        <SideBarItem label='weather'/>
        <Divider/>
        {/* <SideBarFooter/> */}
      </Menu>
    );
  }
}