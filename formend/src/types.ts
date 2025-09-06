export interface TextFieldData {
  label: string;
  placeholder: string;
  required: boolean;
}

export interface ParagraphData {
  label: string;
  placeholder: string;
  required: boolean;
}

export interface CheckboxData {
  label: string;
  options: string[];
  required: boolean;
}

export interface SelectData {
  label: string;
  options: string[];
  required: boolean;
}

export type FormElement = {
  id: string;
  type: 'text' | 'paragraph' | 'checkbox' | 'select';
  data?: TextFieldData | ParagraphData | CheckboxData | SelectData;
};
