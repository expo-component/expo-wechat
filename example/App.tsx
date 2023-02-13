import { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native';

import * as ExpoWechat from 'expo-wechat';

export default function App() {
  useEffect(() => {
    console.log(ExpoWechat.isWXAppInstalled())
    console.log(ExpoWechat.getVersion())
    console.log(ExpoWechat.getWXAppInstallUrl())
    console.log(ExpoWechat.isWXAppSupport())
  }, [])

  return (
    <View style={styles.container}>
      <Text>Hello Wechat</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
