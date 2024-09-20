import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link, router, Slot } from 'expo-router';
import tw from 'twrnc';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

const RootLayout = () => {
  return (
    <View style={tw`relative w-full flex-1`}>
      <Slot /> 
      <View style={tw`w-full px-5 absolute h-16 bottom-0 left-0 z-50 bg-orange-500 flex-row items-center justify-between`}>
        <TouchableOpacity onPress={() => router.navigate("/")} style={tw`items-center`}>
          <Ionicons name="home-outline" size={24} color="black" />
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.navigate("/category")} style={tw`items-center`}>
          <Entypo name="dropbox" size={24} color="black" />
          <Text>Category</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.navigate("/Product")} style={tw`items-center`}>
          <MaterialIcons name="production-quantity-limits" size={24} color="black" />
          <Text>Product</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.navigate("/profile")} style={tw`items-center`}>
          <AntDesign name="profile" size={24} color="black" />
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RootLayout;
