import { connect } from 'react-redux';

const IfNotAuth = ({ auth, children }) => {
    if(auth){
        return false
    }else{
        return children
    }
}

const mapStateToProps = store => ({
	auth: store.auth
});

export default connect(mapStateToProps)(IfNotAuth);