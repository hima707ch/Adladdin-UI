import React, { useState, useEffect, useRef } from 'react';
import { Briefcase, BookOpen, Check, X, MapPin, Calendar, Code, Building, Clock, Search } from 'lucide-react';

const SinglePageForm = () => {
  const [profileType, setProfileType] = useState(null);
  const [formData, setFormData] = useState({
    // Common fields
    domain: '',
    skills: [],
    
    // Student-specific fields
    college: '',
    collegeCity: '',
    studyYear: '',
    
    // Professional-specific fields
    company: '',
    companyCity: '',
    experience: ''
  });
  
  const [skillSearch, setSkillSearch] = useState('');
  const [filteredSkills, setFilteredSkills] = useState([]);
  const [showSkillsDropdown, setShowSkillsDropdown] = useState(false);
  const skillsInputRef = useRef(null);
  
  // List of domains and skills for selection
  const domains = [
    "Web Development", 
    "Mobile Development", 
    "Artificial Intelligence/ML", 
    "Data Science", 
    "Cloud Computing", 
    "DevOps", 
    "Cybersecurity", 
    "Blockchain", 
    "UI/UX Design", 
    "Game Development"
  ];
  
  const allSkills = [
    "JavaScript", "TypeScript", "React", "Angular", "Vue.js", "Node.js", 
    "Express.js", "Next.js", "Python", "Django", "Flask", "Java", 
    "Spring Boot", "C#", ".NET", "PHP", "Laravel", "Ruby on Rails", 
    "Swift", "Kotlin", "Flutter", "React Native", "TensorFlow", 
    "PyTorch", "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", 
    "Git", "MongoDB", "MySQL", "PostgreSQL", "Firebase", "GraphQL", 
    "Redux", "Sass/SCSS", "Tailwind CSS", "Bootstrap"
  ];
  
  // Update filtered skills when search changes
  useEffect(() => {
    if (skillSearch.trim() === '') {
      setFilteredSkills(allSkills);
    } else {
      setFilteredSkills(
        allSkills.filter(skill => 
          skill.toLowerCase().includes(skillSearch.toLowerCase())
        )
      );
    }
  }, [skillSearch]);
  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  // Handle skill selection
  const handleSkillToggle = (skill) => {
    setFormData(prev => {
      if (prev.skills.includes(skill)) {
        return { ...prev, skills: prev.skills.filter(s => s !== skill) };
      } else {
        return { ...prev, skills: [...prev.skills, skill] };
      }
    });
    setSkillSearch('');
    skillsInputRef.current.focus();
  };
  
  // Remove a skill
  const removeSkill = (skill) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter(s => s !== skill)
    }));
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form
    let isValid = true;
    
    // Check required fields based on profile type
    if (!profileType) {
      alert("Please select either Student or Professional");
      isValid = false;
    } else if (profileType === 'student') {
      if (!formData.college || !formData.collegeCity || !formData.studyYear) {
        alert("Please fill all required student fields");
        isValid = false;
      }
    } else if (profileType === 'professional') {
      if (!formData.company || !formData.companyCity || !formData.experience) {
        alert("Please fill all required professional fields");
        isValid = false;
      }
    }
    
    // Check common fields
    if (!formData.domain || formData.skills.length === 0) {
      alert("Please select a domain and at least one skill");
      isValid = false;
    }
    
    if (isValid) {
      // In a real application, you would send this data to your backend
      console.log('Form submitted:', { profileType, ...formData });
      alert("Form submitted successfully!");
      
      // Reset form
      setProfileType(null);
      setFormData({
        domain: '',
        skills: [],
        college: '',
        collegeCity: '',
        studyYear: '',
        company: '',
        companyCity: '',
        experience: ''
      });
    }
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 ">
        <div className="h-[85%] w-[80rem] px-6  overflow-scroll">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden no-scrollbar ">
            {/* Form Header */}
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-10 py-8 text-white">
            <h2 className="text-3xl font-bold">Professional Details</h2>
            <p className="mt-2 text-xl text-blue-100">
                Help us understand your background to personalize your interview experience
            </p>
            </div>
            
            <form onSubmit={handleSubmit} className="px-10 py-8">
            <div className="space-y-8">
                {/* Profile Type Selection */}
                <div>
                <label className="block text-xl font-medium text-gray-900 mb-4">
                    Are you a student or a professional? <span className="text-red-500">*</span>
                </label>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div 
                    onClick={() => setProfileType('student')}
                    className={`border-2 rounded-xl p-6 cursor-pointer transition-all hover:shadow-md ${
                        profileType === 'student' 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                    }`}
                    >
                    <div className="flex justify-between items-start">
                        <div>
                        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                            <BookOpen size={32} className="text-blue-600" />
                        </div>
                        <h4 className="text-xl font-medium text-gray-900">Student</h4>
                        <p className="mt-2 text-gray-500">
                            Currently enrolled in college or university
                        </p>
                        </div>
                        {profileType === 'student' && (
                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                            <Check size={20} className="text-white" />
                        </div>
                        )}
                    </div>
                    </div>
                    
                    <div 
                    onClick={() => setProfileType('professional')}
                    className={`border-2 rounded-xl p-6 cursor-pointer transition-all hover:shadow-md ${
                        profileType === 'professional' 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                    }`}
                    >
                    <div className="flex justify-between items-start">
                        <div>
                        <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                            <Briefcase size={32} className="text-indigo-600" />
                        </div>
                        <h4 className="text-xl font-medium text-gray-900">Professional</h4>
                        <p className="mt-2 text-gray-500">
                            Currently working in the industry
                        </p>
                        </div>
                        {profileType === 'professional' && (
                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                            <Check size={20} className="text-white" />
                        </div>
                        )}
                    </div>
                    </div>
                </div>
                </div>
                
                {/* Conditional Fields Based on Profile Type */}
                {profileType === 'student' && (
                <div className="p-6 border border-gray-200 rounded-xl bg-blue-50">
                    <h3 className="text-xl font-medium text-gray-900 mb-4">Educational Details</h3>
                    <div className="space-y-6">
                    <div>
                        <label htmlFor="college" className="block text-base font-medium text-gray-700 mb-1">
                        College/University Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Building size={20} className="text-gray-400" />
                        </div>
                        <input
                            type="text"
                            id="college"
                            name="college"
                            value={formData.college}
                            onChange={handleChange}
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="e.g., Stanford University"
                            required
                        />
                        </div>
                    </div>
                    
                    <div>
                        <label htmlFor="collegeCity" className="block text-base font-medium text-gray-700 mb-1">
                        College City <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <MapPin size={20} className="text-gray-400" />
                        </div>
                        <input
                            type="text"
                            id="collegeCity"
                            name="collegeCity"
                            value={formData.collegeCity}
                            onChange={handleChange}
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="e.g., San Francisco, CA"
                            required
                        />
                        </div>
                    </div>
                    
                    <div>
                        <label htmlFor="studyYear" className="block text-base font-medium text-gray-700 mb-1">
                        Year of Study <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Calendar size={20} className="text-gray-400" />
                        </div>
                        <select
                            id="studyYear"
                            name="studyYear"
                            value={formData.studyYear}
                            onChange={handleChange}
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 appearance-none"
                            required
                        >
                            <option value="" disabled>Select year of study</option>
                            <option value="1st Year">1st Year</option>
                            <option value="2nd Year">2nd Year</option>
                            <option value="3rd Year">3rd Year</option>
                            <option value="4th Year">4th Year</option>
                            <option value="5th Year">5th Year</option>
                            <option value="Graduate">Graduate Program</option>
                        </select>
                        </div>
                    </div>
                    </div>
                </div>
                )}
                
                {profileType === 'professional' && (
                <div className="p-6 border border-gray-200 rounded-xl bg-indigo-50">
                    <h3 className="text-xl font-medium text-gray-900 mb-4">Employment Details</h3>
                    <div className="space-y-6">
                    <div>
                        <label htmlFor="company" className="block text-base font-medium text-gray-700 mb-1">
                        Company Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Building size={20} className="text-gray-400" />
                        </div>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="e.g., Google"
                            required
                        />
                        </div>
                    </div>
                    
                    <div>
                        <label htmlFor="companyCity" className="block text-base font-medium text-gray-700 mb-1">
                        Company Location <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <MapPin size={20} className="text-gray-400" />
                        </div>
                        <input
                            type="text"
                            id="companyCity"
                            name="companyCity"
                            value={formData.companyCity}
                            onChange={handleChange}
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="e.g., Mountain View, CA"
                            required
                        />
                        </div>
                    </div>
                    
                    <div>
                        <label htmlFor="experience" className="block text-base font-medium text-gray-700 mb-1">
                        Years of Experience <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Clock size={20} className="text-gray-400" />
                        </div>
                        <select
                            id="experience"
                            name="experience"
                            value={formData.experience}
                            onChange={handleChange}
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 appearance-none"
                            required
                        >
                            <option value="" disabled>Select years of experience</option>
                            <option value="Less than 1 year">Less than 1 year</option>
                            <option value="1-2 years">1-2 years</option>
                            <option value="3-5 years">3-5 years</option>
                            <option value="6-10 years">6-10 years</option>
                            <option value="10+ years">10+ years</option>
                        </select>
                        </div>
                    </div>
                    </div>
                </div>
                )}
                
                {/* Technology Field - Always Visible */}
                <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-xl font-medium text-gray-900 mb-4">Technical Background</h3>
                <div className="space-y-6">
                    <div>
                    <label htmlFor="domain" className="block text-base font-medium text-gray-700 mb-1">
                        Primary Domain <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Code size={20} className="text-gray-400" />
                        </div>
                        <select
                        id="domain"
                        name="domain"
                        value={formData.domain}
                        onChange={handleChange}
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 appearance-none"
                        required
                        >
                        <option value="" disabled>Select your primary domain</option>
                        {domains.map((domain, index) => (
                            <option key={index} value={domain}>{domain}</option>
                        ))}
                        </select>
                    </div>
                    </div>
                    
                    <div>
                    <label className="block text-base font-medium text-gray-700 mb-2">
                        Technical Skills <span className="text-red-500">*</span>
                    </label>
                    
                    {/* Selected Skills */}
                    <div className="flex flex-wrap gap-2 mb-3">
                        {formData.skills.map((skill, index) => (
                        <div 
                            key={index} 
                            className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full"
                        >
                            <span className="mr-1">{skill}</span>
                            <button
                            type="button"
                            onClick={() => removeSkill(skill)}
                            className="ml-1 text-blue-600 hover:text-blue-800"
                            >
                            <X size={14} />
                            </button>
                        </div>
                        ))}
                    </div>
                    
                    {/* Skills Input & Dropdown */}
                    <div className="relative">
                        <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search size={20} className="text-gray-400" />
                        </div>
                        <input
                            type="text"
                            ref={skillsInputRef}
                            value={skillSearch}
                            onChange={(e) => setSkillSearch(e.target.value)}
                            onFocus={() => setShowSkillsDropdown(true)}
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Search and select skills..."
                        />
                        </div>
                        
                        {showSkillsDropdown && (
                        <div 
                            className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md border border-gray-200 max-h-60 overflow-y-auto"
                        >
                            {filteredSkills.length > 0 ? (
                            filteredSkills.map((skill, index) => (
                                <div
                                key={index}
                                onClick={() => handleSkillToggle(skill)}
                                className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                                    formData.skills.includes(skill) ? 'bg-blue-50' : ''
                                }`}
                                >
                                <div className="flex items-center">
                                    {formData.skills.includes(skill) && (
                                    <Check size={16} className="text-blue-600 mr-2" />
                                    )}
                                    <span>{skill}</span>
                                </div>
                                </div>
                            ))
                            ) : (
                            <div className="px-4 py-2 text-gray-500">No matching skills</div>
                            )}
                        </div>
                        )}
                    </div>
                    
                    {formData.skills.length === 0 && (
                        <p className="text-sm text-red-500 mt-2">
                        Please select at least one skill
                        </p>
                    )}
                    </div>
                </div>
                </div>
                
                {/* Submit Button */}
                <div className="pt-4 flex justify-end">
                <button
                    type="submit"
                    className="inline-flex items-center px-8 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition shadow-md"
                >
                    Submit
                </button>
                </div>
            </div>
            </form>
        </div>
        
        {/* Click outside to close dropdown */}
        {showSkillsDropdown && (
            <div 
            className="fixed inset-0 z-0"
            onClick={() => setShowSkillsDropdown(false)}
            ></div>
        )}
        </div>
    </div>
  );
};

export default SinglePageForm;