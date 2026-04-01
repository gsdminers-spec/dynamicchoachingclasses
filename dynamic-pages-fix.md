# Dynamic Pages Fix & Content Update

## Overview
The individual pages for courses, faculty, and notices (e.g., `/courses/[id]`) are currently returning 404 errors / runtime errors. This is due to a breaking change in Next.js 15 where dynamic route `params` are now asynchronous (`Promise`) and must be `await`ed. Additionally, the individual detail pages look somewhat empty. We will fix the routing issue and expand the mock data with realistic coaching class curriculum information gathered from web searches.

## Project Type
WEB

## Success Criteria
- Navigating to any individual course, faculty, or notice page renders correctly without 404 errors.
- Individual detail pages display rich, realistic content (e.g., proper syllabus overview for NEET/JEE, comprehensive features).
- The entire build passes `npm run build` without any routing or typed errors.

## Task Breakdown

### 1. Fix Layout & Route Params Errors
- **Agent**: `frontend-specialist`, **Skill**: `react-best-practices`
- **Action**: Update `src/app/courses/[id]/page.tsx`, `faculty/[id]/page.tsx`, and `notices/[id]/page.tsx`.
- **INPUT**: Current sync params -> **OUTPUT**: Awaited params `const { id } = await params;` -> **VERIFY**: No 404 or runtime param errors on navigation.

### 2. Enrich Mock Data 
- **Agent**: `frontend-specialist`, **Skill**: `clean-code`
- **Action**: Update `src/data/mockData.ts` to include realistic descriptions. E.g., Adding subject splits (Physics, Chemistry, Maths/Bio), detailed syllabus highlights for NEET and JEE Main based on standard curriculums.
- **INPUT**: Short mock descriptions -> **OUTPUT**: Detailed syllabus/curriculum arrays and richer faculty bios -> **VERIFY**: Data exports correctly without TS errors.

### 3. Update Dynamic Pages UI
- **Agent**: `frontend-specialist`, **Skill**: `frontend-design`
- **Action**: Refactor the dynamic page components (Courses, Notices, Faculty) to render the newly added rich data beautifully.
- **INPUT**: Basic layouts -> **OUTPUT**: Full-fledged design for detail pages featuring curriculum lists, robust bios, etc. -> **VERIFY**: UI matches the premium look of the rest of the site.

### 4. Logic & Build Verification
- **Agent**: `orchestrator`, **Skill**: `webapp-testing`
- **Action**: Run `npm run build` and ensure no dead links exist. Check how `generateStaticParams` integrates.
- **INPUT**: Codebase -> **OUTPUT**: Passed build logs -> **VERIFY**: `npm run build` is 100% successful.
