import { faculty } from "@/data/mockData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";

export async function generateStaticParams() {
  return faculty.map((member) => ({
    id: member.id,
  }));
}

export default function FacultyProfilePage({ params }: { params: { id: string } }) {
  const member = faculty.find((f) => f.id === params.id);

  if (!member) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-brand-light pt-24 pb-16 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <Link
          href="/about"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-primary transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Faculty
        </Link>
      </div>

      <section className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center bg-white rounded-3xl p-6 md:p-10 border border-slate-100 shadow-soft">
          <div className="relative h-[450px] w-full rounded-2xl overflow-hidden shadow-soft">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
            />
            {/* Elegant Tag */}
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md text-slate-900 px-6 py-3 rounded-full font-bold shadow-soft flex items-center gap-2">
              <span className="w-2 relative h-2 rounded-full bg-brand-emerald flex-shrink-0" />
              {member.subject} Expert
            </div>
          </div>
          
          <div className="lg:pl-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-brand-emerald rounded-full text-sm font-semibold mb-6">
              Faculty Profile
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-2">
              {member.name}
            </h1>
            <div className="text-brand-primary font-medium text-lg mb-6">
              {member.subject} Master
            </div>
            
            <blockquote className="border-l-4 border-brand-emerald pl-6 mb-8 py-2">
               <p className="text-slate-700 font-medium text-lg italic leading-relaxed">
                 "{member.description}"
               </p>
            </blockquote>
            
            <p className="text-slate-600 leading-relaxed mb-8">
              {member.name} is dedicated to helping students achieve remarkable success by providing crystalline conceptual clarity and continuous motivation. With exceptional experience in {member.subject}, they ensure every student aims for the top.
            </p>
            
            <div className="flex gap-4 border-t border-slate-200 pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                  <CheckCircle className="text-brand-primary w-5 h-5" />
                </div>
                <div>
                  <span className="block font-bold text-slate-900">{member.experience}</span>
                  <span className="text-sm text-slate-500 font-medium tracking-wide">Teaching Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
