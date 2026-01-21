// Load HTML includes
function loadIncludes() {
    let headerLoaded = false;
    let sidebarLoaded = false;

    // Function to initialize sidebar when both header and sidebar are loaded
    function tryInitSidebar() {
        if (headerLoaded && (sidebarLoaded || !document.getElementById('sidebarContainer'))) {
            if (typeof initSidebar === 'function') {
                initSidebar();
            }
        }
    }

    // Load header
    const headerContainer = document.getElementById('headerContainer');
    if (headerContainer) {
        fetch('includes/header.html')
            .then(response => response.text())
            .then(data => {
                headerContainer.innerHTML = data;
                headerLoaded = true;
                tryInitSidebar();
            })
            .catch(error => console.error('Error loading header:', error));
    } else {
        headerLoaded = true;
    }

    // Load sidebar
    const sidebarContainer = document.getElementById('sidebarContainer');
    if (sidebarContainer) {
        fetch('includes/sidebar.html')
            .then(response => response.text())
            .then(data => {
                sidebarContainer.innerHTML = data;
                // Mark active navigation
                const currentPage = window.location.pathname.split('/').pop();
                if (currentPage === 'notice_list.html' || currentPage === 'notice_detail.html') {
                    const navNotice = document.getElementById('navNotice');
                    if (navNotice) {
                        navNotice.classList.add('active');
                    }
                }
                if (currentPage === 'request_remittance.html') {
                    const navRemittance = document.getElementById('navRemittance');
                    if (navRemittance) {
                        navRemittance.classList.add('active');
                    }
                }
                if (currentPage === 'remittance_list.html') {
                    const navRemittanceList = document.getElementById('navRemittanceList');
                    if (navRemittanceList) {
                        navRemittanceList.classList.add('active');
                    }
                }
                sidebarLoaded = true;
                tryInitSidebar();
            })
            .catch(error => console.error('Error loading sidebar:', error));
    } else {
        sidebarLoaded = true;
    }

    // Load contact
    const contactContainer = document.getElementById('contactContainer');
    if (contactContainer) {
        fetch('includes/contact.html')
            .then(response => response.text())
            .then(data => {
                contactContainer.innerHTML = data;
            })
            .catch(error => console.error('Error loading contact:', error));
    }

    // Load footer
    const footerContainer = document.getElementById('footerContainer');
    if (footerContainer) {
        fetch('includes/footer.html')
            .then(response => response.text())
            .then(data => {
                footerContainer.innerHTML = data;
            })
            .catch(error => console.error('Error loading footer:', error));
    }
}

// Load includes when DOM is ready
document.addEventListener('DOMContentLoaded', loadIncludes);
