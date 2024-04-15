
import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Image,
	StyleSheet,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
} from "react-native";
import PrimaryButton from "../Components/primaryButton";
import Colors from "../Components/Colors";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import * as Yup from "yup";
import { Formik } from "formik";
import { loginUser, fetchUserDetails } from "../util/Api";
import { addVehicle } from "../util/vehicleApi";
import { getSessionToken } from "../util/tokenStore";

export default function MyVehicles({ navigation }) {

	const handleaddVehicle = async (values) => {
		try {
			const token = getSessionToken();
			console.log("IN ADD vehicle 1");
			const thisuser = await fetchUserDetails(token);
			console.log("IN ADD vehicle 2", thisuser);
			const userId = thisuser.data.id;
			values.ownerId = userId;
			const res = await addVehicle(values);
			if (res.status === 200) {
				navigateTo(7);
			} else {
				alert("Error in adding vehicle");
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<View className="flex-1">
			<Formik
				initialValues={{
					plateNumber: "",
					make: "",
					model: "",
					year: "",
					color: "",
					ownerId: "",
				}}
				onSubmit={(values) => {
					handleaddVehicle(values);
				}}
			>
				{({ handleChange, handleSubmit, values, touched, errors }) => (
					<View className=" flex-1 flex-col justify-between items-center w-full h-full bg-white p-3">
						<View className=" py-24 ">
							<Text
								className="text-2xl font-bold text-center"
								style={{ color: Colors.primaryBlue }}
							>
								Add Vehicle
							</Text>
						</View>

						<View className=" flex-col w-full px-4 justify-between ">
							<View className=" pb-52  justify-between">
								<TextInput
									className=" mb-4 border-b border-gray-200 py-2 px-2 text-base text-gray-700"
									placeholder="Plate Number"
									onChangeText={handleChange("plateNumber")}
									value={values.plateNumber}
								/>
								<TextInput
									className=" border-b mb-4 border-gray-200 py-2 px-2 text-base text-gray-700"
									placeholder="Enter Make"
									onChangeText={handleChange("make")}
									value={values.make}
								/>
								<TextInput
									className=" border-b mb-4 border-gray-200 py-2 px-2 text-base text-gray-700"
									placeholder="Enter Model"
									onChangeText={handleChange("model")}
									value={values.model}
								/>
								<TextInput
									className=" border-b mb-4 border-gray-200 py-2 px-2 text-base text-gray-700"
									placeholder="Enter Year"
									onChangeText={handleChange("year")}
									value={values.year}
								/>

								<TextInput
									className=" border-b mb-4 border-gray-200 py-2 px-2 text-base text-gray-700"
									placeholder="Enter Color"
									onChangeText={handleChange("color")}
									value={values.color}
								/>

								<View className=" my-2">
									<PrimaryButton onPress={handleSubmit}>Add</PrimaryButton>
								</View>
							</View>
						</View>
					</View>
				)}
			</Formik>
		</View>
	);
}



// import { Text, View, StyleSheet, Pressable } from "react-native";
// import {
// 	useContractRead,
// 	useContractWrite,
// 	usePrepareContractWrite,
// } from "wagmi";
// import mintABI from "../ABIs/addVehicleABI.json";

// export default function MintSection() {
// 	// Writing to the Contract
// 	const { config } = usePrepareContractWrite({
// 		address: "0x6E92334551801B45f4be6Af67933c51c1f902206",
// 		abi: mintABI,
// 		functionName: "addVehicle",
// 		args: ["e3732", 123, "3272", "238", "238yr", "r238yi", "r32ii"],
// 	});

// 	const { data, isLoading, isSuccess, write } = useContractWrite(config);

// 	return (
// 		<View style={styles.marginVertical}>
// 			{/* <View style={styles.marginVertical}>
//         {isLoading && <Text>Loading</Text>}
//         {isSuccess && <Text>Name: {contractName?.toString()}</Text>}
//         {isError && <Text>Error reading contract</Text>}
//       </View> */}

// 			<Pressable style={styles.button} onPress={() => write?.()}>
// 				<Text style={styles.centerText}>Mint</Text>
// 			</Pressable>
// 			{isLoading && <Text>Check Wallet</Text>}
// 			<Text style={{ textAlign: "center", marginVertical: 10 }}>Transaction:</Text>
// 			{isSuccess && (
// 				<Text style={{ textAlign: "center" }}>{JSON.stringify(data)}</Text>
// 			)}
// 		</View>
// 	);
// }

// const styles = StyleSheet.create({
// 	heading: {
// 		fontSize: 20,
// 	},
// 	marginVertical: {
// 		marginVertical: 10,
// 		display: "flex",
// 		alignItems: "center",
// 		justifyContent: "center",
// 	},
// 	centerText: {
// 		fontSize: 16,
// 		textAlign: "center",
// 		color: "#fff",
// 	},
// 	button: {
// 		backgroundColor: "#57B36A",
// 		padding: 10,
// 		width: 140,
// 		borderRadius: 32,
// 	},
// });
