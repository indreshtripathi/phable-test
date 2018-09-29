
var user = {}

user.UserDetail = function (userId, emailId, isAdmin, domain) {
    this.userId = userId;
    this.emailId = emailId;
    this.isAdmin = isAdmin;
    this.domain = domain;
}

module.exports = user;