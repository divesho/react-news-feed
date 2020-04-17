const storage = window.localStorage || window.sessionStorage;

export const getHiddenFeed = () => {
    let feed = storage.getItem("hiddenFeed");
    if(feed) {
        feed = JSON.parse(feed);
    } else {
        feed = [];
    }

    return feed;
}

export const setHiddenFeed = (feed) => {
    storage.setItem("hiddenFeed", JSON.stringify(feed));
    return;
}