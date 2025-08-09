import React, { useEffect, useState } from 'react';
import Table from '../components/Table';
import FormInput from '../components/FormInput';

const sampleWallet = {
  balance: 1250,
  currency: 'INR',
  transactions: [
    { type: 'accepted', amount: 500 },
    { type: 'pending', amount: 300 },
    { type: 'rejected', amount: 100 },
    { type: 'accepted', amount: 350 },
    { type: 'pending', amount: 0 },
    { type: 'accepted', amount: 0 },
  ],
};

const sampleReferrals = [
  { name: 'Rohan Kumar', email: 'rohan@mail.com', referralCode: 'RK123', status: 'Pending', reward: 0 },
  { name: 'Priya Singh', email: 'priya@mail.com', referralCode: 'PS456', status: 'Accepted', reward: 500 },
  { name: 'Amit Sharma', email: 'amit@mail.com', referralCode: 'AS789', status: 'Rejected', reward: 0 },
  { name: 'Neha Gupta', email: 'neha@mail.com', referralCode: 'NG012', status: 'Accepted', reward: 750 },
];

const statusColors = {
  Pending: 'text-yellow-600 font-semibold',
  Accepted: 'text-green-600 font-semibold',
  Rejected: 'text-red-600 font-semibold',
};

export default function ReferralWallet() {
  const [loading, setLoading] = useState(false);
  const [referrals, setReferrals] = useState(sampleReferrals);
  const [wallet, setWallet] = useState(sampleWallet);
  const [newRef, setNewRef] = useState({ name: '', email: '' });

  // Add Balance modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addAmount, setAddAmount] = useState('');

  const handleCreate = async (e) => {
    e.preventDefault();
    const created = { ...newRef, referralCode: `REF${Date.now()}`, status: 'Pending', reward: 0 };
    setReferrals(prev => [created, ...prev]);
    setNewRef({ name: '', email: '' });
  };

  const handleAddBalance = () => {
    const amountNum = parseFloat(addAmount);
    if (isNaN(amountNum) || amountNum <= 0) {
      alert('Please enter a valid positive amount');
      return;
    }
    // Update wallet balance and transactions locally
    setWallet((prev) => ({
      ...prev,
      balance: prev.balance + amountNum,
      transactions: [{ type: 'added', amount: amountNum }, ...prev.transactions],
    }));
    setAddAmount('');
    setIsModalOpen(false);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 p-6">
      {/* Wallet Card */}
      <div className="col-span-1 bg-white p-8 rounded-xl shadow-lg flex flex-col">
        <h3 className="text-2xl font-semibold mb-6 text-gray-900">Wallet</h3>
        <div className="text-center">
          <div className="text-sm text-gray-500 uppercase tracking-wide">Balance</div>
          <div className="text-5xl font-extrabold text-green-600 mt-2">₹ {wallet?.balance || 0}</div>
          <div className="text-sm text-gray-400 mt-1">Currency: {wallet?.currency || 'INR'}</div>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
        >
          Add Balance
        </button>

        <div className="mt-10">
          <h4 className="text-lg font-semibold text-gray-900 mb-3">Recent Transactions</h4>
          <ul className="space-y-3 max-h-64 overflow-y-auto">
            {(wallet?.transactions || []).slice(0, 6).map((t, i) => (
              <li
                key={i}
                className={`flex justify-between px-4 py-2 rounded-md shadow-sm
                  ${
                    t.type === 'accepted'
                      ? 'bg-green-100 text-green-700'
                      : t.type === 'pending'
                      ? 'bg-yellow-100 text-yellow-700'
                      : t.type === 'rejected'
                      ? 'bg-red-100 text-red-700'
                      : t.type === 'added'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}
              >
                <span className="capitalize font-medium">{t.type}</span>
                <span>₹ {t.amount}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Referrals List and Create Form */}
      <div className="col-span-2 bg-white p-8 rounded-xl shadow-lg flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-semibold text-gray-900">Referrals</h3>
          <div className="text-gray-500 font-semibold">Total: {referrals.length}</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <form
            onSubmit={handleCreate}
            className="space-y-6 bg-gray-50 p-6 rounded-lg shadow-inner"
            noValidate
          >
            <FormInput
              label="Name"
              value={newRef.name}
              onChange={(e) => setNewRef({ ...newRef, name: e.target.value })}
              placeholder="Referral name"
              required
            />
            <FormInput
              label="Email"
              value={newRef.email}
              onChange={(e) => setNewRef({ ...newRef, email: e.target.value })}
              placeholder="email@example.com"
              type="email"
              required
            />
            <button
              type="submit"
              className="w-full py-3 bg-accent hover:bg-accent-dark text-white rounded-lg font-semibold transition"
            >
              Create Referral
            </button>
          </form>

          <div className="bg-gray-50 p-6 rounded-lg shadow-inner text-gray-600 text-sm">
            <h4 className="font-semibold mb-4 text-gray-800">Quick Legend</h4>
            <ul className="space-y-3">
              <li>
                <strong className="text-yellow-600">Pending</strong> — waiting
              </li>
              <li>
                <strong className="text-green-600">Accepted</strong> — reward given
              </li>
              <li>
                <strong className="text-red-600">Rejected</strong> — not valid
              </li>
            </ul>
          </div>
        </div>

        <Table
          columns={["Name", "Email", "Code", "Status", "Reward"]}
          data={referrals.map((r) => [
            r.name,
            r.email,
            r.referralCode || r.code || "-",
            <span key={r.referralCode} className={statusColors[r.status] || ''}>{r.status || '-'}</span>,
            `₹ ${r.reward || 0}`,
          ])}
          className="shadow rounded-lg"
        />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-80 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Add Balance</h3>
            <input
              type="number"
              min="1"
              step="any"
              className="w-full px-3 py-2 border rounded-md mb-4"
              placeholder="Enter amount"
              value={addAmount}
              onChange={(e) => setAddAmount(e.target.value)}
            />
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleAddBalance}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
