export const randomVid = () => {
  return `${Math.floor(Math.random() * 100)}-${Date.now()}`
}
