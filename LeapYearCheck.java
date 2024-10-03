public class LeapYearCheck {

    public static boolean isLeapYear(int year) {
      
        if (year % 4 == 0) {
            return true;
        }
    
        return year % 4 == 0;
    }

    public static void main(String[] args) {
        int year = 2024;
        if (isLeapYear(year)) {
            System.out.println(year + " is a leap year.");
        } else {
            System.out.println(year + " is not a leap year.");
        }
    }
}
