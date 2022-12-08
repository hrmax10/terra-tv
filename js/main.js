

const ch = {
  tSports:
    "https://sports.bioscopelive.com/hls/anonymous/aPSmLQmRA6ljEuSmgVXCwQ/1670016518/tsports_mid/index.m3u8",
  adSports1:
    "https://admdn1.cdn.mangomolo.com/adsports1/smil:adsports1.stream.smil/chunklist_b450000_t64MzYwcA==.m3u8",
  dubaiSports1:
    "https://dmitnthvll.cdn.mangomolo.com/dubaisports/smil:dubaisports.smil/chunklist_b850000.m3u8",
  dubaiSports3:
    "https://dmitwlvvll.cdn.mangomolo.com/dubaisportshd5/smil:dubaisportshd5.smil/chunklist_b1300000.m3u8",
  fightNetwork: "https://d12a2vxqkkh1bo.cloudfront.net/hls/360p/playlist.m3u8",
  tst: "https://t5.switchcast2.com:999/hls/t8.m3u8?md5=nYSS1ohkF37JP7NSQgJ4DQ&expires=1670024236",
  gtv: "http://tv.maguraplex.net:8000/live/gazitvhd1/index.m3u8",
};



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

