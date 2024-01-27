import { useState } from "react";
import CurrencyInput from "./Components/CurrencyInput";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
export default function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
    >
      <div>
        <img
          className="w-full max-w-md  border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30 my-4 mx-4"
          src="data:image/jpeg;base64,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"
          alt=""
        />
      </div>
      <div>
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <CurrencyInput
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <CurrencyInput
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
