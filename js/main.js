const links = [
    {
      label: "Week 1 Notes",
      url: "#"
    },
    {
      label: "Week 2 Notes",
      url: "#"
    },
];

(function(){
    let ol = document.getElementById('listOfLinks');
    links.forEach(link => {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.setAttribute('href', link.url);
        a.textContent = link.label;

        li.appendChild(a);
        ol.appendChild(li);
    });
})();