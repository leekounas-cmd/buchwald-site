export function BreadcrumbSchema({ items }: { items: { name: string; href: string }[] }) {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    ...items,
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbs.map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.name,
            item: `https://buchwaldfamilydentistry.com${item.href}`,
          })),
        }),
      }}
    />
  );
}
