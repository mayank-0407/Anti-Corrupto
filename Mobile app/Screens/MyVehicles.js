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

export default function MyVehicles({ token, navigateTo }) {
	const sessionId = token;

	const handleaddVehicle = async (values) => {
		try {
      console.log("IN ADD vehicle 1");
			const thisuser = await fetchUserDetails(token);
      console.log("IN ADD vehicle 2");
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
