import React, {Component} from 'react';
import {
    View,
    ScrollView,
    StyleSheet, Image,
} from 'react-native';

import {Text, Card, Icon} from 'react-native-elements';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';


class UpcomingMatchesScreen extends Component {
    constructor() {
        super();

        this.state = {
            selectedIndex: 0,
            value: 0.5,
            matchList: [],
            posts: []
        };
    }

    componentDidMount() {
        // return fetch('http://cricscore-api.appspot.com/csa')
        //     .then((response) => response.json())
        //     .then((responseJson) => {
        //         liveMatches = responseJson;
        //         this.setState({
        //             isLoading: false,
        //             matchList: responseJson,
        //             matchDetails: [],
        //         }, function () {
        //
        //         });
        //
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });
        //
        //
        // return fetch('http://ams.mapps.cricbuzz.com/cbzandroid/2.0/currentmatches.json')
        //     .then((response) => response.json())
        //     .then((responseJson) => {
        //         liveMatches = responseJson;
        //         this.setState({
        //             isLoading: false,
        //             matchList: responseJson,
        //             matchDetails: [],
        //         }, function () {
        //
        //         });
        //
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });

    }


    render() {

        // console.log('liveMatches***-------', this.state.matchList, this.state.matchList[0]);
        //
        // // https://zeit.co/blog/async-and-await
        // function sleep(time) {
        //     return new Promise((resolve) => setTimeout(resolve, time));
        // }
        //
        // // Usage!
        // sleep(500).then(() => {
        //     // Do something after the sleep!
        //     console.log('sleep function');
        // })

        return (
            <ScrollView>
                <View style={styles.headerContainer}>
                    <Icon color="white" name="invert-colors" size={62}/>
                    <Text style={styles.heading}>Upcoming Matches</Text>
                </View>


            </ScrollView>
        );
    }
}

class OngoingMatchesScreen extends React.Component {

    constructor() {
        super();

        this.state = {
            selectedIndex: 0,
            value: 0.5,
            matchList: [],
            posts: []
        };
    }

    componentDidMount() {
        return fetch('http://ams.mapps.cricbuzz.com/cbzandroid/2.0/currentmatches.json')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    matchList: responseJson,
                }, function () {

                });
                // console.log('state matchList----**', this.state.matchList[0].status);

                console.log('state matchList----*aaaa--', this.state.matchList[0]);


            })
            .catch((error) => {
                console.error(error);
            });
    };

    render() {
        console.log('this.state.matchList-',this.state.matchList);
        return (
            <ScrollView>
                <View style={styles.headerContainer}>
                    <Icon color="white" name="invert-colors" size={62}/>
                    <Text style={styles.heading}>Ongoing Matches</Text>
                </View>

                <View style={styles.container}>
                    {this.state.matchList.map((u, i) => {
                        return (
                            <Card key={i}>
                                <View style={styles.user}>
                                    <Text style={styles.name}
                                          onPress ={() =>{
                                              this.props.navigation.navigate('MatchDetailsScreen', {
                                                  teams: `${u.header.mchDesc}`,
                                                  batTeamScore: `${u.miniscore.batteamscore}`,
                                                  seriesId: `${u.srsid}`,
                                              });
                                              console.log('hiiii--fff--');

                                          }}><Image
                                        style={{width: 50, height: 50}}
                                        source={{uri: `http://i.cricketcb.com/cbzandroid/2.0/flags/team_${u.team1.id}.png`}}
                                    />
                                        {u.team1.fName} vs {u.team2.fName}
                                        <Image
                                            style={{width: 50, height: 50}}
                                            source={{uri: `http://i.cricketcb.com/cbzandroid/2.0/flags/team_${u.team2.id}.png`}}
                                        /></Text>


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
    },
});

export default createMaterialTopTabNavigator({
    'UPCOMING MATCHES': {screen: UpcomingMatchesScreen},
    'ONGOING MATCHES': {screen: OngoingMatchesScreen},
});