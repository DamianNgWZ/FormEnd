import Nav from '../components/ui/Nav';
import ElementBox from '../components/FormCreation/AddFormElements';
import AboutForm from '../components/FormCreation/AboutForm';

export default function MainPage() {
  return (
    <div className="min-h-screen bg-surface-2">
      <Nav />
      <div className="max-w-6xl mx-auto p-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3">
            <ElementBox />
          </div>
          <div className="lg:w-2/3">
            <AboutForm />
          </div>
        </div>
      </div>
    </div>
  );
}
