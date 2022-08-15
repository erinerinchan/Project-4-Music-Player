import Image from 'next/image'
import useSpotify from '../hooks/useSpotify'

function Song({ order, track }) {
  const spotifyApi = useSpotify()

  return (
    <div className="flex items-center space-x-4">
      <p>{order + 1}</p>
      <Image
        src={track.track.album.images[0].url}
        width="40"
        height="40"
        alt=""
      />
      <div>
        <p>{track.track.name}</p>
        <p>{track.track.artists[0].name}</p>
      </div>
    </div>
  )
}

export default Song
