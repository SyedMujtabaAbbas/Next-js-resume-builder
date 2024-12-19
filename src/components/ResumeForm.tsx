'use client';

import { useState } from 'react';
import ResumeOutput from './ResumeOutput';

export default function ResumeForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    degree: '',
    institution: '',
    year: '',
    jobTitle: '',
    company: '',
    workDescription: '',
    skills: '',
    profilePicture: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setFormData({ ...formData, profilePicture: reader.result as string });
      reader.readAsDataURL(file);
    }
  };

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="bg-white p-8 rounded-md shadow-lg w-full max-w-lg">
      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <h1 className="text-2xl font-bold text-gray-700 text-center mb-6">
            Dynamic Resume Builder
          </h1>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="text"
                id="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="profile-picture" className="block text-sm font-medium text-gray-700">
                Profile Picture
              </label>
              <input
                type="file"
                id="profile-picture"
                onChange={handleFileChange}
                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                accept="image/*"
              />
            </div>
            <div>
              <label htmlFor="degree" className="block text-sm font-medium text-gray-700">
                Degree
              </label>
              <input
                type="text"
                id="degree"
                value={formData.degree}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="institution" className="block text-sm font-medium text-gray-700">
                Institution
              </label>
              <input
                type="text"
                id="institution"
                value={formData.institution}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="year" className="block text-sm font-medium text-gray-700">
                Year
              </label>
              <input
                type="text"
                id="year"
                value={formData.year}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="skills" className="block text-sm font-medium text-gray-700">
                Skills (comma-separated)
              </label>
              <input
                type="text"
                id="skills"
                value={formData.skills}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">
                Job Title
              </label>
              <input
                type="text"
                id="jobTitle"
                value={formData.jobTitle}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                Company
              </label>
              <input
                type="text"
                id="company"
                value={formData.company}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="workDescription" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="workDescription"
                value={formData.workDescription}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
          >
            Generate Resume
          </button>
        </form>
      ) : (
        <ResumeOutput data={formData} />
      )}
    </div>
  );
}
