
// sport channels 

const sports = {
    adSports1:
     "https://admdn1.cdn.mangomolo.com/adsports1/smil:adsports1.stream.smil/chunklist_b450000_t64MzYwcA==.m3u8",
   dubaiSports1:
     "https://dmitnthvll.cdn.mangomolo.com/dubaisports/smil:dubaisports.smil/chunklist_b850000.m3u8",
   dubaiSports3:
     "https://dmitwlvvll.cdn.mangomolo.com/dubaisportshd5/smil:dubaisportshd5.smil/chunklist_b1300000.m3u8",
   fightNetwork: "https://d12a2vxqkkh1bo.cloudfront.net/hls/360p/playlist.m3u8",
   tudn: "http://zaintv.live:8080/live/king/1234/1787.m3u8",
};
 





//  <button type="button"  class="btn btn-primary btn-lg"  >
//  Abu Dhabi 1
// </button>



function tvRemote(url) {

  const source = url;
	const video = document.querySelector('video');
	
	const player = new Plyr(video, {captions: {active: true, update: true, language: 'en'}});
	
	if (!Hls.isSupported()) {
		video.src = source;
	} else {
		const hls = new Hls();
		hls.loadSource(source);
		hls.attachMedia(video);
		window.hls = hls;
	}

	// close modal and stop the playback
	 document.getElementById('modalClose').addEventListener('click', () => { 
		 player.stop();
	})
} 


// horizontal scroll 

(function () {
	function scrolH(e) {
		e.preventDefault();
		e = window.event || e;
		let delta = Math.max(-1, Math.min(1, (e.wheelDelta || e.detail)));
		document.querySelector('.cardsRow').scrollLeft -= (delta * 40);
	}	
	if (document.querySelector('.cardsRow').addEventListener) {
		document.querySelector('.cardsRow').addEventListener('mousewheel', scrolH, false);
		document.querySelector('.cardsRow').addEventListener('DOMMouseScroll', scrolH, false);
	}
}
)()
	
	
