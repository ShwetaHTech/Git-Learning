// eslint-disable-next-line
import React from 'react';

const StudentCard = ({ student }) => {
  return (
    <div className="w-full bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-blue-100/80 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-5 border-l-4 border-l-blue-600 text-left group">
      
      {/* Student Meta Details */}
      <div className="flex items-center gap-4.5">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50/50 text-blue-600 flex items-center justify-center font-extrabold text-lg tracking-wide shadow-inner shrink-0 group-hover:scale-105 transition-transform duration-200 border border-blue-100/30">
          {student.name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-slate-900 text-base md:text-lg tracking-tight group-hover:text-blue-600 transition-colors duration-150">
            {student.name}
          </h4>
          
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mt-1 text-xs text-slate-500 font-medium">
            <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded-lg font-mono font-bold text-[10px] tracking-wide border border-slate-200/40">
              ID: {student.rollNo}
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1.5 text-slate-600">
              <i className="fa-solid fa-bookmark text-[10px] text-slate-400"></i> {student.course}
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <i className="fa-solid fa-envelope text-[10px]"></i> {student.email}
            </span>
          </div>
        </div>
      </div>

      {/* Action Indicators Block */}
      <div className="flex items-center justify-between md:justify-end gap-5 border-t md:border-t-0 pt-3.5 md:pt-0 border-slate-50 shrink-0">
        
        {/* Capsule State */}
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold tracking-wide border ${
          student.status === 'Active' 
            ? 'bg-emerald-50 text-emerald-700 border-emerald-200/60' 
            : 'bg-slate-50 text-slate-500 border-slate-200/60'
        }`}>
          <span className={`w-1.5 h-1.5 rounded-full ${student.status === 'Active' ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'}`}></span>
          {student.status}
        </span>
        
        {/* Profile Interactive Trigger Button */}
        <button 
          onClick={() => alert(`📋 Detailed Academic Summary:\n\nFull Name: ${student.name}\nRoll ID: ${student.rollNo}\nCourse Department: ${student.course}\nRegistered Email: ${student.email}\nStatus: ${student.status}`)}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 bg-blue-50/50 hover:bg-blue-600 hover:text-white px-3.5 py-2 rounded-xl transition-all duration-200 active:scale-95 border border-blue-100/40 shadow-sm shadow-blue-500/5 cursor-pointer"
        >
          <i className="fa-solid fa-user-tie text-[11px]"></i> Profile
        </button>
      </div>

    </div>
  );
};

export default StudentCard;