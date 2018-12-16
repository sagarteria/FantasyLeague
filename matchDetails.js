import React, {Component} from 'react';
import {
    View,
    ScrollView,
    StyleSheet, TouchableNativeFeedback, Button,
} from 'react-native';

import {Text, Card, Icon} from 'react-native-elements';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

let liveMatches = [];

export default class MatchDetailsScreen extends Component {
    constructor() {
        super();

        this.state = {
            selectedIndex: 0,
            value: 0.5,
            matchList: [],
            posts: [],
            leaguesType: [{
                leagueName: 'Duo Battle',
                winningAmount: 'Rs. 15',
                noOfWinners: 1
            }, {
                leagueName: 'Trio Battle',
                winningAmount: 'Rs. 20',
                noOfWinners: 1
            }, {leagueName: 'Battle of the Strongest', winningAmount: 'Rs. 15', noOfWinners: 1}],
            // leaguesTypeCardData: {'Money at Stake': ''},
        };
    }

    render() {

        const {navigation} = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        const teams = navigation.getParam('teams', 'NO-TEAM');
        const batTeamScore = navigation.getParam('batTeamScore', 'NO-TEAM');
        const seriesId = navigation.getParam('seriesId', 'NO-SERIES-ID');

        return (
            <ScrollView>
                <View style={styles.headerContainer}>
                    <Icon color="white" name="invert-colors" size={62}/>
                    <Text style={styles.heading}>{teams}</Text>
                </View>

                <View style={styles.container}>

                    <Card>
                        <View style={styles.user}>
                            <Text style={styles.name}
                            >Batting Team Score: {batTeamScore}</Text>

                        </View>
                    </Card>
                </View>

                <View style={styles.container}>
                    {this.state.leaguesType.map((u, i) => {
                        return (
                            <Card key={i}>
                                <View style={styles.user}>
                                    <Text style={{flex: 1, flexWrap: 'wrap'}}>&nbsp; </Text>
                                    <Text style={styles.name}
                                          onPress={() => {

                                          }}>{u.leagueName}
                                    </Text>
                                    <Text style={{flex: 1, flexWrap: 'wrap'}}>&nbsp; </Text>
                                </View>

                                <View style={styles.user}>

                                    <Text style={{flex: 1, flexWrap: 'wrap'}}
                                          onPress={() => {

                                          }}>Money at Stake: {u.winningAmount}
                                    </Text>
                                    <Text style={{flex: 1, flexWrap: 'wrap'}}>&nbsp; </Text>
                                    <Text style={{flex: 1, flexWrap: 'wrap'}}
                                          onPress={() => {

                                          }}>No of Winners: {u.noOfWinners}
                                    </Text>
                                    <Text style={{flex: 1, flexWrap: 'wrap'}}>&nbsp; </Text>
                                    <Button
                                        onPress={ () => {
                                            console.log('hiii')
                                            this.props.navigation.navigate('SquadSelectionScreen', {
                                                'seriesId':seriesId
                                            });
                                        }
                                        }
                                        title="Join League"
                                        color="#3CAFA5"
                                        style={{
                                            alignSelf: 'center',
                                            fontSize: 10,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            height: '10',
                                            textAlignVertical: "center"
                                        }}
                                    />
                                </View>
                            </Card>
                        );
                    })
                    }
                </View>


            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        marginTop: 20,
        borderTopWidth: 1,
        // borderColor: colors.greyOutline,
        borderColor: '#000',
        backgroundColor: '#fff',
    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
        backgroundColor: '#FD6B78',
    },
    heading: {
        color: 'white',
        marginTop: 10,
        fontSize: 22,
    },
    fonts: {
        marginBottom: 8,
    },
    user: {
        flexDirection: 'row',
        marginBottom: 6,
    },
    image: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    name: {
        fontSize: 16,
        marginTop: 5,
    },
    social: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    subtitleView: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingTop: 5,
    },
    ratingImage: {
        height: 19.21,
        width: 100,
    },
    ratingText: {
        paddingLeft: 10,
        color: 'grey',
    }
});

// export default createMaterialTopTabNavigator({
//     'MATCH DETAILS': {screen: MatchDetailsScreen},
// });