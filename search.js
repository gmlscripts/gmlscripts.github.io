const RECENTDAYS = 30;
const RECENTSECONDS = RECENTDAYS * 24 * 60 * 60;

function initializeSearch() {
    const index = lunr.Index.load(searchIndex);
    const searchBox = document.getElementById("query");
    const searchResults = document.getElementById("searchresults");

    function doSearch(query) {
        if (!searchBox || !searchResults) return;
        if (query.trim() == "") return;
        searchResults.innerHTML = "";
        const results = index.search(query);
        results.forEach((result) => {
            const uri = "/script/" + result.ref;
            const sig = scriptIndex[result.ref].signature;
            const sum = scriptIndex[result.ref].summary;
            const a = document.createElement("a");
            a.href = uri;
            a.text = sig;
            const dd = document.createElement("dd");
            dd.textContent = sum;
            const dt = document.createElement("dt");
            dt.appendChild(a);
            const dl = document.createElement("dl");
            dl.appendChild(dt);
            dl.appendChild(dd);
            searchResults.appendChild(dl);
        });
        doRecentScriptsMarkup();
    }

    if (searchBox) {
        searchBox.addEventListener("input", function(e) {
            doSearch(e.target.value);
        });
        doSearch(searchBox.value);
    }
    populateRecentScripts();
    doRecentScriptsMarkup();
}

function doRecentScriptsMarkup() {
    const now = Math.floor(Date.now() / 1000);
    const dls = document.querySelectorAll("dl");
    dls.forEach((dl) => {
        const dt = dl.querySelector("dt");
        const name = dt.textContent.split("(")[0];
        mod = scriptIndex[name].timestamp;
        if (now - mod < RECENTSECONDS) {
            dl.classList.add("recent");
        }
    });
}

function populateRecentScripts() {
    const recentScripts = document.getElementById("recentscripts");
    if (!recentScripts) return;
    const now = Math.floor(Date.now() / 1000);
    const maxResults = 10;
    results = [];
    for (let key in scriptIndex) {
        if (now - scriptIndex[key].timestamp < RECENTSECONDS) {
            results.push(scriptIndex[key]);
        }
    }
    if (results.length == 0) {
        const p = document.createElement("p");
        p.textContent = "No script changes in last " + RECENTDAYS + " days.";
        recentScripts.appendChild(p);
        return;
    }
    for (let i = 0; i < Math.min(maxResults, results.length); i++) {
        const result = results[i];
        const sig = result.signature;
        const sum = result.summary;
        const uri = "/script/" + sig.split("(")[0];
        const a = document.createElement("a");
        a.href = uri;
        a.text = sig;
        const dd = document.createElement("dd");
        dd.textContent = sum;
        const dt = document.createElement("dt");
        dt.appendChild(a);
        const dl = document.createElement("dl");
        dl.appendChild(dt);
        dl.appendChild(dd);
        recentScripts.appendChild(dl);
    }
    if (results.length > maxResults) {
        const p = document.createElement("p");
        const a = document.createElement("a");
        a.href = "https://github.com/gmlscripts/scripts/commits/master";
        a.textContent = results.length + " total changes in the last " + RECENTDAYS + " days.";
        p.appendChild(a);
        recentScripts.appendChild(p);
    }
}

async function loadJson(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to load ${url}: ${response.statusText}`);
    }
    return await response.json();
}

async function loadJsonFiles(file1, file2) {
    try {
        const [data1, data2] = await Promise.all([
            loadJson(file1),
            loadJson(file2)
        ]);
        scriptIndex = data1;
        searchIndex = data2;
        initializeSearch();
    } catch (error) {
        const errorMessage = `<p class="warning"><span>ERROR:</span> <tt>${error.message}</tt></span></p>`;
        const errorElement = document.getElementById('searchresults');
        if (errorElement) {
            errorElement.innerHTML = errorMessage;
        } else {
            console.error(error.message);
        }
    }
}
let scriptIndex = undefined;
let searchIndex = undefined;
loadJsonFiles('/scriptindex.json', '/searchindex.json');