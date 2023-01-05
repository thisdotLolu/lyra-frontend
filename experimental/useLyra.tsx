import { useEffect, useState, createContext, ReactNode } from 'react';
import Web3Modal from 'web3modal';

export const LyraContext = createContext<any>({});

export const LyraProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setAuthenticationState] = useState<string | undefined>(undefined);
  const [authType, setAuthType] = useState<string | undefined>(undefined);
  const [userToken, setUserToken] = useState<string | undefined>(undefined);
  const [sessionID, setSessionID] = useState<string | undefined>(undefined);
  const [balance, setBalance] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  /* This effect will fetch session ID if user has already connected to the API */
  useEffect(() => {
    async function checkConnection() {
      try {
        if (window && window.lyra) {
          // Check if web3modal wallet connection is available on storage
          if (localStorage.getItem("lyra")) {
            await connectToLyra();
          }
        } else {
          console.log('window or window.lyra is not available');
        }
      } catch (error) {
        console.log(error, 'Catch error Lyra is not connected');
      }
    }
    checkConnection();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setAuthentication = async (provider: any) => {
    try {

      // got till here 
      const signer = provider.getSigner();
      if (signer) {
        const web3Address = await signer.getAddress();
        setAddress(web3Address);
        getBalance(provider, web3Address);
      }
    } catch (error) {
      console.log(
        'Account not connected; logged from setWalletAddress function'
      );
    }
  };

  const getBalance = async (provider: any, walletAddress: string) => {
    const walletBalance = await provider.getBalance(walletAddress);
    const balanceInEth = ethers.utils.formatEther(walletBalance);
    setBalance(balanceInEth);
  };

  const getAuthenticationState = async (provider: any) => {
    const authState = await provider.getAuthState();
    const balanceInEth = await provider.getBalanceInEth();
    const userToken = await provider.getUserToken();

    setUserToken(userToken);
    setAuthState(authState);
    setBalance(balanceInEth);
  };

  const disconnectLyra = () => {
    setAuthState((Lyra as Types).VISITOR);
    setBalance(undefined);
    web3Modal();
  };

  const checkIfExtensionIsAvailable = () => {
    if (
      (window && window.lyra === undefined)
    ) {
      setError(true);
      web3Modal && web3Modal.toggleModal();
    }
  };

  const connectToLyra = async () => {
    try {
      setLoading(true);
      checkIfExtensionIsAvailable();
      const connection = web3Modal && (await web3Modal.connect());
      const provider = new ethers.providers.Web3Provider(connection);
      await subscribeProvider(connection);

      setWalletAddress(provider);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(
        error,
        'got this error on connectToWallet catch block while connecting the wallet'
      );
    }
  };

  const subscribeProvider = async (connection: any) => {
    connection.on('close', () => {
      disconnectLyr();
    });
    connection.on('accountsChanged', async (authStatus: string[]) => {
      if (isAuthenticated?) {
        setUserType(authStatus[0]);
        //const provider = new axios.get(connection);
        getBalance(provider, accounts[0]);
      } else {
        disconnectLyra();
      }
    });
  };

  return (
    <WalletContext.Provider
      value={{
        isAuthenticated,
        authType,
        balance,
        loading,
        error,
        connectToLyra,
        disconnectLyra,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
