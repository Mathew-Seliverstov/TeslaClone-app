import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        height: 40,
        width: '100%',
        top: 40,
        zIndex: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    logo: {
        width: 100,
        height: 20,
        resizeMode: 'contain'
    },
    menu: {
        width: 25,
        height: 25,
        resizeMode: 'contain'
    }
})

export default styles
