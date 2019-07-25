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
export default function MyProduct(props) {
  return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Text>MyProduct</Text>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});
