const RECENTDAYS = 30;
const RECENTSECONDS = RECENTDAYS * 24 * 60 * 60;
const MAXRESULTS = 10;

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

    // Build a dictionary of recent scripts, keyed by elapsed time and path
    const now = Math.floor(Date.now() / 1000);
    let results = {};
    for (let key in scriptIndex) {
        const elapsed = now - scriptIndex[key].timestamp;
        if (elapsed < RECENTSECONDS) {
            const hash = elapsed.toString().padStart(10, "0") + scriptIndex[key].path;
            results[hash] = scriptIndex[key];
        }
    }

    // Sort the dictionary of recent scripts by its hashed keys
    const sortedKeys = Object.keys(results).sort();
    let sortedResults = {};
    sortedKeys.forEach(key => {
        sortedResults[key] = results[key];
    });
    results = Object.values(sortedResults);

    // Inject the recent scripts markup
    const count = results.length;
    const p = document.createElement("p");
    const a = document.createElement("a");
    if (count > 0) {
        results = results.slice(0, MAXRESULTS);
        results.forEach((result) => {
            const sig = result.signature;
            const sum = result.summary;
            const uri = "/script/" + getName(result.path);
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
        });
        const others = count - MAXRESULTS;
        if (others > 1) {
            a.textContent = "... and " + others + " others in last " + RECENTDAYS + " days.";
        } else if (others == 1) {
            a.textContent = "... and 1 other in last " + RECENTDAYS + " days.";
        } else {
            a.textContent = count + " total changes in the last " + RECENTDAYS + " days.";
        }
    } else {
        a.textContent = "No changes in the last " + RECENTDAYS + " days.";
    }
    a.href = "https://github.com/gmlscripts/scripts/commits/master";
    p.appendChild(a);
    recentScripts.appendChild(p);
}

function getName(path) {
    const parts = path.split('/');
    const filename = parts[parts.length - 1];
    return filename.split('.').slice(0, -1).join('.');
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