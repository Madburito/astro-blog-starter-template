export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

export function generateOrganizationSchema(siteOrigin: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Martens Driving School',
    url: siteOrigin,
    logo: `${siteOrigin}/images/logo.jpeg`,
    sameAs: [
      'https://www.instagram.com/martensdrivingschool/'
    ],
    contact: {
      '@type': 'ContactPoint',
      telephone: '(204) 371-7417, (204) 380-2912',
      contactType: 'Customer Service',
      email: 'Martensdrivingschool@gmail.com'
    },
    foundingDate: '2023',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Steinbach',
      addressRegion: 'MB',
      addressCountry: 'CA'
    }
  };
}

export function generateAggregateRatingSchema(ratingValue: number = 4.8, reviewCount: number = 45) {
  return {
    '@type': 'AggregateRating',
    ratingValue: ratingValue.toString(),
    reviewCount: reviewCount.toString()
  };
}
