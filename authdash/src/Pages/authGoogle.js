import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from "../components/fire";
import { Component } from 'react';

class AuthGoogle extends Component {
    state = { isSignedIn: false }
    
    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        ],
        callbacks: {
            signInSuccess: () => false
        }
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ isSignedIn: !!user })
            console.log("user", user)
        })
    }
    render() {
        return (
            <div className="App">
                <StyledFirebaseAuth
                    uiConfig={this.uiConfig}
                    firebaseAuth={firebase.auth()}
                />
            </div>
        )
    }
}

export default AuthGoogle;