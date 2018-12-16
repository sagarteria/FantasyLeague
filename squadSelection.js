/**
 * Created by sagar_system_machines on 6/19/18.
 */
import React, {Component} from 'react';
import {
    View,
    ScrollView,
    StyleSheet, Button,
} from 'react-native';

import {Text, Card, Icon} from 'react-native-elements';

export default class SquadSelectionScreen extends Component {
    constructor() {
        super();

        this.state = {
            squadList: [],
        };
    };

    componentDidMount() {
        const {navigation} = this.props;
        const seriesId = navigation.getParam('seriesId', 'NO-SERIES-ID');
        console.log('seriesId--aa',seriesId);
        return fetch(`http://www.cricbuzz.com/cricket-series/api/stats/zone?statsType=mostRuns&seriesId=${seriesId}`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    squadList: responseJson,
                }, function () {

                });
                console.log('state matchList----**', this.state.squadList);

                console.log('squadList', this.state.squadList);


            })
            .catch((error) => {
                console.error(error);
            });
    };

    render() {

        const {navigation} = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        const teams = navigation.getParam('teams', 'NO-TEAM');
        const batTeamScore = navigation.getParam('batTeamScore', 'NO-TEAM');

        return (
            <ScrollView>
                <View style={styles.headerContainer}>
                    <Card>
                        {this.state.squadList.map((u, i) => {
                            return (
                                <View style={styles.user} key={i}>
                                    <Text style={styles.name}
                                          onPress={() => {

                                          }}>{u.playerName}
                                    </Text>
                                </View>

                            );
                        })
                        }
                    </Card>
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