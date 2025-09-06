import Nav from '../components/ui/Nav';
import AddFormElements from '../components/FormCreation/AddFormElements';
import AboutForm from '../components/FormCreation/AboutForm';
import { useState } from 'react';
import {type FormElement} from '../types';

export default function MainPage() {
  const [formElements, setFormElements] = useState<FormElement[]>([]);

  const addElement = (type: 'text' | 'paragraph' | 'checkbox' | 'select') => {
    const newElement: FormElement = {
      id: crypto.randomUUID(),
      type,
    };
    setFormElements((prev) => [...prev, newElement]);
  }

  const removeElement = (id: string) => {
    setFormElements((prev) => prev.filter((el) => el.id !== id));
  }

  return (
    <div className="min-h-screen bg-surface-2">
      <Nav />
      <div className="max-w-6xl mx-auto p-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3">
            <AddFormElements onAddElement={addElement}/>
          </div>
          <div className="lg:w-2/3">
            <AboutForm 
              formElements={formElements}
              onRemoveElement={removeElement}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
