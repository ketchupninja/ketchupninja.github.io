class Header extends HTMLElement {
    constructor() {
      super();
    }

  static path_root = "/home/matt/Documents/jrrbunga/";

  connectedCallback() {
    this.innerHTML = `
    <h2 style="margin-left:1%">J.R.R.Bunga</h1>
    <aside> 
      <ul style="list-style-type: none">
        <li> <a href = "${Header.path_root}index.html">home</a> </li>
        <li> <a href = "${Header.path_root}posts.html">posts</a></li>
        <li> <a href = "${Header.path_root}fiction.html">fiction</a></li>
        <li> <a href = "${Header.path_root}other.html">other</a> </li>
        <li> <a href = "https://www.youtube.com/@TheKetchupninja/videos">↪youtube</a></li>
      </ul>
    </aside>`;
  }
}

/*

<span class = "contentbox" style="
    white-space: pre-line;
    margin-left: 1%;">

*/
customElements.define('sidebar-component', Header);