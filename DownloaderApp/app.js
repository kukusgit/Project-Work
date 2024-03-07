const fileInput = document.querySelector("input");
downloadbtn = document.querySelector("button");

downloadbtn.addEventListener("click", e =>{
    e.preventDefault();
    downloadbtn.innerText = "Downloading file...";
    fetchFile(fileInput.value);
});

function fetchFile(url){
    fetch(url).then(res => res.blob()).then(file=>{
        let tempUrl = URL.createObjectURL(file);
        let aTag = document.createElement("a");
        aTag.href = tempUrl;
        aTag.download = url.replace(/^.*[\\\/]/, '');
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
        URL.revokeObjectURL(tempUrl)
        downloadbtn.innerText = "Download file";

    }).catch(()=>{
        downloadbtn.innerText="Download File"
        alert("failed to Download file!");
    });
}