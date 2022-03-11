let n = 1;

getCSS.onclick = () => {
  console.log("请求CSS");
  const request = new XMLHttpRequest();
  request.open("GET", "/style.css");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const style = document.createElement("style");
      style.innerHTML = request.response;
      document.head.appendChild(style);
    }
  };
  request.send();
};
getJS.onclick = () => {
  console.log("请求JS");
  const request = new XMLHttpRequest();
  request.open("GET", "/2.js");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const script = document.createElement("script");
      script.innerHTML = request.response;
      document.body.appendChild(script);
    }
  };
  request.send();
};
getHTML.onclick = () => {
  console.log("请求HTML");
  const request = new XMLHttpRequest();
  request.open("GET", "/3.html");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const html = document.createElement("div");
      html.innerHTML = request.response;
      console.log(html);
      document.body.appendChild(html);
    }
  };
  request.send();
};
getXML.onclick = () => {
  console.log("请求XML");
  const request = new XMLHttpRequest();
  request.open("GET", "/4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const XML = request.responseXML;
      const text = XML.getElementsByTagName("warning")[0].textContent;
      console.log(text.trim());
    }
  };
  request.send();
};
getJSON.onclick = () => {
  console.log("请求JSON");
  const request = new XMLHttpRequest();
  request.open("GET", "/5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log("request.response:", request.response);
      console.log(typeof request.response);
      const json = JSON.parse(request.response);
      console.log("json:", json);
      console.log(typeof json);
    }
  };
  request.send();
};
getPage.onclick = () => {
  console.log("请求第", n + 1, "页");
  console.log(n, "第一次n+1");
  const request = new XMLHttpRequest();
  request.open("GET", `/page${n + 1}`);
  console.log(n, "第二次n+1");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.response);
      const array = JSON.parse(request.response);
      array.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.id;
        xxx.appendChild(li);
      });
    }
  };
  n += 1;
  console.log(n, "第一次n =+1");
  request.send();
};
