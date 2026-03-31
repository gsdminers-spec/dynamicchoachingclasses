import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Dynamic Coaching Classes',
  description: 'Reach out to Dynamic Coaching Classes for enrollments, queries, and facility visits.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
