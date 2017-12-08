import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    AsyncStorage,
    InputGroup,
    Image,
} from 'react-native';
import { StackNavigator } from 'react-navigation'
import { Item, Input, Icon, Spinner } from 'native-base'
import axios from 'axios'
import { SIGNIN_URL, SIGNUP_URL, STORAGE_KEY } from '../../api'
import { _onValueChange } from '../auth';


export default class Login extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: '',
            user_id: '',
            loading: false,
        }
    }

    // go to protected route with jwt
    async _getProtectedRoute () {
        console.log('protectedroute()')
        const KEY = this.state.user_id;
        const TOKEN = await AsyncStorage.getItem(STORAGE_KEY);
        const HEADER = {
            'Content-Type': 'application/json',
            'Authorization': TOKEN
        }
        //send get request with jwt in header
        axios.get('http://localhost:3001/v1/protected', { headers: HEADER })
            .then(response => {
                console.log('SIGNED IN')
            })
            .catch((err) => {
                console.log(err)
                this.setState({ error: err })
            })
    }

    // handle login button press
    onLoginPress () {
        // grab email and password from state
        const { email, password } = this.state;
        
        // clear out error message, display spinner
        this.setState({ email: '', password: '', error: '', loading: true });

        // if email and password is valid
        if ((email && password) !== '') {
            axios.post(SIGNIN_URL, {
                email: email,
                password: password
            })
            .then (response => {
                const { user_id, token } = response.data;

                //store token in async storage
                _onValueChange(STORAGE_KEY, token);

                // remove spinner
                this.setState({
                    email: '',
                    password: '',
                    loading: false
                });
                this._getProtectedRoute().then(() => this.props.navigation.navigate('SignedIn'))
            })
            .catch(err => {
                this.setState({ error: 'Sign in Failed, Please Try Again', loading: false })
            })
        } else {
            this.setState({ error: 'Must provide an email and password', loading: false })
        }
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner color='grey'/>;
        }

        return (
            <TouchableOpacity style={styles.btn} onPress={this.onLoginPress.bind(this)}>
                <Text> Log in </Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
                <View style={styles.container}>
                    <Image 
                        style={{
                            alignSelf:'center',
                            height: 110,
                            width: 100,
                            marginTop: 30,
                            marginBottom: 10
                        }}
                        source={require('../../public/images/songbox_logo.png')}
                    />
                    <Text style={styles.header}>SONGBOX </Text>
                    <Item >
                        <Icon active name='md-mail' style={styles.inputIcon}/>
                        <Input style={styles.textInput}
                            placeholder='Email Address'
                            autoCapitalize='none'
                            underlineColorAndroid='transparent'
                            onChangeText={ (email) => this.setState({email})}
                            value={this.state.email}
                        />
                    </Item>

                    <Item >
                        <Icon active name='md-lock' style={styles.inputIconLock}/>
                        <Input style={styles.textInput} 
                            placeholder='Password'
                            autoCapitalize='none'
                            secureTextEntry={true}
                            onChangeText={ (password) => this.setState({password})}
                            value={this.state.password}
                        />
                    </Item>

                    <Text style={styles.errorText}>
                        {this.state.error.toString()}
                    </Text>

                    {this.renderButton()}

                    <View style={styles.signupTextCont}>
                        <Text style={styles.signupText}> Don't have an account yet? </Text> 
                        <Text style={styles.signupBtn}
                            onPress={() => this.props.navigation.navigate('Signup')}
                        > Sign Up </Text>
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flexGrow: 1,
    },
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#26232E',
        paddingLeft: 40,
        paddingRight: 40,
    },
    header: {
        fontSize: 35,
        marginBottom: 55,
        color: '#fff',
        fontWeight: '600',
    },
    textInput: {
        color: '#fff'
    },
    inputIcon: {
        color: '#fff',
        fontSize: 28
    },
    inputIconLock: {
        color: '#fff',
        fontSize: 38
    },
    btn: {
        alignSelf: 'stretch',
        backgroundColor: '#6A50A7',
        padding: 20,
        marginTop: 20,
        alignItems: 'center',
        borderRadius: 45
    },
    signupTextCont: {
        flexDirection: 'row',
        backgroundColor: '#26232E',
        marginTop: 50,
        marginBottom: 100,
    },
    signupText: {
        color: '#fff',
    },
    signupBtn: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '900'
    },
    errorText: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
        marginTop:20,
    }
})