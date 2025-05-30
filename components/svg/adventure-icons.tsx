import type React from "react"

export const MountainIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
  </svg>
)

export const CampfireIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M8 16a5 5 0 0 0 10 0c0-5-5-8-5-8s-5 3-5 8Z" />
    <path d="M8 10a3 3 0 0 0 6 0c0-3-3-5-3-5s-3 2-3 5Z" />
    <path d="m6 17 3.27-1.35a5 5 0 0 0 2.73-2.73L12 13" />
    <path d="M16 20H8" />
    <path d="M18 14h-8" />
  </svg>
)

export const CompassIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
)

export const BackpackIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M4 20V10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
    <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
    <path d="M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5" />
    <path d="M8 10h8" />
    <path d="M8 18h8" />
  </svg>
)

export const BinocularsIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 8c0-2.2-1.8-4-4-4s-4 1.8-4 4m8 0v7c0 2.2-1.8 4-4 4s-4-1.8-4-4v-7" />
    <path d="M10 8c0-2.2-1.8-4-4-4S2 5.8 2 8m8 0v7c0 2.2-1.8 4-4 4s-4-1.8-4-4v-7" />
    <path d="M6 6v.5" />
    <path d="M18 6v.5" />
  </svg>
)

export const TrailIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 3c1 1 1 2 1 6v6c0 4 0 5 1 6" />
    <path d="M9 3c-1 1-1 2-1 6v6c0 4 0 5-1 6" />
    <path d="M9 3c1 1 1 2 1 6v6c0 4 0 5 1 6" />
    <path d="M15 3c-1 1-1 2-1 6v6c0 4 0 5-1 6" />
    <path d="M15 3c1 1 1 2 1 6v6c0 4 0 5 1 6" />
    <path d="M21 3c-1 1-1 2-1 6v6c0 4 0 5-1 6" />
  </svg>
)

export const WavyDivider: React.FC<{ className?: string }> = ({ className = "w-full h-16" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 120"
    fill="currentColor"
    className={className}
    preserveAspectRatio="none"
  >
    <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
  </svg>
)

export const MountainDivider: React.FC<{ className?: string }> = ({ className = "w-full h-16" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 120"
    fill="currentColor"
    className={className}
    preserveAspectRatio="none"
  >
    <path d="M0,96L48,85.3C96,75,192,53,288,64C384,75,480,117,576,117.3C672,117,768,75,864,64C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
  </svg>
)
