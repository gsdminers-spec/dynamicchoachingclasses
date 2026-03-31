import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Notices | Dynamic Coaching Classes',
  description: 'Stay updated with the latest official notices, event announcements, and schedules.',
};

export default function NoticesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
