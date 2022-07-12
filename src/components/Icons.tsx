import React from "react";

// ====================================================================
// Navigation bar.

export function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M21.849 20.151l-4.607-4.607a8.53 8.53 0 001.736-5.156c0-4.736-3.854-8.589-8.589-8.589C5.653 1.8 1.8 5.653 1.8 10.389c0 4.735 3.853 8.589 8.589 8.589a8.533 8.533 0 005.156-1.736l4.607 4.607a1.196 1.196 0 001.697-.001 1.201 1.201 0 000-1.697zM4.2 10.389A6.196 6.196 0 0110.389 4.2a6.195 6.195 0 016.188 6.188 6.195 6.195 0 01-6.188 6.188A6.194 6.194 0 014.2 10.389z"
        fill="#C7C7CC"
      />
    </svg>
  );
}

export function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        clipRule="evenodd"
        d="M18.6 20.4h-13c-1 0-1.7-.8-1.7-1.7v-13c0-1 .8-1.7 1.7-1.7h13c1 0 1.7.8 1.7 1.7v13c0 1-.7 1.7-1.7 1.7z"
        stroke="#C7C7CC"
        strokeWidth={2.4}
        strokeLinejoin="bevel"
      />
      <path d="M4.1 12.2h16" stroke="#C7C7CC" strokeWidth={2.4} strokeLinejoin="bevel" />
    </svg>
  );
}

export function ProfileIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.516 7.058a4.515 4.515 0 11-9.03.002 4.515 4.515 0 019.03-.002M12 12.956c-6.503 0-9.032 4.138-9.032 6.064 0 1.924 5.384 2.437 9.032 2.437 3.648 0 9.032-.513 9.032-2.437 0-1.926-2.53-6.064-9.032-6.064z"
        fill="#C7C7CC"
      />
    </svg>
  );
}

// ====================================================================
// Bottom sheet.

export function PlanIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.2 4.22a1.8 1.8 0 110 3.6 1.8 1.8 0 010-3.6zm6.8 3.6c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm6.8 0c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm-13.6 2.4a1.8 1.8 0 110 3.6 1.8 1.8 0 010-3.6zm6.8 3.6c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm6.8 0c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8z"
        fill="#636366"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.2 10.18a1.8 1.8 0 110 3.6 1.8 1.8 0 010-3.6zm6.8 3.6c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm6.8 0c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm-13.6 2.4a1.8 1.8 0 110 3.6 1.8 1.8 0 010-3.6zm6.8 3.6c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm6.8 0c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8z"
        fill="#636366"
      />
    </svg>
  );
}

export function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.2 10.2l-5.6 5.6c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3l-3.4-3.4c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l2.7 2.7 4.9-4.9c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4"
        fill="#636366"
      />
      <path
        d="M12 3c5 0 9 4 9 9s-4 9-9 9-9-4-9-9 4-9 9-9zm0-2C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1z"
        fill="#636366"
      />
    </svg>
  );
}

export function MemoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.387 6.135l-7.993 7.993-1.09 4.066-.718 2.679a.442.442 0 00.541.54l2.677-.717 4.067-1.09h.001l7.993-7.994-5.477-5.477h-.001zm8.783.926L16.94 2.83a.88.88 0 00-1.248 0L13.51 5.012l5.479 5.479 2.182-2.184a.881.881 0 000-1.247"
        fill="#636366"
      />
    </svg>
  );
}

export function SettingsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 15.667a3.666 3.666 0 110-7.331 3.666 3.666 0 010 7.331zm9.033-1.715a2.79 2.79 0 01-.783-1.941v-.021c0-.724.28-1.42.783-1.941l.939-.97c.386-.4.46-1.008.183-1.489l-1.258-2.178a1.244 1.244 0 00-1.38-.586l-1.315.328a2.786 2.786 0 01-2.082-.297l-.018-.01a2.768 2.768 0 01-1.271-1.634l-.376-1.309A1.245 1.245 0 0013.258 1h-2.516c-.555 0-1.045.369-1.197.904L9.14 3.313a2.496 2.496 0 01-1.164 1.489 4.96 4.96 0 00-.174.102 2.51 2.51 0 01-1.895.278l-1.425-.356a1.245 1.245 0 00-1.38.585L1.845 7.59a1.247 1.247 0 00.183 1.489l.939.97c.503.521.784 1.217.784 1.94v.022c0 .724-.281 1.42-.784 1.941l-.503.52a2.077 2.077 0 00-.306 2.482l.945 1.635c.278.482.84.721 1.38.586l1.425-.356a2.51 2.51 0 011.895.278c.057.035.115.069.174.102.569.322.984.859 1.164 1.489l.404 1.409c.152.535.642.903 1.197.903h2.516c.555 0 1.045-.368 1.197-.903l.404-1.409c.18-.63.595-1.167 1.164-1.489.059-.033.117-.067.174-.102a2.51 2.51 0 011.895-.278l1.425.356a1.245 1.245 0 001.38-.585l1.258-2.179a1.246 1.246 0 00-.183-1.489l-.94-.97h.001z"
        fill="#636366"
      />
    </svg>
  );
}