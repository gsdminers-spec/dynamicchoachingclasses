import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Courses | Dynamic Coaching Classes',
  description: 'Explore our rigorous NEET, Foundation, and Crash Course programs engineered for success.',
};

export default function CoursesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
