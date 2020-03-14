import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import {NavigationProps} from '../../typings/navigation'
import { SafeAreaView } from 'react-navigation'

export const AuthLoadingScreen: React.FC<NavigationProps> = ({navigation}) => {
    return (
        <SafeAreaView>
        <TouchableOpacity onPress={() => navigation.navigate('Top')}>
            <Text>認証画面だよ</Text>
        </TouchableOpacity>
        </SafeAreaView>
    )
}