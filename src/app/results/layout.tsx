import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Results | Dynamic Coaching Classes',
  description: 'View the historic past results and alumni achievements of Dynamic Coaching Classes.',
};

export default function ResultsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
