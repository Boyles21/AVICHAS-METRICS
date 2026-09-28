import React, { useState } from 'react';
import {
  Layers,
  Target,
  BarChart3,
  GitBranch,
  AlertTriangle,
  Lightbulb,
  FileText,
  User,
  X,
  Minus,
  TrendingUp,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles,
} from 'lucide-react';
import { AvichasLogo } from './AvichasLogo';

type DashboardTab =
  | 'Overview'
  | 'Strategy'
  | 'Performance'
  | 'Execution'
  | 'Risks'
  | 'Insights'
  | 'Reports';

export const DashboardPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<DashboardTab>('Overview');
  const [hoveredMonth, setHoveredMonth] = useState<number | null>(null);

  // Tab-specific metrics data for rich interactivity
  const tabData = {
    Overview: {
      score: 78,
      status: 'On Track',
      strategicAlignment: 91,
      operationalEfficiency: 76,
      executionHealth: 84,
      insights: [
        {
          type: 'warning',
          color: 'bg-amber-400',
          textColor: 'text-amber-300',
          text: 'Revenue is 7% below target due to higher churn in Q2.',
        },
        {
          type: 'danger',
          color: 'bg-orange-500',
          textColor: 'text-orange-300',
          text: 'Project Phoenix is 4 weeks behind schedule.',
        },
        {
          type: 'success',
          color: 'bg-teal-400',
          textColor: 'text-teal-300',
          text: 'Customer satisfaction increased by 2% this quarter.',
        },
      ],
      trendData: [62, 68, 71, 74, 82, 89],
      targetData: [65, 70, 75, 80, 85, 90],
    },
    Strategy: {
      score: 91,
      status: 'High Alignment',
      strategicAlignment: 95,
      operationalEfficiency: 88,
      executionHealth: 89,
      insights: [
        {
          type: 'success',
          color: 'bg-teal-400',
          textColor: 'text-teal-300',
          text: 'Corporate OKRs fully cascaded across 12 business units.',
        },
        {
          type: 'warning',
          color: 'bg-amber-400',
          textColor: 'text-amber-300',
          text: '3 strategic bets require capital reallocation before Q3.',
        },
        {
          type: 'success',
          color: 'bg-teal-400',
          textColor: 'text-teal-300',
          text: 'Executive sponsorship confirmed for Enterprise AI roll-out.',
        },
      ],
      trendData: [70, 75, 82, 85, 90, 94],
      targetData: [72, 76, 80, 84, 88, 92],
    },
    Performance: {
      score: 82,
      status: 'Strong Growth',
      strategicAlignment: 88,
      operationalEfficiency: 82,
      executionHealth: 79,
      insights: [
        {
          type: 'success',
          color: 'bg-teal-400',
          textColor: 'text-teal-300',
          text: 'Operating margin expanded 3.4% YoY across core segments.',
        },
        {
          type: 'warning',
          color: 'bg-amber-400',
          textColor: 'text-amber-300',
          text: 'EMEA regional pipeline conversion lagging Americas by 11%.',
        },
        {
          type: 'success',
          color: 'bg-teal-400',
          textColor: 'text-teal-300',
          text: 'Gross retention rate reached historic benchmark of 97.2%.',
        },
      ],
      trendData: [64, 71, 74, 78, 84, 88],
      targetData: [68, 72, 76, 80, 84, 88],
    },
    Execution: {
      score: 84,
      status: 'Accelerating',
      strategicAlignment: 89,
      operationalEfficiency: 81,
      executionHealth: 92,
      insights: [
        {
          type: 'danger',
          color: 'bg-orange-500',
          textColor: 'text-orange-300',
          text: 'Cross-functional dependency on Cloud Security resolved.',
        },
        {
          type: 'success',
          color: 'bg-teal-400',
          textColor: 'text-teal-300',
          text: 'Sprint velocity increased 18% following team restructuring.',
        },
        {
          type: 'warning',
          color: 'bg-amber-400',
          textColor: 'text-amber-300',
          text: 'Vendor milestone deliverable delayed by 5 business days.',
        },
      ],
      trendData: [58, 65, 72, 79, 86, 91],
      targetData: [62, 68, 74, 80, 86, 92],
    },
    Risks: {
      score: 71,
      status: 'Action Needed',
      strategicAlignment: 82,
      operationalEfficiency: 68,
      executionHealth: 74,
      insights: [
        {
          type: 'danger',
          color: 'bg-orange-500',
          textColor: 'text-orange-300',
          text: 'Regulatory audit readiness gap identified in regional unit.',
        },
        {
          type: 'warning',
          color: 'bg-amber-400',
          textColor: 'text-amber-300',
          text: 'Key talent attrition exposure in engineering architecture.',
        },
        {
          type: 'success',
          color: 'bg-teal-400',
          textColor: 'text-teal-300',
          text: 'Disaster recovery failover test completed in under 45s.',
        },
      ],
      trendData: [75, 72, 69, 70, 71, 75],
      targetData: [80, 80, 82, 82, 85, 85],
    },
    Insights: {
      score: 86,
      status: 'High Signal',
      strategicAlignment: 92,
      operationalEfficiency: 84,
      executionHealth: 88,
      insights: [
        {
          type: 'success',
          color: 'bg-teal-400',
          textColor: 'text-teal-300',
          text: 'Predictive model identified $1.8M potential cost reduction.',
        },
        {
          type: 'success',
          color: 'bg-teal-400',
          textColor: 'text-teal-300',
          text: 'Early correlation found between onboarding speed and LTV.',
        },
        {
          type: 'warning',
          color: 'bg-amber-400',
          textColor: 'text-amber-300',
          text: 'Shift towards mid-market deal size demands pipeline recalibration.',
        },
      ],
      trendData: [60, 68, 76, 81, 86, 92],
      targetData: [64, 70, 76, 82, 88, 92],
    },
    Reports: {
      score: 80,
      status: 'Ready',
      strategicAlignment: 90,
      operationalEfficiency: 79,
      executionHealth: 83,
      insights: [
        {
          type: 'success',
          color: 'bg-teal-400',
          textColor: 'text-teal-300',
          text: 'Q2 Executive Board Briefing generated with 100% data audit.',
        },
        {
          type: 'success',
          color: 'bg-teal-400',
          textColor: 'text-teal-300',
          text: 'Automated weekly stakeholder pulse dispatched to 48 leaders.',
        },
        {
          type: 'warning',
          color: 'bg-amber-400',
          textColor: 'text-amber-300',
          text: 'Custom ESG governance metric integration pending audit.',
        },
      ],
      trendData: [65, 70, 74, 78, 83, 87],
      targetData: [68, 72, 76, 80, 84, 88],
    },
  };

  const current = tabData[activeTab];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

  // SVG Gauge calculations
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (current.score / 100) * circumference;

  // Generate SVG path for line chart
  const getCoordinates = (val: number, idx: number, max: number = 100, min: number = 50) => {
    const width = 230;
    const height = 75;
    const x = 15 + (idx * (width - 30)) / 5;
    const y = height - 10 - ((val - min) / (max - min)) * (height - 20);
    return { x, y };
  };

  const actualPoints = current.trendData.map((val, idx) => getCoordinates(val, idx));
  const targetPoints = current.targetData.map((val, idx) => getCoordinates(val, idx));

  const actualPath = actualPoints.reduce(
    (acc, pt, i) => (i === 0 ? `M ${pt.x},${pt.y}` : `${acc} L ${pt.x},${pt.y}`),
    ''
  );

  const targetPath = targetPoints.reduce(
    (acc, pt, i) => (i === 0 ? `M ${pt.x},${pt.y}` : `${acc} L ${pt.x},${pt.y}`),
    ''
  );

  const actualAreaPath = `${actualPath} L ${actualPoints[actualPoints.length - 1].x},75 L ${actualPoints[0].x},75 Z`;

  return (
    <div className="w-full max-w-[620px] rounded-2xl bg-[#0c1626]/90 border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.65)] backdrop-blur-xl overflow-hidden transition-all duration-300 hover:shadow-[0_25px_65px_rgba(0,0,0,0.8)] hover:border-white/25">
      {/* Window Top Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0a121f]/90 border-b border-white/10">
        <div className="flex items-center gap-2">
          <AvichasLogo size="sm" textColor="text-slate-100" />
        </div>
        <div className="flex items-center gap-3 text-slate-400">
          <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-slate-300">
            <User className="w-3 h-3" />
          </div>
          <button className="hover:text-white transition-colors" title="Minimize">
            <Minus className="w-3 h-3" />
          </button>
          <button className="hover:text-white transition-colors" title="Close">
            <X className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Main Container: Sidebar + Content */}
      <div className="flex flex-col sm:flex-row min-h-[380px]">
        {/* Sidebar */}
        <aside className="sm:w-36 bg-[#080e18]/80 border-b sm:border-b-0 sm:border-r border-white/10 p-2.5 flex sm:flex-col gap-1 overflow-x-auto sm:overflow-visible">
          {[
            { id: 'Overview', icon: Layers, label: 'Overview' },
            { id: 'Strategy', icon: Target, label: 'Strategy' },
            { id: 'Performance', icon: BarChart3, label: 'Performance' },
            { id: 'Execution', icon: GitBranch, label: 'Execution' },
            { id: 'Risks', icon: AlertTriangle, label: 'Risks' },
            { id: 'Insights', icon: Lightbulb, label: 'Insights' },
            { id: 'Reports', icon: FileText, label: 'Reports' },
          ].map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as DashboardTab)}
                className={`flex items-center gap-2 px-2.5 py-1.5 rounded-md text-xs font-medium transition-all text-left whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#17324d] to-[#122840] text-teal-300 border border-teal-500/30 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-teal-400' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </aside>

        {/* Dashboard Main Workspace */}
        <main className="flex-1 p-4 bg-[#0d1829]/60 flex flex-col gap-4">
          {/* Header */}
          <div className="flex items-center justify-between pb-1 border-b border-white/5">
            <div>
              <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
                Organizational Performance
              </h4>
              <p className="text-[10px] text-slate-400">
                Live telemetric sync · Updated 2m ago
              </p>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-[10px] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
              Live Sync
            </div>
          </div>

          {/* Top Row: Circular Gauge + 3 Strategic Progress Bars */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center bg-[#070e1a]/60 p-3 rounded-xl border border-white/5">
            {/* Donut Score Ring */}
            <div className="md:col-span-5 flex items-center justify-center gap-3">
              <div className="relative w-24 h-24 flex items-center justify-center shrink-0">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 96 96">
                  {/* Track */}
                  <circle
                    cx="48"
                    cy="48"
                    r={radius}
                    stroke="rgba(255, 255, 255, 0.08)"
                    strokeWidth="7"
                    fill="transparent"
                  />
                  {/* Dynamic Progress Arc */}
                  <circle
                    cx="48"
                    cy="48"
                    r={radius}
                    stroke="url(#tealGradient)"
                    strokeWidth="7"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    fill="transparent"
                    className="transition-all duration-700 ease-out"
                  />
                  <defs>
                    <linearGradient id="tealGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2dd4bf" />
                      <stop offset="50%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </svg>
                {/* Center Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-xl font-bold text-white tracking-tight tabular-nums">
                    {current.score}%
                  </span>
                  <span className="text-[9px] font-medium text-teal-300">
                    {current.status}
                  </span>
                </div>
              </div>
            </div>

            {/* Strategic KPI Progress Bars */}
            <div className="md:col-span-7 flex flex-col gap-2.5">
              <div>
                <div className="flex justify-between text-[11px] mb-1">
                  <span className="text-slate-400">Strategic Alignment</span>
                  <span className="text-slate-200 font-semibold tabular-nums">
                    {current.strategicAlignment}%
                  </span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full transition-all duration-700"
                    style={{ width: `${current.strategicAlignment}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[11px] mb-1">
                  <span className="text-slate-400">Operational Efficiency</span>
                  <span className="text-slate-200 font-semibold tabular-nums">
                    {current.operationalEfficiency}%
                  </span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-700"
                    style={{ width: `${current.operationalEfficiency}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[11px] mb-1">
                  <span className="text-slate-400">Execution Health</span>
                  <span className="text-slate-200 font-semibold tabular-nums">
                    {current.executionHealth}%
                  </span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full transition-all duration-700"
                    style={{ width: `${current.executionHealth}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Split: Top Insights (Left) & Performance Trend (Right) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mt-auto">
            {/* Top Insights */}
            <div className="md:col-span-6 bg-[#070e1a]/60 p-3 rounded-xl border border-white/5 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-semibold text-slate-300">
                  Top Insights
                </span>
                <Sparkles className="w-3 h-3 text-[#C9975B]" />
              </div>
              <div className="flex flex-col gap-2">
                {current.insights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${item.color} shrink-0 mt-1 shadow-sm`}
                    />
                    <p className="text-[10px] text-slate-300 leading-tight">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Trend Graph */}
            <div className="md:col-span-6 bg-[#070e1a]/60 p-3 rounded-xl border border-white/5 flex flex-col">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11px] font-semibold text-slate-300">
                  Performance Trend
                </span>
                <div className="flex items-center gap-2 text-[9px] text-slate-400 font-mono">
                  <span className="flex items-center gap-1 text-teal-300">
                    <span className="inline-block w-2 h-0.5 bg-teal-400"></span> Actual
                  </span>
                  <span className="flex items-center gap-1 text-slate-400">
                    <span className="inline-block w-2 border-b border-dashed border-slate-400"></span> Target
                  </span>
                </div>
              </div>

              {/* Chart SVG */}
              <div className="relative w-full h-[85px] mt-1">
                <svg viewBox="0 0 240 85" className="w-full h-full overflow-visible">
                  <defs>
                    <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal Guide Grid */}
                  <line x1="15" y1="15" x2="225" y2="15" stroke="rgba(255,255,255,0.05)" />
                  <line x1="15" y1="45" x2="225" y2="45" stroke="rgba(255,255,255,0.05)" />
                  <line x1="15" y1="70" x2="225" y2="70" stroke="rgba(255,255,255,0.05)" />

                  {/* Target dashed line */}
                  <path
                    d={targetPath}
                    fill="none"
                    stroke="#64748b"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                    opacity="0.8"
                  />

                  {/* Actual shaded area */}
                  <path d={actualAreaPath} fill="url(#areaGradient)" />

                  {/* Actual glowing solid curve */}
                  <path
                    d={actualPath}
                    fill="none"
                    stroke="#2dd4bf"
                    strokeWidth="2.5"
                    className="transition-all duration-500"
                  />

                  {/* Interactive Points on Actual Path */}
                  {actualPoints.map((pt, i) => (
                    <g key={i}>
                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r={hoveredMonth === i ? 4 : 2.5}
                        fill="#2dd4bf"
                        stroke="#0d1829"
                        strokeWidth="1.5"
                        className="cursor-pointer transition-all duration-200"
                        onMouseEnter={() => setHoveredMonth(i)}
                        onMouseLeave={() => setHoveredMonth(null)}
                      />
                      {hoveredMonth === i && (
                        <text
                          x={pt.x}
                          y={pt.y - 8}
                          textAnchor="middle"
                          fill="#ffffff"
                          fontSize="9"
                          fontWeight="bold"
                          className="bg-slate-900"
                        >
                          {current.trendData[i]}%
                        </text>
                      )}
                    </g>
                  ))}
                </svg>

                {/* Months labels */}
                <div className="flex justify-between px-3 text-[9px] text-slate-400 font-mono mt-0.5">
                  {months.map((m, i) => (
                    <span
                      key={m}
                      className={hoveredMonth === i ? 'text-teal-300 font-bold' : ''}
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
