import React from 'react';
import Table from '../components/Table';

const sample = [
  ['Cardiology', '15 doctors'],
  ['Pediatrics', '9 doctors'],
  ['Orthopedics', '12 doctors'],
  ['Neurology', '8 doctors'],
  ['Dermatology', '6 doctors'],
  ['Gynecology', '7 doctors'],
  ['Ophthalmology', '5 doctors'],
];

export default function Specialties() {
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow p-6">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900">Specialties</h2>
      <Table
        columns={["Specialty", "Count"]}
        data={sample}
        className="shadow rounded-lg"
      />
    </div>
  );
}
