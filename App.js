import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './home.js';
import DetailsScreen from './details.js';
import LoginScreen from './login.js';
import CardListView from './leagues.js';
import MatchDetailsScreen from './matchDetails.js';
import SquadSelectionScreen from './squadSelection.js';

const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen,
        Login: LoginScreen,
        LeaguesScreen: CardListView,
        MatchDetailsScreen: MatchDetailsScreen,
        SquadSelectionScreen: SquadSelectionScreen,

    },
    {
        initialRouteName: 'LeaguesScreen',
    }
);

export default class App extends React.Component {
    render() {
        return <RootStack />;
    }
}