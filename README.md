Currency Conversion Rate Calculator App
This project is a demonstration of my ability to design and develop a modern web application using the Next.js framework with TypeScript. It focuses on creating a currency conversion rate calculator app, featuring three main screens and integrating with an external API to fetch currency exchange rates.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


The application consists of three primary screens:

1. Currency Exchange Rate Table: Displays exchange rates with TWD (Taiwanese Dollar) as the base currency.
2. Currency Conversion Page: Allows me to convert amounts between selected currencies based on current exchange rates.
3. Currency Selection Page: Enables users to select their desired currencies for conversion purposes.

## API Integration
The currency exchange rate list is fetched from: https://65efcc68ead08fa78a50f929.mockapi.io/api/v1/pairs

## Specifications
1. Currency prices are formatted with a thousands separator for readability.
2. Conversion rates are based on TWD, allowing for accurate currency conversions.
3. Precision for currency amounts adheres to the amount_decimal value, ensuring accurate and rounded-down calculations where necessary.



## Key Skills Demonstrated
1. Next.js & TypeScrip
2. State Management: React Query.
3. Material-UI (MUI)
4. Image Optimization:dynamic loading and next Image tag with priority

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
