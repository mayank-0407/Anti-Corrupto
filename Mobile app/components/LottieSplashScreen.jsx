import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

const LottieSplashScreen = () => {
	// Automatically finish after the animation is done
	// useEffect(() => {
	// 	const timer = setTimeout(onAnimationFinish); // Adjust timing based on your animation duration
	// 	return () => clearTimeout(timer);
	// }, [onAnimationFinish]);

	return (
		<View style={styles.container}>
			<LottieView
				source={require("../assets/lotties/pulse.json")} // Path to your animation file
				autoPlay
				loop={true}
				style={styles.animation}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#fff", // Customize the background color
	},
	animation: {
		width: 300, // Adjust to your preferred size
		height: 300,
	},
});

export default LottieSplashScreen;
