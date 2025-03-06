const GradeBook = require('./gradeBook');

class BachelorGradeBook extends GradeBook {
    constructor() {
        super();
    }
}

class MasterGradeBook extends GradeBook {
    constructor() {
        super();
        this.totalCredits = 120;
        this.missingCredits = this.totalCredits;
    }
}