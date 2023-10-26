'use client'
const Video = () => {
  return (
      <div className="relative bg-gradient-to-b from-green to-transparent custom-shape px-3">
          <video src="/assets/video/home.mp4" autoPlay loop muted
                 className="rounded-[15px] custom-shape-video">Video jest niestety niedostępne</video>
      </div>
  )
}
export default Video
