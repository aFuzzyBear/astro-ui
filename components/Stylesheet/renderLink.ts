/** Render Link Element */
export const renderLinkElement = (
  path: string,
  media?: string,
  cors?: string,
  preload?: boolean,
  alternative?: boolean,
  title?: string
): string =>
  `<link ${
    preload
      ? `rel="preload stylesheet" as="style" `
      : `rel=${alternative ? `"alternative stylesheet"` : `"stylesheet"`}`} 
      type="text/css" href="${path}" ${media ? `media="${media}"` : ""} ${
    cors ? `crossorigin="${cors}"` : ""
  } ${title && alternative ? `title="${title}"` : ""} />`;
