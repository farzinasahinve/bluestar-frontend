
    function getYear() {
        const d = new Date();
        let year = d.getFullYear();
        return year % 100
    }
        
    function makeProjectID() {
        let str = (Math.random() + 1).toString(36).substring(6).toUpperCase();
        return str + getYear()
    }
  
    export const generateJobNumber = () => {
        const number = makeProjectID();
        return number;
    }
