
const newsItem = (title, description, link) => `
      <div class="news">
        <div class="panel">
          <div class="news-title">
          <h3 >${title}</h3>
          </div>
          <div class="news-desc">
          <p>${description}</p>
          </div>
          <div class="news-link">
          <a href="${link}">Baca Selengkapnya</a>
          </div>
        </div>
      </div>
`;
const _url = [
    "https://www.cnnindonesia.com/nasional/rss",
    "https://www.cnnindonesia.com/ekonomi/rss",
    "https://www.cnnindonesia.com/olahraga/rss"
  ];

const loadDoc = ()=> {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
      }
    };
    xhttp.open("GET","https://www.cnnindonesia.com/olahraga/rss", true);
    xhttp.send();
}
//_url=[]//
  function myFunction(xml) {
    var i;
    let news ="";
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName("item");
    for (i = 0; i <x.length; i++) {
    title = x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
    description=x[i].getElementsByTagName("description")[0].childNodes[0].nodeValue;
    link = x[i].getElementsByTagName("link")[0].childNodes[0].nodeValue;
    news += newsItem(title, description, link);
  }
  document.getElementById("here").innerHTML = news; 
  }

  loadDoc()
