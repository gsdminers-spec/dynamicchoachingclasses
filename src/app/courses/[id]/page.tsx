import { courses } from "@/data/mockData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Clock, BookOpen } from "lucide-react";

export async function generateStaticParams() {
  return courses.map((course) => ({
    id: course.id,
  }));
}

export default async function CourseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const course = courses.find((c) => c.id === id);

  if (!course) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-16 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-primary transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Courses
        </Link>
      </div>

      <section className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 md:p-14 border border-slate-100 shadow-xl shadow-slate-200/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-brand-primary/5 to-emerald-500/5 rounded-bl-full -z-10"></div>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-brand-primary font-semibold text-sm">
              <Clock className="w-4 h-4" />
              Duration: {course.duration}
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-brand-emerald font-semibold text-sm">
              <BookOpen className="w-4 h-4" />
              Academic Program
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
            {course.title}
          </h1>
          
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-12 max-w-3xl">
            {course.description}
          </p>

          <div className="bg-slate-50 rounded-2xl p-8 md:p-10 border border-slate-100 mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Program Highlights</h3>
            <ul className="grid md:grid-cols-2 gap-6">
              {course.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-emerald w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-lg font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {course.curriculum && course.curriculum.length > 0 && (
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Curriculum Overview</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {course.curriculum.map((subj, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-brand-emerald/30 shadow-sm shadow-slate-200/50 hover:shadow-md transition-all duration-300">
                    <h4 className="text-lg font-bold text-brand-primary mb-4 border-b border-slate-100 pb-2">{subj.subject}</h4>
                    <ul className="space-y-3">
                      {subj.topics.map((topic, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2 text-slate-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-emerald mt-2 flex-shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="text-center pt-8 border-t border-slate-200">
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-primary text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              Enroll Now / Learn More
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
