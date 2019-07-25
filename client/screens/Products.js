import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Button,
  Text,
  View,
  Image,
  Platform,
  ScrollView,
  TouchableHighlight
} from "react-native";
export default function Product(props) {
  return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Text>Product</Text>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});
