import {
  type FormElement,
  type TextFieldData,
  type ParagraphData,
  type CheckboxData,
  type SelectData,
} from '../../types';
import TextField from '../FormEditing/editors/TextField';
import ParagraphField from '../FormEditing/editors/ParagraphField';
import CheckBox from '../FormEditing/editors/CheckBox';
import Select from '../FormEditing/editors/Select';

interface AboutFormProps {
  formElements: FormElement[];
  formTitle: string;
  formDescription: string;
  onRemoveElement: (id: string) => void;
  onUpdateElement: (
    id: string,
    data: TextFieldData | ParagraphData | CheckboxData | SelectData
  ) => void;
  onUpdateFormTitle: (title: string) => void;
  onUpdateFormDescription: (description: string) => void;
}

export default function AboutForm({
  formElements,
  formTitle,
  formDescription,
  onRemoveElement,
  onUpdateElement,
  onUpdateFormTitle,
  onUpdateFormDescription,
}: AboutFormProps) {
  return (
    <div className="bg-white p-8 rounded-lg">
      {/* Editable Form Header */}
      <div className="mb-8">
        <input
          type="text"
          value={formTitle}
          onChange={(e) => onUpdateFormTitle(e.target.value)}
          className="text-3xl font-bold text-gray-900 mb-2 w-full border-none outline-none bg-transparent placeholder-gray-400"
          placeholder="Form Title"
        />
        <input
          type="text"
          value={formDescription}
          onChange={(e) => onUpdateFormDescription(e.target.value)}
          className="text-gray-600 w-full border-none outline-none bg-transparent placeholder-gray-400"
          placeholder="Form description"
        />
      </div>

      {/* Form Fields */}
      <div className="space-y-6">
        {formElements.length === 0 ? (
          <div className="text-center py-12 text-gray-400">
            <p>Add form elements from the sidebar to get started</p>
          </div>
        ) : (
          formElements.map((element) => {
            switch (element.type) {
              case 'text':
                return (
                  <TextField
                    key={element.id}
                    id={element.id}
                    initialData={element.data as TextFieldData}
                    onDelete={onRemoveElement}
                    onChange={onUpdateElement}
                  />
                );
              case 'paragraph':
                return (
                  <ParagraphField
                    key={element.id}
                    id={element.id}
                    initialData={element.data as ParagraphData}
                    onDelete={onRemoveElement}
                    onChange={onUpdateElement}
                  />
                );
              case 'checkbox':
                return (
                  <CheckBox
                    key={element.id}
                    id={element.id}
                    initialData={element.data as CheckboxData}
                    onDelete={onRemoveElement}
                    onChange={onUpdateElement}
                  />
                );
              case 'select':
                return (
                  <Select
                    key={element.id}
                    id={element.id}
                    initialData={element.data as SelectData}
                    onDelete={onRemoveElement}
                    onChange={onUpdateElement}
                  />
                );
              default:
                return null;
            }
          })
        )}
      </div>
    </div>
  );
}
