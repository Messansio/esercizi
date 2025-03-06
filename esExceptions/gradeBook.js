class GradeBook {
    grades
    totalCredits
    credits
    missingCredits
    average
    startingGrade

    constructor() {
        this.grades = [];
        this.totalCredits = 180;
        this.credits = 0;
        this.missingCredits = this.totalCredits;
        this.average = 0;
        this.startingGrade = 18;
    }

    register(grade) {
        this.grades.push(grade);
    }

    toString() {
        let result = `Total credits: ${this.totalCredits}\n`;
        result += `Acquired credits: ${this.credits}\n`;
        result += `Missing credits: ${this.missingCredits}\n`;
        result += `Average grade: ${this.average.toFixed(2)}\n`;
        result += "Grades:\n";
        for (const grade of this.grades) {
            result += grade.toString() + "\n";
        }
        return result;
    }
}