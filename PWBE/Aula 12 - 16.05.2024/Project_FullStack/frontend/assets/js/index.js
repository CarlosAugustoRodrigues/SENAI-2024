const data = new Date();

function currentYear() {
    const year = data.getFullYear();
    this.document.querySelector('#data').textContent = year;
};