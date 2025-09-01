type downloadDataFunction = (url: string) => void;

const downloadData = (downloadDisplay : downloadDataFunction) => {
    const url= "https://cathub.com/race/bengal"
    console.log("Downloading data from", url)
    setTimeout(() => {
        downloadDisplay(url);
    }, 2000)
}
const downloadDisplay = (url : string) => {
    console.log("Downloaded data from", url)
}
downloadData(downloadDisplay);  //sets url, prints url, call up downloadDisplay and plugs in url there, function holds for 2 sec before downloadDisplay is printed.