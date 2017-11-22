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
import { Item, Input, Icon } from 'native-base'

export default class Login extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
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
                        />
                    </Item>

                    <Item >
                        <Icon active name='md-lock' style={styles.inputIconLock}/>
                        <Input style={styles.textInput} 
                            placeholder='Password'
                            autoCapitalize='none'
                            secureTextEntry={true}
                            onChangeText={ (password) => this.setState({password})}
                        />
                    </Item>

                    <TouchableOpacity style={styles.btn} onPress={this.login}>
                        <Text> Log in </Text>
                    </TouchableOpacity>
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
        marginTop: 55,
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
    }
})