let ad1 = document.getElementById("ad1");

const ch = {
  tSports:
    "https://sports.bioscopelive.com/hls/anonymous/aPSmLQmRA6ljEuSmgVXCwQ/1670016518/tsports_mid/index.m3u8",
  adSports1:
    "https://admdn1.cdn.mangomolo.com/adsports1/smil:adsports1.stream.smil/chunklist_b450000_t64MzYwcA==.m3u8",
  adSports2:
    "https://admdn1.cdn.mangomolo.com/adsports1/smil:adsports1.stream.smil/chunklist_b450000_t64MzYwcA==.m3u8",
  dubaiSports1:
    "https://dmitnthvll.cdn.mangomolo.com/dubaisports/smil:dubaisports.smil/chunklist_b850000.m3u8",
  dubaiSports3:
    "https://dmitwlvvll.cdn.mangomolo.com/dubaisportshd5/smil:dubaisportshd5.smil/chunklist_b1300000.m3u8",
  fightNetwork: "https://d12a2vxqkkh1bo.cloudfront.net/hls/360p/playlist.m3u8",
  tst: "https://t5.switchcast2.com:999/hls/t8.m3u8?md5=nYSS1ohkF37JP7NSQgJ4DQ&expires=1670024236",
};

var player = new Clappr.Player({
    source: "",
  parentId: "#player",
  plugins: [QualitySelector],
  qualitySelectorConfig: {
    title: 'Quality',
    labels: {
      2: 'High', // 500kbps
      1: 'Med', // 240kbps
      0: 'Low', // 120kbps
    },
    defaultQuality: 0, // start with quality 0 or Lowest
    labelCallback: function(playbackLevel, customLabel) {
      return customLabel + playbackLevel.level.height + 'p'; // High 720p
    }
  },
  events: {
    onPlay: function() {
      setTimeout(function() {
        var levels = player.getPlaybackQuality();
        console.log(levels); // log the levels
        player.setPlaybackQuality(2); // Change to highest level
      }, 10000); // fired after 10 second playing
    }
  }
  
});

function playIt(url) {
  player.configure({
    source: url,
      autoPlay: true,
  });
}

