import React from 'react';
import {FlatList, View, Dimensions} from 'react-native';
import styles from "./styles";
import DATA from './cars'

import CarItem from "../CarItem";

const CarsList = (props) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({item}) => <CarItem data={item} />}
                keyExtractor={item => item.title}
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>

    );
}

export default CarsList