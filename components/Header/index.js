import React from 'react'
import styles from './styles'
import {Image, TouchableOpacity, View} from "react-native";
import {openLink} from "../../utils/link";

const Header = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => openLink('https://moscowteslaclub.ru/')}>
                <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
            </TouchableOpacity>
        </View>
    )
}

export default Header
