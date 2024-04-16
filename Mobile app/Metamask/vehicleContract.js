import { Text, View, StyleSheet, Pressable } from "react-native";
import {
	useContractRead,
	useContractWrite,
	usePrepareContractWrite,
} from "wagmi";
import addVehicleABI from "./ABI's/addVehicleABI.json";

export function AddVehicle(
	vehicleID,
	phoneNum,
	buyDate,
	model,
	plateNum,
	insuranceValidity,
	pollutionValidity
) {
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

	// useEffect(() => {
	// 	if (isLoading) {
	// 		console.log("Loading...");
	// 	} else if (isSuccess) {
	// 		console.log("Vehicle added successfully", JSON.stringify(data));
	// 		Alert.alert("Vehicle added successfully.", [
	// 			{ text: "OK", style: "cancel" },
	// 		]);
	// 	}
	// }, [isLoading, isSuccess, data]);

	// try {
	// 	write?.();
	// 	if (isSuccess) {
	// 		console.log(JSON.stringify(data));
	// 	}
	// } catch (error) {
	// 	console.log(error);
	// }

	// return isSuccess;

	// return (
	// 	<View style={styles.marginVertical}>
	// 		{/* <View style={styles.marginVertical}>
	//       {isLoading && <Text>Loading</Text>}
	//       {isSuccess && <Text>Name: {contractName?.toString()}</Text>}
	//       {isError && <Text>Error reading contract</Text>}
	//     </View> */}

	// 		<Pressable style={styles.button} onPress={() => write?.()}>
	// 			<Text style={styles.centerText}>Mint</Text>
	// 		</Pressable>
	// 		{isLoading && <Text>Check Wallet</Text>}
	// 		<Text style={{ textAlign: "center", marginVertical: 10 }}>Transaction:</Text>
	// 		{isSuccess && (
	// 			<Text style={{ textAlign: "center" }}>{JSON.stringify(data)}</Text>
	// 		)}
	// 	</View>
	// );
}



const styles = StyleSheet.create({
	heading: {
		fontSize: 20,
	},
	marginVertical: {
		flex: 1,
		marginVertical: 10,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	centerText: {
		fontSize: 16,
		textAlign: "center",
		color: "#fff",
	},
	button: {
		backgroundColor: "#57B36A",
		padding: 10,
		width: 140,
		borderRadius: 32,
	},
});
