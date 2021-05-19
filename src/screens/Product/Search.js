import React from 'react'
import { View, Text } from 'react-native'

export default function Search(props) {
    const { route } = props;
    const { params } = route;
    console.log('Screen search --> ' + params.search);
    return (
        <View>
            <Text></Text>
        </View>
    )
}
