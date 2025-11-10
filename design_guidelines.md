# Design Guidelines: Gazpromneft Loyalty Program Landing Page

## Design Approach
**Reference-Based + Brand System Hybrid**: Drawing inspiration from modern loyalty program platforms (Starbucks Rewards, Nike Membership) combined with enterprise brand guidelines. Focus on clear information hierarchy, gamification elements, and trust-building through corporate identity.

## Core Design Principles
1. **Corporate Trust**: Professional presentation using Gazpromneft brand colors
2. **Gamification Clarity**: Visual progression system that motivates engagement
3. **Action-Oriented**: Clear CTAs guiding users through registration and participation

## Color Strategy
- **Primary Background**: Gazpromneft corporate blue (#0E4C92 or similar deep blue) for hero and page background
- **Accent Color**: G-Drive orange (#FF6B00 or similar vibrant orange) for CTAs, badges, highlights
- **Supporting**: White text on blue backgrounds, dark text on white content sections
- **Neutral**: Light gray backgrounds for content cards/sections to create visual separation from blue

## Typography System
- **Headings**: Bold, modern sans-serif (Montserrat Bold or similar)
  - H1: Large, impactful (48-64px desktop)
  - H2: Section headers (36-48px)
  - H3: Card/feature titles (24-32px)
- **Body**: Clean sans-serif (Inter or Roboto) for readability (16-18px)
- **Emphasis**: Use uppercase for labels/badges, medium weight for statistics

## Layout & Spacing
**Tailwind Units**: Consistent use of 4, 6, 8, 12, 16, 20, 24 for spacing
- Section padding: py-16 to py-24 (desktop), py-12 (mobile)
- Card padding: p-6 to p-8
- Element gaps: gap-4, gap-6, gap-8

## Page Structure

### 1. Hero Section (Full viewport height)
- **Background**: Solid Gazpromneft blue
- **Layout**: Centered content with statistics row
- **Content**: 
  - Main headline: "НОВАЯ ПРОГРАММА ЛОЯЛЬНОСТИ"
  - Subheadline: "Зарабатывайте баллы за вашу преданность бренду"
  - Statistics cards: "15 уровней развития", "50Р за каждый уровень", "более 15 уникальных заданий"
  - Primary CTA: Large orange button with subtle backdrop blur
- **Image**: Hero image showing fuel station/driving scene, positioned right side or as background overlay with blue tint

### 2. How It Works Section
- **Layout**: 4-column grid (desktop), stacked (mobile)
- **Cards**: White background with numbered badges (orange circles)
- **Steps**:
  1. СТАНЬ УЧАСТНИКОМ - Зарегистрируйтесь в программе
  2. ВЫПОЛНЯЙ ЗАДАНИЯ - Получайте персональные миссии и зарабатывайте очки
  3. ОБМЕНИВАЙТЕ ОЧКИ НА БАЛЛЫ - 1 балл = 1 рубль
  4. ОТКРЫВАЙ НОВЫЕ ВОЗМОЖНОСТИ - Повышайте статус в программе
- Each card: Icon, bold title, description text

### 3. Levels System Section
- **Layout**: Tiered presentation showing 15 levels
- **Categories**: 
  - Быстрый старт (1-5)
  - Стабильный рост (6-10) - with lottery badge
  - Элитный клуб (11-15)
- **Visual**: Progress bar or tier cards showing rewards in "бонусы"
- **Highlight**: Special badge/callout at level 10: "Автоматическое участие в большой годовой лотерее"
- Orange accent for level milestones

### 4. Mission Types Section
- **Layout**: 2-column grid
- **Cards**: Image-backed cards showing mission categories
- General missions and personalized missions
- Icons + descriptions

### 5. Benefits Section
- **Layout**: 3-column feature grid
- Icons with orange accents, benefit titles, explanatory text
- White cards on light background

### 6. Final CTA Section
- Orange background section with white text
- Large registration button, supporting text about getting started

## Component Library

### Buttons
- **Primary**: Orange background, white text, rounded corners (rounded-lg), no hover blur (component handles states)
- **Secondary**: White outline on blue background

### Cards
- White background, subtle shadow (shadow-lg)
- Rounded corners (rounded-xl)
- Padding p-6 to p-8

### Badges/Labels
- Orange circular badges for numbers
- Small pill badges for "НОВОЕ", "ЭКСКЛЮЗИВ"
- Uppercase text, bold weight

### Statistics Displays
- Large numbers, small labels
- Orange accent line or border
- Clean, minimal presentation

## Images
- **Hero Image**: Professional photo of Gazpromneft station or car at pump (right side placement or full-width background with blue overlay)
- **Mission Cards**: Abstract icons or illustrations representing tasks
- **Benefits Icons**: Simple line icons in orange
- Image style: Modern, clean, professional photography aligned with corporate identity

## Accessibility
- High contrast white text on blue backgrounds
- Minimum 16px body text
- Clear focus states on interactive elements
- Semantic HTML structure for screen readers

## Key Differentiators
- Corporate blue creates trust and brand recognition
- Orange CTAs provide clear action pathways
- Gamification through level system creates engagement
- Lottery announcement at level 10 adds excitement
- Clean, professional aesthetic befitting enterprise brand