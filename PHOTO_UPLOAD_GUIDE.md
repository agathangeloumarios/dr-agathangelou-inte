# 📸 Photo Upload Guide for Dr. Agathangelou Marios Website

## Current Status ✅
Your website has a **PhotoGallery component** already built and ready to use! It includes:
- Grid layout (2, 3, or 4 columns)
- Click to enlarge photos
- Lightbox view with navigation arrows
- Smooth animations and hover effects

## 🗂️ Where Photos Should Be Stored
All photos must be placed in: `/workspaces/spark-template/src/assets/images/`

## 📤 How to Upload Photos

### Method 1: Using File Browser (Recommended)
1. In your editor's file explorer, navigate to `src/assets/images/`
2. Right-click on the `images` folder
3. Select "Upload Files" or "Add Files"
4. Choose your photos from your computer
5. Photos will be added to the folder

### Method 2: Drag and Drop
1. Open the `src/assets/images/` folder in the file explorer
2. Drag photos from your computer directly into this folder
3. They will automatically upload

### Method 3: Manual Creation
If you have base64 or URLs, I can help you add them programmatically.

## 📋 Recommended Photos to Upload

### For Medical Practice:
1. **clinic-exterior.jpg** - Outside view of the clinic
2. **clinic-waiting-room.jpg** - Waiting area
3. **clinic-treatment-room.jpg** - Treatment room
4. **dr-marios-office.jpg** - Doctor's office
5. **medical-equipment-1.jpg** - Advanced imaging equipment
6. **medical-equipment-2.jpg** - Catheterization lab
7. **team-photo.jpg** - Staff team photo
8. **consultation-room.jpg** - Patient consultation area

### For Procedures (if available):
9. **procedure-setup.jpg** - Sterile procedure room
10. **imaging-technology.jpg** - CT/Fluoroscopy equipment
11. **patient-care.jpg** - Patient care demonstration
12. **recovery-area.jpg** - Recovery room

## 🎯 Where Photos Will Appear on Your Website

### 1️⃣ **HOME PAGE** - Multiple Locations:
- **Hero Section**: Large background or featured image
- **About Section**: Doctor/clinic photo
- **Services Section**: Procedure illustrations
- **Facility Gallery**: Photo gallery near the bottom

### 2️⃣ **TEAM PAGE**:
- Doctor profile photos
- Team member photos
- Office environment photos

### 3️⃣ **PROCEDURES PAGES** (all 9 procedure detail pages):
- Procedure-specific images
- Before/after diagrams
- Equipment photos

### 4️⃣ **TESTIMONIALS PAGE**:
- Patient testimonial backgrounds (if needed)
- Clinic atmosphere photos

## 💻 After Uploading Photos - Next Steps

Once you upload photos to `src/assets/images/`, I will:

1. **Import them properly** using the correct syntax:
   ```typescript
   import clinicPhoto from '@/assets/images/clinic-exterior.jpg'
   ```

2. **Add them to the PhotoGallery** component on relevant pages

3. **Optimize the layout** based on your photos

## 🖼️ Photo Guidelines

### File Format:
- ✅ JPG/JPEG (recommended for photos)
- ✅ PNG (for graphics with transparency)
- ✅ WebP (modern, optimized format)

### File Size:
- **Recommended**: Under 500KB per photo
- **Maximum**: 2MB per photo
- Larger photos will slow down your website

### Image Dimensions:
- **Hero/Banner**: 1920x1080px (landscape)
- **Gallery Photos**: 1200x800px or similar (4:3 ratio)
- **Profile Photos**: 800x800px (square)
- **Thumbnails**: Will be automatically handled by the component

### File Naming:
- Use lowercase letters
- Use hyphens instead of spaces
- Be descriptive: `clinic-exterior.jpg` ✅ not `IMG_1234.jpg` ❌

## 🚀 Example Usage

After you upload photos, here's how they'll be used:

```typescript
// In Home.tsx or any page
import clinicExterior from '@/assets/images/clinic-exterior.jpg'
import waitingRoom from '@/assets/images/waiting-room.jpg'
import treatmentRoom from '@/assets/images/treatment-room.jpg'

const photos = [
  { src: clinicExterior, alt: 'Medical Clinic Exterior', title: 'Our Modern Facility' },
  { src: waitingRoom, alt: 'Comfortable Waiting Area', title: 'Welcoming Environment' },
  { src: treatmentRoom, alt: 'Advanced Treatment Room', title: 'State-of-the-art Equipment' }
]

// Then in the component:
<PhotoGallery photos={photos} columns={3} aspectRatio="landscape" />
```

## ❓ Common Questions

**Q: Can I use stock photos temporarily?**  
A: Yes! I can add professional medical stock photos as placeholders until you have your own.

**Q: Do I need photos for all 9 procedure pages?**  
A: It's recommended but not required. Medical diagrams or illustrations can also work.

**Q: Can I add photos later?**  
A: Absolutely! The website works without photos initially. You can add them anytime.

**Q: What if my photos are too large?**  
A: You can use free tools like TinyPNG.com to compress them before uploading.

## 🎨 Best Recommended Locations for Photos

Based on your website design, here are the **BEST spots** for photos:

### 🏆 **Priority 1 - HOME PAGE**:
1. **Hero Section** (top of page) - Large clinic or doctor photo
2. **"About Interventional Radiology"** section - Medical equipment/procedure photo
3. **Photo Gallery Section** (before Testimonials) - 6-9 clinic photos

### 🏆 **Priority 2 - TEAM PAGE**:
1. **Dr. Marios Profile** - Professional headshot
2. **Team Members** - Staff photos
3. **Office Tour** - Small gallery of facility

### 🏆 **Priority 3 - PROCEDURE PAGES**:
1. Each of the 9 procedure pages can have 1-2 relevant images

---

## ✨ Next Steps

1. **Upload your photos** to `src/assets/images/` folder
2. **Let me know** which photos you uploaded (list the filenames)
3. **I'll integrate them** into your website at the best locations
4. **Review and adjust** as needed

---

**Need help?** Just say:
- "I uploaded 5 photos" - I'll add them to your site
- "Add stock photos as placeholders" - I'll use professional medical imagery
- "Show me example photos" - I'll suggest specific stock images to use
