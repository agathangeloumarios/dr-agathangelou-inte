# Planning Guide

A comprehensive medical website for Dr. Agathangelou Marios, an interventional radiologist in Cyprus, showcasing his expertise in minimally invasive procedures and providing patients with information, testimonials, and appointment booking capabilities.

**Experience Qualities**:
1. **Professional** - Conveys medical expertise and trustworthiness through clean design and authoritative content
2. **Reassuring** - Creates comfort for patients through warm imagery, testimonials, and clear explanations of procedures
3. **Accessible** - Makes complex medical information easy to understand with clear navigation and mobile-friendly design

**Complexity Level**: Complex Application (advanced functionality, likely with multiple views)
This is a multi-page medical marketing and informational website with appointment booking, photo galleries, Google Maps integration, testimonials, detailed procedure pages, cookie consent, privacy policy, and SEO optimization.

## Essential Features

### Navigation & Routing
- **Functionality**: Multi-page navigation with responsive mobile menu
- **Purpose**: Allows users to explore different sections of the website seamlessly
- **Trigger**: User clicks navigation links or menu icon
- **Progression**: Click navigation item → Route changes → Page content loads → Smooth scroll to top
- **Success criteria**: All pages accessible, mobile menu works, active states show current page

### Hero Section with CTA
- **Functionality**: Large hero banner with doctor information and appointment booking
- **Purpose**: Immediately communicate value proposition and encourage appointment booking
- **Trigger**: Page load on home page
- **Progression**: User views hero → Reads credentials/benefits → Clicks "Book Appointment" → Navigates to booking form
- **Success criteria**: Hero displays properly, CTA button prominent, responsive on all devices

### Procedures Showcase
- **Functionality**: Display available procedures with detailed information pages
- **Purpose**: Educate patients about available treatments
- **Trigger**: User navigates to procedures page or clicks procedure cards
- **Progression**: Browse procedures → Click to learn more → Read detailed information → View before/after galleries → Book appointment
- **Success criteria**: All procedures listed, detail pages functional, images display properly

### Testimonials & Reviews
- **Functionality**: Display patient testimonials with ratings and Google reviews integration
- **Purpose**: Build trust through social proof
- **Trigger**: User navigates to testimonials page or views testimonials section
- **Progression**: View testimonials → Read patient experiences → See ratings → Gain confidence → Book appointment
- **Success criteria**: Testimonials display with proper formatting, ratings visible, responsive layout

### Appointment Booking
- **Functionality**: Form for booking appointments with validation
- **Purpose**: Convert visitors into patients by making booking easy
- **Trigger**: User clicks "Book Appointment" button
- **Progression**: Fill out form → Select procedure → Provide contact details → Submit → Receive confirmation
- **Success criteria**: Form validates input, submits successfully, user receives feedback

### Photo Galleries
- **Functionality**: Before/after galleries and facility images
- **Purpose**: Showcase results and build credibility
- **Trigger**: User views procedure detail pages or photo gallery components
- **Progression**: View thumbnail → Click to expand → Navigate through images → Close gallery
- **Success criteria**: Images load properly, galleries interactive, responsive on mobile

### Google Maps Integration
- **Functionality**: Interactive maps showing clinic locations
- **Purpose**: Help patients find clinic locations in Nicosia and Limassol
- **Trigger**: User scrolls to contact/location section
- **Progression**: View map → Interact with markers → Get directions
- **Success criteria**: Maps load correctly, markers show both locations, mobile-friendly

### SEO Optimization
- **Functionality**: Comprehensive meta tags, structured data, and OpenGraph tags
- **Purpose**: Improve search engine visibility and social sharing
- **Trigger**: Page loads
- **Progression**: Search engine crawls → Reads metadata → Indexes properly → Displays in search results
- **Success criteria**: All meta tags present, structured data valid, social previews work

## Edge Case Handling

- **Missing Images**: Fallback icons display when images fail to load using onError handlers
- **Network Failures**: Toast notifications inform users of submission errors with retry options
- **Invalid Form Data**: Real-time validation prevents submission of incomplete or malformed data
- **Mobile Navigation**: Menu closes automatically on route change to prevent navigation confusion
- **Scroll Restoration**: Pages scroll to top on navigation to ensure proper content viewing
- **Cookie Consent**: Persistent storage prevents repeated consent requests

## Design Direction

The design should evoke medical professionalism, trustworthiness, and calm reassurance. It combines clinical precision with warmth and approachability, using teal/blue tones associated with healthcare, clean layouts that suggest organization and competence, and generous whitespace that creates a sense of calm.

## Color Selection

Medical-inspired color palette with teal and blue as primary colors, complemented by soft gradients and clean neutrals.

- **Primary Color**: Teal `oklch(0.58 0.12 195)` - Medical professionalism and trust, used for primary actions and brand elements
- **Secondary Colors**: Blue `oklch(60.9% 0.126 221.723)` and Light Blue `oklch(71.5% 0.143 215.221)` - Supporting medical colors for hierarchy and variety
- **Accent Color**: Soft Orange `oklch(0.68 0.18 35)` - Warm, approachable highlight for CTAs and important elements
- **Foreground/Background Pairings**:
  - Primary Teal (oklch(0.58 0.12 195)): White text (oklch(0.99 0.01 200)) - Ratio 6.2:1 ✓
  - Background (oklch(0.97 0.01 200)): Dark Blue text (oklch(39.8% 0.07 227.392)) - Ratio 8.9:1 ✓
  - Accent Orange (oklch(0.68 0.18 35)): White text (oklch(0.99 0.01 200)) - Ratio 4.9:1 ✓
  - Navy Header (#0D2845): White text (#FFFFFF) - Ratio 12.1:1 ✓

## Font Selection

Typography should balance medical authority with readability, using clean sans-serif for clarity and subtle serif accents for warmth.

- **Typographic Hierarchy**:
  - H1 (Hero Titles): Inter Bold/48px/tight letter-spacing for maximum impact
  - H2 (Section Headers): Inter Bold/36px/normal spacing for clear hierarchy
  - H3 (Card Titles): Inter SemiBold/24px/normal spacing for subsections
  - Body Text: Inter Regular/16px/1.5 line-height for comfortable reading
  - Accent Text: Lora Italic/18px for testimonials and emphasis
  - Technical Info: JetBrains Mono Regular/14px for medical codes and data

## Animations

Animations are used purposefully to guide attention and provide feedback without overwhelming the medical context. Subtle fade-in-up animations introduce content sections as users scroll, creating a sense of progressive revelation. Button hover states include gentle scale transforms (1.02x) to confirm interactivity. Page transitions are smooth but quick (300ms) to maintain efficiency. The mobile menu slides in with a backdrop blur for professional polish.

## Component Selection

- **Components**: 
  - Navigation: Custom responsive nav with mobile drawer using Sheet component
  - Hero: Custom full-width hero with Badge, Button (primary CTA)
  - Procedures: Card components with hover effects, AspectRatio for images
  - Testimonials: Card with Avatar, rating stars using custom SVG
  - Forms: Input, Textarea, Select from shadcn with react-hook-form integration
  - Galleries: Custom PhotoGallery and BeforeAfterGallery components
  - Maps: Custom GoogleMap wrapper component
  - Notifications: Sonner toast for form submissions
  - Cookie Banner: Custom CookieConsent with persistent storage
  - Footer: Custom footer with social links

- **Customizations**: 
  - Custom PhotoGallery with lightbox functionality
  - BeforeAfterGallery with slider interaction
  - GoogleMap with custom markers for multiple locations
  - SEO component for dynamic meta tag management
  - Navigation with sticky behavior and scroll detection

- **States**: 
  - Buttons: Subtle scale on hover, pressed state with darker shade, disabled with opacity
  - Inputs: Focus state with ring color, error state with red border and message
  - Cards: Gentle elevation increase on hover, shadow expansion
  - Navigation: Active link underline, mobile menu slide-in animation

- **Icon Selection**: 
  - Phosphor Icons (duotone weight) for visual interest
  - Medical: Pulse, Heart for health-related elements
  - Actions: Phone, Envelope, MapPin for contact
  - Features: CheckCircle, Shield, Clock for benefits
  - Social: FacebookLogo, InstagramLogo, LinkedinLogo for social links

- **Spacing**: 
  - Container padding: px-4 mobile, px-8 desktop
  - Section spacing: py-16 mobile, py-24 desktop
  - Card padding: p-6 for content cards
  - Grid gaps: gap-6 for card grids
  - Button padding: px-6 py-3 for primary actions

- **Mobile**: 
  - Hamburger menu replaces desktop navigation at 768px breakpoint
  - Card grids collapse from 3-column to 2-column to 1-column
  - Hero text sizes reduce proportionally (48px → 32px)
  - Maps become full-width with adjusted height
  - Footer social links remain horizontal with smaller spacing
