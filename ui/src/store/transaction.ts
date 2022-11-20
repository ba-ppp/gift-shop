import { ethers } from "ethers";
import { defineStore } from "pinia";
import { ref } from "vue";

declare global {
  interface Window {
    ethereum?: any;
  }
}

const { ethereum } = window;

export const useTransaction = defineStore("transaction", () => {
  const account = ref(null);
  const isLoading = ref(false);

  const sendTransaction = async (priceValue: string) => {
    try {
      if (!ethereum) {
        alert("Please install MetaMask");
        return;
      }

      // send fee
      const parsedAmount = ethers.utils.parseEther(priceValue);

      await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: account.value,
            to: "0x1B5929Ee2F17485284a8602FaABa2193dBFc26DF",
            value: parsedAmount._hex,
            gas: "0x5208",
          },
        ],
      });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const connectWallet = async () => {
    if (!ethereum) {
      alert("Please install MetaMask");
      return;
    }
    try {
      isLoading.value = true;
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      account.value = accounts[0];
    } catch (error) {
      console.log(error);
    } finally {
      isLoading.value = false;
    }
  };

  const checkConnected = async () => {
    if (!ethereum) {
      alert("Please install Metamask");
      return false;
    }
    try {
      isLoading.value = true;
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length) {
        account.value = accounts[0];
      } else {
        connectWallet();
      }
    } catch (error) {
      console.log(error);
    } finally {
      isLoading.value = false;
    }
  };
  return {
    account,
    isLoading,
    connectWallet,
    sendTransaction,
    checkConnected,
  };
});
