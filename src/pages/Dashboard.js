// pages/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = ({ user }) => {
  const [upcomingInterviews, setUpcomingInterviews] = useState([]);
  const [pastInterviews, setPastInterviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock API call to fetch interviews
    const fetchInterviews = () => {
      setTimeout(() => {
        // Mock data
        setUpcomingInterviews([
          {
            id: '1',
            title: 'Frontend Developer Interview',
            date: '2025-05-10T14:00:00',
            partner: {
              id: '2',
              name: 'Jane Smith',
              role: 'professional'
            },
            type: 'interviewer'
          },
          {
            id: '2',
            title: 'React Developer Practice',
            date: '2025-05-15T16:30:00',
            partner: {
              id: '3',
              name: 'Mike Johnson',
              role: 'student'
            },
            type: 'interviewee'
          }
        ]);
        
        setPastInterviews([
          {
            id: '3',
            title: 'Full Stack Developer Interview',
            date: '2025-04-28T11:00:00',
            partner: {
              id: '4',
              name: 'Sarah Williams',
              role: 'professional'
            },
            type: 'interviewee',
            feedback: {
              rating: 4,
              comment: 'Good technical knowledge but could improve communication.'
            }
          }
        ]);
        
        setLoading(false);
      }, 1000);
    };

    fetchInterviews();
  }, []);

  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="px-4 py-6 sm:px-0 mb-6">
          <div className="bg-white shadow-sm rounded-lg p-6">
            <h1 className="text-2xl font-bold text-gray-900">Welcome, {user.name}!</h1>
            <p className="mt-1 text-gray-600">
              {user.role === 'student' 
                ? 'Practice your interview skills and get valuable feedback.' 
                : 'Help others prepare for tech interviews while sharpening your own skills.'}
            </p>
            
            <div className="mt-6 flex flex-col sm:flex-row sm:space-x-4">
              <Link
                to="/find-partner"
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-2 sm:mb-0"
              >
                Find Interview Partner
              </Link>
              <Link
                to="/practice"
                className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Practice Questions
              </Link>
            </div>
          </div>
        </div>

        {/* Upcoming Interviews */}
        <div className="px-4 sm:px-0 mb-6">
          <div className="bg-white shadow-sm rounded-lg overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-200">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Upcoming Interviews</h3>
            </div>
            <div className="bg-white">
              {upcomingInterviews.length === 0 ? (
                <div className="text-center py-6">
                  <p className="text-gray-500 text-sm">No upcoming interviews scheduled.</p>
                  <Link
                    to="/find-partner"
                    className="mt-2 inline-flex items-center text-sm text-indigo-600 hover:text-indigo-500"
                  >
                    Find a partner
                  </Link>
                </div>
              ) : (
                <ul className="divide-y divide-gray-200">
                  {upcomingInterviews.map((interview) => (
                    <li key={interview.id} className="px-6 py-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-sm font-medium text-gray-900">{interview.title}</h4>
                          <div className="mt-1 text-sm text-gray-600">
                            <p>
                              {formatDate(interview.date)} • You are the {' '}
                              <span className="font-medium">
                                {interview.type === 'interviewer' ? 'interviewer' : 'interviewee'}
                              </span>
                            </p>
                            <p className="mt-1">
                              Partner: {interview.partner.name} ({interview.partner.role})
                            </p>
                          </div>
                        </div>
                        <div className="flex">
                          <Link
                            to={`/interview/${interview.id}`}
                            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Join
                          </Link>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Past Interviews */}
        <div className="px-4 sm:px-0 mb-6">
          <div className="bg-white shadow-sm rounded-lg overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-200">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Past Interviews</h3>
            </div>
            <div className="bg-white">
              {pastInterviews.length === 0 ? (
                <div className="text-center py-6">
                  <p className="text-gray-500 text-sm">No past interviews.</p>
                </div>
              ) : (
                <ul className="divide-y divide-gray-200">
                  {pastInterviews.map((interview) => (
                    <li key={interview.id} className="px-6 py-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-sm font-medium text-gray-900">{interview.title}</h4>
                          <div className="mt-1 text-sm text-gray-600">
                            <p>
                              {formatDate(interview.date)} • You were the {' '}
                              <span className="font-medium">
                                {interview.type === 'interviewer' ? 'interviewer' : 'interviewee'}
                              </span>
                            </p>
                            <p className="mt-1">
                              Partner: {interview.partner.name} ({interview.partner.role})
                            </p>
                            {interview.feedback && (
                              <div className="mt-2">
                                <p className="font-medium">Feedback:</p>
                                <div className="flex items-center mt-1">
                                  <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                      <svg 
                                        key={i}
                                        className={`h-4 w-4 ${i < interview.feedback.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                      </svg>
                                    ))}
                                  </div>
                                  <span className="ml-2 text-sm text-gray-600">{interview.feedback.comment}</span>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="flex">
                          <Link
                            to={`/interview-summary/${interview.id}`}
                            className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            View Summary
                          </Link>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;