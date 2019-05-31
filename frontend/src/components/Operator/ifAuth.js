import { connect } from 'react-redux';

const IfAuth = ({ auth, roles, children }) => {
    if(auth && roles && roles.indexOf(auth.user.userType) >= 0){
        return children
    }else{
        return false
    }
}

const mapStateToProps = store => ({
	auth: store.auth
});

export default connect(mapStateToProps)(IfAuth);