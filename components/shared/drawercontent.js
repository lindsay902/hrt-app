import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Drawer } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const NavDrawer = (props) => {
  //const { signOut } = useContext(AuthContext);

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View
              style={{ flexDirection: 'row', marginTop: 15, marginBottom: 10 }}
            >
              <Avatar.Image
                source={require('../../assets/preload/butterfly.png')}
                size={60}
                style={{ backgroundColor: 'white' }}
              />
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="home" color={color} size={size} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
            {/*No current need for a profile - may implement later */}
            {/* <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account-heart" color={color} size={size} />
              )}
              label="My Profile"
              onPress={() => {
                props.navigation.navigate('ProfileScreen');
              }}
            /> */}
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="thought-bubble-outline" color={color} size={size} />
              )}
              label="Feedback"
              onPress={() => {
                props.navigation.navigate('FeedbackStackScreen');
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="face-agent" color={color} size={size} />
              )}
              label="Support"
              onPress={() => {
                props.navigation.navigate('Support');
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="information" color={color} size={size} />
              )}
              label="About"
              onPress={() => {
                props.navigation.navigate('AboutStackScreen');
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={StyleSheet.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Back to Main Page"
          onPress={() => {
            props.navigation.navigate('Welcome');
          }}
        />
      </Drawer.Section>
    </View>
  );
};

export default NavDrawer;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  profileColumn: {
    marginLeft: 15,
    flexDirection: 'column',
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
