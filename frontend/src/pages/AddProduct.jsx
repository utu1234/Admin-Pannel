import React from 'react';
import FormInput from '../components/FormInput';
import FileUpload from '../components/FileUpload';

export default function AddProduct() {
  return (
    <div className="max-w-2xl mx-auto bg-white p-10 rounded-3xl shadow-[0_10px_30px_rgba(59,130,246,0.1)]">
      <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-900 tracking-tight">
        Add Product
      </h2>
      <form className="space-y-8">
        <FormInput
          label="Product Name"
          placeholder="e.g. Paracetamol"
          className="focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <FormInput
          label="Dose"
          placeholder="e.g. 500 mg"
          className="focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <FormInput
          label="Price"
          placeholder="e.g. 50"
          type="number"
          min="0"
          step="any"
          className="focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />

        <div>
          <label className="block mb-3 text-gray-800 font-semibold text-lg">Upload Image</label>
          <div className="border-2 border-dashed border-blue-300 rounded-xl p-6 hover:border-blue-500 transition cursor-pointer max-w-xs mx-auto">
            <FileUpload />
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="inline-block w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold px-8 py-3 rounded-2xl shadow-lg hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
