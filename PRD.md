# Planning Guide

A professional single-page website for Dr. Agathangelou Marios, an Interventional Radiologist, showcasing expertise in minimally invasive techniques with clean navigation, comprehensive service information, and appointment booking functionality.

**Experience Qualities**: 
1. **Trustworthy** - Medical professionalism with authoritative content that instills confidence in prospective patients
2. **Accessible** - Clear navigation and information hierarchy making complex medical procedures understandable
3. **Modern** - Contemporary design reflecting cutting-edge medical innovation and precision techniques

**Complexity Level**: Light Application (multiple features with basic state)
- The site functions as an informational showcase with interactive elements including smooth scrolling navigation, expandable procedure details, a booking form with validation, and testimonial displays. State management handles navigation highlighting, modal dialogs for procedures and booking, and form submissions.

## Essential Features

### Smooth Scroll Navigation
- **Functionality**: Fixed header with navigation links that smoothly scroll to page sections
- **Purpose**: Provides intuitive single-page navigation with visual feedback of current section
- **Trigger**: User clicks navigation items or logo
- **Progression**: Click nav item → Smooth scroll animation → Section appears → Nav highlight updates
- **Success criteria**: Scrolling is buttery smooth, active section is highlighted, header remains accessible

### Hero Section with Call-to-Action
- **Functionality**: Prominent introduction with doctor credentials and primary CTAs
- **Purpose**: Immediate professional credibility and clear action paths for visitors
- **Trigger**: Page load
- **Progression**: Page loads → Hero displays → User sees credentials/CTAs → Clicks Learn More or Book
- **Success criteria**: Doctor name, credentials, and specialization clearly visible; CTAs are prominent

### Procedures Overview with Detail Modals
- **Functionality**: Grid display of 9 procedures with expandable detail views
- **Purpose**: Showcase treatment offerings without overwhelming the single page
- **Trigger**: User clicks "Learn More" on procedure card
- **Progression**: Browse grid → Click procedure → Modal opens with details → Read content → Close modal
- **Success criteria**: All 9 procedures visible, modals open smoothly, content is comprehensive

### Benefits Section
- **Functionality**: Visual presentation of interventional radiology advantages
- **Purpose**: Educate visitors on treatment methodology benefits
- **Trigger**: User scrolls to benefits section
- **Progression**: Scroll into view → Benefits appear with icons → User reads advantages
- **Success criteria**: Clear benefit statements with supporting visuals

### Team Section
- **Functionality**: Doctor profile with photo, credentials, and expertise
- **Purpose**: Build trust through professional presentation
- **Trigger**: User navigates to team section
- **Progression**: Navigate → Profile displays → User reviews credentials
- **Success criteria**: Professional photo, full credentials, specialization details visible

### Testimonials Display
- **Functionality**: Patient review carousel or grid
- **Purpose**: Social proof through satisfied patient experiences
- **Trigger**: User scrolls to testimonials section
- **Progression**: Scroll into view → Reviews display → User reads testimonials
- **Success criteria**: Multiple testimonials visible, 5-star rating system shown

### Appointment Booking Form
- **Functionality**: Modal form with validation for appointment requests
- **Purpose**: Convert visitors into patients through easy scheduling
- **Trigger**: User clicks "Book an Appointment" CTA
- **Progression**: Click CTA → Modal opens → Fill form fields → Validate → Submit → Confirmation
- **Success criteria**: Form validates inputs, provides feedback, confirms submission

### Contact Information Display
- **Functionality**: Address, phone, email, and hours prominently displayed
- **Purpose**: Provide multiple contact methods for patient inquiries
- **Trigger**: User scrolls to contact section
- **Progression**: Scroll to footer → Contact info displays → User copies/clicks contact method
- **Success criteria**: All contact details visible, phone/email are clickable

## Edge Case Handling
- **Empty Form Submission**: Inline validation prevents submission and highlights required fields
- **Invalid Email Format**: Real-time email validation with error message
- **Mobile Navigation**: Hamburger menu for small screens with full-screen overlay
- **Long Procedure Content**: Scrollable modal content with clear close affordances
- **Slow Network**: Progressive content loading with skeleton states

## Design Direction
The design should evoke cutting-edge medical precision, trustworthiness, and calm professionalism. Clean lines, generous white space, and a sophisticated color palette create an atmosphere of modern healthcare excellence. Subtle animations suggest advanced technology while maintaining the gravitas appropriate for medical services.

## Color Selection
Professional medical palette with teal primary, warm accent colors, and high-contrast neutrals using hex codes.

- **Primary Color**: Teal (#0d9488) - Medical professionalism, trust, precision, innovation
- **Secondary Colors**: 
  - Mint Green (#8DD3BB) - Supporting color for secondary actions
  - Purple (#a855f7) - Innovation, specialization highlights
- **Accent Color**: Warm Amber (#f59e0c) - Call-to-action buttons, important highlights
- **Navigation/Footer**: Dark Navy (#172435) - Professional header and footer backgrounds
- **Foreground/Background Pairings**: 
  - Background Warm White (#FCFBF8): Dark Gray text (#262626) - Ratio 13.8:1 ✓
  - Teal Primary (#0d9488): White text (#FFFFFF) - Ratio 4.6:1 ✓
  - Amber Accent (#f59e0c): White text (#FFFFFF) - Ratio 5.8:1 ✓
  - Dark Navy (#172435): White text (#FFFFFF) - Ratio 13.2:1 ✓

## Font Selection
Typography should convey modern medical authority with excellent readability. Primary typeface is clean and contemporary for professional credibility; headings are bold and commanding to establish hierarchy.

- **Typographic Hierarchy**: 
  - H1 (Hero Title): Inter Bold / 56px / -0.02em / Leading 1.1
  - H2 (Section Headers): Inter SemiBold / 36px / -0.01em / Leading 1.2
  - H3 (Subsections): Inter SemiBold / 24px / Normal / Leading 1.3
  - Body (General Content): Inter Regular / 16px / Normal / Leading 1.6
  - Small (Captions): Inter Regular / 14px / Normal / Leading 1.5
  - Button Text: Inter Medium / 16px / Normal / Leading 1

## Animations
Animations enhance the sense of precision and modernity without distracting from medical content. Smooth scroll behavior creates seamless navigation. Subtle fade-ins as sections enter viewport add polish. Procedure cards have gentle hover elevations suggesting interactivity. Modal transitions are quick and purposeful. All animations respect reduced-motion preferences.

## Component Selection
- **Components**: 
  - Dialog (Shadcn) - For procedure details and booking form modals
  - Card (Shadcn) - Procedure cards with custom hover states
  - Button (Shadcn) - CTAs with teal primary and amber accent variants
  - Input, Textarea, Label (Shadcn) - Booking form fields with validation
  - Badge (Shadcn) - Procedure categories and doctor credentials
  - Separator (Shadcn) - Section dividers
- **Customizations**: 
  - Custom logo component with medical cross and typography
  - Procedure card grid with stagger animation on scroll
  - Fixed header with scroll-triggered background blur
  - Smooth scroll behavior via CSS scroll-behavior and intersection observer
- **States**: 
  - Buttons: Default (solid), Hover (slight lift + brightness), Active (press down), Focus (ring), Disabled (reduced opacity)
  - Inputs: Default (light border), Focus (teal ring), Error (red border + message), Success (green checkmark)
  - Nav Links: Default (gray), Active (teal + underline), Hover (teal transition)
- **Icon Selection**: 
  - Phosphor icons throughout: Activity (procedures), Heart (benefits), Users (team), ChatCircle (testimonials), Phone/Envelope/MapPin (contact), Calendar (booking), X (close modals)
- **Spacing**: 
  - Section padding: py-20 (mobile) / py-32 (desktop)
  - Content max-width: max-w-7xl mx-auto
  - Card gaps: gap-8 for grid layouts
  - Inline spacing: space-x-4 for button groups
- **Mobile**: 
  - Header: Hamburger menu with slide-in full-screen navigation
  - Hero: Stacked layout, reduced font sizes (H1 to 40px)
  - Procedure grid: 1 column on mobile, 2 on tablet, 3 on desktop
  - Form: Full-width inputs with comfortable touch targets (min 44px)
  - Contact: Stacked contact cards instead of grid
