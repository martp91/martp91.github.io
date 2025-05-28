document.addEventListener('DOMContentLoaded', function() {
    const publications = [
        {
            title: "Publication Title 1",
            link: "https://link-to-publication1.com"
        },
        {
            title: "Publication Title 2",
            link: "https://link-to-publication2.com"
        },
        {
            title: "Publication Title 3",
            link: "https://link-to-publication3.com"
        }
    ];

    const publicationList = document.getElementById('publication-list');

    publications.forEach(pub => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = pub.link;
        link.textContent = pub.title;
        listItem.appendChild(link);
        publicationList.appendChild(listItem);
    });
});