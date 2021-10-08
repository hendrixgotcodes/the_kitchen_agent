import React from 'react'
import { View, StyleSheet, FlatList, SectionList, TouchableHighlight } from 'react-native'
import AppTextBold from '../components/atoms/AppTextBold'
import Avatar from '../components/atoms/AppAvatar'
import SafeAreaScreen from './SafeAreaScreen'
import AppUserInfo from '../components/molecules/AppUserInfo'
import AppText from '../components/atoms/AppText'
import _colors from '../assets/_colors'
import { Ionicons } from '@expo/vector-icons'

import { UserContext } from '../utils/user-contexts'


const settingsMenu = [

    {
        title: "Personal",
        data: [
            {
                icon: <Ionicons color={_colors.dark_lighter} name="person-outline" size={16} />,
                text: "Account Settings"
            }, 
            {
                icon: <Ionicons color={_colors.dark_lighter} name="heart-outline" size={16} />,
                text: "Favorites"
            },
            {
                icon: <Ionicons color={_colors.dark_lighter} name="exit-outline" size={16} />,
                text: "Sign out"
            },
        ]
    },
    {
        title: "Preferences",
        data: [
            {
                icon: <Ionicons color={_colors.dark_lighter} name="language-outline" size={16} />,
                text: "Languages"
            }
        ]
    },
    

]

export default function SettingsScreen() {
    
    return (
        <SafeAreaScreen>

            <View
                style={styles.container}
            >

                <View
                    style={styles.mainWrapper}
                >
                    <AppTextBold
                        extraStyle={styles.header}
                    >
                        Settings
                    </AppTextBold>

                    <AppUserInfo 
                        extraStyle={styles.userInfo}
                        subTitle="asare11samuel@gmail.com"
                        title="Sameul opoku asare"
                    />

                    <SectionList
                        bounces={false}
                        keyExtractor={(item, index)=>index.toString()}
                        renderItem={({item})=><ListItem Icon={item.icon} text={item.text} />}
                        renderSectionHeader={({section:{title}})=><ListHeader>{title}</ListHeader>}
                        sections={settingsMenu}
                        style={styles.list}
                    />

                </View>

            </View>

        </SafeAreaScreen>
    )
}

function ListHeader({children}){

    return(

        <View style={styles.listHeader}>

            <AppText>
                {children}
            </AppText>

        </View>

    )

}

function ListItem({Icon, text}){

    if(text === "Sign out")
        return(
            <TouchableHighlight
                style={styles.listItem}
                underlayColor="red"
                activeOpacity={0.6}
                
            >
                <View style={styles.listItemTitle}
                >
                    {Icon}
                    <AppText extraStyle={{textAlign: "left", marginLeft: 5}}>{text}</AppText>
                </View>
                {/* <Ionicons color={_colors.dark_lighter} name="arrow-forward-outline" size={16} /> */}
            </TouchableHighlight>
        )

    return(
        <View
            style={styles.listItem}
        >
            <View style={styles.listItemTitle}>
                {Icon}
                <AppText extraStyle={{textAlign: "left", marginLeft: 5}}>{text}</AppText>
            </View>
            {/* <Ionicons color={_colors.dark_lighter} name="arrow-forward-outline" size={16} /> */}
        </View>
    )

}

 
const styles = StyleSheet.create({
    container:{
        flex:1,
        width: '100%'
    },
    header:{
        fontSize: 32,
        textAlign: "left",
        textTransform: "capitalize",
    },
    list:{
        flex: 1,
        marginBottom: 10,
    },
    listHeader:{
        // alignItems: "flex-start",
        backgroundColor: "#dfdfdf",
        borderRadius: 3,
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        marginTop: 10,
        paddingLeft: 10,
        paddingVertical: 7,
    },
    listItem:{
        alignItems: "center",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    listItemTitle:{
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
    },
    mainWrapper: {
        // overflow:"hidden",
        width: "100%",
        ...Platform.select({
            android: {
                height: "89%"
            },
            ios:{
                height:"93%"
            }
            
        })
    },
    userInfo:{
        alignSelf:"center",
        marginVertical: 20,
        width: "55%",
    },
})