import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomNavigator, createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { View, Text, StyleSheet, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Spices from '../components/illustrations/Spices'
import SafeAreaScreen from '../screens/SafeAreaScreen';
import Primal from '../components/illustrations/Primal';
import HomeScreen from '../screens/HomeScreen';

  
function SearchScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Search!</Text>
        </View>
    );
}

function BookmarkScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Bookmarks!</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator()

export default function TabNavigator(){


    return(

        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarItemStyle:styles.tabBarItemStyle,
                    tabBarLabelStyle: styles.tabBarLabelStyle,
                    tabBarShowLabel: false,
                    tabBarStyle:styles.tabBarStyle,
                    tabBarBackground: ()=>(
                        <View 
                            style={styles.tabBarBackgroundStyle}
                        />
                    )
                }}
            >

                <Tab.Screen 
                    name="Home" 
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({focused})=>(
                            <TabBarIcon focused={focused} iconName="home-outline" />
                        )
                    }}                    
                />
                <Tab.Screen 
                    name="Search" 
                    component={SearchScreen}
                    options={{
                        tabBarIcon: ({focused})=>(
                            <TabBarIcon
                            
                                focused={focused} 
                                iconName="magnify" 
                            />
                        )
                    }}  
                />
                <Tab.Screen 
                    name="Bookmarks" 
                    component={BookmarkScreen}
                    options={{
                        tabBarIcon: ({focused})=>(
                            <TabBarIcon focused={focused} iconName="bookmark-outline" />
                        )
                    }}  
                />
                <Tab.Screen 
                    name="Settings" 
                    component={SettingsScreen}
                    options={{
                        tabBarIcon: ({focused})=>(
                            <TabBarIcon 
                                CustomIcon={null}
                                focused={focused} 
                                iconName="cog-outline" 
                            />
                        )
                    }}  
                />

            </Tab.Navigator>
        </NavigationContainer>

    )

}


function TabBarIcon({CustomIcon=null, focused=false, iconName}){

    return(

        <View
            style={[styles.tabBarIcon, focused===true && {backgroundColor: "#616161"}]}
        >
            {
                CustomIcon === null ? (
                    <MaterialCommunityIcons 
                        color="#fff" 
                        name={iconName} 
                        size={24}
                    />
                ) : (
                    <CustomIcon />
                )
            }
        </View>

    )

}

const styles = StyleSheet.create({

    tabBarBackgroundStyle:{
        backgroundColor: "#000",
        bottom: 0,
        borderRadius: 30,
        flexDirection: "row",
        height: "100%",
        left: "4%", 
        padding: 0,
        position: "absolute",
        top: 0, 
        width: "100%",
        alignSelf: "center",
    },
    tabBarIcon:{
        alignItems: "center",
        borderRadius: 30,
        height:40,
        justifyContent: "center",
        width: 40,
    },
    tabBarItemStyle:{
        // backgroundColor: "red",
        // width: "70%",
        height: "100%",
        // alignSelf: "center",
        marginLeft: 22,
        ...Platform.select({
            ios:{
                transform: [{translateY: "15%"}]
            }
        })
        
    },
    tabBarLabelStyle:{
        display: "none"
    },
    tabBarStyle:{
        // alignItems: "center",
        backgroundColor:"transparent",
        bottom: "3%",
        height: "8%",
        // justifyContent: "center",
        left: 0, 
        padding: 0,
        position:  "absolute",
        right: 0, 
        width: "92%",
    }

})