export const getLinkClasses = (path: string, currentPath: string, isMobile = false) => {
  const baseClasses = "text-xl font-semibold transition-colors";
  const activeClasses = "text-indigo-600";
  const inactiveClasses = "text-indigo-400 hover:text-indigo-600";
  const mobileExtra = isMobile ? "flex items-center gap-2" : "";

  return `${baseClasses} ${mobileExtra} ${
    currentPath === path ? activeClasses : inactiveClasses
  }`;
}