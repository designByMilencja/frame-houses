'use client'
const Video = () => {
  return (
      <div className="relative bg-gradient-to-b from-green to-transparent custom-shape px-3">
          <video src="/assets/video/home.mp4" autoPlay loop muted
                 className="rounded-[20px] custom-shape-video"></video>
      </div>
  )
}
export default Video
