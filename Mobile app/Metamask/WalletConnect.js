import "@walletconnect/react-native-compat";
import { WagmiProvider } from "wagmi";
import { sepolia } from "@wagmi/core/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
	createAppKit,
	defaultWagmiConfig,
	AppKit,
} from "@reown/appkit-wagmi-react-native";

// 0. Setup queryClient
const queryClient = new QueryClient();

// 1. Get projectId at https://cloud.reown.com
const projectId = "ef8575faa68ff415bfe22a4f3f090665";

// 2. Create config
const metadata = {
	name: "AppKit RN",
	description: "AppKit RN Example",
	url: "https://reown.com/appkit",
	icons: ["https://avatars.githubusercontent.com/u/179229932"],
	redirect: {
		native: "YOUR_APP_SCHEME://",
		universal: "YOUR_APP_UNIVERSAL_LINK.com",
	},
};

const chains = [sepolia];

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create modal
createAppKit({
	projectId,
	chains,
	wagmiConfig,
	enableAnalytics: true, // Optional - defaults to your Cloud configuration
});

export default function Web3({ children }) {
	return (
		<WagmiProvider config={wagmiConfig}>
			<QueryClientProvider client={queryClient}>
				{children}
				<AppKit />
			</QueryClientProvider>
		</WagmiProvider>
	);
}
