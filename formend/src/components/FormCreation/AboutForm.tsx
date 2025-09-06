import { useState } from 'react';

export default function AboutForm() {
  const [formTitle, setFormTitle] = useState('');
  const [formDescription, setFormDescription] = useState('');
  const [formFields, setFormFields] = useState<string[]>([]);

  return (
    <div className="mb-8 bg-white p-6 rounded-lg border border-gray-200">
      <input
        type="text"
        value={formTitle}
        onChange={(e) => setFormTitle(e.target.value)}
        placeholder="About Form"
        className="w-full text-2xl font-bold mb-2 bg-transparent outline-none"
      />
      <textarea
        value={formDescription}
        onChange={(e) => setFormDescription(e.target.value)}
        placeholder="Form Description"
        rows={2}
        className="w-full text-gray-500 mb-6 resize-none bg-transparent outline-none"
      />
      {/* Form Fields Section */}
      {formFields.length === 0 ? (
        <div className="min-h-32 border-2 border-dashed border-gray-300 rounded-lg p-6 flex items-center justify-center">
          <p className="text-text-secondary text-center">
            No form fields added yet. <br />
            Use the panel on the left to add form elements.
          </p>
        </div>
      ) : (
        <div>{/* TODO: Render form fields here */}</div>
      )}
    </div>
  );
}
