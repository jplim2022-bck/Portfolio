# Quick Start Guide

## ⚡ Start Development Server

To view your portfolio locally:

```bash
npm run dev
```

Then open your browser to: **http://localhost:3000**

## 🎯 What You'll See

Your portfolio includes:

1. **Hero Section** - Introduction with your name and role
2. **About Section** - Your professional background and experience
3. **Skills Section** - Your technical and core competencies
4. **Projects Section** - Showcase of your work
5. **Contact Section** - Contact form and social links
6. **Footer** - Additional information and links

## ✏️ Customize Your Portfolio

### Update Your Information

1. **Personal Details**:
   - `components/Hero.tsx` - Name, title, introduction
   - `components/About.tsx` - Background, experience, education
   - `app/layout.tsx` - Page title and meta description

2. **Skills**:
   - Open `components/Skills.tsx`
   - Modify the `skillCategories` array
   - Add/remove skills and adjust proficiency levels

3. **Projects**:
   - Open `components/Projects.tsx`
   - Update the `projects` array with your actual projects
   - Add real GitHub and demo links

4. **Contact Info**:
   - `components/Contact.tsx` - Contact information and form
   - `components/Footer.tsx` - Footer contact details

5. **Social Media Links**:
   - Update GitHub, LinkedIn URLs in:
     - `components/Hero.tsx`
     - `components/Contact.tsx`
     - `components/Footer.tsx`

### Add Your Projects

Replace the placeholder projects in `components/Projects.tsx`:

```typescript
{
  title: "Your Project Name",
  description: "Detailed description of your project",
  tags: ["Technology1", "Technology2", "Technology3"],
  github: "https://github.com/yourusername/project",
  demo: "https://your-project-demo.com",
}
```

## 🎨 Customize Colors & Styling

- **Colors**: Edit `tailwind.config.ts`
- **Global Styles**: Edit `app/globals.css`
- **Dark Mode**: Already configured, updates automatically

## 📸 Add Project Images

Replace the placeholder images in Projects section:
1. Add images to the `public` folder
2. Update the `image` property in each project

Example:
```typescript
image: "/images/project-screenshot.png"
```

## 🚀 Deploy Your Portfolio

### Deploy to Vercel (Recommended - Free)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

Your portfolio will be live at: `your-portfolio.vercel.app`

### Other Options

- **Netlify**: Drag and drop deployment
- **GitHub Pages**: Free hosting with GitHub
- **Custom Domain**: Add your own domain in deployment settings

## 📝 Next Steps

1. ✅ Start the development server
2. ✅ Update your personal information
3. ✅ Add your real projects
4. ✅ Update social media links
5. ✅ Customize colors if desired
6. ✅ Deploy to production

## 💡 Tips

- Test on mobile devices for responsiveness
- Use your actual project screenshots
- Keep descriptions concise and impactful
- Update regularly with new projects
- Add Google Analytics for tracking (optional)

## ❓ Need Help?

If you encounter any issues:

1. Make sure Node.js 18+ is installed
2. Delete `node_modules` and run `npm install` again
3. Check that all files are in the correct locations
4. Review the main README.md for detailed documentation

---

**Ready to shine! 🌟**

Your portfolio is set up with your information from your resume. Customize it further to make it uniquely yours!
