import React, { Component } from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import Header from '../components/Header'
import Post from '../components/Post'

class Feed extends Component {
    state =  {
        posts: [{
            id: Math.random(),
            nickname: 'Júlia Louise Temmaori',
            email: 'julia_louise_T@gmail.com',
            image: require('../../assets/imgs/fence.jpg'),
            comments: [{
                nickname: 'Vitor Temmaori',
                comment: 'Vou trabalhar, boa foto!'
            },{
                nickname: 'Cristofer Kairós',
                comment: 'Fui preso pq viajei no tempo, me ajuda.'
            }]
        },{
            id: Math.random(),
            nickname: 'Santiago Chronos',
            email: 'cachorroloucodonovogoverno@gmail.com',
            image: require('../../assets/imgs/bw.jpg'),
            comments: []
        }]
    }

    render() {
        return (
            <View style={styles.container}>
                <Header />
                <FlatList data={this.state.posts}
                   keyExtractor={item => `${item.id}`}
                   renderItem={( { item } ) =>
                    <Post key={item.id} {...item} /> } />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
})

export default Feed