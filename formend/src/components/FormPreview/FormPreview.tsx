import { useForm } from 'react-hook-form';
import { type FormElement } from '../../types';

interface FormPreviewProps {
  formTitle: string;
  formDescription: string;
  formElements: FormElement[];
}

export default function FormPreview({
  formTitle,
  formDescription,
  formElements,
}: FormPreviewProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log('Form submitted:', data);
  };

  const validElements = formElements.filter(
    (element) =>
      element.data &&
      'label' in element.data &&
      element.data.label.trim() !== ''
  );

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-sm">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{formTitle}</h1>
          <p className="text-gray-600">{formDescription}</p>
        </div>

        {validElements.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg
                className="mx-auto h-16 w-16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No form fields to preview
            </h3>
            <p className="text-gray-500">
              Add some form fields in the editor to see the preview.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Field components will be added in next commit */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
