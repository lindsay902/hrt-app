import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Title, Caption, Paragraph, Drawer } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from '../Context/context';

const NavDrawer = (props) => {
  const { signOut } = useContext(AuthContext);

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View
              style={{ flexDirection: 'row', marginTop: 15, marginBottom: 10 }}
            >
              <Avatar.Image
                source={require('../../assets/kitty.jpg')}
                size={60}
              />
              <View style={styles.profileColumn}>
                <Title style={styles.title}>Kitty Pryde</Title>
                <Caption style={styles.caption}>@kittypryde</Caption>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  80
                </Paragraph>
                <Caption style={styles.caption}>Following</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  100
                </Paragraph>
                <Caption style={styles.caption}>Followers</Caption>
              </View>
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
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account-heart" color={color} size={size} />
              )}
              label="My Profile"
              onPress={() => {
                props.navigation.navigate('ProfileScreen');
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="pharmacy" color={color} size={size} />
              )}
              label="Health"
              onPress={() => {
                props.navigation.navigate('SettingsStackScreen');
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="wrench" color={color} size={size} />
              )}
              label="Settings"
              onPress={() => {
                props.navigation.navigate('SettingsStackScreen');
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="heart-multiple" color={color} size={size} />
              )}
              label="Support"
              onPress={() => {
                props.navigation.navigate('Support');
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
          label="Log Out"
          onPress={signOut}
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
