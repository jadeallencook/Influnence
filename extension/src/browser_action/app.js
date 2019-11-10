const button = document.querySelector('button');
const platform = document.querySelector('select[name="platform"]').value;
const hack = document.querySelector(`select#${platform}`).value;

button.onclick = () => {
    const url = `http://${platform}.com/?${hack}`;
    chrome.tabs.create({ url: url });
}