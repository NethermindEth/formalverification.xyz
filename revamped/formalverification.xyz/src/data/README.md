# Listing Your Formal Verification Company

Any company specializing in formal verification for blockchain and cryptocurrency projects is welcome to list themselves on formalverification.xyz. To add your company, you'll need to include your information in the `firms.ts` file.

## Fields to Include

When adding your company, please provide the following information:

1. `id`: A unique identifier for your company (number).
2. `name`: Your company's name (string).
3. `specialties`: An array of your company's main focus areas (string[]).
4. `description`: A brief description of your company and its services (string).
5. `languages`: Programming languages your company works with (string[]).
6. `stacks`: Blockchain platforms your company specializes in (string[]).
7. `domains`: Specific areas within blockchain/crypto your company focuses on (string[]).
8. `fv_language`: Formal verification languages or tools your company uses (string[]).
9. `svg`: The filename of your company's logo in SVG format (string) (see below).
10. `link`: Your company's website URL (string).

Please ensure all information is accurate and up-to-date. Your listing will be reviewed before being added to the site.

## Adding Your Company Logo

To include your company's logo on the site, please follow these steps:

1. Prepare your logo in SVG format.
2. Name the file according to your company name, using lowercase letters and hyphens for spaces. For example, if your company is named "Tautological Statement", name your file `tautological-statement.svg`.
3. Add your SVG file to the `public/firm_assets/` directory.
4. In your company's entry in the `firms.ts` file, set the `svg` field to the filename of your logo. For example:

   ```typescript
   {
     // other fields...
     svg: "formal-verify-pro.svg",
     // other fields...
   }
   ```

Please ensure that your SVG file is optimized for web use and does not contain any sensitive or extraneous information. The recommended dimensions for the logo are 200x200 pixels, but the SVG format will allow it to scale appropriately on the site.

If you have any issues with adding your logo, please contact us for assistance.

