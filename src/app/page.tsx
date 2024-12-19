import Image from 'next/image'
import ResumeForm from "../components/ResumeForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
        <ResumeForm />
      </div>
    </div>
  );
}
