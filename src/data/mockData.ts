export const courses = [
  {
    id: "neet-target",
    title: "NEET Target Batch",
    description: "An intensive coaching program designed specifically for repeaters aiming to clear NEET with top ranks.",
    features: ["Daily Practice Papers", "Weekly Mock Tests", "One-on-One Mentorship", "AI-driven Performance Analysis"],
    duration: "1 Year",
    curriculum: [
      { subject: "Physics", topics: ["Mechanics", "Thermodynamics", "Optics", "Modern Physics"] },
      { subject: "Chemistry", topics: ["Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry"] },
      { subject: "Biology", topics: ["Cell Biology", "Genetics", "Human Physiology", "Plant Physiology"] }
    ]
  },
  {
    id: "class-11-12-medical",
    title: "11th + 12th NEET Foundation",
    description: "Build a rock-solid foundation for board exams while simultaneously preparing for medical entrance exams.",
    features: ["NCERT Coverage", "Concept Building", "Regular Assessments", "Board Exam Focus"],
    duration: "2 Years",
    curriculum: [
      { subject: "Physics", topics: ["Kinematics", "Laws of Motion", "Electrostatics", "Current Electricity"] },
      { subject: "Chemistry", topics: ["States of Matter", "Chemical Bonding", "Coordination Compounds"] },
      { subject: "Biology", topics: ["Diversity in Living Organisms", "Ecology", "Biotechnology"] }
    ]
  },
  {
    id: "class-11-12-engineering",
    title: "JEE (Main) & MHT-CET",
    description: "Rigorous preparation for engineering entrance exams combined with state board success strategies.",
    features: ["Advanced Problem Solving", "Time Management Drills", "Mock Test Series", "Engineering Career Guidance"],
    duration: "2 Years",
    curriculum: [
      { subject: "Physics", topics: ["Rotational Motion", "Gravitation", "Electromagnetic Induction"] },
      { subject: "Chemistry", topics: ["Thermodynamics", "Equilibrium", "Polymers"] },
      { subject: "Mathematics", topics: ["Calculus", "Algebra", "Coordinate Geometry", "Vectors & 3D"] }
    ]
  },
  {
    id: "foundation-8-10",
    title: "Pre-Foundation (8th-10th)",
    description: "Early grooming for science and mathematics to build analytical thinking for future competitive exams.",
    features: ["Mental Ability", "Olympiad Level Prep", "Subject Foundation", "Interactive Learning"],
    duration: "3 Years",
    curriculum: [
      { subject: "Science", topics: ["Basic Physics Concepts", "Chemical Reactions", "Life Processes"] },
      { subject: "Mathematics", topics: ["Number Systems", "Geometry", "Basic Algebra"] },
      { subject: "Aptitude", topics: ["Logical Reasoning", "Data Interpretation", "Pattern Recognition"] }
    ]
  },
  {
    id: "crash-course",
    title: "Exam Crash Courses",
    description: "Fast-track syllabus coverage and rigorous revision sessions scheduled just before the main exams.",
    features: ["High-Weightage Topics", "Past Year Papers", "Doubt Clearing", "Rapid Mock Tests"],
    duration: "3-6 Months",
    curriculum: [
      { subject: "Comprehensive Prep", topics: ["Quick Formula Revisions", "Top 100 Most Expected Questions", "Time Optimization Tricks"] }
    ]
  }
];

export const faculty = [
  {
    id: "imran-ali",
    name: "Imran Ali Sir",
    subject: "Chemistry",
    experience: "14+ Years",
    image: "/images/faculty_chemistry.jpeg",
    description: "Master of organic and physical chemistry. Simplifies complex reactions with ease.",
    achievements: ["Mentored 500+ successful NEET aspirants", "Author of comprehensive Chemistry modules", "Renowned for shortcut techniques in Physical Chemistry"]
  },
  {
    id: "mansoor-pasha",
    name: "Mansoor Pasha Sir",
    subject: "Physics",
    experience: "12+ Years",
    image: "/images/faculty_physics.jpeg",
    description: "Expert in mechanics and electromagnetism. Makes physics intuitive and engaging.",
    achievements: ["Helped students achieve 180/180 in NEET Physics", "Former Senior Faculty at leading national institutes", "Creator of innovative Physics visualization models"]
  },
  {
    id: "syed-imran",
    name: "Syed Imran Sir",
    subject: "Biology",
    experience: "10+ Years",
    image: "/images/faculty_biology.jpeg",
    description: "Brings zoology and botany to life. Ensures every student scores full in Biology.",
    achievements: ["Specialist in NCERT line-by-line decoding", "Produced multiple state toppers in Board Exams", "Expert in retaining memory techniques"]
  },
  {
    id: "altamash",
    name: "Altamash Sir",
    subject: "Mathematics",
    experience: "8+ Years",
    image: "/images/faculty_maths.jpeg",
    description: "Turns complex calculus and algebra into simple logical steps.",
    achievements: ["Top scorer in JEE Advanced Mathematics", "Creates elite problem-solving worksheets", "Passionate about building foundational math logic"]
  },
];

export const pastResults = [
  { id: 1, name: "Rahul Sharma", score: "680/720", rank: "AIR 1540", year: 2024, college: "AIIMS Delhi" },
  { id: 2, name: "Priya Desai", score: "665/720", rank: "AIR 3210", year: 2024, college: "GMC Mumbai" },
  { id: 3, name: "Amit Verma", score: "650/720", rank: "AIR 5600", year: 2023, college: "BJ Medical College" },
  { id: 4, name: "Sneha Patil", score: "645/720", rank: "AIR 6100", year: 2023, college: "KEM Hospital" },
];

export const notices = [
  { 
    id: 1, 
    date: "2024-04-10", 
    title: "New Target Batch Starts", 
    description: "Admissions open for the fresh NEET Target batch starting next Monday.",
    category: "Admissions",
    content: "We are thrilled to announce that admissions for the upcoming NEET Target Batch are officially open. This batch is exclusively structured for students who have attempted NEET previously and are looking for a highly rigorous and disciplined approach to cracking the exam with top ranks. Classes will commence precisely at 8:00 AM on Monday. Orientation will cover the year's systematic schedule, daily practice methodologies, and access to our exclusive digital test portal. Secure your seat today as capacity is strictly limited to ensure personalized attention."
  },
  { 
    id: 2, 
    date: "2024-04-05", 
    title: "Mega Mock Test", 
    description: "All India level mock test scheduled for this Sunday. Mandatory for all students.",
    category: "Examination",
    content: "A comprehensive Mega Mock Test designed exactly on the lines of the NTA pattern will be held this coming Sunday from 2:00 PM to 5:20 PM. This is a mandatory examination for all enrolled batch students. Following the examination, an immediate deep-dive analysis session will be conducted by Imran Ali Sir and the core faculty to discuss question selection, time management, and common pitfalls. Hall tickets will be distributed via the student dashboard on Friday."
  },
  { 
    id: 3, 
    date: "2024-03-28", 
    title: "Parent-Teacher Meeting", 
    description: "A review session will be held online this weekend to discuss student progress.",
    category: "Administration",
    content: "Continuous evaluation is a cornerstone of Dynamic Coaching Classes. To keep parents fully informed of their ward's academic trajectory, we are hosting a virtual Parent-Teacher Meeting (PTM) this weekend. We will be sharing cumulative performance reports, attendance analytics, and subject-wise feedback. Time slots of 15 minutes per student have been assigned. Please check your registered email for the Zoom joining link and the scheduled time slot."
  },
];

export const resources = [
  {
    id: "ncert-physics-11",
    title: "NCERT Physics Class 11",
    category: "Physics",
    author: "NCERT",
    description: "Official NCERT textbook for Class 11 Physics. Essential for foundational concepts and NEET/JEE preparation.",
    link: "https://ncert.nic.in/textbook.php?keph1=0-8",
  },
  {
    id: "ncert-physics-12",
    title: "NCERT Physics Class 12",
    category: "Physics",
    author: "NCERT",
    description: "Official NCERT textbook for Class 12 Physics. Critical for board exams and competitive entrance tests.",
    link: "https://ncert.nic.in/textbook.php?leph1=0-8",
  },
  {
    id: "ncert-chemistry-11",
    title: "NCERT Chemistry Class 11",
    category: "Chemistry",
    author: "NCERT",
    description: "Official NCERT textbook for Class 11 Chemistry. Highly recommended for mastering inorganic and organic basics.",
    link: "https://ncert.nic.in/textbook.php?kech1=0-7",
  },
  {
    id: "ncert-chemistry-12",
    title: "NCERT Chemistry Class 12",
    category: "Chemistry",
    author: "NCERT",
    description: "Official NCERT textbook for Class 12 Chemistry. The ultimate guide for NEET and JEE Main.",
    link: "https://ncert.nic.in/textbook.php?lech1=0-9",
  },
  {
    id: "ncert-biology-11",
    title: "NCERT Biology Class 11",
    category: "Biology",
    author: "NCERT",
    description: "Official NCERT textbook for Class 11 Biology. The holy grail for NEET aspirants.",
    link: "https://ncert.nic.in/textbook.php?kebo1=0-22",
  },
  {
    id: "ncert-biology-12",
    title: "NCERT Biology Class 12",
    category: "Biology",
    author: "NCERT",
    description: "Official NCERT textbook for Class 12 Biology. Comprehensive coverage for board and medical entrance exams.",
    link: "https://ncert.nic.in/textbook.php?lebo1=0-16",
  },
  {
    id: "ncert-math-11",
    title: "NCERT Mathematics Class 11",
    category: "Mathematics",
    author: "NCERT",
    description: "Official NCERT textbook for Class 11 Mathematics. Builds the core for JEE and state level engineering exams.",
    link: "https://ncert.nic.in/textbook.php?kemh1=0-16",
  },
  {
    id: "ncert-math-12",
    title: "NCERT Mathematics Class 12",
    category: "Mathematics",
    author: "NCERT",
    description: "Official NCERT textbook for Class 12 Mathematics. Crucial vector algebra, calculus, and probability concepts.",
    link: "https://ncert.nic.in/textbook.php?lemh1=0-6",
  },
  {
    id: "hc-verma-vol1",
    title: "Concepts of Physics Vol 1",
    category: "Physics",
    author: "H.C. Verma",
    description: "A highly recommended reference book for in-depth understanding of physics concepts. (External Reference)",
    link: "#",
  },
  {
    id: "neet-past-10-years",
    title: "NEET Past 10 Years Papers",
    category: "Competitive Prep",
    author: "Dynamic Coaching",
    description: "A compiled PDF of the last 10 years of NEET examination papers for rigorous practice.",
    link: "#",
  }
];
