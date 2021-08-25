

export class App {

    constructor(id, appName, deadLine, describe, leadersId, usersId, date) {
        this._id = id;
        this._appName = appName;
        this._deadLine = deadLine;
        this._describe = describe;
        this._leadersIds = leadersId.slice();
        this._usersIds = usersId.slice();
        this._date = date;

    }
    updateApp(id, appName, deadLine, describe, leadersId, usersId, date) {
        this._id = id;
        this._appName = appName;
        this._deadLine = deadLine;
        this._describe = describe;
        this._leadersIds = leadersId.slice();
        this._usersIds = usersId.slice();
        this._date = date;
    }


    addUserToApp(userId) {
        this._usersIds.push(userId);
    }

    removeUserFromApp(userId) {
        let index = this._usersIds.indexof(userId);
        if (index !== -1) {
            this._usersIds.splice(index, 1);
        }
    }

    addLeaderToApp(leaderId) {
        this._leadersIds.push(leaderId);
    }

    removeLeaderFromApp(leaderId) {
        let index = this._leadersIds.indexof(leaderId);
        if (index !== -1) {
            this._leadersIds.splice(index, 1);
        }

    }

}