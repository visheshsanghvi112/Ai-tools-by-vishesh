document.addEventListener('DOMContentLoaded', function() {
    const navList = document.getElementById('navList');
    const searchBar = document.getElementById('searchBar');
    const filterSelect = document.getElementById('filterSelect');
    const toolContainer = document.getElementById('toolContainer');
    const tools = [
        // List of tools with details (category, name, description, link)
    ];

    // Generate navigation links
    tools.forEach(tool => {
        const navLink = document.createElement('li');
        navLink.innerHTML = `<a href="#${tool.category}">${tool.category}</a>`;
        navList.appendChild(navLink);
    });

    // Generate filter options
    const categories = [...new Set(tools.map(tool => tool.category))];
    categories.unshift('All Categories');
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.toLowerCase();
        option.textContent = category;
        filterSelect.appendChild(option);
    });

    // Generate tool entries
    tools.forEach(tool => {
        const toolElement = document.createElement('div');
        toolElement.className = 'tool';
        toolElement.setAttribute('data-category', tool.category.toLowerCase());
        toolElement.setAttribute('data-name', tool.name.toLowerCase());
        toolElement.innerHTML = `
            <h3>${tool.name}</h3>
            <p>${tool.description}</p>
            <a href="${tool.link}" target="_blank" rel="noopener">Visit ${tool.name}</a>
        `;
        toolContainer.appendChild(toolElement);
    });

    searchBar.addEventListener('input', updateFilters);
    filterSelect.addEventListener('change', updateFilters);

    function updateFilters() {
        const searchText = searchBar.value.toLowerCase();
        const selectedCategory = filterSelect.value.toLowerCase();

        tools.forEach(tool => {
            const category = tool.category.toLowerCase();
            const toolName = tool.name.toLowerCase();

            const shouldShowCategory = (selectedCategory === 'all categories' || category === selectedCategory);
            const shouldShowSearch = (searchText === '' || toolName.includes(searchText));

            tool.style.display = shouldShowCategory && shouldShowSearch ? 'block' : 'none';
        });
    }

    updateFilters(); // Initial filtering on page load
});

document.addEventListener('DOMContentLoaded', function() {
    const tools = document.querySelectorAll('.tool');

    // Entry Animation
    function animateEntry() {
        tools.forEach((tool, index) => {
            setTimeout(() => {
                tool.style.opacity = 1;
                tool.style.transform = 'translateY(0)';
            }, index * 150); // Delay each tool's animation
        });
    }

    // Hover Animation
    tools.forEach(tool => {
        tool.addEventListener('mouseenter', () => {
            tool.style.transform = 'translateY(-5px)';
            tool.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
        });

        tool.addEventListener('mouseleave', () => {
            tool.style.transform = 'translateY(0)';
            tool.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        });
    });

    // Initial Animation on Page Load
    animateEntry();
});

function toggleFlip(card) {
    card.classList.toggle('flipped');
}