function getLowestCommonManager(topManager, reportOne, reportTwo) {
    return helper(topManager, reportOne, reportTwo).lowestManager;
}

function helper(topManager, reportOne, reportTwo) {
    let foundReports = +(topManager == reportOne || topManager == reportTwo);
    
    for(const reporter of topManager.directReports) {
        const res = helper(reporter, reportOne, reportTwo);
        foundReports += res.foundReports;
        if (res.lowestManager) {
            return res;
        }
    }

    return { foundReports, lowestManager: foundReports === 2 ? topManager : null };
}
