import Nav from '../components/ui/Nav';
import ElementBox from '../components/FormCreation/ElementBox';

export default function Main() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Nav />

      <main className="flex flex-col md:flex-row flex-grow p-6 md:p-8 gap-6 md:gap-8 max-w-3xl mx-auto w-full">

        <div className="md:w-1/2 w-full">
          <ElementBox />
        </div>
        
        <div className="md:w-1/2 w-full flex items-center justify-center">
          TODO : FORM REVIEW
        </div>
      </main>
    </div>
  );
}