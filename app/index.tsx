import { View, Text } from 'react-native';
import tw from 'twrnc';
import { Link } from 'expo-router';

const Index = () => {
  return (
    <View style={tw`p-4`}>
      <Text style={tw`text-xl font-bold text-green-500`}>
        index
      </Text>
      <Link href={"/Product"}>Product</Link>
      <Link href={"/component"}>component</Link>
      <Link href={{
        pathname: '/product/[productid]',
        params: { 
          productid: '123',
          name: 'product name',
          city: 'colombo',
        },
      }}>
        123
      </Link>
    </View>
  );
};

export default Index;
