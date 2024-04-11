import { Text, View, StyleSheet, Pressable } from "react-native";
import {
	useContractRead,
	useContractWrite,
	usePrepareContractWrite,
} from "wagmi";
import mintABI from "../abis/MintABI.json";

export default function MintSection() {
	// Writing to the Contract
	const { config } = usePrepareContractWrite({
		address: "0x6E92334551801B45f4be6Af67933c51c1f902206",
		abi: mintABI,
		functionName: "addVehicle",
		args: ["e3732", 123, "3272", "238", "238yr", "r238yi", "r32ii"],
	});

	const { data, isLoading, isSuccess, write } = useContractWrite(config);

	return (
		<View style={styles.marginVertical}>
			{/* <View style={styles.marginVertical}>
        {isLoading && <Text>Loading</Text>}
        {isSuccess && <Text>Name: {contractName?.toString()}</Text>}
        {isError && <Text>Error reading contract</Text>}
      </View> */}

			<Pressable style={styles.button} onPress={() => write?.()}>
				<Text style={styles.centerText}>Mint</Text>
			</Pressable>
			{isLoading && <Text>Check Wallet</Text>}
			<Text style={{ textAlign: "center", marginVertical: 10 }}>Transaction:</Text>
			{isSuccess && (
				<Text style={{ textAlign: "center" }}>{JSON.stringify(data)}</Text>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	heading: {
		fontSize: 20,
	},
	marginVertical: {
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
