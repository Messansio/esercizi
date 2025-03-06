class Grade {
    name;
    credits;
    date;
    grade;
    honors;

    constructor(name, credits, date, grade, honors) {
        if (!name || typeof name !== 'string') {
            throw new Error('Name must be a non-empty string');
        }
        if (!Number.isInteger(credits) || credits <= 0) {
            throw new Error('Credits must be a positive integer');
        }
        if (!(date instanceof Date)) {
            throw new Error('Date must be a valid Date object');
        }
        if (!Number.isInteger(grade) || grade < 18 || grade > 30) {
            throw new Error('Grade must be an integer between 18 and 30');
        }
        if (typeof honors !== 'boolean') {
            throw new Error('Honors must be a boolean value');
        }
        

        this.name = name;
        this.credits = credits;
        this.date = date;
        this.grade = grade;
        this.honors = honors;
    }

    toString() {
        let result = `${this.name} (${this.credits} CFU) - ${this.date.toLocaleDateString()}: ${this.grade}`;
        if (this.honors) {
            result += " with honors";
        }
        return result;
    }

    equals(g) {
        if (!(g instanceof Grade)) {
            return false;
        }
        return this.name === g.name &&
               this.credits === g.credits &&
               this.date.getTime() === g.date.getTime() &&
               this.grade === g.grade &&
               this.honors === g.honors;
    }
}