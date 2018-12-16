import React from 'react';
import {View, ImageBackground} from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Fantasy League',
        headerStyle: {
            backgroundColor: '#000000',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    render() {
        let pic = {
            uri: 'http://d2dzjyo4yc2sta.cloudfront.net/?url=images.pitchero.com%2Fui%2F1781722%2F1424813226_5257.jpg&w=820&t=fit&q=85'
        };
        setInterval(() => {
            // this.props.navigation.navigate('Login')
            this.props.navigation.navigate('LeaguesScreen');
        }, 1000);
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ImageBackground
                    style={{width: '100%', height: '100%'}}
                    source={pic}
                />
            </View>

        );
    }
}