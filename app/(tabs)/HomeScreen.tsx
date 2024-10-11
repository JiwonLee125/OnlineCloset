import { StyleSheet, Image, ScrollView } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import Pin from '@/components/Pin';

export default function HomeScreen() {
  return (
    <ScrollView>
<View style={styles.container}>
      <Pin 
      pin = {{
        title: 'Mr. Happy',
        image: 'https://static.wikia.nocookie.net/mrmenlittlemiss/images/9/95/Mrmen_mrhappy.jpg/revision/latest?cb=20190603163241'
      }}
      />
      <Pin 
      pin = {{
        title: 'SpongeBob',
        image: 'https://npr.brightspotcdn.com/dims4/default/980b2a8/2147483647/strip/true/crop/2400x1800+0+0/resize/1760x1320!/format/webp/quality/90/?url=https%3A%2F%2Fmedia.npr.org%2Fassets%2Fimg%2F2024%2F04%2F29%2Fspongebobsquarepants_key_art-9fb3acceee64452b629f7bde4daaabffe3391536.jpg'
      }}
        />
    </View>
    </ScrollView>
    
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});
