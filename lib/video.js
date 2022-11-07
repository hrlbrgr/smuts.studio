export default function VideoPlayer({ poster, mp4, webm }) {
	return (
		<video playsinline className="video" controls="controls" poster={poster} preload="none">	
		<source src={mp4} type="video/mp4" />
		<source src={webm} type="video/webm" />
		</video>
	);
}