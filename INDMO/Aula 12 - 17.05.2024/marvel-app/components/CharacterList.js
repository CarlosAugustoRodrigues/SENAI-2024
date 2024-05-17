import React, { useEffects, useState } from 'react'
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { getCharacter } from '../api/marvel_api';

const character_list = () => {
    const [characters, setCharacters] = useState([]);

    useEffects(() => {
        const fetchCharacters = async () => {
            const response = await getCharacter();
            setCharacters(response);
        };
        fetchCharacters();
    }, []);

    const render_item = ({item}) => {
        <View style={StyleSheet.item}>
            <Image
                source={{uri: `${item.thumbnail.patch}.${item.thumbnail.extension}`}}
                style={styles.image}
            />
            <Text style={styles.name}>{item.name}</Text>
        </View>
    };

    return (
        <FlatList
            data={characters}
            renderItem={render_item}
            keyExtractor={item => item.id.toString()}
        />
    )
}

const styles = StyleSheet.create ({
    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10
    },
})