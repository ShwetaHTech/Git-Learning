// eslint-disable-next-line
import React, { useState } from 'react';
import StudentCard from '../components/StudentCard';

const StudentList = () => {
  const [students] = useState([
    { id: 1, name: 'Devika Patil', rollNo: 'MCA2026-01', course: 'MCA', email: 'devika@college.edu', status: 'Active' },
    { id: 2, name: 'Raj Patil', rollNo: 'MCA2026-02', course: 'MCA', email: 'raj@college.edu', status: 'Active' },
    { id: 3, name: 'Sneha Patil', rollNo: 'MCA2026-03', course: 'MCA', email: 'sneha@college.edu', status: 'Active' },
    { id: 4, name: 'Omkar Yadav', rollNo: 'MCA2026-04', course: 'MCA', email: 'omkar@college.edu', status: 'Inactive' },
    { id: 5, name: 'Amit Desai', rollNo: 'BTech-05', course: 'B.Tech AI/ML', email: 'amit@college.edu', status: 'Active' },
    { id: 6, name: 'Riya Naik', rollNo: 'BTech-06', course: 'B.Tech Data Science', email: 'pooja@college.edu', status: 'Active' }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredStudents = students.filter((student) => {
    const matchesSearch = 
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.rollNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.course.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || student.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const activeCount = students.filter(s => s.status === 'Active').length;

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50/30 text-left p-4 md:p-8 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* Modern Glassmorphism Premium Header */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 md:p-8 mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
          <div className="absolute bottom-0 left-1/3 w-32 h-32 bg-indigo-500/5 rounded-full blur-xl"></div>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-3 border border-blue-100/50">
                <i className="fa-solid from-neutral-300 fa-graduation-cap"></i> Academic Portal
              </div>
              <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-blue-900 bg-clip-text text-transparent">
                Student Management Directory
              </h2>
              <p className="text-sm text-slate-500 mt-1 max-w-xl font-medium">
                Verify, search, and monitor records across multi-disciplinary technical branches in real-time.
              </p>
            </div>
            
            {/* Analytics Badges Right Header */}
            <div className="flex items-center gap-3 self-start md:self-center">
              <div className="bg-slate-900 text-white px-4 py-2.5 rounded-2xl shadow-sm shadow-slate-900/10 flex flex-col">
                <span className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">Total</span>
                <span className="text-xl font-black">{students.length}</span>
              </div>
              <div className="bg-emerald-500 text-white px-4 py-2.5 rounded-2xl shadow-sm shadow-emerald-500/10 flex flex-col">
                <span className="text-[10px] uppercase text-emerald-100 font-bold tracking-wider">Active</span>
                <span className="text-xl font-black">{activeCount}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Filters Row Panel */}
        <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-4 mb-6 items-center">
          
          {/* Enhanced Search Input */}
          <div className="w-full md:flex-1 relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
              <i className="fa-solid fa-magnifying-glass text-sm"></i>
            </span>
            <input
              type="text"
              placeholder="Search by student name, roll number, course path..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-slate-50/80 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-slate-800 placeholder-slate-400 font-medium"
            />
          </div>

          {/* Styled Select Filter */}
          <div className="w-full md:w-56 relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400 pointer-events-none">
              <i className="fa-solid fa-filter text-xs"></i>
            </span>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full pl-9 pr-8 py-3 bg-slate-50/80 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-slate-700 font-semibold appearance-none cursor-pointer"
            >
              <option value="All">All Status Labels</option>
              <option value="Active">🟢 Active State</option>
              <option value="Inactive">🔴 Inactive State</option>
            </select>
            <span className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400 pointer-events-none">
              <i className="fa-solid fa-chevron-down text-[10px]"></i>
            </span>
          </div>
        </div>

        {/* List Content Area */}
        <div className="flex flex-col gap-3.5">
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student) => (
              <StudentCard key={student.id} student={student} />
            ))
          ) : (
            <div className="border border-dashed border-slate-200 rounded-2xl py-14 text-center bg-white shadow-sm p-6">
              <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-100">
                <i className="fa-solid fa-folder-open text-slate-300 text-xl"></i>
              </div>
              <h4 className="text-slate-800 font-bold text-base">No Matching Records</h4>
              <p className="text-slate-400 text-xs mt-1 max-w-xs mx-auto font-medium">
                We couldn't locate any student with matching filters for "{searchTerm}". Please refine your query keywords.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default StudentList;