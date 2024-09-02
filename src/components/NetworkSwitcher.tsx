import { FC } from "react";
import dynamic from "next/dynamic";
import { useNetworkConfiguration } from "../contexts/NetworkConfigurationProvider";

//INTERNAL IMPORT
import NetworkSwitcherSVG from "./SVG/NetworkSwitcherSVG";

const NetworkSwitcher: FC = () => {
  const { networkConfiguration, setNetworkConfiguration } =
    useNetworkConfiguration();

  console.log(networkConfiguration);

  return (
    <>
      <input type="checkbox" id="checkbox" />
      <label className="switch">
      <select
  value={networkConfiguration}
  onChange={(e) => setNetworkConfiguration(e.target.value || "devnet")}
  className="select max-w-xs border-none bg-transparent outline-0 px-4 py-2 rounded-md shadow-md text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
>
  <option value="mainnet-beta">main</option>
  <option value="devnet">dev</option>
  <option value="testnet">test</option>
</select>

        <NetworkSwitcherSVG />
      </label>
    </>
  );
};

export default dynamic(() => Promise.resolve(NetworkSwitcher), {
  ssr: false,
});
