// Links to other sites open in a new tab. Internal links are written as paths ("/services/"),
// so any full http(s) URL counts as external.
export const isExternalLink = (href?: string | null) => /^https?:\/\//i.test(href?.trim() ?? "");

export const externalLinkAttrs = (href?: string | null) =>
  isExternalLink(href) ? { target: "_blank", rel: "noopener noreferrer" } : {};
