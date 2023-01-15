exports.linkResolver = (doc) => {
  // URL for a category type
  if (doc.type === "blog") {
    return `/${doc.uid}`;
  }

  // Backup for all other types
  return "/";
};
