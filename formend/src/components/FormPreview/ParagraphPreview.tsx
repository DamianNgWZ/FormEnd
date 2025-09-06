/* eslint-disable @typescript-eslint/no-explicit-any */
import { type ParagraphData } from '../../types';

interface ParagraphPreviewProps {
  element: {
    id: string;
    data: ParagraphData;
  };
  register: any;
  errors: any;
}

export default function ParagraphPreview({
  element,
  register,
  errors,
}: ParagraphPreviewProps) {
  const data = element.data;
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {data.label} {data.required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        placeholder={data.placeholder}
        rows={4}
        {...register(element.id, {
          required: data.required ? 'This field is required' : false,
        })}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
      />
      {errors[element.id] && (
        <p className="text-red-500 text-sm mt-1">
          {errors[element.id].message}
        </p>
      )}
    </div>
  );
}
