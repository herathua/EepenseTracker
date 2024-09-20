import { View, Text } from 'react-native';
import {Link} from 'expo-router';
const Component = () => {
  return (
    <View>
      <Text >
      Component 
      </Text>
      <Link href={"/Product"}>Product</Link>
    </View>
  );
};

export default Component;
