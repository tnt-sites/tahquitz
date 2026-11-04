Paste the Cherry Widget Builder output here (https://provider.withcherry.com/script-generator):

- `full-page.html`: the "Full Page" snippet (script plus its container div). Shown by the
  Cherry Widget page section on /for-patients/cherry-payment-plan/.
- `floating-button.html`: the "Floating Button" snippet. Added to every page by `src/layouts/Page.astro`.

Only Montserrat is kept from the builder's Google Fonts link (the widget uses nothing else). full-page.html also has the floating button merged into its init, since loading both snippets on one page would init Cherry twice.
