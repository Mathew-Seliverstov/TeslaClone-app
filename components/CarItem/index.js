import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from "./styles";

import StyledButton from "../StyledButton";
import {openLink} from "../../utils/link";

const CarItem = (props) => {
    const { title, subtitle,  img, link, inventoryLink, customLink } = props.data
    return (
        <View style={styles.carContainer}>
            <Image source={img} style={styles.img} />
            <View style={styles.titles}>
                <TouchableOpacity onPress={() => openLink(link)}>
                    <Text style={styles.title}>{title}</Text>
                </TouchableOpacity>
                <Text style={styles.subtitle}>
                    {subtitle}
                </Text>
            </View>
            <View style={styles.buttonsContainer}>
                    <StyledButton link={inventoryLink} title={'vehicles in stock'} colors={['#171a20cc', '#ffffff']} />
                    <StyledButton link={customLink} title={'configurator'} colors={['#ffffffa6', '#171a20']} />
            </View>
        </View>
    );
}

export default CarItem
