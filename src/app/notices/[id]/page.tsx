import { notices } from "@/data/mockData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Bell } from "lucide-react";

export async function generateStaticParams() {
  return notices.map((notice) => ({
    id: notice.id.toString(),
  }));
}

export default async function NoticeDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const notice = notices.find((n) => n.id.toString() === id);

  if (!notice) {
    notFound();
  }

  const dateObj = new Date(notice.date);
  const formattedDate = dateObj.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-16 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <Link
          href="/notices"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-primary transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Notices
        </Link>
      </div>

      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-14 border border-slate-100 shadow-xl shadow-slate-200/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-bl-full -z-10"></div>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-semibold text-sm">
              <Calendar className="w-4 h-4" />
              {formattedDate}
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-700 font-semibold text-sm">
              <Bell className="w-4 h-4" />
              Official Announcement
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-8 leading-tight">
            {notice.title}
          </h1>
          
          <div className="prose prose-lg prose-slate max-w-none">
            <p className="text-slate-600 leading-relaxed md:text-xl font-medium border-l-4 border-brand-primary pl-4 mb-8">
              {notice.description}
            </p>
            {notice.content && (
              <div className="text-slate-700 leading-relaxed whitespace-pre-wrap">
                {notice.content}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
