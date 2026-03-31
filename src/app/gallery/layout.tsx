import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | Dynamic Coaching Classes',
  description: 'Visual evidence of our state-of-the-art facilities and previous events.',
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
