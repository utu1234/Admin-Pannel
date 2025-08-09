import React from 'react';
import Table from '../components/Table';

const refundData = [
  ['TXN001', 'Rohan', '₹500', 'Pending'],
  ['TXN002', 'Priya', '₹1200', 'Completed'],
  ['TXN003', 'Amit', '₹300', 'Rejected'],
  ['TXN004', 'Neha', '₹700', 'Completed'],
  ['TXN005', 'Karan', '₹1000', 'Pending'],
  ['TXN006', 'Sita', '₹450', 'Completed'],
];

const statusColors = {
  Pending: 'bg-yellow-100 text-yellow-800',
  Completed: 'bg-green-100 text-green-800',
  Rejected: 'bg-red-100 text-red-800',
};

export default function Refund() {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900">Refunds</h2>
      <Table
        columns={['Txn ID', 'User', 'Amount', 'Status']}
        data={refundData.map(([txn, user, amount, status]) => [
          txn,
          user,
          amount,
          <span
            key={txn}
            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${statusColors[status]}`}
          >
            {status}
          </span>,
        ])}
        className="shadow rounded-lg"
      />
    </div>
  );
}
