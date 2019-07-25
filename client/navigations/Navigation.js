import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

import Products from "../screens/Products";
import MyProduct from "../screens/MyProduct";
import History from "../screens/History";
import Profile from "../screens/Profile";

// const StackNavigator = createStackNavigator({
//   Movie: {
//     screen: Movie,
//     navigationOptions: {
//       header: null,
//       headerTitle: "Movie",
//       headerStyle: {
//         backgroundColor: "white"
//       }
//     }
//   },
//   MovieDetail: {
//     screen: MovieDetail,
//     navigationOptions: {
//       headerTitle: "Movie Detail",
//       headerStyle: {
//         backgroundColor: "white"
//       }
//     }
//   }
// });

const MainNavigator = createBottomTabNavigator(
  {
    Products: {
      screen: Products,
      navigationOptions: {
        tabBarLabel: "Products",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-home" color={tintColor} size={24} />
        )
      }
    },
    MyProduct: {
      screen: MyProduct,
      navigationOptions: {
        tabBarLabel: "MyProduct",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-tennisball" color={tintColor} size={24} />
        )
      }
    },
    History: {
      screen: History,
      navigationOptions: {
        tabBarLabel: "History",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-home" color={tintColor} size={24} />
        )
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: "Profile",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-tennisball" color={tintColor} size={24} />
        )
      }
    }
  },

  {
    initialRouteName: "Products"
  }
);

export default createAppContainer(MainNavigator);
