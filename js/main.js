

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

// const player = new Plyr('#player');

// function vdoReq(url) {


//   player.source = {
//     type: 'video',
//     title: 'Example title',
//     sources: [
//       {
//         src: 'https://admdn1.cdn.mangomolo.com/adsports1/smil:adsports1.stream.smil/playlist.m3u8',
//         type: 'application/x-mpegURL',
//         size: 720,
//       },
//     ],
    
//   };

// }


function tvRemote(url) {

  const source = url;
	const video = document.querySelector('video');
	
	// For more options see: https://github.com/sampotts/plyr/#options
	// captions.update is required for captions to work with hls.js
	const player = new Plyr(video, {captions: {active: true, update: true, language: 'en'}});
	
	if (!Hls.isSupported()) {
		video.src = source;
	} else {
		// For more Hls.js options, see https://github.com/dailymotion/hls.js
		const hls = new Hls();
		hls.loadSource(source);
		hls.attachMedia(video);
		window.hls = hls;
		
		// Handle changing captions
		player.on('languagechange', () => {
			// Caption support is still flaky. See: https://github.com/sampotts/plyr/issues/994
			setTimeout(() => hls.subtitleTrack = player.currentTrack, 50);
		});
	}
	
	// Expose player so it can be used from the console
	window.player = player;


}


function stopIt() {
  player.stop();
}