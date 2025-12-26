# 📍 PHOTO PLACEMENT MAP - EXACT LOCATIONS

## 🏠 HOME PAGE (`/src/pages/Home.tsx`)

### Location 1: HERO SECTION (Lines 130-187)
```
📸 PHOTO NEEDED: doctor-portrait.jpg or hero-background.jpg
SIZE: 1920x1080px (landscape) or 1200x1200px (square)
PLACEMENT: Background image behind hero text
DESCRIPTION: Professional photo of Dr. Marios or modern clinic facility
```

**What you'll see:**
- Large header section with doctor's name and "PRECISION. INNOVATION"
- Photo will be behind/above the text as a background
- Can also be used as a split-screen: text on left, photo on right

---

### Location 2: "WHAT IS IR?" SECTION (Lines 189-242)
```
📸 PHOTO NEEDED: medical-equipment-1.jpg
SIZE: 1200x900px (4:3 ratio)
PLACEMENT: Right side card (currently showing icon)
LINE: Replace the Card component at line 226-239
DESCRIPTION: Interventional radiology equipment, imaging machines, or procedure room
```

**What you'll see:**
- Left side: Text explaining interventional radiology
- Right side: **YOUR PHOTO HERE** - Medical equipment or technology

---

### Location 3: FACILITY GALLERY SECTION (After line 440 - NEW SECTION)
```
📸 PHOTOS NEEDED: 
   - clinic-exterior.jpg
   - clinic-interior.jpg
   - consultation-room.jpg
   - reception-area.jpg
   
SIZE: 1920x1080px each
PLACEMENT: Photo grid gallery with 4 columns
DESCRIPTION: Beautiful shots of your clinic/facility
```

**What you'll see:**
- Section title: "Our Modern Facility"
- 4 photos in a grid
- Click to view fullscreen
- Gallery navigation arrows

---

## 👨‍⚕️ TEAM PAGE (`/src/pages/Team.tsx`)

### Location 4: DOCTOR MAIN PHOTO (Lines 64-71)
```
📸 PHOTO NEEDED: doctor-portrait.jpg (MOST IMPORTANT!)
SIZE: 1200x1200px (square format)
PLACEMENT: Main profile card
CURRENT: Shows emoji 👨‍⚕️ (needs to be replaced)
DESCRIPTION: Professional headshot of Dr. Marios in medical attire
```

**What you'll see:**
- Large square card on the left side
- **Currently shows emoji - REPLACE WITH REAL PHOTO**
- Should be professional, clear, approachable

---

### Location 5: FACILITY GALLERY AT BOTTOM (After line 202 - NEW SECTION)
```
📸 PHOTOS NEEDED:
   - waiting-room.jpg
   - procedure-room.jpg
   - consultation-space.jpg
   - technology-equipment.jpg
   - clinic-hallway.jpg
   - office-workspace.jpg

SIZE: 1920x1080px each
PLACEMENT: 3-column photo gallery at bottom of Team page
DESCRIPTION: Various clinic/office areas showing professionalism
```

**What you'll see:**
- Section title: "Our Facility"
- 6 photos in 3-column grid
- Hover effects and click to enlarge
- Shows patients your professional environment

---

## 🏥 PROCEDURES PAGE (`/src/pages/Procedures.tsx`)

### Location 6: HEADER BACKGROUND
```
📸 PHOTO NEEDED: medical-technology.jpg
SIZE: 1920x600px (wide banner)
PLACEMENT: Hero section background
DESCRIPTION: Modern medical equipment or procedure room
```

### Location 7: INDIVIDUAL PROCEDURE CARDS
```
📸 PHOTOS NEEDED: 9 procedure-specific images
   - uterine-fibroid-procedure.jpg
   - varicose-vein-treatment.jpg
   - prostate-procedure.jpg
   - spine-procedure.jpg
   - tumor-ablation.jpg
   - dialysis-access.jpg
   - biopsy-equipment.jpg
   - port-placement.jpg
   - embolization-procedure.jpg

SIZE: 800x600px each
PLACEMENT: Each procedure card can have a photo
DESCRIPTION: Relevant medical imagery for each procedure type
```

---

## 💬 TESTIMONIALS PAGE (`/src/pages/Testimonials.tsx`)

### Location 8: BACKGROUND IMAGERY
```
📸 PHOTO NEEDED: clinic-atmosphere.jpg
SIZE: 1920x1080px
PLACEMENT: Subtle background image
DESCRIPTION: Warm, welcoming clinic environment
```

---

## 📊 SUMMARY - PHOTO CHECKLIST

### ⭐ PRIORITY 1 - MUST HAVE
- [ ] `doctor-portrait.jpg` - Professional headshot (1200x1200px)
- [ ] `medical-equipment-1.jpg` - IR equipment/technology (1200x900px)
- [ ] `clinic-exterior.jpg` - Building exterior (1920x1080px)

### ⭐ PRIORITY 2 - HIGHLY RECOMMENDED
- [ ] `clinic-interior.jpg` - Modern interior space (1920x1080px)
- [ ] `consultation-room.jpg` - Private consultation area (1920x1080px)
- [ ] `reception-area.jpg` - Welcoming entrance (1920x1080px)
- [ ] `procedure-room.jpg` - Professional procedure space (1920x1080px)

### ⭐ PRIORITY 3 - NICE TO HAVE
- [ ] `waiting-room.jpg` - Comfortable waiting area (1920x1080px)
- [ ] `medical-technology.jpg` - Advanced equipment (1920x1080px)
- [ ] `clinic-hallway.jpg` - Clean, modern hallway (1920x1080px)
- [ ] 9x procedure-specific images (800x600px each)

---

## 🎯 WHERE TO UPLOAD

**Upload all photos to this folder:**
```
/workspaces/spark-template/src/assets/images/
```

**File naming convention:**
- Use lowercase
- Use hyphens (not spaces or underscores)
- Be descriptive
- Examples: `doctor-portrait.jpg`, `clinic-exterior.jpg`, `consultation-room.jpg`

---

## ✅ AFTER UPLOADING - TELL ME:

Once you've uploaded your photos, just tell me:
- "Photos uploaded" or "Images ready"
- I'll automatically integrate them into all the locations above
- The PhotoGallery component is already built and ready to use

---

## 🖼️ VISUAL GUIDE - WHAT EACH PAGE WILL LOOK LIKE

### HOME PAGE
```
┌─────────────────────────────────────┐
│  HERO SECTION                       │
│  [Background: doctor-portrait.jpg]  │
│  Text overlay with name & title     │
└─────────────────────────────────────┘

┌──────────────────┬──────────────────┐
│  What is IR?     │ [medical-        │
│  Text content    │  equipment-1.jpg]│
└──────────────────┴──────────────────┘

┌──────┬──────┬──────┬──────┐
│ 📸   │ 📸   │ 📸   │ 📸   │  ← Facility Gallery
│clinic│clinic│consul│recep │
└──────┴──────┴──────┴──────┘
```

### TEAM PAGE
```
┌──────────┬─────────────────────────┐
│  📸      │  About Dr. Marios       │
│ Doctor   │  Credentials            │
│ Portrait │  Education              │
│ (1:1)    │  Experience             │
└──────────┴─────────────────────────┘

┌────────┬────────┬────────┐
│ 📸     │ 📸     │ 📸     │  ← Facility
│ Wait   │ Proc   │ Consult│     Gallery
├────────┼────────┼────────┤
│ 📸     │ 📸     │ 📸     │
│ Tech   │ Hall   │ Office │
└────────┴────────┴────────┘
```

---

## 💡 PRO TIPS

1. **Doctor Portrait** - This is the MOST IMPORTANT photo
   - Professional attire (white coat or scrubs)
   - Clean background
   - Good lighting
   - Approachable, confident expression

2. **Facility Photos** - Show cleanliness and modernity
   - Well-lit spaces
   - Organized and clutter-free
   - Modern equipment visible
   - Professional atmosphere

3. **Equipment Photos** - Highlight technology
   - Modern interventional radiology machines
   - Clean, sterile environment
   - Professional medical equipment
   - High-tech feel

All photos should convey: **Trust, Professionalism, Modern Technology, Patient Comfort**
