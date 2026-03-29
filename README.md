# TALE Intranet Portal — Centro de Apps

Premium corporate app hub for TALE's internal tools and services. Built with React, Tailwind CSS, and Vite.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

## 📐 Design System

Detailed visual specifications for maintaining brand consistency.

### Colors & Palette

| Priority | Color | Hex | Usage |
| :--- | :--- | :--- | :--- |
| **Primary** | Navy | `#01053A` | Headlines, main text, corporate base |
| **Accent** | Cyan | `#00C9FF` | Highlights, CTAs, interactive states |
| **Secondary** | Slate 600 | `#4B5563` | Body text, descriptions |
| **Surface** | White | `#FFFFFF` | Cards, modals, containers |

### Spacing & Grid

- **Base Unit:** 8px.
- **Grid:** 1 col (Mobile), 2 cols (Tablet), 4 cols (Desktop).
- **Max Width:** 1280px (`max-w-7xl`).
- **Gaps:** 32px (Desktop), 24px (Tablet), 16px (Mobile).

### Typography

- **Primary Font:** `Space Grotesk` (Headings) / `Inter` (Body).
- **Hero Title:** 48px–96px, Bold (700).
- **Body Text:** 14px–16px, Normal (400).

## 🛠 Technical Implementation

### Interactive States

1.  **Hover:** `scale-105`, `shadow-lg`, `border-cyan/20`.
2.  **Active:** `bg-white`, `ring-cyan/30`, `shadow-glow-cyan`.
3.  **Loading:** Iframe shows "Iniciando entorno seguro..." with pulsing icons.
4.  **Maintenance:** Red-to-orange indicators with `STG` environment tags.

### Project Structure

- `src/components/` — Atomic UI components (Badge, Button, etc.).
- `src/config/apps.js` — Centralized configuration for all internal apps.
- `src/styles/globals.css` — Tailwind layers and custom animations.
- `apps/` — HTML stubs for embedded legacy services.

## 📝 Managed Services

1.  **TaleHub** (Strategic)
2.  **TaleBank Admin** (Security)
3.  **Tale Insight** (Analytics)
4.  **TaleDownload** (Operation)
5.  **Tale Singroom** (Utility)

---

**Built with**: React · Tailwind CSS · Vite · Lucide Icons

**Version**: 1.0.0 | **Status**: Production Ready

