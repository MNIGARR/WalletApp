import React, { useState } from "react";
import { data } from "../../Data";
import "./Main.css";
import CurrentWallet from "../Wallet/CurrentWallet";

export default function Main() {
  const [wallets, setWallets] = useState(data);
  const [current, setCurrent] = useState(null);
  const [walletName, setWalletName] = useState("");
  const [incomeName, setIncomeName] = useState("");
  const [incomeAmount, setIncomeAmount] = useState("");
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");

  function setCurrentWallet(id) {
    const item = wallets.find((w) => w.id === id);
    setCurrent(item);
  }

  function handleClickIncome() {
    const newIncome = {
      name: incomeName,
      moneyAmount: incomeAmount,
    };
    const updatedCurrent = {
      ...current,
      incomes: [...current.incomes, newIncome],
    };
    const updatedWallets = wallets.map((wallet) =>
      wallet.id === current.id ? updatedCurrent : wallet
    );
    setWallets(updatedWallets);
    setCurrent(updatedCurrent);
    setIncomeName("");
    setIncomeAmount("");
  }

  function handleClickExpense() {
    const newExpense = {
      name: expenseName,
      money: expenseAmount,
    };
    const updatedCurrent = {
      ...current,
      expenses: [...current.expenses, newExpense],
    };
    const updatedWallets = wallets.map((wallet) =>
      wallet.id === current.id ? updatedCurrent : wallet
    );
    setWallets(updatedWallets);
    setCurrent(updatedCurrent);
    setExpenseName("");
    setExpenseAmount("");
  }

  function handleClickWallet() {
    const newWallet = {
      id: wallets.length + 1,
      name: walletName,
      currency: "USD",
      incomes: [],
      expenses: [],
    };
    setWallets([...wallets, newWallet]);
    setWalletName("");
  }

  return (
    <div className="MainPart">
      <div>
        {wallets.map((w, i) => (
          <div key={i}>
            <div id="card" onClick={() => setCurrentWallet(w.id)}>
              <div>{w.name}</div>
              <div id="card-currency">{w.currency}</div>
            </div>
          </div>
        ))}
      </div>
      {current && (
        <div id="card-info">
          <div id="card-incomes">
            <div>Incomes:</div>
            <ul>
              {current.incomes.map((income, index) => (
                <li key={index}>
                  {income.name}: {income.moneyAmount}
                </li>
              ))}
            </ul>
            <input
              id="input"
              placeholder="Enter your income name"
              value={incomeName}
              onChange={(e) => setIncomeName(e.target.value)}
            />
            <input
              id="input"
              placeholder="Enter your income amount"
              value={incomeAmount}
              onChange={(e) => setIncomeAmount(e.target.value)}
            />
            <button
              onClick={handleClickIncome}
              id="button-style"
              disabled={!incomeName.trim() || !incomeAmount.trim()}
            >
              Add New Income
            </button>
          </div>
          <div>
            <div>Expenses:</div>
            <ul>
              {current.expenses.map((expense, index) => (
                <li key={index}>
                  {expense.name}: {expense.money}
                </li>
              ))}
            </ul>
            <input
              id="input"
              placeholder="Enter your expense name"
              value={expenseName}
              onChange={(e) => setExpenseName(e.target.value)}
            />
            <input
              id="input"
              placeholder="Enter your expense amount"
              value={expenseAmount}
              onChange={(e) => setExpenseAmount(e.target.value)}
            />
            <button
              onClick={handleClickExpense}
              id="button-style"
              disabled={!expenseName.trim() || !expenseAmount.trim()}
            >
              Add New Expense
            </button>
          </div>
        </div>
      )}
      <input
        id="input"
        placeholder="Enter wallet name"
        value={walletName}
        onChange={(e) => setWalletName(e.target.value)}
      />
      <button
        onClick={handleClickWallet}
        id="button-style"
        disabled={!walletName.trim()}
      >
        Add New Wallet
      </button>
    </div>
  );
}
