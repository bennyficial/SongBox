import { AsyncStorage } from 'react-native';
import STORAGE_KEY from '../api';

export const _onValueChange = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (err) {
        console.log('AsyncStorage Error: ' + err);
    }
}

// export const _isSignedIn = async () => {
//     console.log(' ')
//     console.log('gg')
//     try {
//        let user =  await AsyncStorage.getItem(STORAGE_KEY)
       
//        if (user !== null) {
//            return true
//        } else {
//            return false
//        }
//     } catch (err) {
//         console.log('Something wrong: ' + err);
//     }
// }

export const _isSignedIn = () => {
    return new Promise ((resolve, reject) => {
        AsyncStorage.getItem(STORAGE_KEY)
            .then(res => {
                console.log(res)
                if (res !== null) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            })
            .catch(err => reject(err));
    })
}