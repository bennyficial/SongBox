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
import { StackNavigator } from 'react-navigation';
import { Item, Input, Icon } from 'native-base'


export default class Signup extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
        }
    }

    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
                <View style={styles.container}>
                    <Text style={styles.header}>SIGN UP </Text>

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
                     <Item >
                        <Icon active name='md-person' style={styles.inputIcon}/>
                        <Input style={styles.textInput}
                            placeholder='Name'
                            autoCapitalize='none'
                            underlineColorAndroid='transparent'
                            onChangeText={ (name) => this.setState({name})}
                        />
                    </Item>

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
                        <Text> Sign Up </Text>
                    </TouchableOpacity>
                    <View style={styles.signupTextCont}>
                        <Text style={styles.signupText}> Already have an account? </Text> 
                        <Text style={styles.signupBtn}
                            onPress={() => this.props.navigation.goBack()}
                        > Sign In </Text>
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