# 📸 Photo Upload Guide

## Where to Upload Photos

### Directory Structure
All photos should be uploaded to: `/workspaces/spark-template/src/assets/images/`

### Recommended Photos to Upload

#### 🏥 **Priority 1 - Essential Photos**
1. **doctor-portrait.jpg** (1200x1200px or larger, square format)
   - Professional photo of Dr. Marios in medical attire
   - Will be used on: Team page, Home page hero
   
2. **clinic-exterior.jpg** (1920x1080px or larger)
   - Exterior view of the clinic building
   - Will be used on: Home page, Contact section

3. **clinic-interior.jpg** (1920x1080px or larger)
   - Modern, clean interior of the clinic
   - Will be used on: Home page, About section

#### 🏥 **Priority 2 - Medical Equipment & Facilities**
4. **medical-equipment-1.jpg** (1920x1080px)
   - Interventional radiology equipment
   - Will be used on: Home page "What is IR?" section

5. **medical-equipment-2.jpg** (1920x1080px)
   - Imaging equipment (CT, fluoroscopy, etc.)
   - Will be used on: Procedures page

6. **procedure-room.jpg** (1920x1080px)
   - Clean, professional procedure room
   - Will be used on: Procedures page

#### 🏥 **Priority 3 - Gallery Photos**
7. **consultation-room.jpg** (1920x1080px)
8. **reception-area.jpg** (1920x1080px)
9. **waiting-room.jpg** (1920x1080px)
10. **facility-hallway.jpg** (1920x1080px)
   - Will be used in: Photo gallery sections

---

## 📍 Exact Locations Where Photos Will Appear

### **1. HOME PAGE** (`/src/pages/Home.tsx`)
- **Line 8-30**: Hero section - Doctor portrait background
- **Line 150-180**: "What is Interventional Radiology?" section - Medical equipment photo
- **Line 320-350**: Facility gallery (3-4 photos in grid)

### **2. TEAM PAGE** (`/src/pages/Team.tsx`)
- **Line 63-71**: Main doctor photo (currently using emoji 👨‍⚕️)
- **Line 180-210**: Office/clinic photo gallery at bottom (4-6 photos)

### **3. PROCEDURES PAGE** (`/src/pages/Procedures.tsx`)
- Header background: Medical equipment
- Individual procedure cards: Procedure-specific images

### **4. TESTIMONIALS PAGE** (`/src/pages/Testimonials.tsx`)
- Background: Facility photos
- Optional: Patient photos (with permission)

---

## 🎨 Photo Guidelines

### Technical Requirements
- **Format**: JPG or PNG
- **Resolution**: Minimum 1920x1080px for landscape, 1200x1200px for portraits
- **File Size**: Under 2MB per image (optimized for web)
- **Color**: Professional, well-lit, high-quality photos

### Content Guidelines
✅ **Good Photos:**
- Clean, modern medical facilities
- Professional lighting
- Organized, clutter-free spaces
- High-resolution and sharp focus
- Neutral or medical color tones

❌ **Avoid:**
- Blurry or low-quality images
- Personal patient photos without consent
- Cluttered or unprofessional backgrounds
- Dark or poorly lit photos
- Outdated equipment or facilities

---

## 🚀 How to Use Photos in Code

Once you upload photos to `/workspaces/spark-template/src/assets/images/`, you'll import them like this:

```typescript
import doctorPortrait from '@/assets/images/doctor-portrait.jpg'
import clinicExterior from '@/assets/images/clinic-exterior.jpg'
import medicalEquipment from '@/assets/images/medical-equipment-1.jpg'

// Then use in JSX:
<img src={doctorPortrait} alt="Dr. Marios Agathangelou" />
```

### Using the PhotoGallery Component

```typescript
import PhotoGallery from '@/components/PhotoGallery'
import photo1 from '@/assets/images/clinic-interior.jpg'
import photo2 from '@/assets/images/consultation-room.jpg'
import photo3 from '@/assets/images/reception-area.jpg'

const photos = [
  { src: photo1, alt: 'Clinic Interior', title: 'Modern Facility' },
  { src: photo2, alt: 'Consultation Room', title: 'Private Consultation' },
  { src: photo3, alt: 'Reception Area', title: 'Welcoming Environment' }
]

<PhotoGallery photos={photos} columns={3} aspectRatio="landscape" />
```

---

## 📋 Next Steps

1. **Upload your photos** to `/workspaces/spark-template/src/assets/images/`
2. Let me know when photos are uploaded
3. I'll integrate them into the exact locations listed above
4. The PhotoGallery component is already built and ready to use

---

## 💡 Photo Ideas by Section

### Home Page Hero
- Full-width doctor portrait with clinic background
- Professional, approachable, confident pose

### What is IR? Section
- Modern interventional radiology suite
- Imaging equipment (CT scanner, fluoroscopy)
- Clean, technical, precise atmosphere

### Team Page
- Professional headshot of Dr. Marios
- Medical attire (lab coat or scrubs)
- Neutral background or clinic setting

### Facility Gallery
- Reception/waiting area
- Consultation rooms
- Procedure rooms
- Exterior building shot
- Hallways/common areas

All photos should convey: **professionalism, cleanliness, modern technology, patient comfort**
