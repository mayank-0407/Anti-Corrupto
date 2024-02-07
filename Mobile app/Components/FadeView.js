import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";

const FadedView = ({ children }) => (
	<LinearGradient
		colors={["#1e00c7", "#ffffff"]}
		start={{ x: 0.5, y: 0 }}
		end={{ x: 0.5, y: 0.7 }}
		// style={{
		//   borderRadius: 100,
		// }}
	>
		<Text>{children}</Text>
	</LinearGradient>
);

export default FadedView;
