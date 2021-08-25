

export class user {

    constructor(id, name, age, doneProjectsId, inDevelopmentProjectsId) {
        this._id = id;
        this._name = name;
        this._age = age;
        this._doneProjectsId = doneProjectsId.slice();
        this._inDevelopmentProjectsId = inDevelopmentProjectsId.slice();
    }
    
    updateApp(id, name, age, doneProjectsId, inDevelopmentProjectsId) {
        this._id = id;
        this._name = name;
        this._age = age;
        this._doneProjectsId = doneProjectsId.slice();
        this._inDevelopmentProjectsId = inDevelopmentProjectsId.slice();
    }

}