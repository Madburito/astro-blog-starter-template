# SEO Maintenance & Content Update Guide

## Quick Reference

### Adding a New Service Page
1. Create new file in `/src/pages/new-service.astro`
2. Use this template structure:
```astro
---
import BaseHead from '../components/BaseHead.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';

const title = 'Service Name in Steinbach, MB | Martens Driving School';
const description = 'Clear description of the service (150-160 characters)';
const keywords = 'keyword1, keyword2, keyword3, local keywords';
const siteOrigin = Astro.site ? Astro.site.toString().replace(/\/$/, '') : Astro.url.origin;

const STRUCTURED_DATA = [
	{
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: [
			{ '@type': 'ListItem', position: 1, name: 'Home', item: `${siteOrigin}/` },
			{ '@type': 'ListItem', position: 2, name: 'Service Name', item: `${siteOrigin}/service-page/` }
		]
	},
	{
		'@context': 'https://schema.org',
		'@type': 'Service',
		name: 'Service Name',
		provider: {
			'@type': 'LocalBusiness',
			name: 'Martens Driving School',
			telephone: '(204) 371-7417'
		},
		areaServed: [
			{ '@type': 'City', name: 'Steinbach' },
			// Add other service cities
		],
		description: 'Description of the service',
		offers: {
			'@type': 'Offer',
			priceCurrency: 'CAD',
			price: '70',
			priceValidUntil: '2025-12-31'
		}
	},
	{
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: [
			{
				'@type': 'Question',
				name: 'FAQ Question?',
				acceptedAnswer: { '@type': 'Answer', text: 'Answer to the question.' }
			}
			// Add 6 FAQs minimum
		]
	}
];
---
```

3. Add link to new service in:
   - `/src/pages/index.astro` (Services section)
   - `_redirects` file (if alternative URLs needed)

### Local Service Areas
Always include in areaServed schema:
- Steinbach (primary)
- Blumenort
- Mitchell
- La Broquerie
- New Bothwell
- Landmark
- Grunthal
- Niverville
- Kleefeld
- Southeastern Manitoba (region)

## SEO Best Practices

### Title Tags
- 50-60 characters
- Include main keyword + location + brand
- Example: `Private Driving Lessons in Steinbach, MB | Martens`

### Meta Descriptions
- 150-160 characters
- Include main keyword early
- Include location
- Include unique value proposition
- Example: `One-on-one private driving lessons tailored to your pace in Steinbach. Experienced MPI certified instructors. Book today.`

### Headings Hierarchy
- One H1 per page (usually page title in hero)
- H2 for main sections (Services, FAQ, etc.)
- H3 for subsections
- Never skip heading levels

### Content Structure
- Open with compelling hook (problem/solution)
- List key benefits (service-specific)
- Address common questions (FAQ section)
- Clear call-to-action
- Internal links to related services

### Images
- Use descriptive alt text (not too long)
- Include keywords naturally in alt text
- Example: `Noemi Martens, MPI certified driving instructor in Steinbach`
- All images should have src, alt, width, height attributes

### Keywords
**Primary**: "driving lessons [service type] steinbach"
**Secondary**: "MPI road test", "adult driver", "highway driving", "nervous driver"
**Long-tail**: "one-on-one driving lessons near me", "professional driving instruction steinbach"

### Internal Linking
- Link homepage to all service pages
- Link service pages to related services
- Link to FAQ/contact from every page
- Use descriptive anchor text (not "click here")
- Example: `<a href="/nervous-drivers/">driving lessons for anxious drivers</a>`

## Schema.org Best Practices

### Service Schema Required Fields
- @type: "Service"
- name: Service name
- provider: LocalBusiness with name & telephone
- description: Service description
- areaServed: Array of cities

### FAQPage Schema
- Minimum 3 questions per page
- 6+ recommended
- Each has @type: "Question" with name and acceptedAnswer
- acceptedAnswer has @type: "Answer" with text

### BreadcrumbList Schema
- On every service page
- Position starts at 1 (Home)
- Final position should be current page

## Monitoring & Maintenance

### Monthly Tasks
- [ ] Check Google Search Console for crawl errors
- [ ] Monitor keyword rankings with SEMrush/Ahrefs
- [ ] Review page speed metrics in PageSpeed Insights
- [ ] Check internal links for broken references

### Quarterly Tasks
- [ ] Review analytics for top-performing pages
- [ ] Update pricing/content if changed
- [ ] Add new FAQ items based on inquiries
- [ ] Check schema.org validation

### Annual Tasks
- [ ] Full SEO audit
- [ ] Competitor analysis
- [ ] Update service descriptions
- [ ] Add customer testimonials/reviews

## Content Calendar

Suggested blog post/content additions:

### Q1
- "How to Prepare for Your MPI Road Test"
- "Nervous About Driving? Here's How to Build Confidence"

### Q2
- "Highway Driving Tips for New Drivers"
- "What to Expect in Your First Driving Lesson"

### Q3
- "Preparing for Winter Driving in Manitoba"
- "Common Mistakes Adult Learners Make"

### Q4
- "Year-End Driving Safety Tips"
- "New Year, New Skills: Refresh Your Driving"

## Performance Targets

- **LCP (Largest Contentful Paint)**: < 2.5s
- **INP (Interaction to Next Paint)**: < 200ms
- **CLS (Cumulative Layout Shift)**: < 0.1
- **PageSpeed Score**: > 85

## Tools & Resources

### SEO Tools
- Google Search Console: https://search.google.com/search-console
- Google Analytics: https://analytics.google.com
- PageSpeed Insights: https://pagespeed.web.dev
- Schema Validator: https://validator.schema.org

### Keyword Research
- Google Trends: https://trends.google.com
- AnswerThePublic: https://answerthepublic.com
- Keywords Everywhere: https://keywordseverywhere.com

### Monitoring
- SEMrush: https://www.semrush.com
- Ahrefs: https://ahrefs.com
- Moz: https://moz.com
- Surfer SEO: https://surferseo.com

## Common Issues & Solutions

### Issue: Page not appearing in search results
**Solution**: 
1. Check robots.txt allows indexing
2. Submit URL to Google Search Console
3. Wait 2-4 weeks for indexing
4. Check for meta noindex tag

### Issue: Low click-through rate (CTR)
**Solution**:
1. Improve title tag (add power words)
2. Rewrite meta description (include location)
3. Add schema markup (improves rich snippets)
4. Check SERP position (need backlinks if low)

### Issue: High bounce rate on service pages
**Solution**:
1. Check page load speed
2. Ensure clear value proposition in hero
3. Add more internal links
4. Improve form accessibility/UX
5. Check mobile responsiveness

### Issue: Low conversion rate on forms
**Solution**:
1. Reduce form fields (name, email, phone only)
2. Add trust signals (phone number, hours)
3. Use clear CTA button text
4. Show form on every page (sticky mobile CTA)
5. Test mobile form experience

## File Structure Reference

```
src/
├── components/
│   ├── BaseHead.astro (global SEO metadata)
│   ├── Header.astro (navigation with schema)
│   ├── Footer.astro
├── pages/
│   ├── index.astro (homepage with expanded FAQ)
│   ├── 404.astro (error page)
│   ├── private-driving-lessons.astro
│   ├── adult-driving-lessons.astro
│   ├── highway-driving-lessons.astro
│   ├── winter-driving-lessons.astro
│   ├── road-test-preparation.astro
│   └── nervous-drivers.astro
├── lib/
│   └── schema.ts (schema utilities)
├── styles/
│   └── global.css
public/
├── robots.txt
├── _headers
├── _redirects
├── images/
│   ├── logo.jpeg
│   ├── instructor.jpg
│   └── instructor-carlos.jpg
└── fonts/
    ├── atkinson-regular.woff
    └── atkinson-bold.woff
```

## Updating Content

### Changing Pricing
Update in:
1. `/src/pages/index.astro` (Services section)
2. All service pages (pricing mention)
3. Schema.org offer price in all STRUCTURED_DATA
4. Instructor pages (if instructor-specific pricing)

### Adding New Service Area
Update in:
1. `BaseHead.astro` (areaServed array)
2. All service pages (mention in service area section)
3. Homepage (service area list)
4. Schema areaServed arrays (all pages)

### Adding Testimonial
1. Add to homepage testimonials section
2. Update schema if adding AggregateRating
3. Add to service pages (optional)

## Deployment Checklist

Before deploying to production:
- [ ] All pages have unique meta descriptions
- [ ] All images have descriptive alt text
- [ ] Internal links verified (no 404s)
- [ ] Schema markup validates at schema.org
- [ ] Mobile responsive design tested
- [ ] Form submission tested
- [ ] Social media links work
- [ ] Robots.txt allows indexing
- [ ] Sitemap generated correctly
- [ ] _headers and _redirects syntax correct

---

**Last Updated**: 2025
**Next Review**: Quarterly
