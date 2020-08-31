function selectTab(tabId) {
    return {
        type: 'TAB_SELECTED',
        payload: tabId
    }
}

function showTabs(...tabIds) { // É um array de parâmetros
    const tabsToShow = {}
    tabIds.forEach(e => tabsToShow[e] = true);
    return {
        type: 'TAB_SHOWED',
        payload: tabsToShow
    }
}

export { selectTab, showTabs }