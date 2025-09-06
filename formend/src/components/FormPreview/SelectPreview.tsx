/* eslint-disable @typescript-eslint/no-explicit-any */
import { type SelectData } from '../../types';

interface SelectPreviewProps {
  element: {
    id: string;
    data: SelectData;
  };
  register: any;
  errors: any;
}

export default function SelectPreview({
  element,
  register,
  errors,
}: SelectPreviewProps) {
  const data = element.data;
  const validOptions = data.options.filter(option => option.trim() !== '');

  if (validOptions.length === 0) return null;

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {data.label} {data.required && <span className="text-red-500">*</span>}
      </label>
      <select
        {...register(element.id, {
          required: data.required ? 'Please select an option' : false,
        })}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="">Select an option...</option>
        {validOptions.map((option, idx) => (
          <option key={idx} value={option}>
            {option}
          </option>
        ))}
      </select>
      {errors[element.id] && (
        <p className="text-red-500 text-sm mt-1">
          {errors[element.id].message}
        </p>
      )}
    </div>
  );
}
