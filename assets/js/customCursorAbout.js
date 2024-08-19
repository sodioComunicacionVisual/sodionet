	// Custom Cursor About Section
	const cursor = document.getElementById('custom-cursor-about');
const gallery = document.getElementById('portfolio');

gallery.addEventListener('mousemove', (e) => {
    cursor.style.display = 'block';
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

gallery.addEventListener('mouseleave', () => {
    cursor.style.display = 'none';
});
