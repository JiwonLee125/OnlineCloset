import { StyleSheet, Image } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import MasonryList from '@/components/MasonryList';
import pins from '@/assets/data/pins';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image 
      source={{ 
        uri: "https://contents.lotteon.com/itemimage/20240804120535/LO/23/47/38/67/34/_2/34/73/86/73/5/LO2347386734_2347386735_1.jpg/dims/optimize/dims/resizemc/400x400",
        }}
        style={styles.image}
        />
      <Text style={styles.title}>Jiwon Lee</Text>
      <Text style={styles.subtitle}>1201 Followers | 1135 Followings</Text>

      <MasonryList pins={pins} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
  },
  subtitle: {
    color:"#181818",
    fontWeight: "600",
  },
  image: {
    width: 200,
    aspectRatio: 1,
    borderRadius: 200,
  },
});
