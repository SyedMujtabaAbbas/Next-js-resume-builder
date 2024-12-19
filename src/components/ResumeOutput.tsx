import React from "react";

interface ResumeOutputProps {
  data: {
    name: string;
    email: string;
    phone: string;
    degree: string;
    institution: string;
    year: string;
    jobTitle: string;
    company: string;
    workDescription: string;
    skills: string;
    profilePicture: string;
    summary?: string; // New Feature: Summary Section
    hobbies?: string; // New Feature: Hobbies Section
    linkedin?: string; // New Feature: LinkedIn Link
    github?: string; // New Feature: GitHub Link
  };
}

const data = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1234567890",
    degree: "Bachelor's in Computer Science",
    institution: "ABC University",
    year: "2023",
    jobTitle: "Software Engineer",
    company: "XYZ Inc.",
    workDescription: "Developed web applications using React and Node.js.",
    skills: "JavaScript, React, Node.js, TypeScript",
    profilePicture: "/path/to/profile.jpg",
    summary: "Passionate developer with 3+ years of experience in full-stack development.",
    hobbies: "Reading, Traveling, Photography",
    linkedin: "https://www.linkedin.com/in/johndoe/",
    github: "https://github.com/johndoe",
  };
  

const ResumeOutput: React.FC<ResumeOutputProps> = ({ data }) => {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-8 rounded-lg shadow-2xl max-w-3xl mx-auto">
      {/* Profile Section */}
      <div className="text-center mb-8">
        {data.profilePicture && (
          <img
            src={data.profilePicture}
            alt="Profile"
            className="w-40 h-40 rounded-full mx-auto mb-6 object-cover border-4 border-gray-700 shadow-lg"
          />
        )}
        <h1 className="text-3xl font-bold">{data.name}</h1>
        <p className="text-lg text-gray-400">{data.email}</p>
        <p className="text-lg text-gray-400">{data.phone}</p>
      </div>

      {/* Summary Section */}
      {data.summary && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold border-b-2 border-gray-600 pb-2 mb-4">
            Summary
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            {data.summary}
          </p>
        </div>
      )}

      {/* Education Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold border-b-2 border-gray-600 pb-2 mb-4">
          Education
        </h2>
        <p className="text-lg">
          <span className="font-bold">{data.degree}</span> at{" "}
          <span className="text-gray-300">{data.institution}</span> (
          <span className="text-gray-400">{data.year}</span>)
        </p>
      </div>

      {/* Work Experience Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold border-b-2 border-gray-600 pb-2 mb-4">
          Work Experience
        </h2>
        <p className="text-lg">
          <span className="font-bold">{data.jobTitle}</span> at{" "}
          <span className="text-gray-300">{data.company}</span>
        </p>
        <p className="text-gray-400 mt-2">{data.workDescription}</p>
      </div>

      {/* Skills Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold border-b-2 border-gray-600 pb-2 mb-4">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {data.skills.split(",").map((skill, index) => (
            <span
              key={index}
              className="bg-gray-700 px-4 py-2 rounded-full text-sm font-medium shadow-md"
            >
              {skill.trim()}
            </span>
          ))}
        </div>
      </div>

      {/* Hobbies Section */}
      {data.hobbies && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold border-b-2 border-gray-600 pb-2 mb-4">
            Hobbies
          </h2>
          <p className="text-gray-300 text-lg">{data.hobbies}</p>
        </div>
      )}

      {/* Links Section */}
      <div className="flex flex-col items-start gap-4">
        {data.linkedin && (
          <a
            href={data.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            LinkedIn Profile
          </a>
        )}
        {data.github && (
          <a
            href={data.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            GitHub Profile
          </a>
        )}
      </div>
    </div>
  );
};

export default ResumeOutput;
