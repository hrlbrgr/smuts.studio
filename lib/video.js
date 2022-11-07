export default function VideoPlayer({ gifv, poster, mp4, webm }) {
	if (gifv) {
		return  (
			<video autoplay="" loop muted playsinline poster={poster} preload="none">	
			<source src={mp4} type="video/mp4" />
			<source src={webm} type="video/webm" />
			</video>
		);
	} else {
		return  (
			<video playsinline className="video" controls="controls" poster={poster} preload="none">	
			<source src={mp4} type="video/mp4" />
			<source src={webm} type="video/webm" />
			</video>
		);
	}
}