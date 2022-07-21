export const getAvatarLink = (link) => {
  if(!link) return '';
  if(link.includes('http'))return link.substring(1);
  return `https://themoviedb.org/t/p/w45${link}`;
};