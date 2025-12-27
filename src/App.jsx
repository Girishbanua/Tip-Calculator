import { useState } from "react";
import "./index.css";
const App = () => {
  const [billAmnt, setBillAmnt] = useState(0);
  const [pepl, setPepl] = useState(0);
  const [tip, setTip] = useState("0.00");
  const [perPrsn, setPerprsn] = useState("0.00");
  let tipPercnt = 0;

  function handleBillAmount(e) {
    let bill = Number(e.target.value).toFixed(2);
    setBillAmnt(bill);
    console.log(billAmnt);
  }

  function handlebtnclick(e) {
    tipPercnt = Number(e.target.id) / 100;
    setTip(billAmnt * tipPercnt);
    console.log(tip);
  }

  function handleCustomTip(e) {
    tipPercnt = Number(e.target.value) / 100;
    setTip(billAmnt * tipPercnt);
    console.log(tip);
  }

  function handlePeople(e) {
    let peps = Number(e.target.value);
    setPepl(peps);
    console.log(pepl);
  }

  function calculateTotal(e) {
    e.preventDefault();
    if (billAmnt <= 0) {
      alert("Please enter the bill amount");
      return;
    }
    if (pepl <= 0) {
      alert("Please enter the number of people");
      return;
    }
    console.log(tip, billAmnt, pepl);
    let perPerson = (Number(billAmnt) + Number(tip)) / Number(pepl);
    setPerprsn(perPerson.toFixed(2));
    console.log(perPerson);
  }

  return (
    <div className="bg-white min-h-screen sm:min-h-0 flex flex-col gap-3 sm:flex-row w-full sm:max-w-[900px] p-4 sm:p-6 rounded-3xl">
      {/* ------------------- left side of the box ------------------- */}
      <div className="left flex-1">
        {/* ----------------- bill_input -----------------*/}
        <form onSubmit={calculateTotal} className="mt-3">
          <div className="bill_input">
            <label htmlFor="bill">Bill</label>
            <input
              type="number"
              placeholder="₹"
              id="bill"
              onChange={handleBillAmount}
              required
            />
          </div>
          {/* ----------------- select_tip ----------------- */}
          <div className="select_tip">
            <label htmlFor="tip">Select Tip %</label>
            <div className="tip_percents grid grid-cols-2 sm:grid-cols-3 gap-3">
              <button type="button" id="5" onClick={handlebtnclick}>
                5%
              </button>
              <button type="button" id="10" onClick={handlebtnclick}>
                10%
              </button>
              <button type="button" id="15" onClick={handlebtnclick}>
                15%
              </button>
              <button type="button" id="25" onClick={handlebtnclick}>
                25%
              </button>
              <button type="button" id="50" onClick={handlebtnclick}>
                50%
              </button>
              <input
                className="w-full h-[50px] text-center"
                id="tip"
                placeholder="custom"
                onChange={handleCustomTip}
              />
            </div>
          </div>
          <div className="nop">
            <label htmlFor="num_pep">Number of People</label>
            <input
              type="number"
              id="num_pep"
              placeholder="0"
              onChange={handlePeople}
              required
            />
          </div>
        </form>
      </div>
      {/* ------------------- right side of the box ------------------- */}
      <div className="right bg-sky-950 flex-1 mt-6 sm:mt-0 rounded-3xl p-5 sm:p-8 flex flex-col justify-between">
        <div className="up w-full flex flex-col gap-8 mt-[20px]">
          <div>
            <p>
              Tip Amount <br />
              <span className="text-gray-500">/ person</span>
            </p>
            <h1>₹{Number(tip).toFixed(2)}</h1>
          </div>
          <div>
            <p>
              Total
              <br />
              <span className="text-gray-500">/ person</span>
            </p>
            <h1>₹{Number(perPrsn).toFixed(2)}</h1>
          </div>
          <div>
            <p>Round Up total</p>
            <h1>₹{Math.round(Number(perPrsn))}</h1>
          </div>
        </div>
        <button
          type="submit"
          className="right_btn bg-sky-700 w-full"
          onClick={calculateTotal}
        >
          CALCULATE
        </button>
      </div>
    </div>
  );
};

export default App;
