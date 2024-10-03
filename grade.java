import java.util.Scanner;

public class grade {
    public static void main(String[] args) {
        try (Scanner scanner = new Scanner(System.in)) {
            System.out.print("Enter marks for subject 1: ");
            int subject1 = scanner.nextInt();

            System.out.print("Enter marks for subject 2: ");
            int subject2 = scanner.nextInt();

            System.out.print("Enter marks for subject 3: ");
            int subject3 = scanner.nextInt();

            System.out.print("Enter marks for subject 4: ");
            int subject4 = scanner.nextInt();

            System.out.print("Enter marks for subject 5: ");
            int subject5 = scanner.nextInt();

            scanner.close();

            int totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;
            double average = totalMarks / 5.0;

            String grade;

            if (average >= 90) {
                grade = "A";
            } else if (average >= 80) {
                grade = "B";
            } else if (average >= 70) {
                grade = "C";
            } else if (average >= 60) {
                grade = "D";
            } else if (average >= 50) {
                grade = "E";
            } else {
                grade = "F";


            System.out.println("Total Marks: " + totalMarks);
            System.out.println("Average: " + average);
            System.out.println("Grade: " + grade);
        }
    }
 }
}