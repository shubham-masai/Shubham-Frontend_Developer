import './App.css'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import IDOSection from './components/IDOSection'
import Introduction from './components/Introduction'
import Navbar from './components/Navbar'
import Roadmap from './components/Roadmap'
import Tokenomix from './components/Tokenomix'

import { createWeb3Modal } from "@web3modal/wagmi1/react";
import { walletConnectProvider, EIP6963Connector } from "@web3modal/wagmi1";

import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { mainnet } from "viem/chains";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { InjectedConnector } from "wagmi/connectors/injected";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";

const projectId = "59597e7d6e3debd88d123ca0d4d6ccba";

// 2. Create wagmiConfig
const { chains, publicClient } = configureChains(
  [mainnet],
  [walletConnectProvider({ projectId }), publicProvider()]
);

const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: [
    new WalletConnectConnector({
      chains,
      options: { projectId, showQrModal: false, metadata },
    }),
    new EIP6963Connector({ chains }),
    new InjectedConnector({ chains, options: { shimDisconnect: true } }),
    new CoinbaseWalletConnector({
      chains,
      options: { appName: metadata.name },
    }),
  ],
  publicClient,
});

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains });
function App() {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <Navbar />
        <HeroSection />
        <Introduction />
        <IDOSection />
        <Tokenomix />
        <Roadmap />
        <FAQ />
        <Footer />
      </WagmiConfig>
    </>
  )
}

export default App
