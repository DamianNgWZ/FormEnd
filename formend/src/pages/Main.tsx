/* eslint-disable @typescript-eslint/no-explicit-any */
import Nav from '../components/ui/Nav';
import AddFormElements from '../components/FormCreation/AddFormElements';
import AboutForm from '../components/FormCreation/AboutForm';
import FormPreview from '../components/FormPreview/FormPreview';
import SubmissionSuccess from '../components/SubmissionSuccess';
import { useState } from 'react';
import {
  type FormElement,
  type TextFieldData,
  type ParagraphData,
  type CheckboxData,
  type SelectData,
} from '../types';

export default function MainPage() {
  const [formElements, setFormElements] = useState<FormElement[]>([]);
  const [formTitle, setFormTitle] = useState('About you');
  const [formDescription, setFormDescription] = useState(
    'Tell us about yourself'
  );
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<any>(null);

  const togglePreview = () => setIsPreviewMode(!isPreviewMode);

  const handleFormSubmission = (data: any) => {
    setSubmittedData(data);
    setIsSubmitted(true);
  };

  const backToForm = () => {
    setIsSubmitted(false);
    // Stay in preview mode
  };

  const backToEditor = () => {
    setIsSubmitted(false);
    setIsPreviewMode(false);
  };

  const addElement = (type: 'text' | 'paragraph' | 'checkbox' | 'select') => {
    let defaultData: TextFieldData | ParagraphData | CheckboxData | SelectData;

    switch (type) {
      case 'text':
        defaultData = { label: '', placeholder: '', required: false };
        break;
      case 'paragraph':
        defaultData = { label: '', placeholder: '', required: false };
        break;
      case 'checkbox':
        defaultData = { label: '', options: [''], required: false };
        break;
      case 'select':
        defaultData = { label: '', options: [''], required: false };
        break;
    }

    const newElement: FormElement = {
      id: crypto.randomUUID(),
      type,
      data: defaultData,
    };
    setFormElements((prev) => [...prev, newElement]);
  };

  const removeElement = (id: string) => {
    setFormElements((prev) => prev.filter((el) => el.id !== id));
  };

  const updateElement = (
    id: string,
    data: TextFieldData | ParagraphData | CheckboxData | SelectData
  ) => {
    setFormElements((prev) =>
      prev.map((el) => (el.id === id ? { ...el, data } : el))
    );
  };

  // Determine if preview should be disabled (when no valid fields exist)
  const canPreview = formElements.some(
    (element) =>
      element.data &&
      'label' in element.data &&
      element.data.label.trim() !== ''
  );

  return (
    <div className="min-h-screen bg-surface-2">
      <Nav
        isPreviewMode={isPreviewMode}
        onTogglePreview={togglePreview}
        disablePreviewToggle={!canPreview || isSubmitted}
      />
      <div className="max-w-6xl mx-auto p-8">
        {isSubmitted ? (
          <SubmissionSuccess
            submittedData={submittedData}
            onBackToForm={backToForm}
            onBackToEditor={backToEditor}
          />
        ) : isPreviewMode ? (
          <FormPreview
            formTitle={formTitle}
            formDescription={formDescription}
            formElements={formElements}
            onFormSubmission={handleFormSubmission}
          />
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/3">
              <AddFormElements onAddElement={addElement} />
            </div>
            <div className="lg:w-2/3">
              <AboutForm
                formElements={formElements}
                formTitle={formTitle}
                formDescription={formDescription}
                onRemoveElement={removeElement}
                onUpdateElement={updateElement}
                onUpdateFormTitle={setFormTitle}
                onUpdateFormDescription={setFormDescription}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
