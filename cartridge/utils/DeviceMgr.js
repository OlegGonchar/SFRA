
module.exports = {
    isMobile: function(userAgent) {
        var isMobile = false;

		if (!empty(userAgent)) {
			userAgent = userAgent.toLowerCase();
			isMobile = !!userAgent.match(new RegExp('(mobile|phone|ipod|android|blackberry|windows\ ce|opera\ mini|palm)'));
		}
		return isMobile;
    }
}
