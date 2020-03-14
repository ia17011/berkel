import React from 'react'
import { Text, View, TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-navigation'
import styled from 'styled-components/native'
import { TwitterButton } from '../../components/atom/TwitterButton'
import { Avatar } from 'react-native-elements'
import { Space, FontWeight, FontSize } from '../../constants/variables'
import { widthPercentageToDP as wp, heightPercentageToDP } from 'react-native-responsive-screen'

export const Container = styled.View`
    flex: 1;
`

export const TopScreen: React.FC = () => {
    return (
        <SafeAreaView style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
                <View style={{
                    flex: 0.8, 
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                    }}
                >
                        <View style={{margin: Space*2}}>
                            <Text style={{fontWeight: FontWeight.BOLD, fontSize: FontSize.XLARGE}}>
                                Focus on posting
                            </Text>
                        </View>
                <Avatar size={250} source={{ uri: 'https://miro.medium.com/max/4800/1*jRr_QhaM1_uiJKjuWAJtdg.jpeg'}} />
                </View>
                <View style={{flex: 0.2}}>
                    <TwitterButton onDone={() => console.log('ログイン関数')} />
                </View>
        </SafeAreaView>
    )
}