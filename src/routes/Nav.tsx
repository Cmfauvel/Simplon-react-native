import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';


import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteParams } from './Navigation';
import { useNavigation } from '@react-navigation/native';
class App extends Component {
  render() {
    return <AppContainer />;
  }
}
export default App;

class WelcomeScreen extends Component {
    const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

  render() {
    return (
        <>
        <View style={styles.button}>
        <Button
          color="#54A487"
          title="Les ressources"
          onPress={() => navigation.navigate("Roussources")}
        />
      </View>
      <View style={styles.button}>
        <Button
          color="#54A487"
          title="Demander de l'aide"
          onPress={() => navigation.navigate("Question")}
        />
      </View>
      </>
    );
  }
}

class DashboardScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>DashboardScreen</Text>
      </View>
    );
  }
}

class Feed extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Go To Detail Screen" onPress={() => this.props.navigation.navigate('Detail')} />
      </View>
    );
  }
}

class Settings extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Settings</Text>
      </View>
    );
  }
}

class Profile extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile</Text>
      </View>
    );
  }
}

const Detail = props => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Detail</Text>
  </View>
);

const FeedStack = createStackNavigator(
  {
    Feed: {
      screen: Feed,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: 'Feed',
          headerLeft: (
            <Icon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
          )
        };
      }
    },
    Detail: {
      screen: Detail
    }
  },
  {
    defaultNavigationOptions: {
      gesturesEnabled: false
    }
  }
);

const ProfileStack = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'Profile',
        headerLeft: (
          <Icon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
        )
      };
    }
  }
});
const SettingsStack = createStackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'Settings',
        headerLeft: (
          <Icon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
        )
      };
    }
  }
});

const DashboardTabNavigator = createBottomTabNavigator(
  {
    FeedStack,
    ProfileStack,
    SettingsStack
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        header: null,
        headerTitle: routeName
      };
    }
  }
);
const DashboardStackNavigator = createStackNavigator(
  {
    DashboardTabNavigator: DashboardTabNavigator
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
        )
      };
    }
  }
);

const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: DashboardStackNavigator
  }
});

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: { screen: WelcomeScreen },
  Dashboard: { screen: AppDrawerNavigator }
});

const AppContainer = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }

 
  