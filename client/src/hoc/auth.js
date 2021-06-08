import React, {Component} from 'react';
import {auth} from '../store/actions/user_actions';
import {connect} from 'react-redux';
import LinearProgress from '@material-ui/core/LinearProgress';


export default function(ComposedClass, reload) {
    class AuthenticationCheck extends Component{

        state={
            loading:true
        }

        componentDidMount(){
            this.props.dispatch(auth()).then(response =>{
                let user = this.props.user.auth;

                this.setState({loading:false})
                if(!user){
                    if(reload){
                        this.props.history.push('/');
                    }
                } else {
                    if(reload === false){
                        this.props.history.push('/home')
                    }
                    
                }

            })
        }

        render(){
            if(this.state.loading){
                return <LinearProgress />
                // <div className= "loader">Loading...</div>
            }else{
                return <ComposedClass {...this.props} user={this.props.user}/>
            }

        }
    
    }

    function mapStateToProps(state){
        return{
            user: state.user
        }
    }
    return connect(mapStateToProps)(AuthenticationCheck)

}