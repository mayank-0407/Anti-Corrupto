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
	Alert,
	ToastAndroid,
	Keyboard,
} from "react-native";
import PrimaryButton from "../components/primaryButton";
import Colors from "../components/Colors";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import * as Yup from "yup";
import { Formik } from "formik";
import { loginUser } from "../util/authApi";
import { saveSessionToken } from "../util/tokenStore";
import { router } from "expo-router";
import { useAuth } from "../util/AuthContext";

const PasswordSchema = Yup.object().shape({
	password: Yup.string()
		.min(4, "*Passsword Should be min of 4 characters")
		.max(16, "*Password should be max of 16 characters")
		.required("*Password is required"),
});

export default function Login() {
	const { authState, logIn } = useAuth();

	const handleLogin = async (values) => {
		Keyboard.dismiss();
		try {
			const response = await loginUser(values);

			if (response.session.sessionToken) {
				saveSessionToken(response.session.sessionToken);
				ToastAndroid.showWithGravity(
					"Login Successfull ✅",
					ToastAndroid.SHORT,
					ToastAndroid.BOTTOM
				);
				logIn();
				router.replace("/(app)");
			}
		} catch (error) {
			ToastAndroid.showWithGravity(
				`User not found, Signup to continue!`,
				ToastAndroid.LONG,
				ToastAndroid.BOTTOM
			);
			console.log("Error occurred during login:", error);
		}
	};

	return (
		<View className="flex-1">
			<Formik
				initialValues={{ email: "", password: "", checked: false }}
				validationSchema={PasswordSchema}
				onSubmit={(values) => {
					// console.log(values);
					handleLogin(values);
				}}
			>
				{({ handleChange, handleSubmit, values, touched, errors }) => (
					<View className=" flex-1 flex-col justify-between items-center w-full h-full bg-white p-3">
						<View className=" py-24 ">
							<Text
								className="text-2xl font-bold text-center"
								style={{ color: Colors.primaryBlue }}
							>
								LOGO
							</Text>
						</View>

						<View className=" flex-col w-full px-4 justify-between ">
							<View className=" pb-52  justify-between">
								<TextInput
									className=" mb-4 border-b border-gray-200 py-2 px-2 text-base text-gray-700"
									placeholder="Email"
									onChangeText={handleChange("email")}
									value={values.email}
								/>
								<TextInput
									className=" border-b border-gray-200 py-2 px-2 text-base text-gray-700"
									placeholder="Password"
									secureTextEntry={true}
									onChangeText={handleChange("password")}
									value={values.password}
								/>
								{touched.password && errors.password && (
									<Text className="text-red-600 px-2 my-1 text-xs">
										{errors.password}
									</Text>
								)}
								<View className="flex-row justify-start items-center px-2 my-4 ">
									<BouncyCheckbox
										size={14}
										fillColor={Colors.primaryBlue}
										isChecked={values.checked}
										iconStyle={{ borderColor: "gray", borderRadius: 3, marginRight: -9 }}
										innerIconStyle={{ borderColor: "gray", borderRadius: 3 }}
										onPress={() => {
											values.checked = !values.checked;
											handleChange("checked");
										}}
										text="Remember me"
										textStyle={{
											color: "gray",
											fontSize: 14,
											textDecorationLine: "none",
										}}
									/>

									<TouchableOpacity className=" px-3 ">
										<Text className=" text-primaryBlue">Forgot password?</Text>
									</TouchableOpacity>
								</View>

								<View className=" my-2">
									<PrimaryButton onPress={handleSubmit}>Login</PrimaryButton>
								</View>
							</View>

							<View className=" flex-row p-4 mb-2 justify-center items-center">
								<Text className="flex">Don't have an account yet?</Text>
								<TouchableOpacity
									className=" px-2 flex"
									onPress={() => router.navigate("/(app)/(tabs)")}
								>
									<Text className="text-primaryBlue text-base font-semibold ">
										Sign up
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				)}
			</Formik>
		</View>
	);
}
