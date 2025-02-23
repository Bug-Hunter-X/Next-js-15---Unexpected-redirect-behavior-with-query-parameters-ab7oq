# Next.js 15 Redirect with Query Parameters Bug

This repository demonstrates an uncommon bug encountered in Next.js 15 when redirecting to a page with query parameters.  The redirect itself functions, but the handling of query parameters might be inconsistent, particularly with complex route structures.

## Description

The issue occurs when using `router.push` with query parameters to redirect between pages. While the redirect works, the way Next.js processes and renders the target page with those query parameters can lead to unexpected behavior, like missing data or rendering issues.

## Reproduction Steps

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to the `/about` page.
5. Click the 'Go to Home Page' button. Observe if the query parameter `name` is correctly displayed on the home page. Inconsistent results may indicate the bug.

## Potential Solutions

* Ensure that the receiving route (`/` in this case) is properly configured to handle the query parameters in its `getStaticProps` or `getServerSideProps` methods if applicable.
* Carefully review how query parameters are accessed and used within the component to avoid unexpected behavior.
* Consider using alternative methods for data transfer or route management if this issue persists.

## Additional Notes

This bug's manifestation might subtly depend on factors like route configuration or other application-specific logic.  The solution might vary in implementation depending on the nature of the inconsistency observed during redirection.