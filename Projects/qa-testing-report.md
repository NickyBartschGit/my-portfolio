# QA Testing Report – Personal Portfolio Website

## Overview
This document summarizes basic manual testing I performed on my personal React portfolio website. The focus was on checking navigation, layout behavior, and general usability across different screen sizes.

---

## What I Tested

### 1. Navigation
- Checked that navbar links scroll to the correct sections of the page
- Tested clicking each section multiple times
- Noticed that without adjustments, some section headings were getting slightly hidden under the sticky navbar

**Fix Applied:**
- Added scroll-padding-top in CSS to improve section alignment

---

### 2. Responsive Layout
- Tested how the site looks on smaller screens (mobile view)
- Verified that skill cards stack properly instead of staying in a row
- Adjusted spacing so content does not feel too cramped on mobile

---

### 3. UI Elements
- Checked buttons in contact section (email button)
- Verified hover effects work and feel consistent
- Reviewed spacing between sections to make sure content is readable

---

## Issues Found (Simple List)

- Section headings partially hidden when navigating with navbar links
- Grid layout looked too tight on smaller screen sizes
- Some spacing between sections felt inconsistent at first

---

## Fixes I Made

- Added `scroll-padding-top` to fix navbar overlap issue
- Updated grid layout for mobile responsiveness
- Adjusted spacing between sections and cards for better readability

---

## What I Learned

This helped me understand how small CSS and layout issues can affect user experience, especially on mobile devices. It also showed me how important it is to test changes while building instead of only at the end.

---

## Conclusion

Overall, the site works as expected after small adjustments. The testing was manual and focused on basic usability rather than advanced QA tooling.