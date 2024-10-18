// تحديد العناصر
const animeVideo = document.getElementById('animeVideo');
const playPauseBtn = document.getElementById('playPauseBtn');
const muteBtn = document.getElementById('muteBtn');
const volumeControl = document.getElementById('volumeControl');
const rewindBtn = document.getElementById('rewindBtn');
const forwardBtn = document.getElementById('forwardBtn');
const videoItemsContainer = document.getElementById('videoItems');

// قائمة الفيديوهات (تأكد من تحديث الروابط والصور)
const videos = [
    { src: '789.mp4', thumbnail: '1.jpg', title: 'فيديو 1' },
    { src: 'video2.mp4', thumbnail: 'thumbnail2.jpg', title: 'فيديو 2' },
    { src: 'video3.mp4', thumbnail: 'thumbnail3.jpg', title: 'فيديو 3' },
    { src: 'video4.mp4', thumbnail: 'thumbnail4.jpg', title: 'فيديو 4' },
    { src: 'video5.mp4', thumbnail: 'thumbnail5.jpg', title: 'فيديو 5' },
    { src: 'video6.mp4', thumbnail: 'thumbnail6.jpg', title: 'فيديو 6' },
    { src: 'video7.mp4', thumbnail: 'thumbnail7.jpg', title: 'فيديو 7' },
    { src: 'video8.mp4', thumbnail: 'thumbnail8.jpg', title: 'فيديو 8' },
    { src: 'video9.mp4', thumbnail: 'thumbnail9.jpg', title: 'فيديو 9' },
    { src: 'video10.mp4', thumbnail: 'thumbnail10.jpg', title: 'فيديو 10' },
    { src: 'video11.mp4', thumbnail: 'thumbnail11.jpg', title: 'فيديو 11' },
    { src: 'video12.mp4', thumbnail: 'thumbnail12.jpg', title: 'فيديو 12' },
    { src: 'video13.mp4', thumbnail: 'thumbnail13.jpg', title: 'فيديو 13' },
    { src: 'video14.mp4', thumbnail: 'thumbnail14.jpg', title: 'فيديو 14' },
    { src: 'video15.mp4', thumbnail: 'thumbnail15.jpg', title: 'فيديو 15' },
    { src: 'video16.mp4', thumbnail: 'thumbnail16.jpg', title: 'فيديو 16' },
    { src: 'video17.mp4', thumbnail: 'thumbnail17.jpg', title: 'فيديو 17' },
    { src: 'video18.mp4', thumbnail: 'thumbnail18.jpg', title: 'فيديو 18' },
    { src: 'video19.mp4', thumbnail: 'thumbnail19.jpg', title: 'فيديو 19' },
    { src: 'video20.mp4', thumbnail: 'thumbnail20.jpg', title: 'فيديو 20' },
    { src: 'video21.mp4', thumbnail: 'thumbnail21.jpg', title: 'فيديو 21' },
    { src: 'video22.mp4', thumbnail: 'thumbnail22.jpg', title: 'فيديو 22' },
    { src: 'video23.mp4', thumbnail: 'thumbnail23.jpg', title: 'فيديو 23' },
    { src: 'video24.mp4', thumbnail: 'thumbnail24.jpg', title: 'فيديو 24' },
    { src: 'video25.mp4', thumbnail: 'thumbnail25.jpg', title: 'فيديو 25' },
    { src: 'video26.mp4', thumbnail: 'thumbnail26.jpg', title: 'فيديو 26' },
    { src: 'video27.mp4', thumbnail: 'thumbnail27.jpg', title: 'فيديو 27' },
    { src: 'video28.mp4', thumbnail: 'thumbnail28.jpg', title: 'فيديو 28' },
    { src: 'video29.mp4', thumbnail: 'thumbnail29.jpg', title: 'فيديو 29' },
    { src: 'video30.mp4', thumbnail: 'thumbnail30.jpg', title: 'فيديو 30' },
    { src: 'video31.mp4', thumbnail: 'thumbnail31.jpg', title: 'فيديو 31' },
    { src: 'video32.mp4', thumbnail: 'thumbnail32.jpg', title: 'فيديو 32' },
    { src: 'video33.mp4', thumbnail: 'thumbnail33.jpg', title: 'فيديو 33' },
    { src: 'video34.mp4', thumbnail: 'thumbnail34.jpg', title: 'فيديو 34' },
    { src: 'video35.mp4', thumbnail: 'thumbnail35.jpg', title: 'فيديو 35' },
    { src: 'video36.mp4', thumbnail: 'thumbnail36.jpg', title: 'فيديو 36' },
    { src: 'video37.mp4', thumbnail: 'thumbnail37.jpg', title: 'فيديو 37' },
    { src: 'video38.mp4', thumbnail: 'thumbnail38.jpg', title: 'فيديو 38' },
    { src: 'video39.mp4', thumbnail: 'thumbnail39.jpg', title: 'فيديو 39' },
    { src: 'video40.mp4', thumbnail: 'thumbnail40.jpg', title: 'فيديو 40' },
    { src: 'video41.mp4', thumbnail: 'thumbnail41.jpg', title: 'فيديو 41' },
    { src: 'video42.mp4', thumbnail: 'thumbnail42.jpg', title: 'فيديو 42' },
    { src: 'video43.mp4', thumbnail: 'thumbnail43.jpg', title: 'فيديو 43' },
    { src: 'video44.mp4', thumbnail: 'thumbnail44.jpg', title: 'فيديو 44' },
    { src: 'video45.mp4', thumbnail: 'thumbnail45.jpg', title: 'فيديو 45' },
    { src: 'video46.mp4', thumbnail: 'thumbnail46.jpg', title: 'فيديو 46' },
    { src: 'video47.mp4', thumbnail: 'thumbnail47.jpg', title: 'فيديو 47' },
    { src: 'video48.mp4', thumbnail: 'thumbnail48.jpg', title: 'فيديو 48' },
    { src: 'video49.mp4', thumbnail: 'thumbnail49.jpg', title: 'فيديو 49' },
    { src: 'video50.mp4', thumbnail: 'thumbnail50.jpg', title: 'فيديو 50' },
    { src: 'video51.mp4', thumbnail: 'thumbnail51.jpg', title: 'فيديو 51' },
    { src: 'video52.mp4', thumbnail: 'thumbnail52.jpg', title: 'فيديو 52' },
    { src: 'video53.mp4', thumbnail: 'thumbnail53.jpg', title: 'فيديو 53' },
    { src: 'video54.mp4', thumbnail: 'thumbnail54.jpg', title: 'فيديو 54' },
    { src: 'video55.mp4', thumbnail: 'thumbnail55.jpg', title: 'فيديو 55' },
];

// دالة لتحميل الفيديو عند الضغط عليه
function loadVideo(videoSrc) {
    animeVideo.src = videoSrc; // تعيين مصدر الفيديو
    animeVideo.play(); // تشغيل الفيديو تلقائيًا عند تحميله
    playPauseBtn.textContent = 'إيقاف'; // تحديث الزر إلى إيقاف
}

// إضافة الفيديوهات إلى القائمة
videos.forEach(video => {
    const videoItem = document.createElement('div');
    videoItem.classList.add('video-item');

    const thumbnail = document.createElement('img');
    thumbnail.src = video.thumbnail;
    thumbnail.alt = video.title;
    thumbnail.classList.add('thumbnail');
    thumbnail.onclick = () => loadVideo(video.src);

    const link = document.createElement('a');
    link.href = '#';
    link.textContent = video.title;
    link.onclick = (e) => {
        e.preventDefault(); // منع إعادة تحميل الصفحة
        loadVideo(video.src); // تحميل الفيديو
    };

    videoItem.appendChild(thumbnail);
    videoItem.appendChild(link);
    videoItemsContainer.appendChild(videoItem);
});

// تشغيل/إيقاف الفيديو
playPauseBtn.addEventListener('click', () => {
    if (animeVideo.paused) {
        animeVideo.play();
        playPauseBtn.textContent = 'إيقاف';
    } else {
        animeVideo.pause();
        playPauseBtn.textContent = 'تشغيل';
    }
});

// كتم الصوت
muteBtn.addEventListener('click', () => {
    if (animeVideo.muted) {
        animeVideo.muted = false;
        muteBtn.textContent = 'كتم الصوت';
    } else {
        animeVideo.muted = true;
        muteBtn.textContent = 'إلغاء كتم الصوت';
    }
});

// التحكم في مستوى الصوت
volumeControl.addEventListener('input', () => {
    animeVideo.volume = volumeControl.value;
});

// إرجاع 10 ثواني
rewindBtn.addEventListener('click', () => {
    animeVideo.currentTime = Math.max(0, animeVideo.currentTime - 10);
});

// تقديم 10 ثواني
forwardBtn.addEventListener('click', () => {
    animeVideo.currentTime = Math.min(animeVideo.duration, animeVideo.currentTime + 10);
});
