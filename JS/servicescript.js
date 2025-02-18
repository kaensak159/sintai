document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.category-nav');
    const items = document.querySelectorAll('.category-item');
    const indicator = document.querySelector('.indicator');

    // ตั้งค่าตำแหน่งเริ่มต้นของ indicator
    function setIndicatorPosition(element) {
        const rect = element.getBoundingClientRect();
        const navRect = nav.getBoundingClientRect();
        
        indicator.style.width = `${rect.width}px`;
        indicator.style.left = `${rect.left - navRect.left}px`;
    }

    // ตั้งค่าตำแหน่งเริ่มต้น
    setIndicatorPosition(items[0]);

    // เพิ่ม event listeners สำหรับแต่ละรายการ
    items.forEach(item => {
        item.addEventListener('click', function() {
            // ลบ class active จากรายการที่เคยเลือก
            items.forEach(i => i.classList.remove('active'));
            
            // เพิ่ม class active ให้รายการที่เลือก
            this.classList.add('active');
            
            // เลื่อน indicator ไปยังตำแหน่งใหม่
            setIndicatorPosition(this);
        });
    });

    // ปรับตำแหน่ง indicator เมื่อ resize หน้าจอ
    window.addEventListener('resize', () => {
        const activeItem = document.querySelector('.category-item.active');
        if (activeItem) {
            setIndicatorPosition(activeItem);
        }
    });
});