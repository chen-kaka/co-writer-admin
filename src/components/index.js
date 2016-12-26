/**
 * Created by kakachan on 16/12/26.
 */
require('normalize.css/normalize.css');
require('styles/app.scss');
import './layout.css';
import React from 'react';
import { routerRedux } from 'dva/router';
import { connect } from 'dva';


class AppComponent extends React.Component {

    componentWillMount(){
        // console.log(this);
    }

    render() {

        return (
            <div className="layout-box">
                {React.cloneElement(this.props.children, { user: this.props.roots })}
            </div>
        );
    }
}
function mapStateToProps({ roots }) {
    return { roots };
}

export default connect(mapStateToProps)(AppComponent);