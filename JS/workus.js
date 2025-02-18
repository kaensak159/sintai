 // Add click handler for close icons
 document.querySelectorAll('.close-icon').forEach(icon => {
    icon.addEventListener('click', function(e) {
        e.stopPropagation();
        const accordionItem = this.closest('.accordion-collapse');
        const collapse = bootstrap.Collapse.getInstance(accordionItem);
        collapse.hide();
    });
});