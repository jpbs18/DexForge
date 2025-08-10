export const getLinkClasses = (path: string, currentPath: string, isMobile = false) => {
  const baseClasses = "text-xl font-semibold transition-colors";
  const activeClasses = "text-[#FFDE00]";
  const inactiveClasses = "text-white";
  const mobileExtra = isMobile ? "flex items-center" : "";

  return `${baseClasses} ${mobileExtra} ${
    currentPath === path ? activeClasses : inactiveClasses
  }`;
}