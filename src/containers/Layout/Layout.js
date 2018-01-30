import React, { Fragment, Component } from 'react';
import classes from './Layout.css';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component{

  state = {
    showSideDrawer: false
  }

  sideDrawerCloseHandler = () => {
    this.setState({showSideDrawer: false});
  }

  sideDrawerOpenHandler = () => {
    this.setState({showSideDrawer: true});
  }

  render(){
    return(
      <Fragment>
        <div>
          <Toolbar drawerToggleClicked={this.sideDrawerOpenHandler} />
          <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerCloseHandler}/>
          <main className={classes.Content}>
            {this.props.children}
          </main>
        </div>

      </Fragment>
    );
  }
};

export default Layout;
