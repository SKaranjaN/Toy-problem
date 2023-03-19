
    /*challenge 3*/

    // The program's major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 

    function netSalaryCalculator(salary, benefits) {
        
        const gross = (salary + benefits);
        const paye = (function(gross) {
            if(gross <= 24000) {
                return ((gross)*0.1);
            }else if(gross >= 24001 && gross >= 32333) {
                return ((gross)*0.25);
            }else if(gross > 32, 333) {
                return ((gross)*0.3);
            }
        });
        const nssf = ((gross *0.06));
        const nhif = (function(gross) {
            if(gross <= 5900) {
                return (150);
            }else if(gross >= 6000 && gross <= 7999) {
                return (300);
            }else if(gross >= 8000 && gross <= 11999) {
                return (400);
            }else if(gross >= 12000 && gross <= 14999) {
                return (500);
            }else if(gross >=15000 && gross <= 19999) {
                return (600);
            }else if(gross >= 20000 && gross <=24999) {
                return (750);
            }else if(gross >= 25000 && gross <=29999) {
                return (850);
            }else if(gross >= 30000 && gross <=34999) {
                return (900);
            }else if(gross >= 35000 && gross <=39999) {
                return (950);
            }else if(gross >= 40000 && gross <=44999) {
                return (1000);
            }else if(gross >= 45000 && gross <=49999) {
                return (1100);
            }else if(gross >= 50000 && gross <=59999) {
                return (1200);
            }else if(gross >= 60000 && gross <=69999) {
                return (1300);
            }else if(gross >= 70000 && gross <=79999) {
                return (1400);
            }else if(gross >= 80000 && gross <=89999) {
                return (1500);
            }else if(gross >= 90000 && gross <=99999) {
                return (1600);
            }else if(gross >= 100000) {
                return (1700);
            }
        })
        return (gross - paye(gross) - nssf - nhif(gross));
    }