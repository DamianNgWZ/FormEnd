/* eslint-disable @typescript-eslint/no-explicit-any */

interface SubmissionSuccessProps {
  submittedData: any;
  onBackToForm: () => void;
  onBackToEditor: () => void;
}

export default function SubmissionSuccess({
  submittedData,
  onBackToForm,
  onBackToEditor,
}: SubmissionSuccessProps) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-sm text-center">
        {/* Success Icon */}
        <div className="mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Form submitted successfully!
          </h1>
          <p className="text-gray-600">Thank you for your submission.</p>
        </div>

        {/* Submitted Data */}
        <div className="bg-gray-100 rounded-lg p-4 mb-6 text-left">
          <pre className="text-sm text-gray-800 whitespace-pre-wrap font-mono overflow-x-auto">
            {JSON.stringify(submittedData, null, 2)}
          </pre>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={onBackToEditor}
            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
          >
            Back to editor
          </button>
          <button
            onClick={onBackToForm}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to form
          </button>
        </div>
      </div>
    </div>
  );
}
