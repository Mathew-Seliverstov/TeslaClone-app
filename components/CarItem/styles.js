import {StyleSheet, Dimensions} from "react-native";

const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: Dimensions.get('window').height
    },
    buttonsContainer: {
        bottom: 40,
        position: 'absolute',
        width: '100%'
    },
    titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center'
    },
    title: {
        fontSize: 40,
        fontFamily: '500'
    },
    subtitle: {
        fontSize: 16,
        color: '#5c5e62'
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute'
    }
});

export default styles
