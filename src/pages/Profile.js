import React, { useState } from "react";
import {
  User,
  Settings,
  Calendar,
  Award,
  BookOpen,
  FileText,
  Clock,
  CheckCircle,
  Bell,
} from "lucide-react";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [notificationEnabled, setNotificationEnabled] = useState(true);

  // Mock user data
  const userData = {
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    role: "Software Engineer",
    experience: "5 years",
    location: "San Francisco, CA",
    skills: ["JavaScript", "React", "Node.js", "Python", "SQL"],
    avatarUrl: "/api/placeholder/150/150",
    completedInterviews: 12,
    upcomingInterviews: 3,
    badges: ["JavaScript Pro", "React Master", "Mock Interview Expert"],
    memberSince: "January 2024",
    lastActive: "Today",
  };

  // Mock interview history
  const interviewHistory = [
    {
      id: 1,
      role: "Frontend Developer",
      company: "Tech Solutions Inc.",
      date: "May 5, 2025",
      score: 85,
      feedback:
        "Strong problem-solving skills, needs improvement in system design.",
    },
    {
      id: 2,
      role: "React Developer",
      company: "Innovate Labs",
      date: "April 28, 2025",
      score: 92,
      feedback: "Excellent React knowledge and communication skills.",
    },
    {
      id: 3,
      role: "Full Stack Engineer",
      company: "Growth Startup",
      date: "April 15, 2025",
      score: 78,
      feedback:
        "Good JavaScript knowledge, needs to improve on backend concepts.",
    },
  ];

  // Mock upcoming interviews
  const upcomingInterviews = [
    {
      id: 1,
      role: "Senior React Developer",
      company: "Enterprise Solutions",
      date: "May 12, 2025",
      time: "2:00 PM",
    },
    {
      id: 2,
      role: "JavaScript Engineer",
      company: "Digital Platforms",
      date: "May 15, 2025",
      time: "10:30 AM",
    },
    {
      id: 3,
      role: "Frontend Architect",
      company: "Tech Innovations",
      date: "May 20, 2025",
      time: "4:00 PM",
    },
  ];

  // Mock recommended interview practice
  const recommendedPractice = [
    {
      id: 1,
      title: "React Performance Optimization",
      difficulty: "Advanced",
      estimatedTime: "45 min",
    },
    {
      id: 2,
      title: "JavaScript Closures & Promises",
      difficulty: "Intermediate",
      estimatedTime: "30 min",
    },
    {
      id: 3,
      title: "System Design: E-commerce Platform",
      difficulty: "Advanced",
      estimatedTime: "60 min",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">InterviewPro</h1>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900">
              <Bell size={20} />
            </button>
            <div className="flex items-center space-x-2">
              <img
                src={userData.avatarUrl}
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm font-medium">{userData.name}</span>
            </div>
          </div>
        </div>
      </header>

      {/* <div className='flex w-[80rem] mx-auto px-4 sm:px-6 py-8 justify-between bg-[#111111] h-3'> Red </div> */}

      {/* Main Content */}
      <div className="flex w-[80rem] mx-auto px-4 sm:px-6 py-8 gap-4 md:gap-8 justify-between">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Sidebar */}
          <div className="w-full md:w-64 space-y-4 flex-shrink-0">
            {/* Profile Card */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 flex flex-col items-center">
                <img
                  src={userData.avatarUrl}
                  alt="Profile"
                  className="w-24 h-24 rounded-full border-4 border-white"
                />
                <h2 className="mt-2 text-xl font-bold text-white">
                  {userData.name}
                </h2>
                <p className="text-blue-100">{userData.role}</p>
              </div>
              <div className="p-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-500">Completed Interviews</span>
                  <span className="font-medium">
                    {userData.completedInterviews}
                  </span>
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-500">Upcoming</span>
                  <span className="font-medium">
                    {userData.upcomingInterviews}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Member Since</span>
                  <span className="font-medium">{userData.memberSince}</span>
                </div>
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="bg-white rounded-lg shadow overflow-hidden">
              <ul>
                <li>
                  <button
                    onClick={() => setActiveTab("profile")}
                    className={`w-full px-4 py-3 flex items-center space-x-2 text-sm transition ${
                      activeTab === "profile"
                        ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <User size={18} />
                    <span>Profile Overview</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("history")}
                    className={`w-full px-4 py-3 flex items-center space-x-2 text-sm transition ${
                      activeTab === "history"
                        ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <FileText size={18} />
                    <span>Interview History</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("upcoming")}
                    className={`w-full px-4 py-3 flex items-center space-x-2 text-sm transition ${
                      activeTab === "upcoming"
                        ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <Calendar size={18} />
                    <span>Upcoming Interviews</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("practice")}
                    className={`w-full px-4 py-3 flex items-center space-x-2 text-sm transition ${
                      activeTab === "practice"
                        ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <BookOpen size={18} />
                    <span>Practice Sessions</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("settings")}
                    className={`w-full px-4 py-3 flex items-center space-x-2 text-sm transition ${
                      activeTab === "settings"
                        ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <Settings size={18} />
                    <span>Settings</span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 bg-white rounded-lg shadow">
            {/* Profile Overview */}
            {activeTab === "profile" && (
              <div className="p-6 ">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Profile Overview
                </h2>

                <div className="space-y-6">
                  {/* Basic Info Section */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">
                      Basic Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-500">
                          Full Name
                        </label>
                        <p className="mt-1 text-gray-900">{userData.name}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-500">
                          Email
                        </label>
                        <p className="mt-1 text-gray-900">{userData.email}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-500">
                          Current Role
                        </label>
                        <p className="mt-1 text-gray-900">{userData.role}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-500">
                          Experience
                        </label>
                        <p className="mt-1 text-gray-900">
                          {userData.experience}
                        </p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-500">
                          Location
                        </label>
                        <p className="mt-1 text-gray-900">
                          {userData.location}
                        </p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-500">
                          Last Active
                        </label>
                        <p className="mt-1 text-gray-900">
                          {userData.lastActive}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Skills Section */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">
                      Skills
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {userData.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                      <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm flex items-center">
                        <span>Add Skill</span>
                      </button>
                    </div>
                  </div>

                  {/* Badges Section */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">
                      Earned Badges
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {userData.badges.map((badge, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center">
                            <Award size={32} />
                          </div>
                          <span className="mt-2 text-sm text-gray-700">
                            {badge}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Performance Summary */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">
                      Performance Summary
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-green-700 text-sm font-medium">
                              Avg. Score
                            </p>
                            <p className="text-2xl font-bold text-gray-900">
                              85%
                            </p>
                          </div>
                          <div className="bg-green-100 p-2 rounded-full">
                            <CheckCircle size={20} className="text-green-600" />
                          </div>
                        </div>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-blue-700 text-sm font-medium">
                              Total Time
                            </p>
                            <p className="text-2xl font-bold text-gray-900">
                              32 hrs
                            </p>
                          </div>
                          <div className="bg-blue-100 p-2 rounded-full">
                            <Clock size={20} className="text-blue-600" />
                          </div>
                        </div>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-purple-700 text-sm font-medium">
                              Rank
                            </p>
                            <p className="text-2xl font-bold text-gray-900">
                              Top 15%
                            </p>
                          </div>
                          <div className="bg-purple-100 p-2 rounded-full">
                            <Award size={20} className="text-purple-600" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                      Edit Profile
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Interview History */}
            {activeTab === "history" && (
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Interview History
                </h2>

                {interviewHistory.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Role
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Company
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Date
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Score
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {interviewHistory.map((interview) => (
                          <tr key={interview.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">
                                {interview.role}
                              </div>
                              <div className="text-sm text-gray-500">
                                {interview.company}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {interview.company}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {interview.date}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div
                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                  interview.score >= 90
                                    ? "bg-green-100 text-green-800"
                                    : interview.score >= 80
                                    ? "bg-blue-100 text-blue-800"
                                    : "bg-yellow-100 text-yellow-800"
                                }`}
                              >
                                {interview.score}%
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <button className="text-blue-600 hover:text-blue-900 mr-3">
                                View Details
                              </button>
                              <button className="text-gray-600 hover:text-gray-900">
                                Feedback
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500">
                      No interview history yet. Start practicing to build your
                      history!
                    </p>
                    <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                      Take Practice Interview
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Upcoming Interviews */}
            {activeTab === "upcoming" && (
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-900">
                    Upcoming Interviews
                  </h2>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                    Schedule New
                  </button>
                </div>

                {upcomingInterviews.length > 0 ? (
                  <div className="space-y-4">
                    {upcomingInterviews.map((interview) => (
                      <div
                        key={interview.id}
                        className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition"
                      >
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                          <div>
                            <h3 className="text-lg font-medium text-gray-900">
                              {interview.role}
                            </h3>
                            <p className="text-gray-600">{interview.company}</p>
                          </div>
                          <div className="mt-2 md:mt-0 flex items-center space-x-2">
                            <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                              {interview.date}
                            </div>
                            <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">
                              {interview.time}
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 flex justify-end space-x-3">
                          <button className="text-gray-600 hover:text-gray-900 text-sm">
                            Reschedule
                          </button>
                          <button className="text-red-600 hover:text-red-800 text-sm">
                            Cancel
                          </button>
                          <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition">
                            Prepare
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500">
                      No upcoming interviews. Schedule one to get started!
                    </p>
                    <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                      Schedule Interview
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Practice Sessions */}
            {activeTab === "practice" && (
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Recommended Practice
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {recommendedPractice.map((practice) => (
                    <div
                      key={practice.id}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition"
                    >
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        {practice.title}
                      </h3>
                      <div className="flex justify-between mb-4">
                        <span className="text-sm text-gray-500">
                          Difficulty: {practice.difficulty}
                        </span>
                        <span className="text-sm text-gray-500">
                          {practice.estimatedTime}
                        </span>
                      </div>
                      <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                        Start Practice
                      </button>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Available Interview Types
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                      <div className="bg-blue-100 text-blue-600 p-3 rounded-full inline-block mb-3">
                        <FileText size={24} />
                      </div>
                      <h4 className="text-lg font-medium text-gray-900 mb-2">
                        Technical Interviews
                      </h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Coding challenges, system design, and technical
                        questions
                      </p>
                      <button className="w-full px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition">
                        Browse
                      </button>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                      <div className="bg-green-100 text-green-600 p-3 rounded-full inline-block mb-3">
                        <User size={24} />
                      </div>
                      <h4 className="text-lg font-medium text-gray-900 mb-2">
                        Behavioral Interviews
                      </h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Situational questions and soft skills assessment
                      </p>
                      <button className="w-full px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition">
                        Browse
                      </button>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                      <div className="bg-purple-100 text-purple-600 p-3 rounded-full inline-block mb-3">
                        <Settings size={24} />
                      </div>
                      <h4 className="text-lg font-medium text-gray-900 mb-2">
                        Case Interviews
                      </h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Problem-solving and business case scenarios
                      </p>
                      <button className="w-full px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition">
                        Browse
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Settings */}
            {activeTab === "settings" && (
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Account Settings
                </h2>

                <div className="space-y-8">
                  {/* Profile Settings */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Profile Settings
                    </h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            defaultValue={userData.name}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                          </label>
                          <input
                            type="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            defaultValue={userData.email}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Current Role
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            defaultValue={userData.role}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Experience
                          </label>
                          <select className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                            <option>Less than 1 year</option>
                            <option>1-3 years</option>
                            <option>3-5 years</option>
                            <option selected>5 years</option>
                            <option>5-10 years</option>
                            <option>10+ years</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Location
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            defaultValue={userData.location}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Profile Picture
                        </label>
                        <div className="flex items-center space-x-4">
                          <img
                            src={userData.avatarUrl}
                            alt="Profile"
                            className="w-16 h-16 rounded-full"
                          />
                          <button className="px-3 py-1 text-sm border border-gray-300 rounded shadow-sm hover:bg-gray-50">
                            Change Photo
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Notification Settings */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Notification Settings
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-sm font-medium text-gray-900">
                            Email Notifications
                          </h4>
                          <p className="text-xs text-gray-500">
                            Receive emails about upcoming interviews and
                            feedback
                          </p>
                        </div>
                        <div className="relative inline-block w-10 mr-2 align-middle select-none">
                          <input
                            type="checkbox"
                            id="toggle-email"
                            checked={notificationEnabled}
                            onChange={() =>
                              setNotificationEnabled(!notificationEnabled)
                            }
                            className="opacity-0 absolute block w-6 h-6 rounded-full bg-white border-4 cursor-pointer"
                          />
                          <label
                            htmlFor="toggle-email"
                            className={`block overflow-hidden h-6 rounded-full cursor-pointer ${
                              notificationEnabled
                                ? "bg-blue-500"
                                : "bg-gray-300"
                            }`}
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-sm font-medium text-gray-900">
                            Interview Reminders
                          </h4>
                          <p className="text-xs text-gray-500">
                            Receive reminders before scheduled interviews
                          </p>
                        </div>
                        <div className="relative inline-block w-10 mr-2 align-middle select-none">
                          <input
                            type="checkbox"
                            id="toggle-reminder"
                            checked={true}
                            className="opacity-0 absolute block w-6 h-6 rounded-full bg-white border-4 cursor-pointer"
                          />
                          <label
                            htmlFor="toggle-reminder"
                            className="block overflow-hidden h-6 rounded-full cursor-pointer bg-blue-500"
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-sm font-medium text-gray-900">
                            Feedback Notifications
                          </h4>
                          <p className="text-xs text-gray-500">
                            Get notified when you receive interview feedback
                          </p>
                        </div>
                        <div className="relative inline-block w-10 mr-2 align-middle select-none">
                          <input
                            type="checkbox"
                            id="toggle-feedback"
                            checked={true}
                            className="opacity-0 absolute block w-6 h-6 rounded-full bg-white border-4 cursor-pointer"
                          />
                          <label
                            htmlFor="toggle-feedback"
                            className="block overflow-hidden h-6 rounded-full cursor-pointer bg-blue-500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Privacy Settings */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Privacy Settings
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-sm font-medium text-gray-900">
                            Public Profile
                          </h4>
                          <p className="text-xs text-gray-500">
                            Allow others to view your profile and statistics
                          </p>
                        </div>
                        <div className="relative inline-block w-10 mr-2 align-middle select-none">
                          <input
                            type="checkbox"
                            id="toggle-public"
                            checked={false}
                            className="opacity-0 absolute block w-6 h-6 rounded-full bg-white border-4 cursor-pointer"
                          />
                          <label
                            htmlFor="toggle-public"
                            className="block overflow-hidden h-6 rounded-full cursor-pointer bg-gray-300"
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-sm font-medium text-gray-900">
                            Share Statistics
                          </h4>
                          <p className="text-xs text-gray-500">
                            Share your performance data anonymously to help
                            improve the platform
                          </p>
                        </div>
                        <div className="relative inline-block w-10 mr-2 align-middle select-none">
                          <input
                            type="checkbox"
                            id="toggle-stats"
                            checked={true}
                            className="opacity-0 absolute block w-6 h-6 rounded-full bg-white border-4 cursor-pointer"
                          />
                          <label
                            htmlFor="toggle-stats"
                            className="block overflow-hidden h-6 rounded-full cursor-pointer bg-blue-500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Account Security */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Account Security
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <button className="px-4 py-2 border border-gray-300 rounded shadow-sm hover:bg-gray-50 text-sm">
                          Change Password
                        </button>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="text-sm font-medium text-gray-900">
                            Two-Factor Authentication
                          </h4>
                          <span className="px-2 py-0.5 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                            Not Enabled
                          </span>
                        </div>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition text-sm">
                          Enable 2FA
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200 flex justify-end space-x-3">
                    <button className="px-4 py-2 border border-gray-300 rounded shadow-sm hover:bg-gray-50">
                      Cancel
                    </button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

      </div>

      {/* Action Button */}
      <div className="fixed bottom-8 right-8">
        <button className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition">
          <span className="font-medium mr-2">Take Interview</span>
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
