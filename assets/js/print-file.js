        function printForm() {
    // Adjusting for the printable container
    const printContents = document.querySelector('.print-container').innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents; // Replace body with the printable content
    window.print(); // Trigger the print dialog

    document.body.innerHTML = originalContents; // Restore the original content after printing
    location.reload(); // Reload to reapply scripts and events
}
