import React from 'react';
import { connect } from 'react-redux';

const Alert = ({ alertState }) => 
    null !== alertState 
    && alertState.length > 0 
    && alertState.map(alert => (
        <div 
            key={alert.id} 
            className={`alert alert-${alert.alertType}`
        }>
            { alert.msg }
        </div>
    ));

const mapStateToProps = state => ({
    alertState: state.alert
});

export default connect(
    mapStateToProps
)(Alert);
