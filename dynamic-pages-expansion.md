# Dynamic Pages Expansion

## Overview
This plan focuses on enhancing the site architecture by introducing dynamic route pages for `Courses`, `Faculty`, and `Notices`. It also expands the homepage to display a new Faculty Section.

## Project Type
WEB

## Success Criteria
- Home page includes a section displaying faculty members.
- The `Courses` cards in the Home/About sections link to individual course pages `/courses/[id]`.
- The `Faculty` cards on the broader site link to individual profile pages `/faculty/[id]`.
- The `Notices` cards link to isolated announcement pages `/notices/[id]`.

## Tech Stack
- React / Next.js (App Router dynamic segments `[id]`)
- Tailwind CSS / Framer Motion
- Local state array `mockData.ts` to hydrate templates

## File Structure
- `src/components/home/FacultySection.tsx` (NEW)
- `src/app/faculty/[id]/page.tsx` (NEW)
- `src/app/courses/[id]/page.tsx` (NEW)
- `src/app/notices/[id]/page.tsx` (NEW)
- Modifications in `src/app/page.tsx`, `src/app/about/page.tsx`, etc.

## Task Breakdown
1. **Create FacultySection on Home Page**
   - Agent: `frontend-specialist`
   - Skill: `frontend-design`
   - INPUT→OUTPUT→VERIFY: Extract top experts from `mockData.ts` → `FacultySection.tsx` → Verified on index load.
2. **Implement `/faculty/[id]`**
   - Agent: `frontend-specialist`
   - Skill: `frontend-design`
   - INPUT→OUTPUT→VERIFY: Pass slug to page route → Full-page profile layout matching Imran Ali's section → Validated navigation from card.
3. **Implement `/courses/[id]`**
   - Agent: `frontend-specialist`
   - Skill: `frontend-design`
   - INPUT→OUTPUT→VERIFY: Pass slug to page route → Full-page syllabus and details view → Validated styling and link.
4. **Implement `/notices/[id]`**
   - Agent: `frontend-specialist`
   - Skill: `frontend-design`
   - INPUT→OUTPUT→VERIFY: Pass slug to page route → Focused announcement page → Validated mapping index.

## Phase X: Verification
- [ ] No purple/violet hex codes
- [ ] No standard template layouts
- [ ] Lint: `npm run lint`
- [ ] Build: `npm run build`
- [ ] Check Script: `python .agent/scripts/verify_all.py .`
