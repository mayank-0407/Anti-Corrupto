import React, { useEffect, useState } from "react";
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
	Alert,
} from "react-native";
import PrimaryButton from "../Components/primaryButton";
import Colors from "../Components/Colors";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import * as Yup from "yup";
import { Formik } from "formik";
import { loginUser, fetchUserDetails } from "../util/Api";
// import { addVehicle } from "../util/vehicleApi";
import { getSessionToken } from "../util/tokenStore";
// import { AddVehicle } from "../Metamask/vehicleContract";

///////////////////

import {
	useContractRead,
	useContractWrite,
	usePrepareContractWrite,
} from "wagmi";
import addVehicleABI from "../Metamask/ABI's/addVehicleABI.json";

////////////////////

export default function AddVehicles({ navigation }) {
	// const handleaddVehicle = async (values) => {
	// 	try {
	// 		const token = getSessionToken();
	// 		console.log("IN ADD vehicle 1");
	// 		const thisuser = await fetchUserDetails(token);
	// 		console.log("IN ADD vehicle 2", thisuser);
	// 		const userId = thisuser.data.id;
	// 		values.ownerId = userId;
	// 		const res = await addVehicle(values);
	// 		if (res.status === 200) {
	// 			navigateTo(7);
	// 		} else {
	// 			alert("Error in adding vehicle");
	// 		}
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	const [vehicleID, setVehicleID] = useState("");
	const [phoneNum, setPhoneNum] = useState(0);
	const [buyDate, setBuyDate] = useState("");
	const [model, setModel] = useState("");
	const [plateNum, setPlateNum] = useState("");
	const [insuranceValidity, setInsuranceValidity] = useState("");
	const [pollutionValidity, setPollutionValidity] = useState("");

	// Writing to the Contract
	const { config } = usePrepareContractWrite({
		address: "0x7a134d5e67e388d7dbdb62491c1c7e1b6374548a",
		abi: addVehicleABI,
		functionName: "addVehicle",
		args: [
			vehicleID,
			parseInt(phoneNum),
			buyDate,
			model,
			plateNum,
			insuranceValidity,
			pollutionValidity,
		],
	});

	const { data, isLoading, isSuccess, write } = useContractWrite(config);

	useEffect(() => {
		if (isLoading) {
			console.log("Loading...");
		} else if (isSuccess) {
			console.log("Vehicle added successfully", JSON.stringify(data));
			Alert.alert("Vehicle added successfully.", [
				{ text: "OK", style: "cancel" },
			]);
		}
	}, [isLoading, isSuccess, data]);

	return (
		<View className="flex-1">
			<Formik
				initialValues={{
					vehicleID: "",
					phoneNum: "",
					buyDate: "",
					model: "",
					plateNum: "",
					insuranceValidity: "",
					pollutionValidity: "",
				}}
				onSubmit={(values) => {
					// navigation.navigate("Contract");
					console.log(values);

					const {
						vehicleID,
						phoneNum,
						buyDate,
						model,
						plateNum,
						insuranceValidity,
						pollutionValidity,
					} = values;

					setVehicleID(vehicleID);
					setPhoneNum(phoneNum);
					setBuyDate(buyDate);
					setModel(model);
					setPlateNum(plateNum);
					setInsuranceValidity(insuranceValidity);
					setPollutionValidity(pollutionValidity);

					console.log(
						"Vehicle ID: ",
						vehicleID,
						"  Phone Number: ",
						phoneNum,
						"  Buy Date: ",
						buyDate,
						"  Model: ",
						model,
						"  Plate Number: ",
						plateNum,
						"  Insurance Validity: ",
						insuranceValidity,
						"  Pollution Validity: ",
						pollutionValidity
					);

					try {
						write?.();

					} catch (error) {
						console.log(error);
					}
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
									placeholder="Vehicle ID"
									onChangeText={handleChange("vehicleID")}
									value={values.vehicleID}
								/>
								<TextInput
									keyboardType="numeric"
									className=" border-b mb-4 border-gray-200 py-2 px-2 text-base text-gray-700"
									placeholder="Phone Number"
									onChangeText={handleChange("phoneNum")}
									value={values.phoneNum}
								/>
								<TextInput
									className=" border-b mb-4 border-gray-200 py-2 px-2 text-base text-gray-700"
									placeholder="Buy Date"
									onChangeText={handleChange("buyDate")}
									value={values.buyDate}
								/>
								<TextInput
									className=" border-b mb-4 border-gray-200 py-2 px-2 text-base text-gray-700"
									placeholder="Model"
									onChangeText={handleChange("model")}
									value={values.model}
								/>

								<TextInput
									className=" border-b mb-4 border-gray-200 py-2 px-2 text-base text-gray-700"
									placeholder="Enter Plate Number"
									onChangeText={handleChange("plateNum")}
									value={values.plateNum}
								/>

								<TextInput
									className=" border-b mb-4 border-gray-200 py-2 px-2 text-base text-gray-700"
									placeholder="Enter Insurance Validity"
									onChangeText={handleChange("insuranceValidity")}
									value={values.insuranceValidity}
								/>

								<TextInput
									className=" border-b mb-4 border-gray-200 py-2 px-2 text-base text-gray-700"
									placeholder="Enter Pollution Validity"
									onChangeText={handleChange("pollutionValidity")}
									value={values.pollutionValidity}
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
