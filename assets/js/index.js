message = "webtee.xyz ";
function step() {
    message = message.substr(1) + message.substr(0,1);
    document.title = message.substr(0,11);
}