import React from 'react'
import {Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import {openLink} from "../../utils/link";

const StyledButton = (props) => {
    const { colors, title, link } = props
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => openLink(link)} style={[styles.button, {backgroundColor: colors[0]}]}>
                <Text style={[styles.title, {color: colors[1]}]}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default StyledButton
