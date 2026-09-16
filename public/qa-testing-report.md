# QA Testing Report – Personal Portfolio Website

## Overview
This document summarizes manual QA testing performed on my personal React portfolio website. The focus was on navigation, responsiveness, and usability across desktop and mobile layouts.

---

## Test Environment
- Browser: Chrome (latest)
- Device: Desktop + Mobile view (responsive mode)
- Framework: React (Vite)
- Deployment: Vercel

---

## Test Cases

### TC1 – Navigation Scroll Behavior
**Steps:**
- Click navbar links (About, Projects, Contact)

**Expected Result:**
- Page scrolls to correct section
- Section heading is fully visible

**Actual Result:**
- Sections navigated correctly
- Headings were initially slightly hidden under navbar

**Status:** Fixed

**Fix Applied:**
- Added `scroll-padding-top` to adjust offset for sticky navbar

---

### TC2 – Responsive Layout (Mobile)
**Steps:**
- Resize screen to mobile width
- Inspect project and skill sections

**Expected Result:**
- Cards stack vertically
- No horizontal overflow

**Actual Result:**
- Layout adjusted correctly after CSS update
- Minor spacing issues initially

**Status:** Fixed

---

### TC3 – UI Interactions
**Steps:**
- Hover over buttons (Email, Resume, Project links)

**Expected Result:**
- Hover states visible and consistent

**Actual Result:**
- Hover effects worked as intended

**Status:** Pass

---

## Issues Found

| Issue | Severity | Status |
|------|----------|--------|
| Navbar overlap hiding headings | Medium | Fixed |
| Tight spacing on mobile grid | Low | Fixed |
| Inconsistent section spacing | Low | Fixed |

---

## Fixes Applied
- Added `scroll-padding-top` for navigation alignment
- Adjusted grid layout for responsive stacking
- Improved spacing consistency between sections

---

## What I Learned
This testing process showed how small layout and CSS issues can significantly impact usability. It reinforced the importance of testing responsiveness and navigation behavior during development, not only after completion.

---

## Conclusion
The website is now fully functional with improved navigation behavior and responsive layout. All identified issues were resolved through CSS adjustments and iterative testing.