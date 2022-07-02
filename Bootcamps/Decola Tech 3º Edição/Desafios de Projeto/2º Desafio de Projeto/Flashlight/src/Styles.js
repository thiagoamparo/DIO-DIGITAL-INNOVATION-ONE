import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    bulb: {
        resizeMode: 'contain',
        alignSelf: 'center',
        width: 250,
        height: 250,
    },

    bulb_Off: {
        tintColor: '#FFFFFF',
    },

    on: {
        backgroundColor: '#FFFFFF',
    },
    
    off: {
        backgroundColor: '#000000',
    },

    warning: {
        position: 'absolute',
        resizeMode: 'contain',
        alignSelf: 'center',
        fontSize: 48,
        fontWeight: '700',
        color: '#FFFFFF',
        top: 350,
    },

});

export default styles;