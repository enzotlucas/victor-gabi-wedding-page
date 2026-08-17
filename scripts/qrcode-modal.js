(function () {
    const openButton = document.getElementById('open-qrcode-modal');
    const overlay = document.getElementById('qrcode-modal-overlay');
    const modal = document.getElementById('qrcode-modal');  

    if (!openButton || !overlay || !modal) return;  

    function openModal() {
        overlay.classList.add('active');
    }   

    function closeModal() {
        overlay.classList.remove('active');
    }   

    openButton.addEventListener('click', openModal);   

    overlay.addEventListener('click', function (event) {
        if (!modal.contains(event.target)) {
            closeModal();
        }
    }); 
    
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
})();