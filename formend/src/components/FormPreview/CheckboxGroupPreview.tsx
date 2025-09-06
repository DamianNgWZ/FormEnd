/* eslint-disable @typescript-eslint/no-explicit-any */
import { type CheckboxData } from '../../types';

interface CheckboxGroupPreviewProps {
  element: {
    id: string;
    data: CheckboxData;
  };
  register: any;
  errors: any;
}

export default function CheckboxGroupPreview({
  element,
  register,
  errors,
}: CheckboxGroupPreviewProps) {
  const data = element.data;
  const validOptions = data.options.filter((option) => option.trim() !== '');

  if (validOptions.length === 0) return null;

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {data.label} {data.required && <span className="text-red-500">*</span>}
      </label>
      <div className="space-y-2">
        {validOptions.map((option, idx) => (
          <div key={idx} className="flex items-center">
            <input
              type="checkbox"
              value={option}
              {...register(element.id, {
                required: data.required
                  ? 'Please select at least one option'
                  : false,
              })}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label className="ml-2 text-sm text-gray-700">{option}</label>
          </div>
        ))}
      </div>
      {errors[element.id] && (
        <p className="text-red-500 text-sm mt-1">
          {errors[element.id].message}
        </p>
      )}
    </div>
  );
}
