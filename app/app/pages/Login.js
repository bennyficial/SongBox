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
                    <Text style={styles.header}>SONGBOX </Text>

                    {/* <TextInput 
                        style={styles.textInput} placeholder='Email Address'
                        autoCapitalize='none'
                        onChangeText={ (email) => this.setState({email})}
                        underlineColorAndroid='transparent'
                    />

                    <TextInput 
                        style={styles.textInput} placeholder='Password'
                        secureTextEntry={true}
                        onChangeText={ (password) => this.setState({password})}
                        underlineColorAndroid='transparent'
                    /> */}

                    <Item>
                        <Icon active name='home' />
                        <Input placeholder='Icon Textbox'
                            onChangeText={ (email) => this.setState({email})}
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
        fontSize: 40,
        marginTop: 60,
        marginBottom: 60,
        color: '#fff',
        fontWeight: '800',
    },
    textInput: {
        alignSelf: 'stretch',
        padding: 16,
        marginBottom: 15,
        backgroundColor: '#fff',
        borderRadius: 45
    },
    btn: {
        alignSelf: 'stretch',
        backgroundColor: '#6A50A7',
        padding: 20,
        marginTop: 15,
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