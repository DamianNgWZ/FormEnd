# FormEnd

A dynamic form builder built with React, TypeScript, and Tailwind CSS. Create, preview, and test forms with an intuitive drag-and-drop interface.

## Technical Deep Dive

Here's an overview of the key architectural and implementation decisions made for FormEnd.

### State Management

The application maintains state using React's `useState` hook with several key state variables:

- **`formElements`**: Stores the list of form elements, each with a unique `id` generated using `crypto.randomUUID()` and type-specific data objects (TextFieldData, ParagraphData, CheckboxData, SelectData). This ensures each form element can be uniquely identified and modified.
- **`formTitle` and `formDescription`**: Control the overall form metadata that appears at the top of both the builder and preview.
- **UI States**: 
  - `isPreviewMode`: Toggles between the form builder and live preview
  - `isSubmitted`: Tracks form submission status to show success screen
  - `submittedData`: Stores the actual form submission data for display and logging

### Core Architecture

**Component-Based Architecture**: The application follows a modular component structure with clear separation of concerns:
- Form building components (`AddFormElements`, `AboutForm`)
- Preview components (`FormPreview`, field-specific preview components)
- Navigation and UI components (`Nav`, `SubmissionSuccess`)

**Controlled Components Pattern**: Form inputs in the builder use controlled components backed by state, ensuring real-time synchronization between the builder and preview. Changes in the builder immediately reflect in the preview through shared state. An uncontrollable component approach was considered for performance. However, that approach was not taken given the scale of this form.

**React Hook Form Integration**: The preview mode leverages `react-hook-form` for robust form handling, validation, and submission. This provides a production-ready form experience with proper error handling and data collection.

### Dynamic Form Rendering

The preview system dynamically renders form fields based on the `formElements` configuration:
- Iterates through form elements and conditionally renders appropriate preview components
- Type assertions ensure TypeScript safety when passing element data to specific field components
- Validation rules are applied based on the `required` field in each element's configuration

### Single-Page Application (SPA) Architecture

Navigation between builder, preview, and success states is handled client-side through React conditional rendering. The application maintains all state in the top-level `MainPage` component, ensuring no data loss when switching between modes.

# Component Structure

The application uses a modular architecture for scalability and clarity. Below is a detailed breakdown of the structure based on your actual directories and files:

---

## src/pages/
- **MainPage.tsx**  
  The primary entry point for the UI, orchestrating the form builder, preview, and submission success states. Controls core application state and view transitions.

---

## src/components/

### FormCreation/
Components for form creation and sidebar controls:
- **AboutForm.tsx**  
  The main interface for entering and editing form title, description, and managing the list of form elements.
- **AddFormElements.tsx**  
  Sidebar controls for adding new field types to the form.
- **ElementButton.tsx**  
  Reusable button component used in the sidebar for each form field type.

### FormEditing/
Editor components for managing form fields and their properties:
- **editors/**
  - **FieldEditor.tsx**  
    Generic wrapper for form field configuration UI.
  - **CheckBox.tsx**  
    Editor for checkbox group field properties.
  - **ParagraphField.tsx**  
    Editor for paragraph (textarea) field settings.
  - **Select.tsx**  
    Editor for dropdown/select field settings.
  - **TextField.tsx**  
    Editor for text input field settings.

### FormPreview/
Components for rendering the live preview of the form:
- **FormPreview.tsx**  
  Renders a working form from the current configuration and manages form submission.
- **CheckboxGroupPreview.tsx**  
  Preview component for a checkbox group field.
- **ParagraphPreview.tsx**  
  Preview component for paragraph/textarea field.
- **SelectPreview.tsx**  
  Preview component for select/dropdown field.
- **TextFieldPreview.tsx**  
  Preview component for text input field.

### ui/
General UI components:
- **Nav.tsx**  
  Application navigation bar and top action controls.
- **SubmissionSuccess.tsx**  
  Success state component shown after a form is submitted.

---

## Other key files

- **types.ts**  
  Centralized TypeScript type definitions and interfaces for all components and form data structures.
- **App.tsx / App.css / index.css / main.tsx**  
  Application entry and global styling files.

---

This structure clearly separates form creation, field editing, live preview, and general UI logic, supporting both maintainability and developer productivity. Each folder is scoped to a specific concern, and all custom field behavior is encapsulated inside the relevant subfolders.


### Key Implementation Features

**Adding Elements**: New form elements are created with default data structures and unique IDs, then added to the `formElements` array using React's functional state updates.

**Updating Elements**: Form element properties are updated through the `updateElement` function, which maps over the existing elements array and replaces the matching element with updated data.

**Deleting Elements**: Elements are removed by filtering the `formElements` array to exclude the element with the specified ID.

**Form Submission**: The preview form captures all input data using react-hook-form, logs comprehensive submission details to the console, and transitions to a success state with navigation options.

## Styling & UI

**Tailwind CSS**: Utilizes a utility-first approach for consistent styling across components. The design features:
- Responsive layout that adapts from two-column desktop to single-column mobile
- Clean card-based interface with shadows and rounded corners  
- Consistent spacing and typography hierarchy
- Accessible form controls with proper focus states

**Layout Architecture**: 
- Fixed navigation header spanning full width
- Two-column layout with sidebar (form elements) and main content (form builder)
- Maximum width container (`max-w-6xl`) for optimal readability
- Flexbox-based responsive design that stacks on smaller screens

## Live Demo

🚀 **[View Live Demo](https://form-end.vercel.app)** - Try building your own forms!

## Technologies Used

- **React 19** - Component-based UI framework
- **TypeScript** - Type safety and enhanced developer experience  
- **Tailwind CSS** - Utility-first styling framework
- **React Hook Form** - Form state management and validation
- **Vite** - Fast build tool and development server
- **Vercel** - Deployment platform

---

**Repository**: [github.com/DamianNgWZ/FormEnd](https://github.com/DamianNgWZ/FormEnd)
